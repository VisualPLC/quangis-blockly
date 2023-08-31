'use strict';


let ls = window.localStorage;

// [SC] a generic async function for loading remote file
async function loadFile(path) {    
    // [SC] load the json data from the file as string
    let response = await fetch(path);
    let data = await response.text();
    
    return data;
}

// [SC] example dictionary
/*let cDict = [
    {
        id: "c1",
        term: "crime",
        cc: "event",
        measure: ""
    },
    {
        id: "c2",
        term: "area size",
        cc: "covAmount",
        measure: "era_"
    }
];*/


const cDictURL = "https://raw.githubusercontent.com/quangis/geo-question-parser/haiqi/Dictionary/coreConceptsML.txt";
const nDictURL = "https://raw.githubusercontent.com/quangis/geo-question-parser/haiqi/Dictionary/network.txt";
const cDictKey = "cDictKey";
let cDict = [];

// [SC] loads the question parser concept dictionary either from the local storage or from a remote file (github)
async function loadCDict(){
    return new Promise(function(resolve,reject){
        if (ls.getItem(cDictKey)){
            // [SC] loading the parser core concept dictionary from the local storage
            cDict = JSON.parse(ls.getItem(cDictKey));
            console.log("Loaded the parser concept dictionary from the local storage.");
            return resolve("");
        }
        else {
            console.log("Can't load the parser concept dictionary from the local storage. Fetching the remote file.");
            // [SC] fetching the remote core concept dictionary
            loadFile(cDictURL).then(function(results){
                cDict = [];
                
                let lines = results.split('\n');
                for (let i=0; i<lines.length; i++) {
                    let concepts = lines[i].split('\t');
                    
                    let cObj = {
                        id: `bc${i}`,
                        term: concepts[0],
                        cc: concepts[1],
                        measure: ""
                    }
                    
                    if (concepts.length == 3){
                        cObj.measure = concepts[2];
                    }
                    
                    cDict.push(cObj);
                }
                
                // [SC] fetching the remote network concept dictionary
                loadFile(nDictURL).then(function(results){
                    let lines = results.split('\n');
                    for (let i=0; i<lines.length; i++) {
                        let concept = lines[i];
                        
                        if (!cDict.find(elem => elem.term === concept)) {
                            let cObj = {
                                id: `bc${cDict.length + i}`,
                                term: concept,
                                cc: "network",
                                measure: ""
                            }
                            cDict.push(cObj);
                        }
                    }
                    
                    console.log("Fetched the parser network concept dictionary.");
                    return resolve("");
                }).catch(error => {
                    console.error("Unable to fetch the parser network concept dictionary.");
                    return reject(error);
                }).finally(() => {
                    cDict.sort(function (a, b) {
                        return a.term.localeCompare(b.term);
                    });
                    
                    ls.setItem(cDictKey, JSON.stringify(cDict));
                    console.log("Fetched the parser core concept dictionary.");
                });
                
                return resolve("");
            }).catch(error => {
                console.error("Unable to fetch the parser core concept dictionary.");
                return reject(error);
            });
        }
    });
}

loadCDict();

class FieldCPicker extends Blockly.FieldTextInput {
    /**
     * Array holding info needed to unbind events.
     * Used for disposing.
     * @type {!Array<!Blockly.browserEvents.Data>}
     * @private
     */
    boundEvents_ = [];
    
    // [SC]
    /**
     * HTML element used as a dropdown box.
     * @private
     */
    cListElem = null;
    
    
    constructor(text) {
        super(text);

        // [SC] disabling spell chec
        this.setSpellcheck(false);
    }
    
    // [SC] method to enable working with the JSON format
    /**
     * Construct a FieldCPicker from a JSON arg object.
     * @param {!Object} options A JSON object with options .
     * @returns {!FieldCPicker} The new field instance.
     * @package
     * @nocollapse
     */
    static fromJson(options) {
        return new this(options['text']);
    }
    
