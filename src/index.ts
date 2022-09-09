import * as Blockly from 'blockly';
import './blocks.js';
import {ques_generator, setCategory, hideCategory, disable_sup_grid} from './generator.js';

function injectWorkspace() {

    var toolbox = document.getElementById('toolbox');

    // Injecting workspace
    var blocklyDiv = document.getElementById('blocklyDiv');
    var workspace = Blockly.inject(blocklyDiv, {
        toolbox: toolbox,
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1,
            maxScale: 1.5,
            minScale: 0.8,
            scaleSpeed: 1.2
        }
    });

    // Resizing workspace
    blocklyDiv.style.position = 'absolute';
    var area = document.getElementById('blocklyContainer');
    var onresize = function(e) {
        var el = area;
        var x = 0;
        var y = 0;
        do {
          x += el.offsetLeft;
          y += el.offsetTop;
          el = el.offsetParent;
        } while(el);
        blocklyDiv.style.left = x + 'px';
        blocklyDiv.style.top = y + 'px';
        blocklyDiv.style.width = area.offsetWidth + 'px';
        blocklyDiv.style.height = area.offsetHeight + 'px';
        Blockly.svgResize(workspace);
    };
    window.addEventListener('resize', onresize, false);
    onresize();

    // Category hiding
    var refresh = function(){
        setCategory(workspace);
        ques_generator(workspace);
        disable_sup_grid(workspace);
    }
    workspace.addChangeListener(refresh);
    hideCategory();
    Blockly.myFlyout&&Blockly.myFlyout.flyoutCategory&&(workspace.registerToolboxCategoryCallback(Blockly.MYFLYOUT_CATEGORY_NAME,Blockly.myFlyout.flyoutCategory));
    Blockly.gridFlyout&&Blockly.gridFlyout.flyoutCategory&&(workspace.registerToolboxCategoryCallback(Blockly.GRIDFLYOUT_CATEGORY_NAME,Blockly.gridFlyout.flyoutCategory));
}

window.onload = injectWorkspace;
