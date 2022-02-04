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
        .setCheck(["adj_coreC","coreC_of_coreC"])
        .appendField("Where")
        .appendField(new Blockly.FieldDropdown([["is","is"], ["are","are"], ["was","was"], ["were","were"], ["has","has"], ["do have","dohave"], ["is not","isnot"], ["are not","arenot"], ["was not","wasnot"], ["were not","werenot"], ["does not have","doesnothave"], ["do not have","donothave"]]), "AuxVerb")
        .appendField("the");
    this.setNextStatement(true, ["support","extent"]);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['what'] = {
  init: function() {
    this.appendValueInput("What")
        .setCheck(["adj_coreC","coreC_of_coreC","distancecoreC"])
        .appendField("What")
        .appendField(new Blockly.FieldDropdown([["is","is"], ["are","are"], ["was","was"], ["were","were"], ["has","has"], ["do have","dohave"], ["is not","isnot"], ["are not","arenot"], ["was not","wasnot"], ["were not","werenot"], ["does not have","doesnothave"], ["do not have","donothave"]]), "AuxVerb")
        .appendField("the");
    this.setNextStatement(true, ["support","extent"]);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Block for variable setter.
Blockly.Blocks['which'] = {
  init: function() {
    this.appendValueInput("Which")
        .setCheck("coreC_is")
        .appendField("Which");
    this.setNextStatement(true, ["support","extent"]);
    this.setOutput(false, null);
    this.setColour(150);
  }
};

Blockly.Blocks['what_area'] = {
  init: function() {
    this.appendValueInput("What_area")
        .setCheck("adj_coreC")
        .appendField("What areas")
        .appendField(new Blockly.FieldDropdown([["are","are"], ["were","were"], ["have","have"], ["are not","arenot"], ["were not","werenot"], ["do not have","donothave"]]), "AuxVerb");
    this.setNextStatement(true, ["relationships","support", "extent"]);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['how_many'] = {
  init: function() {
    this.appendValueInput("How_many")
        .setCheck("coreC_is")
        .appendField("How many");
    this.setNextStatement(true, ["support","extent"]);
    this.setColour(150);
    this.setOutput(false, null);
  }
};

Blockly.Blocks['from_where'] = {
  init: function() {
    this.appendValueInput("From_where")
        .setCheck(["adj_coreC","coreC_of_coreC"])
        .appendField("From where")
        .appendField(new Blockly.FieldDropdown([["is","is"], ["are","are"], ["was","was"], ["were","were"], ["has","has"], ["have","have"], ["is not","isnot"], ["are not","arenot"], ["was not","wasnot"], ["were not","werenot"], ["does not have","doesnothave"], ["do not have","donothave"]]), "AuxVerb")
        .appendField("the");
    this.setNextStatement(true, ["support","extent"]);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


//noun phrase
// Blockly.Blocks['noun_phrase1'] = {
//   init: function() {
//     this.appendStatementInput("noun_phrase1")
//         .setCheck("relationships")
//         .appendField(new Blockly.FieldDropdown([["buildings","buildings"], ["houses","houses"]]), "aux")
//         .appendField(new Blockly.FieldDropdown([["is","is"], ["are","are"], ["was","was"], ["were","were"], ["has","has"], ["have","have"], ["is not","isnot"], ["are not","arenot"], ["was not","wasnot"], ["were not","werenot"], ["does not have","doesnothave"], ["do not have","donothave"]]), "aux")
//         .appendField("[relationships*:]");
//     this.setInputsInline(false);
//     this.setOutput(true, "coreC_is");
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

Blockly.Blocks['noun_phrase1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["buildings","object"], ["houses","object"], ["neighborhood","object"]]), "object");
    this.appendValueInput("np1_1")
        .setCheck(["adj_coreC", "coreC_of_coreC"])
        .appendField(new Blockly.FieldDropdown([["","null"], ["has","has"], ["have","have"], ["do not have","donothave"]]), "aux")
        .appendField("[noun phrase*:]");
    this.appendStatementInput("np1_2")
        .setCheck("relationships")
        .appendField(new Blockly.FieldDropdown([["","null"], ["is","is"], ["are","are"], ["was","was"], ["were","were"]]), "aux1")
        .appendField("[relationships*:]");
    this.setInputsInline(false);
    this.setOutput(true, "coreC_is");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['noun_phrase2'] = {
  init: function() {
    this.appendStatementInput("noun_phrase2")
        .setCheck("relationships")
        .appendField(new Blockly.FieldTextInput("[adj.* or num.*]"), "adj_num")
        .appendField(new Blockly.FieldDropdown([["fire stations","concept"]]), "place_coreC")
        .appendField("[relationships*:]");
    this.setOutput(true, "adj_coreC");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['noun_phrase3'] = {
  init: function() {
    this.appendValueInput("np3_1")
        .setCheck(["adj_coreC","grid1","grid2"])
        .appendField(new Blockly.FieldDropdown([["","null"], ["total","total"], ["median","median"], ["average","average"]]), "aggregate")
        .appendField(new Blockly.FieldDropdown([["clusters","covamount"],["proportion","proportion"]]), "place_coreC")
        .appendField(new Blockly.FieldDropdown([["of","of"]]), "preposition")
        .appendField("[noun phrase:]");
    this.appendValueInput("np3_2")
        .setCheck("adj_coreC")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["","null"], ["to","to"]]), "preposition1")
        .appendField("[noun phrase*:]");
    this.setOutput(true, "coreC_of_coreC");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['noun_phrase4'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([["","null"], ["average","average"], ["total","total"]]), "aggregate")
        .appendField(new Blockly.FieldDropdown([["Euclidean distance","distance"], ["shortest route","network"], ["network distance","netdist"], ["travel time","traveltime"]]), "place_distance");
    this.appendValueInput("np4_1")
        .setCheck(["adj_coreC", "coreC_of_coreC","grid1","grid2"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["","null"], ["from","from"], ["to","to"]]), "preposition")
        .appendField("[noun phrase*:]");
    this.appendValueInput("np4_2")
        .setCheck(["adj_coreC", "coreC_of_coreC",,"grid1","grid2"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["to","to"], ["from","from"]]), "preposition1")
        .appendField("[noun phrase:]");
    this.setOutput(true, "distancecoreC");
    this.setColour(230);
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
        .appendField(new Blockly.FieldDropdown([["kilometers","km"], ["meters","meters"],["feet","feet"], ["miles","miles"]]), "unit")
        .appendField("grid cells");
    this.setInputsInline(true);
    this.setOutput(true, "grid1");
    this.setColour(210);
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
        .appendField(new Blockly.FieldDropdown([["kilometers","km"], ["meters","meters"],["feet","feet"], ["miles","miles"]]), "unit");
    this.setInputsInline(true);
    this.setOutput(true, "grid2");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//relationships
Blockly.Blocks['relationship1'] = {
  init: function() {
    this.appendValueInput("relationship1")
        .setCheck("adj_coreC")
        .appendField(new Blockly.FieldDropdown([["","null"], ["that is","thatis"], ["that are","thatare"]]), "subcon_aux")
        .appendField(new Blockly.FieldDropdown([["inside","inside"], ["located in","locatedin"], ["within","within"], ["contain","contain"], ["covered by","coveredby"], ["overlap with","overlap"], ["intersected with","intersectedwith"], ["outside","outside"], ["away from","away"]]), "topology")
        .appendField("[noun phrase:]");
    this.setPreviousStatement(true, ["coreC_is", "adj_coreC", "relationships"]);
    this.setNextStatement(true, "relationships");
    this.setColour(285);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['relationship2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["","null"], ["that is","thatis"], ["that are","thatare"]]), "subcon_aux")
        .appendField(new Blockly.FieldDropdown([["equal to","equal"], ["larger than","larger"], ["smaller than","smaller"], ["higher than","higher"], ["lower than","lower"], ["more than","more"],["less than","less"], ["at least","least"]]), "comparison")
        .appendField(new Blockly.FieldNumber(0), "number")
        .appendField(new Blockly.FieldDropdown([["unit","unit"], ["percent","percent"], ["degrees","degrees"], ["millimeters","mm"], ["meters", "m"], ["kilometers", "km"], ["square meters", "m2"], ["square kilometers", "km2"],["per square kilometer", "perkm2"]]), "comp_unit");
    this.setPreviousStatement(true, ["coreC_is", "adj_coreC", "relationships"]);
    this.setNextStatement(true, "relationships");
    this.setColour(285);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['relationship3'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(["adj_coreC", "coreC_of_coreC", "distancecoreC"])
        .appendField(new Blockly.FieldDropdown([["","null"], ["that is","thatis"], ["that are","thatare"]]), "subcon_aux")
        .appendField(new Blockly.FieldDropdown([["within","within"], ["outside","outside"], ["at least","least"], ["more than","more"], ["minimum","minimum"], ["maximum","maximum"]]), "topology")
        .appendField(new Blockly.FieldNumber(0), "number")
        .appendField(new Blockly.FieldDropdown([["meters","m"], ["kilometers","km"], ["feet","feet"], ["miles","miles"], ["minutes","minutes"]]), "buffer_unit")
        .appendField(new Blockly.FieldDropdown([["of","of"], ["from","from"]]), "prepostion")
        .appendField("[noun phrase:]");
    this.setPreviousStatement(true, ["coreC_is", "adj_coreC", "relationships"]);
    this.setNextStatement(true, "relationships");
    this.setColour(285);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['relationship4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["","null"], ["that is","thatis"], ["that are","thatare"]]), "subcon_aux")
        .appendField(new Blockly.FieldDropdown([["for sale","forsale"], ["visible","visible"]]), "boolean");
    this.setPreviousStatement(true, ["coreC_is", "adj_coreC", "relationships"]);
    this.setNextStatement(true, "relationships");
    this.setColour(285);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//support & extent components
Blockly.Blocks['supportvalue'] = {
  init: function() {
    this.appendValueInput("foreach")
        .setCheck("adj_coreC")
        .appendField("for each")
        .appendField("[noun phrase*:]");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "support");
    this.setNextStatement(true, "extent");
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['extentvalue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("in")
        .appendField(new Blockly.FieldTextInput("[toponymy]"), "toponymy");
    this.setPreviousStatement(true, ["extent"]);
    this.setNextStatement(true, ["temporalex"]);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['temporalextent1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("in")
        .appendField(new Blockly.FieldDropdown([["","null"], ["February","February"], ["March","March"], ["April","April"], ["May","May"], ["June","June"], ["July","July"], ["August","August"], ["September","September"], ["October","October"], ["November","November"], ["December","December"], ["December","December"], ["December","December"]]), "month")
        .appendField(new Blockly.FieldNumber(2022, 0), "year");
    this.setPreviousStatement(true, ["temporalex"]);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['temporalextent2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from")
        .appendField(new Blockly.FieldDropdown([["","null"], ["February","February"], ["March","March"], ["April","April"], ["May","May"], ["June","June"], ["July","July"], ["August","August"], ["September","September"], ["October","October"], ["November","November"], ["December","December"], ["December","December"], ["December","December"]]), "month")
        .appendField(new Blockly.FieldNumber(2010, 0), "year")
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["","null"], ["February","February"], ["March","March"], ["April","April"], ["May","May"], ["June","June"], ["July","July"], ["August","August"], ["September","September"], ["October","October"], ["November","November"], ["December","December"], ["December","December"], ["December","December"]]), "month1")
        .appendField(new Blockly.FieldNumber(2022, 0), "year1");
    this.setPreviousStatement(true, ["temporalex"]);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


// // // //measure components
// // // Blockly.Blocks['measure1'] = {
// // //   init: function() {
// // //     this.appendStatementInput("measure1")
// // //         .setCheck("String")
// // //         .appendField(new Blockly.FieldDropdown([["buildings","buildings"],["hospitals","hospitals"]]), "coreC")
// // //         .appendField(new Blockly.FieldDropdown([["is","is"], ["are","are"], ["was","was"], ["were","were"]]), "AuxVerb");
// // //     this.setInputsInline(false);
// // //     this.setOutput(true, "String");
// // //     this.setColour(230);
// // //     this.setTooltip("");
// // //     this.setHelpUrl("");
// // //   }
// // // };
// //
// Blockly.Blocks['measure2'] = {
//   init: function() {
//     this.appendValueInput("place_modifier")
//         .setCheck("String")
//         .appendField("modifier (optional):");
//     this.appendStatementInput("coreC")
//         .setCheck("String")
//         .setAlign(Blockly.ALIGN_CENTRE)
//         .appendField(new Blockly.FieldDropdown([["hurricane","hurricane"], ["Euclidean distance","EucDis"], ["hospotials","hospotials"]]), "coreC");
//     this.setInputsInline(true);
//     this.setOutput(true, "String");
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };
//
// Blockly.Blocks['measure3'] = {
//   init: function() {
//     this.appendValueInput("place_modifier")
//         .setCheck("String")
//         .appendField("modifier (optional):");
//     this.appendStatementInput("coreC")
//         .setCheck("String")
//         .setAlign(Blockly.ALIGN_CENTRE)
//         .appendField(new Blockly.FieldDropdown([["Euclidean distance","EucDis"], ["point density","poDen"], ["shortest route","shortestR"], ]), "coreC")
//         .appendField(new Blockly.FieldDropdown([["to","to"], ["of","of"], ["for","for"], ["by","by"], ["through","through"]]), "preposition")
//         .appendField(new Blockly.FieldDropdown([["parks","parks"], ["hospotials","hospotials"]]), "coreC2");
//     this.setInputsInline(true);
//     this.setOutput(true, "String");
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };
//
// Blockly.Blocks['measure4'] = {
//   init: function() {
//     this.appendStatementInput("coreC")
//         .setCheck("String")
//         .setAlign(Blockly.ALIGN_CENTRE)
//         .appendField(new Blockly.FieldDropdown([["shortest route","shortestR"], ["network distance","netDis"]]), "coreC");
//     this.appendValueInput("place_coreC1")
//         .setCheck("String")
//         .appendField(new Blockly.FieldDropdown([["from","from"], ["to","to"], ["of","of"], ["for","for"], ["by","by"], ["through","through"]]), "preposition")
//         .appendField("concept or grid:");
//     this.appendValueInput("place_coreC2")
//         .setCheck("String")
//         .appendField(new Blockly.FieldDropdown([["to","to"], ["from","from"], ["of","of"], ["for","for"], ["by","by"], ["through","through"]]), "preposition2")
//         .appendField("modifier(optional):");
//     this.appendValueInput("NAME")
//         .setCheck(null)
//         .appendField("concept or grid:");
//     this.setInputsInline(true);
//     this.setOutput(true, "String");
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// Blockly.Blocks['corecon'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldDropdown([["district center","district center"], ["hospitals","hospitals"], ["PC4 area","PC4"]]), "coreC3");
//     this.setInputsInline(true);
//     this.setOutput(true, "String");
//     this.setColour(30);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

//
// Blockly.Blocks['modifier'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldDropdown([["most intense","msintense"], ["average","ave"], ["four","four"], ["nearest","nearest"]]), "modifier");
//     this.setInputsInline(true);
//     this.setOutput(true, "String");
//     this.setColour(15);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// //condition components
// Blockly.Blocks['condition1'] = {
//   init: function() {
//     this.appendValueInput("topology")
//         .setCheck(null)
//         .appendField(new Blockly.FieldDropdown([["in","in"], ["inside","inside"], ["within","within"], ["covered by","coveredby"], ["contain","contain"], ["intersected with","intersectedwith"]]), "topology")
//         .appendField(new Blockly.FieldDropdown([["forested area","forestedarea"], ["green space","green space"]]), "coreC");
//     this.setPreviousStatement(true, "String");
//     this.setNextStatement(true, "String");
//     this.setColour(0);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };
//
// Blockly.Blocks['condition2'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldDropdown([["within","within"], ["maximum","maximum"], ["minimum","minimum"]]), "topo_extre")
//         .appendField(new Blockly.FieldNumber(2, 0), "NAME")
//         .appendField(new Blockly.FieldDropdown([["km","km"], ["minute","minute"]]), "unit")
//         .appendField(new Blockly.FieldDropdown([["from","from"], ["to","to"], ["of","of"]]), "preposition")
//         .appendField(new Blockly.FieldDropdown([["roads","roads"], ["schools","schools"]]), "coreC");
//     this.appendValueInput("place_subcon")
//         .setCheck("String");
//     this.setPreviousStatement(true, "String");
//     this.setNextStatement(true, "String");
//     this.setColour(0);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };
//
// Blockly.Blocks['condition3'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldDropdown([["within","within"], ["maximum","maximum"], ["minimum","minimum"]]), "topo_extre")
//         .appendField(new Blockly.FieldNumber(2, 0), "NAME")
//         .appendField(new Blockly.FieldDropdown([["minutes","minutes"], ["km","km"]]), "unit")
//         .appendField(new Blockly.FieldDropdown([["of","of"], ["from","from"], ["to","to"]]), "preposition")
//         .appendField(new Blockly.FieldDropdown([["driving time","dritime"], ["network distance","network distance"]]), "coreC")
//         .appendField(new Blockly.FieldDropdown([["from","from"], ["to","to"], ["of","of"]]), "preposition1");
//     this.appendValueInput("place_modifier")
//         .setCheck("String")
//         .appendField("modifier(optional):");
//     this.appendValueInput("place_concept")
//         .setCheck("String")
//         .appendField("concept or grid:");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, "String");
//     this.setNextStatement(true, "String");
//     this.setColour(0);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };
//
// Blockly.Blocks['condition4'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldDropdown([["have","have"], ["has","has"]]), "have")
//         .appendField(new Blockly.FieldDropdown([["slope","slope"], ["precipitation","precipitation"], ["elevation","elevation"]]), "coreC")
//         .appendField(new Blockly.FieldDropdown([["larger than","larger"], ["less than","less"], ["greater than","greater"], ["smaller than","smaller"], ["at least","least"]]), "comparison")
//         .appendField(new Blockly.FieldNumber(5), "NAME")
//         .appendField(new Blockly.FieldDropdown([["percent","percent"], ["degrees","degrees"], ["millimeters","millimeters"]]), "unit");
//     this.appendValueInput("place_subcon")
//         .setCheck("String");
//     this.setInputsInline(false);
//     this.setPreviousStatement(true, "String");
//     this.setNextStatement(true, "String");
//     this.setColour(0);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };
//
// Blockly.Blocks['condition5'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldDropdown([["have","have"], ["has","has"]]), "have")
//         .appendField(new Blockly.FieldDropdown([["highest","highest"], ["fastest","fastest"], ["most intense","msintense"]]), "extrema")
//         .appendField(new Blockly.FieldDropdown([["crime rate","crime rate"], ["hurricane","hurricane"]]), "coreC");
//     this.appendValueInput("place_subcon")
//         .setCheck("String");
//     this.setInputsInline(false);
//     this.setPreviousStatement(true, "String");
//     this.setNextStatement(true, "String");
//     this.setColour(0);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

//old support and extent
//Blockly.Blocks['support'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldDropdown([["for each","for each"], ["per","per"]]), "foreach");
//     this.appendValueInput("NAME")
//         .setCheck("String")
//         .appendField("concept or grid:");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, "String");
//     this.setNextStatement(true, "String");
//     this.setColour(50);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };