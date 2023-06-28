// [SC] function to store some content in a local file
// content: content to be stored
// fileName: name of the save file
// contentType: MIME type of the save file
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

// [SC] serializes the current state of the blockly workspace and stores in a local json file
function serialize(){
    const state = Blockly.serialization.workspaces.save(workspace);
    console.log(state);
    download(JSON.stringify(state), 'workspaceSer.txt', 'application/json');
}

// [SC] deserializes a blockly workspace from a local json file
document.getElementById("file-selector").addEventListener("change", function () {
    let fr = new FileReader();
    fr.readAsText(this.files[0]);
    fr.onload = function () {
        const state = JSON.parse(fr.result);
        Blockly.serialization.workspaces.load(state, workspace);
    };  
});