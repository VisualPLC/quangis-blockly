// const express = require('express');
// const app = express();
//
// app.listen(3000, function() {
//   console.log('listening on 3000')
// })
//
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

//read core concept dictionary as array [["buildings","buildings"], ["hospitals","hospitals"]]
// const fs=require("fs");
// import fs from 'fs';
// fs.readFile('test.txt', 'utf-8', (err,data)=>{
//   if(err){
//    console.error(err);
//    return;
//   }
//   console.log(data);
// });

//Question words
Blockly.Blocks['where'] = {
  init: function() {
    this.appendValueInput("Where")
        .setCheck("String")
        .appendField("Where")
        .appendField(new Blockly.FieldDropdown([["is","is"], ["are","are"], ["was","was"], ["were","were"]]), "AuxVerb");
    this.setNextStatement(true, "String");
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['what'] = {
  init: function() {
    this.appendValueInput("What")
        .setCheck("String")
        .appendField("What")
        .appendField(new Blockly.FieldDropdown([["is","is"], ["are","are"], ["was","was"], ["were","were"]]), "AuxVerb");
    this.setNextStatement(true, "String");
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Block for variable setter.
Blockly.Blocks['which'] = {
  init: function() {
    this.appendValueInput("Which")
        .setCheck("String")
        .appendField("Which");
    this.setNextStatement(true, "String");
    this.setOutput(false, null);
    this.setColour(150);
  }
};

Blockly.Blocks['what_area'] = {
  init: function() {
    this.appendValueInput("What_area")
        .setCheck("String")
        .appendField("What area")
        .appendField(new Blockly.FieldDropdown([["is","is"], ["are","are"], ["was","was"], ["were","were"]]), "AuxVerb");
    this.setNextStatement(true, "String");
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['how_many'] = {
  init: function() {
    this.appendValueInput("How_many")
        .setCheck(null)
        .appendField("How many");
    this.setNextStatement(true, "String");
    this.setColour(150);
    this.setOutput(false, null);
  }
};

Blockly.Blocks['from_where'] = {
  init: function() {
    this.appendValueInput("From_where")
        .setCheck("String")
        .appendField("From where")
        .appendField(new Blockly.FieldDropdown([["is","is"], ["are","are"], ["was","was"], ["were","were"]]), "AuxVerb");
    this.setNextStatement(true, "String");
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


//measure components
Blockly.Blocks['measure1'] = {
  init: function() {
    this.appendStatementInput("measure1")
        .setCheck("String")
        .appendField(new Blockly.FieldDropdown([["buildings","buildings"],["hospitals","hospitals"]]), "coreC")
        .appendField(new Blockly.FieldDropdown([["is","is"], ["are","are"], ["was","was"], ["were","were"]]), "AuxVerb");
    this.setInputsInline(false);
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['measure2'] = {
  init: function() {
    this.appendValueInput("place_modifier")
        .setCheck("String")
        .appendField("modifier (optional):");
    this.appendStatementInput("coreC")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([["hurricane","hurricane"], ["Euclidean distance","EucDis"], ["hospotials","hospotials"]]), "coreC");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['measure3'] = {
  init: function() {
    this.appendValueInput("place_modifier")
        .setCheck("String")
        .appendField("modifier (optional):");
    this.appendStatementInput("coreC")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([["Euclidean distance","EucDis"], ["point density","poDen"], ["shortest route","shortestR"], ]), "coreC")
        .appendField(new Blockly.FieldDropdown([["to","to"], ["of","of"], ["for","for"], ["by","by"], ["through","through"]]), "preposition")
        .appendField(new Blockly.FieldDropdown([["parks","parks"], ["hospotials","hospotials"]]), "coreC2");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['measure4'] = {
  init: function() {
    this.appendStatementInput("coreC")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([["shortest route","shortestR"], ["network distance","netDis"]]), "coreC");
    this.appendValueInput("place_coreC1")
        .setCheck("String")
        .appendField(new Blockly.FieldDropdown([["from","from"], ["to","to"], ["of","of"], ["for","for"], ["by","by"], ["through","through"]]), "preposition")
        .appendField("concept or grid:");
    this.appendValueInput("place_coreC2")
        .setCheck("String")
        .appendField(new Blockly.FieldDropdown([["to","to"], ["from","from"], ["of","of"], ["for","for"], ["by","by"], ["through","through"]]), "preposition2")
        .appendField("modifier(optional):");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("concept or grid:");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['corecon'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["district center","district center"], ["hospitals","hospitals"], ["PC4 area","PC4"]]), "coreC3");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(30);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['grid1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(2, 0, Infinity, 0.1), "num1")
        .appendField("by")
        .appendField(new Blockly.FieldNumber(2, 0, Infinity, 0.1), "num2")
        .appendField(new Blockly.FieldDropdown([["km","km"], ["meters","meters"]]), "unit")
        .appendField("grid cells");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(30);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['grid2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["hexagonal grid","hexgrid"]]), "hexgrid")
        .appendField("with diameter of")
        .appendField(new Blockly.FieldNumber(2, 0, Infinity, 0.1), "num1")
        .appendField(new Blockly.FieldDropdown([["km","km"], ["meters","meters"]]), "unit");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(30);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['modifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["most intense","msintense"], ["average","ave"], ["four","four"], ["nearest","nearest"]]), "modifier");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//condition components
Blockly.Blocks['condition1'] = {
  init: function() {
    this.appendValueInput("topology")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["in","in"], ["inside","inside"], ["within","within"], ["covered by","coveredby"], ["contain","contain"], ["intersected with","intersectedwith"]]), "topology")
        .appendField(new Blockly.FieldDropdown([["forested area","forestedarea"], ["green space","green space"]]), "coreC");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['condition2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["within","within"], ["maximum","maximum"], ["minimum","minimum"]]), "topo_extre")
        .appendField(new Blockly.FieldNumber(2, 0), "NAME")
        .appendField(new Blockly.FieldDropdown([["km","km"], ["minute","minute"]]), "unit")
        .appendField(new Blockly.FieldDropdown([["from","from"], ["to","to"], ["of","of"]]), "preposition")
        .appendField(new Blockly.FieldDropdown([["roads","roads"], ["schools","schools"]]), "coreC");
    this.appendValueInput("place_subcon")
        .setCheck("String");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['condition3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["within","within"], ["maximum","maximum"], ["minimum","minimum"]]), "topo_extre")
        .appendField(new Blockly.FieldNumber(2, 0), "NAME")
        .appendField(new Blockly.FieldDropdown([["minutes","minutes"], ["km","km"]]), "unit")
        .appendField(new Blockly.FieldDropdown([["of","of"], ["from","from"], ["to","to"]]), "preposition")
        .appendField(new Blockly.FieldDropdown([["driving time","dritime"], ["network distance","network distance"]]), "coreC")
        .appendField(new Blockly.FieldDropdown([["from","from"], ["to","to"], ["of","of"]]), "preposition1");
    this.appendValueInput("place_modifier")
        .setCheck("String")
        .appendField("modifier(optional):");
    this.appendValueInput("place_concept")
        .setCheck("String")
        .appendField("concept or grid:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['condition4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["have","have"], ["has","has"]]), "have")
        .appendField(new Blockly.FieldDropdown([["slope","slope"], ["precipitation","precipitation"], ["elevation","elevation"]]), "coreC")
        .appendField(new Blockly.FieldDropdown([["larger than","larger"], ["less than","less"], ["greater than","greater"], ["smaller than","smaller"], ["at least","least"]]), "comparison")
        .appendField(new Blockly.FieldNumber(5), "NAME")
        .appendField(new Blockly.FieldDropdown([["percent","percent"], ["degrees","degrees"], ["millimeters","millimeters"]]), "unit");
    this.appendValueInput("place_subcon")
        .setCheck("String");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['condition5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["have","have"], ["has","has"]]), "have")
        .appendField(new Blockly.FieldDropdown([["highest","highest"], ["fastest","fastest"], ["most intense","msintense"]]), "extrema")
        .appendField(new Blockly.FieldDropdown([["crime rate","crime rate"], ["hurricane","hurricane"]]), "coreC");
    this.appendValueInput("place_subcon")
        .setCheck("String");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//support & extent components
Blockly.Blocks['support'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["for each","for each"], ["per","per"]]), "foreach");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("concept or grid:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['extent'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("in")
        .appendField(new Blockly.FieldDropdown([["Amsterdam","Amsterdam"], ["Utrecht","Utrecht"], ["Paris","Paris"]]), "toponymy");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['temporal_extent1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["in","in"], ["on","on"]]), "temporal")
        .appendField(new Blockly.FieldTextInput("2010"), "year_month");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "String");
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['temporal_extent2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["from","from"], ["between","between"]]), "temporal")
        .appendField(new Blockly.FieldTextInput("2010"), "year_month")
        .appendField(new Blockly.FieldDropdown([["to","to"], ["and","and"]]), "temporal1")
        .appendField(new Blockly.FieldTextInput("2020"), "year_month1");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "String");
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};