    /**
     * Show the inline free-text editor on top of the text and the concept picker.
     * @protected
     */
    showEditor_() {
        super.showEditor_();

        const div = Blockly.WidgetDiv.getDiv();
        if (!div.firstChild) {
            // Mobile interface uses Blockly.dialog.setPrompt().
            return;
        }
    
        // Build the DOM.
        const editor = this.dropdownCreate_();
        Blockly.DropDownDiv.getContentDiv().appendChild(editor);
        Blockly.DropDownDiv.setColour(this.sourceBlock_.style.colourPrimary, this.sourceBlock_.style.colourTertiary);
        Blockly.DropDownDiv.showPositionedByField(this, this.dropdownDispose_.bind(this));
    }
    
    // [SC][TODO] this is created everytime the field is clicked; not efficient
    // [SC][TODO] may give inconcistency issue if a single dropdown instance is used among many fields 
    /**
     * Create the dropdown element for suggesting a concept.
     * @returns {!Element} The newly created concept picker.
     * @private
     */
    dropdownCreate_() {
        this.cListElem = document.createElement('div');
        this.cListElem.id = 'bl_conceptPicker';
        
        for(let cObj of cDict){
            let option = document.createElement('p');
            this.cListElem.appendChild(option);
            option.id = cObj.id;
            option.className = 'bl_concept';
            option.dataset.cc = cObj.cc;
            option.dataset.measure = cObj.measure;
            option.dataset.term = cObj.term.toLowerCase();
            option.innerHTML = `'${cObj.term}' &lt;<div class="bl_cval">${cObj.cc}</div>, <div class="bl_mval">${cObj.measure}</div>&gt;`;
            
            this.boundEvents_.push(
                Blockly.browserEvents.bind(option, 'click', this, this.assignConcept)
            );
        }

        return this.cListElem;
    }
    
    /**
     * Dispose of events belonging to the concept picker.
     * @private
     */
    dropdownDispose_() {
        for (const event of this.boundEvents_) {
            Blockly.browserEvents.unbind(event);
        }
        this.boundEvents_.length = 0;
        this.cListElem = null;
    }
    
    /**
     * Copy the chosen concept text to the free-text field and remove the concept picker
     * @private
     */
    assignConcept(e) {
        // [SC] event target, which is conceptElem
        let conceptElem = e.target;
        
        // [SC] set the value
        this.setEditorValue_(conceptElem.dataset.term);
        
        // [SC] hide the dropdown
        Blockly.WidgetDiv.hide();
        Blockly.DropDownDiv.hideWithoutAnimation();
    }
    
    /**
     * Get the text to be displayed on the field node.
     * @returns {?string} The HTML value if we're editing, otherwise null.
     * Null means the super class will handle it, likely a string cast of value.
     * @protected
     */
    getText_() {
        if (this.isBeingEdited_) {
            return super.getText_();
        }
        return this.getValue() || null;
    }
    
    /**
     * Ensure that only a valid value may be entered.
     * @param {*} opt_newValue The input value.
     * @returns {*} A valid value, or null if invalid.
     */
    doClassValidation_(opt_newValue) {
        if (opt_newValue === null || opt_newValue === undefined) {
            return null;
        }
        
        if (opt_newValue) {
            // [SC] filter out irrelevant concept options based on user's input text
            if (this.cListElem) {
                // [SC] change to lowercase for string comparison
                let temp_opt_newValue = opt_newValue.toLowerCase();
                
                // [SC] hide any mismatching options
                let children = this.cListElem.children;
                
                // [SC] if the length of the user text is less than 3 chars then filter by starting chars
                if (temp_opt_newValue.length < 3){
                    for (let i = 0; i < children.length; i++) {
                        let option = children[i];
                        
                        if (option.dataset.term.startsWith(temp_opt_newValue)){
                            option.className = 'bl_concept';
                        }
                        else {
                            option.className = 'bl_concept mismatch';
                        }
                    }
                }
                // [SC] else filter by any matching substring
                else {
                    for (let i = 0; i < children.length; i++) {
                        let option = children[i];
                        
                        if (option.dataset.term.includes(temp_opt_newValue)){
                            option.className = 'bl_concept';
                        }
                        else {
                            option.className = 'bl_concept mismatch';
                        }
                    }
                }
            }
            
            return opt_newValue;
        }
        
        return null;
    }
}

// [SC] register the custom field input with Blockly
Blockly.fieldRegistry.register('field_cpicker', FieldCPicker);