//Question words
Blockly.Blocks['where'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "Where %1 %2 %3",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "where_AuxVerb",
              "options": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ],
                [
                  "was",
                  "was"
                ],
                [
                  "were",
                  "were"
                ],
                [
                  "is not",
                  "isnot"
                ],
                [
                  "are not",
                  "arenot"
                ],
                [
                  "was not",
                  "wasnot"
                ],
                [
                  "were not",
                  "werenot"
                ]
              ],
            },
            {
              "type": "input_value",
              "name": "where_np_shadow",
              "check": "np_type"
            },
            {
              "type": "input_value",
              "name": "where_extent_shadow",
              "check": "ext_type"
            }
          ],
          "inputsInline": false,
          "colour": 150,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['what'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "What %1 %2 %3",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "what_AuxVerb",
              "options": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ],
                [
                  "was",
                  "was"
                ],
                [
                  "were",
                  "were"
                ],
                [
                  "is not",
                  "isnot"
                ],
                [
                  "are not",
                  "arenot"
                ],
                [
                  "was not",
                  "wasnot"
                ],
                [
                  "were not",
                  "werenot"
                ]
              ],
            },
            {
              "type": "input_value",
              "name": "what_np_shadow",
              "check": "np_type"
            },
            {
              "type": "input_value",
              "name": "what_extent_shadow",
              "check": "ext_type"
            }
          ],
          "inputsInline": false,
          "colour": 150,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['which'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "Which %1 %2",
          "args0": [
            {
              "type": "input_value",
              "name": "which_np_shadow",
              "check": "np_type"
            },
            {
              "type": "input_value",
              "name": "which_extent_shadow",
              "check": "ext_type"
            }
          ],
          "inputsInline": false,
          "colour": 150,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['what_area1'] = {
  init: function () {
    this.jsonInit(
        {
              "message0": "What areas %1 %2 %3",
              "args0": [
            {
              "type": "field_dropdown",
              "name": "wharea_AuxVerb",
              "options": [
                [
                  "have",
                  "dohave"
                ],
                [
                  "do not have",
                  "donothave"
                ]
              ],
            },
            {
              "type": "input_value",
              "name": "wharea_np_shadow",
              "check": "np_type"
            },
            {
              "type": "input_value",
              "name": "wharea_extent_shadow",
              "check": "ext_type"
            }
          ],
          "colour": 150,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['what_area2'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "What areas %1 %2 %3",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "wharea_AuxVerb",
              "options": [
                [
                  "are",
                  "are"
                ],
                [
                  "were",
                  "were"
                ],
                [
                  "are not",
                  "arenot"
                ],
                [
                  "were not",
                  "werenot"
                ]
              ],
            },
            {
              "type": "input_statement",
              "name": "wharea_rel_shadow",
              "check": "rel_type"
            },
            {
              "type": "input_value",
              "name": "wharea_extent_shadow",
              "check": "ext_type"
            }
          ],
          "colour": 150,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['how_many'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "How many %1 %2",
          "args0": [
            {
              "type": "input_value",
              "name": "howmany_np_shadow",
              "check": "np_type"
            },
            {
              "type": "input_value",
              "name": "howmany_extent_shadow",
              "check": "ext_type"
            }
          ],
          "inputsInline": false,
          "colour": 150,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['from_where'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "From where %1 %2 %3",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "fromwh_AuxVerb",
              "options": [
                [
                  "is",
                  "is"
                ],
                [
                  "are",
                  "are"
                ],
                [
                  "was",
                  "was"
                ],
                [
                  "were",
                  "were"
                ],
                [
                  "is not",
                  "isnot"
                ],
                [
                  "are not",
                  "arenot"
                ],
                [
                  "was not",
                  "wasnot"
                ],
                [
                  "were not",
                  "werenot"
                ]
              ],
            },
            {
              "type": "input_value",
              "name": "fromwh_np_shadow",
              "check": "np_type"
            },
            {
              "type": "input_value",
              "name": "fromwh_extent_shadow",
              "check": "ext_type"
            }
          ],
          "inputsInline": false,
          "colour": 150,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['noun_phrase1_1'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1 %2 %3",
          "args0": [
            {
              "type": "field_input",
              "name": "np1_1_object",
              "text": "buildings"
            },
            {
              "type": "field_dropdown",
              "name": "where_AuxVerb",
              "options": [
                ["have","have"], ["",""], ["has","has"], ["do not have","donothave"], ["does not have","donothave"]
              ],
            },
            {
              "type": "input_value",
              "name": "coreCAux_shadow1",
              "check": "np_type"
            }
          ],
          "inputsInline": false,
          "output": "np_type",
          "colour": 240,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['noun_phrase1_2'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1 %2 %3",
          "args0": [
            {
              "type": "field_input",
              "name": "np1_1_object",
              "text": "buildings"
            },
            {
              "type": "field_dropdown",
              "name": "AuxVerb1",
              "options": [
                [
                  "are",
                  "are"
                ],
                [
                  "is",
                  "is"
                ],
                [
                  "were",
                  "were"
                ],
                [
                  "was",
                  "was"
                ],
                [
                  "are not",
                  "arenot"
                ],
                [
                  "is not",
                  "isnot"
                ],
                [
                  "were not",
                  "werenot"
                ],
                [
                  "was not",
                  "wasnot"
                ]
              ]
            },
            {
              "type": "input_statement",
              "name": "coreCAux_shadow2",
              "check": "rel_type"
            }
          ],
          //"output": "coreC_is",
          "output": "np_type",
          "colour": 240,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['noun_phrase2'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1 %2 %3 %4",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ar_the",
              "options": [
                ["the","the"], ["",""], ["a", "a"], ["an","an"],["each","each"]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "adj_num",
              "options": [
                  ["",""], ["average","average"], ["median","median"], ["total","total"], ["nearest", "nearest"], ["fewest", "fewest"], ["lowest","lowest"], ["smallest","smallest"],["most", "most"], ["most popular", "most popular"], ["most intense", "most intense"], ["highest", "highest"], ["largest","largest"], ["fastest", "fastest"]
              ]
            },
            // {
            //   "type": "field_input",
            //   "name": "adj_num",
            //   "text": "",
            // },
            {
              "type": "field_input",
              "name": "np2_coreC",
              "text": "ski piste",
            },
            {
              "type": "input_statement",
              "name": "adjcoreC_shadow",
              "check": "rel_type"
            }
          ],
          "output": "np_type",
          "colour": 240,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['noun_phrase3'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1 %2 %3 %4 %5",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ar_the",
              "options": [
                ["the","the"], ["",""], ["a", "a"], ["an","an"]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "adj_aggre",
              "options": [
                ["",""], ["nearest", "nearest"], ["average","average"], ["median","median"], ["total","total"],
              ]
            },
            {
              "type": "field_input",
              "name": "np3_coreC",
              "text": "cluster"
            },
            {
              "type": "field_dropdown",
              "name": "preposition",
              "options": [
                ["of","of"], ["to","to"], ["for","for"], ["by","by"]
              ],
            },
            {
              "type": "input_value",
              "name": "coreCOfCoreC_shadow1",
              "check": "np_type"
            }
            // {
            //   "type": "field_dropdown",
            //   "name": "preposition",
            //   "options": [
            //     ["","null"], ["to","to"]
            //   ],
            // },
            // {
            //   "type": "input_value",
            //   "name": "coreCOfCoreC_shadow2",
            //   "check": "np_type",
            //   "align": "RIGHT"
            // }
          ],
          //"output": "coreC_of_coreC",
          "output": "np_type",
          "colour": 240,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['noun_phrase3_connect'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1 %2",
          "args0": [
            {
              "type": "field_input",
              "name": "np3_connect_coreC",
              "text": "fire calls",
            },
            {
              "type": "input_statement",
              "name": "np3_connect_shadow",
              "check": "rel_type"
            }
          ],
          "output": "np_type",
          "colour": 240,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['noun_phrase4'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1 %2 %3 %4 %5 %6 %7",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ar_the",
              "options": [
                ["the","the"], ["",""], ["a", "a"], ["an","an"]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "aggregate",
              "options": [
                ["",""], ["average","average"], ["median","median"], ["total","total"]
              ]
            },
            {
              "type": "field_input",
              "name": "np4_coreC",
              "text": "shortest route"
            },
            // {
            //   "type": "input_dummy",
            //   "align": "CENTRE"
            // },
            {
              "type": "field_dropdown",
              "name": "preposition",
              "options": [
                ["from","from"], ["to","to"],["of","of"],["for","for"], ["through", "through"]
              ]
            },
            {
              "type": "input_value",
              "name": "distCoreC1",
              "check": "np_type",
              "align": "RIGHT"
            },
            {
              "type": "field_dropdown",
              "name": "preposition1",
              "options": [
                ["",""], ["to","to"], ["from","from"],["for","for"],["along", "along"]
              ]
            },
            // {
            //   "type": "input_value",
            //   "name": "distCoreC2",
            //   "check": "np_type",
            //   "align": "RIGHT"
            // }
            {
              "type": "input_value",
              "name": "distCoreC_shadow",
              "check": "np_type",
              "align": "RIGHT"
            }
          ],
          //"output": "distancecoreC",
          "output": "np_type",
          "colour": 240,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['noun_phrase4_from'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1 %2",
          "args0": [
            {
              "type": "field_input",
              "name": "np4_from_coreC",
              "text": "car accidents",
            },
            {
              "type": "input_statement",
              "name": "np4_from_shadow",
              "check": "rel_type"
            }
          ],
          "output": "np_type",
          "colour": 240,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

// Blockly.Blocks['noun_phrase4_to'] = {
//   init: function () {
//     this.jsonInit(
//         {
//           "message0": "%1 %2 %3",
//           "args0": [
//             // {
//             //   "type": "field_input",
//             //   "name": "adjective",
//             //   "text": "the nearest",
//             // },
//             {
//               "type": "field_dropdown",
//               "name": "adjective",
//               "options": [
//                 ["the nearest","the_nearest"], ["a", "a"], ["an","an"], ["","null"]
//               ]
//             },
//             {
//               "type": "field_input",
//               "name": "np4_from_coreC",
//               "text": "hospitals",
//             },
//             {
//               "type": "input_statement",
//               "name": "np4_to_shadow",
//               "check": "rel_type"
//             }
//           ],
//           "output": "np_type",
//           "colour": 240,
//           "tooltip": "",
//           "helpUrl": ""
//         }
//     )
//   }
// }

Blockly.Blocks['grid1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(2, 0, Infinity, 0.1), "num1")
        .appendField("by")
        .appendField(new Blockly.FieldNumber(2, 0, Infinity, 0.1), "num2")
        .appendField(new Blockly.FieldDropdown([["kilometers","kilometers"], ["kilometer","kilometer"],["meters","meters"],["meter","meter"], ["miles","miles"], ["mile","mile"], ["feet","feet"], ["foot","foot"]]), "unit")
        .appendField("grid cells");
    this.setInputsInline(true);
    this.setOutput(true, "np_type");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['grid2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["hexagonal grid","hexgrid"]]), "hexgrid")
        .appendField("with diameter of")
        .appendField(new Blockly.FieldNumber(2, 0, Infinity, 0.1), "num1")
        .appendField(new Blockly.FieldDropdown([["kilometers","kilometers"], ["kilometer","kilometer"],["meters","meters"],["meter","meter"], ["miles","miles"], ["mile","mile"], ["feet","feet"], ["foot","foot"]]), "unit");
    this.setInputsInline(true);
    this.setOutput(true, "np_type");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

//relationships
Blockly.Blocks['relationship1'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1 %2 %3",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "subcon_aux",
              "options": [
                ["",""], ["and","and"], ["but not","butnot"], ["that is","thatis"], ["that are","thatare"]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "topology",
              "options": [
                ["inside","inside"], ["within","within"], ["contain","contain"], ["covered by","covered by"], ["overlap with","overlap"], ["intersected with","intersected with"], ["outside","outside"], ["away from","away from"],  ["closest to","closeto"], ["affected by","affected by"], ["with","with"], ["weighted by","weighted by"], ["along", "along"]
              ]
            },
            {
              "type": "input_value",
              "name": "rel1_np_shadow",
              "check": "np_type"
            }
          ],
          "previousStatement": "rel_type",
          "nextStatement": "rel_type",
          "colour": 300,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['relationship2'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1 %2 %3 %4 %5 %6",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "subcon_aux",
              "options": [
                ["",""], ["and","and"], ["but not","butnot"], ["that is","thatis"], ["that are","thatare"]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "r2_topology",
              "options": [
                ["within","within"], ["outside","outside"], ["more than","more than"], ["less than","less"]
              ]
            },
            {
              "type": "field_number",
              "name": "r2_number",
              "value": 0
            },
            {
              "type": "field_dropdown",
              "name": "r2_buffer_unit",
              "options": [
                ["meters","meters"], ["meter","meter"], ["kilometers","kilometers"], ["kilometer","kilometer"], ["feet","feet"], ["foot","foot"], ["miles","miles"], ["mile","mile"], ["hours","hours"], ["hour","hour"], ["minutes","minutes"], ["minute","minute"], ["seconds","seconds"], ["second","second"]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "prepostion",
              "options": [
                [
                  "of",
                  "of"
                ],
                [
                  "",
                  ""
                ],
                [
                  "from",
                  "from"
                ]
              ]
            },
            {
              "type": "input_value",
              "name": "rel3_np_shadow",
              "check": "np_type",
            }
          ],
          "previousStatement": "rel_type",
          "nextStatement": "rel_type",
          "colour": 300,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['relationship3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["",""], ["of","of"], ["and","and"], ["but not","butnot"], ["that is","thatis"], ["that are","thatare"]]), "subcon_aux")
        .appendField(new Blockly.FieldDropdown([["equal to","equal to"], ["larger than","larger than"], ["smaller than","smaller than"], ["higher than","higher than"], ["lower than","lower than"], ["more than","more than"],["less than","less than"], ["more than or equal to","more than or equal to"], ["less than or equal to", "less than or equal to"], ["older than", "older than"], ["younger than", "younger than"]]), "r3_comparison")
        .appendField(new Blockly.FieldNumber(0), "r3_number")
        .appendField(new Blockly.FieldDropdown([
            ["unit","unit"], ["",""], ["percent","percent"], ["degrees","degrees"], ["decibels", "decibels "], ["dollars", "dollars"], ["kilowatt hours","kilowatt hours"], ["inches of rain per year","inches of rain per year"], ["millimeters","millimeters"], ["millimeter","millimeter"], ["meters", "meters"], ["meter", "meter"], ["kilometers", "kilometers"], ["kilometer", "kilometer"], ["square meters", "square meters"], ["square meter", "square meter"], ["square kilometers", "square kilometers"],  ["square kilometer", "square kilometer"]
        ]), "r3_unit");
    this.setPreviousStatement(true, ["coreC_is", "adj_coreC", "rel_type"]);
    this.setNextStatement(true, "rel_type");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['relationship4'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "with %1 %2 %3 %4",
          "args0": [
            {
              "type": "input_value",
              "name": "rel4_np",
              "check": "np_type"
            },
            {
              "type": "field_dropdown",
              "name": "r4_comparision",
              "options": [
                ["equal to","equal to"], ["larger than","larger than"], ["smaller than","smaller than"], ["higher than","higher than"], ["lower than","lower than"], ["more than","more than"],["less than","less than"], ["at least","at least"], ["older than", "older than"], ["younger than", "younger than"]
              ]
            },
            {
              "type": "field_number",
              "name": "r4_number",
              "value": 0
            },
            {
              "type": "field_dropdown",
              "name": "r4_unit",
              "options": [
                  ["unit","unit"], ["",""], ["percent","percent"], ["per 10000 people","per 10000 people"], ["degrees","degrees"], ["decibels", "decibels"], ["dollars", "dollars"], ["kilowatt hours","kilowatt hours"], ["millimeters","millimeters"], ["millimeter","millimeter"], ["meters", "meters"], ["meter", "meter"], ["kilometers", "kilometers"], ["kilometer", "kilometer"], ["square meters", "square meters"], ["square meter", "square meter"], ["square kilometers", "square kilometers"],  ["square kilometer", "square kilometer"]
              ]
            }
          ],
          "previousStatement": "rel_type",
          "nextStatement": "rel_type",
          "colour": 300,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['rel4_np'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1",
          "args0": [
            {
              "type": "field_input",
              "name": "rel4_np_input",
              "text": "crime rate"
            }
          ],
          "output": "np_type",
          "colour": 240,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['relationship5'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "with %1 %2 %3",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "r5_comparison",
              "options": [
                  ["", ""], ["more than","more"], ["less than","less"], ["more than or equal to","more than or equal to"], ["less than or or equal to","less than or equal to"]
              ]
            },
            {
              "type": "field_number",
              "name": "r5_number",
              "value": 0
            },
            {
              "type": "input_value",
              "name": "rel5_np",
              "check": "np_type"
            }
          ],
          "previousStatement": "rel_type",
          "nextStatement": "rel_type",
          "colour": 300,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['rel5_np'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1",
          "args0": [
            {
              "type": "field_input",
              "name": "rel5_np_input",
              "text": "health care facility"
            }
          ],
          "output": "np_type",
          "colour": 240,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['relationship6'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["",""], ["and","and"], ["but not","butnot"], ["that is","thatis"], ["that are","thatare"]]), "subcon_aux")
        .appendField(new Blockly.FieldDropdown([["for sale","for sale"], ["visible","visible"]]), "boolean");
    this.setPreviousStatement(true, ["coreC_is", "adj_coreC", "rel_type"]);
    this.setNextStatement(true, "rel_type");
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

//support & extent components

Blockly.Blocks['support'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "for each %1 %2",
          "args0": [
            {
              "type": "input_value",
              "name": "sup_np",
              "check": "np_type"
            },
            {
              "type": "input_value",
              "name": "sup_ext_shadow",
              "check": "ext_type"
            }
          ],
          "inputsInline": false,
          "output": "ext_type",
          "colour": 50,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['noun_phrase_sup'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1 %2",
          "args0": [
            {
              "type": "field_input",
              "name": "np_sup_coreC",
              "text": "neighborhood",
            },
            {
              "type": "input_statement",
              "name": "np_sup_shadow",
              "check": "rel_type"
            }
          ],
          "output": "np_type",
          "colour": 240,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['dist_band'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1 %2 %3",
          "args0": [
            {
              "type": "field_number",
              "name": "number",
              "value": 0
            },
            {
              "type": "field_dropdown",
              "name": "unit",
              "options": [
                ["kilometers","kilometers"], ["kilometer","kilometer"], ["meters","meters"], ["meter","meter"], ["miles","miles"], ["mile","mile"], ["feet","feet"],["foot","foot"], ["square kilometers", "square kilometers"], ["square kilometer", "square kilometer"], ["square meters", "square meters"], ["square meter", "square meter"]              ]
            },
            {
              "type": "field_dropdown",
              "name": "distanceband",
              "options": [
                ["distance band","distband"], ["circle","circle"]
              ]
            }
          ],
          "output": "np_type",
          "colour": 210,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['extent'] = {
  init: function () {
    this.jsonInit(
        {
          "message0": "%1 %2 %3",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "ext_in",
              "options": [["in","in"],["of","of"]]
            },
            {
              "type": "field_input",
              "name": "toponymy",
              "text": "Amsterdam"
            },
            {
              "type": "input_value",
              "name": "temext_shadow",
              "check": "temext_type"
            }
          ],
          "output": "ext_type",
          "colour": 50,
          "tooltip": "",
          "helpUrl": ""
        }
    )
  }
}

Blockly.Blocks['temporalextent1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("in")
        .appendField(new Blockly.FieldDropdown([["",""], ["January","January"], ["February","February"], ["March","March"], ["April","April"], ["May","May"], ["June","June"], ["July","July"], ["August","August"], ["September","September"], ["October","October"], ["November","November"], ["December","December"]]), "month")
        .appendField(new Blockly.FieldNumber(2022, 0), "year");
    this.setOutput(true, ["temext_type"]);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['temporalextent2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from")
        .appendField(new Blockly.FieldDropdown([["",""], ["January","January"], ["February","February"], ["March","March"], ["April","April"], ["May","May"], ["June","June"], ["July","July"], ["August","August"], ["September","September"], ["October","October"], ["November","November"], ["December","December"], ["December","December"], ["December","December"]]), "month")
        .appendField(new Blockly.FieldNumber(2010, 0), "year")
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["",""], ["January","January"], ["February","February"], ["March","March"], ["April","April"], ["May","May"], ["June","June"], ["July","July"], ["August","August"], ["September","September"], ["October","October"], ["November","November"], ["December","December"], ["December","December"], ["December","December"]]), "month1")
        .appendField(new Blockly.FieldNumber(2022, 0), "year1");
    this.setOutput(true, ["temext_type"]);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//shadow blocks
Blockly.Blocks['np_reminder'] = {
  init: function() {
    this.jsonInit({
      "message0": "noun_phrases",
      "output": "np_type",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['rel_reminder'] = {
  init: function() {
    this.jsonInit({
      "message0": "relationships_",
      "previousStatement": "rel_type",
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['extent_reminder'] = {
  init: function() {
    this.jsonInit({
      "message0": "extent_",
      "output": "ext_type",
      "colour": 50,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

// Blockly.Blocks['spaextent_reminder'] = {
//   init: function() {
//     this.jsonInit({
//       "message0": "spatial_extent",
//       "output": "ext_type",
//       "colour": 50,
//       "tooltip": "",
//       "helpUrl": ""
//     });
//   }
// };

Blockly.Blocks['temextent_reminder'] = {
  init: function() {
    this.jsonInit({
      "message0": "temporal_extent",
      "output": "temext_type",
      "colour": 50,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.myFlyout={};
Blockly.MYFLYOUT_CATEGORY_NAME="flyout_extent";
Blockly.myFlyout.Blocks=[];

Blockly.gridFlyout={};
Blockly.GRIDFLYOUT_CATEGORY_NAME="flyout_grid";
Blockly.gridFlyout.Blocks=[];

function getAllBlocksList(){
  let blocklist=[];
  workspace.getAllBlocks(true).forEach(element =>{
    blocklist.push(element.type);
  });

  return blocklist
}

// version late 9.3.0 using Blockly.utils.xml.textToDom
// version before 9.3.0 using Blockly.Xml.textToDom
function disable_sup_grid(){

  let elelist = getAllBlocksList()

  if (elelist.includes('support')||elelist.includes('extent')) {
    Blockly.myFlyout.Blocks=[];
    let label1DOM= Blockly.Xml.textToDom('<label text="Spatial extent:"></label>');
    Blockly.myFlyout.Blocks.push(label1DOM);
    let extDOM = Blockly.Xml.textToDom('<block type="extent" disabled="true"><value name = "temext_shadow"><shadow type="temextent_reminder"></shadow></value></block>');
    Blockly.myFlyout.Blocks.push(extDOM);
    let sup1Text = '<block type="support" disabled="true"><value name = "sup_np"><block type="noun_phrase_sup"><value name = "np_sup_shadow"><shadow type="rel_reminder"></shadow></value></block></value><value name = "sup_ext_shadow"><block type="extent"><value name = "temext_shadow"><shadow type="temextent_reminder"></shadow></value></block></value></block>';
    let sup1DOM = Blockly.Xml.textToDom(sup1Text);
    Blockly.myFlyout.Blocks.push(sup1DOM);
    let sup2Text = '<block type="support" disabled="true"><value name = "sup_np"><block type="grid1"></block></value><value name = "sup_ext_shadow"><block type="extent"><value name = "temext_shadow"><shadow type="temextent_reminder"></shadow></value></block></value></block>';
    let sup2DOM = Blockly.Xml.textToDom(sup2Text);
    Blockly.myFlyout.Blocks.push(sup2DOM);
    let sup3Text = '<block type="support" disabled="true"><value name = "sup_np"><block type="grid2"></block></value><value name = "sup_ext_shadow"><block type="extent"><value name = "temext_shadow"><shadow type="temextent_reminder"></shadow></value></block></value></block>';
    let sup3DOM = Blockly.Xml.textToDom(sup3Text);
    Blockly.myFlyout.Blocks.push(sup3DOM);
    let sup4Text = '<block type="support" disabled="true"><value name = "sup_np"><block type="dist_band"></block></value><value name = "sup_ext_shadow"><block type="extent"><value name = "temext_shadow"><shadow type="temextent_reminder"></shadow></value></block></value></block>';
    let sup4DOM = Blockly.Xml.textToDom(sup4Text);
    Blockly.myFlyout.Blocks.push(sup4DOM);
    let label2DOM = Blockly.Xml.textToDom('<label text="Temporal extent:"></label>');
    Blockly.myFlyout.Blocks.push(label2DOM);
    let temDOM1 = Blockly.Xml.textToDom('<block type="temporalextent1"></block>');
    Blockly.myFlyout.Blocks.push(temDOM1);
    let temDOM2 = Blockly.Xml.textToDom('<block type="temporalextent2"></block>');
    Blockly.myFlyout.Blocks.push(temDOM2);
  }else{
    Blockly.myFlyout.Blocks=[];
    let label1DOM= Blockly.Xml.textToDom('<label text="Spatial extent:"></label>');
    Blockly.myFlyout.Blocks.push(label1DOM);
    let extDOM = Blockly.Xml.textToDom('<block type="extent"><value name = "temext_shadow"><shadow type="temextent_reminder"></shadow></value></block>');
    Blockly.myFlyout.Blocks.push(extDOM);
    let sup1Text = '<block type="support"><value name = "sup_np"><block type="noun_phrase_sup"><value name = "np_sup_shadow"><shadow type="rel_reminder"></shadow></value></block></value><value name = "sup_ext_shadow"><block type="extent"><value name = "temext_shadow"><shadow type="temextent_reminder"></shadow></value></block></value></block>';
    let sup1DOM = Blockly.Xml.textToDom(sup1Text);
    Blockly.myFlyout.Blocks.push(sup1DOM);
    let sup2Text = '<block type="support"><value name = "sup_np"><block type="grid1"></block></value><value name = "sup_ext_shadow"><block type="extent"><value name = "temext_shadow"><shadow type="temextent_reminder"></shadow></value></block></value></block>';
    let sup2DOM = Blockly.Xml.textToDom(sup2Text);
    Blockly.myFlyout.Blocks.push(sup2DOM);
    let sup3Text = '<block type="support"><value name = "sup_np"><block type="grid2"></block></value><value name = "sup_ext_shadow"><block type="extent"><value name = "temext_shadow"><shadow type="temextent_reminder"></shadow></value></block></value></block>';
    let sup3DOM = Blockly.Xml.textToDom(sup3Text);
    Blockly.myFlyout.Blocks.push(sup3DOM);
    let sup4Text = '<block type="support"><value name = "sup_np"><block type="dist_band"></block></value><value name = "sup_ext_shadow"><block type="extent"><value name = "temext_shadow"><shadow type="temextent_reminder"></shadow></value></block></value></block>';
    let sup4DOM = Blockly.Xml.textToDom(sup4Text);
    Blockly.myFlyout.Blocks.push(sup4DOM);
    let label2DOM = Blockly.Xml.textToDom('<label text="Temporal extent:"></label>');
    Blockly.myFlyout.Blocks.push(label2DOM);
    let temDOM1 = Blockly.Xml.textToDom('<block type="temporalextent1"></block>');
    Blockly.myFlyout.Blocks.push(temDOM1);
    let temDOM2 = Blockly.Xml.textToDom('<block type="temporalextent2"></block>');
    Blockly.myFlyout.Blocks.push(temDOM2);
  }

  if (elelist.includes('noun_phrase4') && (elelist.includes("grid1") || elelist.includes("grid2"))) {
    Blockly.gridFlyout.Blocks=[];
    let np2DOM = Blockly.Xml.textToDom('<block type="noun_phrase2" disabled="true"><value name = "adjcoreC_shadow"><shadow type="rel_reminder"></shadow></value></block>');
    Blockly.gridFlyout.Blocks.push(np2DOM);
    let grid1DOM= Blockly.Xml.textToDom('<block type="grid1" disabled="true"></block>');
    Blockly.gridFlyout.Blocks.push(grid1DOM);
    let grid2DOM = Blockly.Xml.textToDom('<block type="grid2" disabled="true"></block>');
    Blockly.gridFlyout.Blocks.push(grid2DOM);
    if (elelist.includes("support")){
      Blockly.gridFlyout.Blocks=[];
      let np2DOM = Blockly.Xml.textToDom('<block type="noun_phrase2"><value name = "adjcoreC_shadow"><shadow type="rel_reminder"></shadow></value></block>');
      Blockly.gridFlyout.Blocks.push(np2DOM);
      let grid1DOM= Blockly.Xml.textToDom('<block type="grid1"></block>');
      Blockly.gridFlyout.Blocks.push(grid1DOM);
      let grid2DOM = Blockly.Xml.textToDom('<block type="grid2"></block>');
      Blockly.gridFlyout.Blocks.push(grid2DOM);
    }
  }else{
    Blockly.gridFlyout.Blocks=[];
    let np2DOM = Blockly.Xml.textToDom('<block type="noun_phrase2"><value name = "adjcoreC_shadow"><shadow type="rel_reminder"></shadow></value></block>');
    Blockly.gridFlyout.Blocks.push(np2DOM);
    let grid1DOM= Blockly.Xml.textToDom('<block type="grid1"></block>');
    Blockly.gridFlyout.Blocks.push(grid1DOM);
    let grid2DOM = Blockly.Xml.textToDom('<block type="grid2"></block>');
    Blockly.gridFlyout.Blocks.push(grid2DOM);
  }

  return Blockly.myFlyout.Blocks, Blockly.gridFlyout.Blocks
};

Blockly.myFlyout.flyoutCategory=function(a){
  var c=[];
  var b = Blockly.myFlyout.Blocks;
  for (var i=0;i<b.length;i++) {
    c.push(b[i]);
  }
  return c
};

Blockly.gridFlyout.flyoutCategory=function(c){
  var d=[];
  var e = Blockly.gridFlyout.Blocks;
  for (var i=0;i<e.length;i++) {
    d.push(e[i]);
  }
  return d
};

function hideCategory(){
  document.getElementById('queCate').style.display = ''
  document.getElementById('npWhichCate').style.display = 'none'
  document.getElementById('npCate').style.display = 'none'
  document.getElementById('np2Cate').style.display = 'none'
  document.getElementById('np3Cate').style.display = 'none'
  document.getElementById('relCate').style.display = 'none'
  document.getElementById('extCate').style.display = 'none'
}

function np2Category(){
  document.getElementById('npWhichCate').style.display = 'none'
  document.getElementById('npCate').style.display = 'none'
  document.getElementById('np2Cate').style.display = 'none'
  document.getElementById('np3Cate').style.display = 'none'
  document.getElementById('relCate').style.display = ''
  document.getElementById('extCate').style.display = ''
}

function np4Category(){
  document.getElementById('npWhichCate').style.display = 'none'
  document.getElementById('npCate').style.display = 'none'
  document.getElementById('np2Cate').style.display = ''
  document.getElementById('np3Cate').style.display = 'none'
  document.getElementById('relCate').style.display = ''
  document.getElementById('extCate').style.display = ''
}

function rel1Category(){
  document.getElementById('npWhichCate').style.display = 'none'
  document.getElementById('npCate').style.display = ''
  document.getElementById('np2Cate').style.display = 'none'
  document.getElementById('np3Cate').style.display = 'none'
  document.getElementById('relCate').style.display = ''
}

function setCategory() {
  const where = workspace.getBlocksByType("where");
  const what = workspace.getBlocksByType("what");
  const which = workspace.getBlocksByType("which");
  const what_area1 = workspace.getBlocksByType("what_area1");
  const what_area2 = workspace.getBlocksByType("what_area2");
  const how_many = workspace.getBlocksByType("how_many");
  const from_where = workspace.getBlocksByType("from_where");
  const np1_1 = workspace.getBlocksByType("noun_phrase1_1");
  const np1_2 = workspace.getBlocksByType("noun_phrase1_2");
  const np2 = workspace.getBlocksByType("noun_phrase2");
  const np3 = workspace.getBlocksByType("noun_phrase3");
  const np4 = workspace.getBlocksByType("noun_phrase4");
  const np4_from = workspace.getBlocksByType("noun_phrase4_from");
  const rel1 = workspace.getBlocksByType("relationship1");
  const rel2 = workspace.getBlocksByType("relationship2");
  const rel4 = workspace.getBlocksByType("relationship4");

  if(where.length == 1) {
    document.getElementById('npWhichCate').style.display = 'none'
    document.getElementById('npCate').style.display = ''
    document.getElementById('np2Cate').style.display = 'none'
    document.getElementById('np3Cate').style.display = 'none'
    document.getElementById('relCate').style.display = 'none'
    document.getElementById('extCate').style.display = 'none'
    document.getElementById('queCate').style.display = 'none'
  }else if (what.length == 1) {
    document.getElementById('npWhichCate').style.display = 'none'
    document.getElementById('npCate').style.display = ''
    document.getElementById('np2Cate').style.display = 'none'
    document.getElementById('np3Cate').style.display = 'none'
    document.getElementById('relCate').style.display = 'none'
    document.getElementById('extCate').style.display = 'none'
    document.getElementById('queCate').style.display = 'none'
  }else if (which.length == 1) {
    document.getElementById('npWhichCate').style.display = ''
    document.getElementById('npCate').style.display = 'none'
    document.getElementById('np2Cate').style.display = 'none'
    document.getElementById('np3Cate').style.display = 'none'
    document.getElementById('relCate').style.display = 'none'
    document.getElementById('extCate').style.display = 'none'
    document.getElementById('queCate').style.display = 'none'
    if(np1_1.length == 1) {
      document.getElementById('npWhichCate').style.display = 'none'
      document.getElementById('npCate').style.display = ''
      document.getElementById('np2Cate').style.display = 'none'
      document.getElementById('np3Cate').style.display = 'none'
      document.getElementById('relCate').style.display = 'none'
      document.getElementById('extCate').style.display = ''
    }else if (np1_2.length == 1) {
      document.getElementById('npWhichCate').style.display = 'none'
      document.getElementById('npCate').style.display = 'none'
      document.getElementById('np2Cate').style.display = 'none'
      document.getElementById('np3Cate').style.display = 'none'
      document.getElementById('relCate').style.display = ''
      document.getElementById('extCate').style.display = ''
    }
  }else if (what_area1.length == 1) {
    document.getElementById('npWhichCate').style.display = 'none'
    document.getElementById('npCate').style.display = ''
    document.getElementById('np2Cate').style.display = 'none'
    document.getElementById('np3Cate').style.display = 'none'
    document.getElementById('relCate').style.display = 'none'
    document.getElementById('extCate').style.display = 'none'
    document.getElementById('queCate').style.display = 'none'
  }else if(what_area2.length == 1){
    document.getElementById('npWhichCate').style.display = 'none'
    document.getElementById('npCate').style.display = 'none'
    document.getElementById('np2Cate').style.display = 'none'
    document.getElementById('np3Cate').style.display = 'none'
    document.getElementById('relCate').style.display = ''
    document.getElementById('extCate').style.display = 'none'
    document.getElementById('queCate').style.display = 'none'
    if (rel2.length == 1 || rel4.length == 1){
      document.getElementById('extCate').style.display = ''
    }
  }else if (how_many.length == 1) {
    document.getElementById('npWhichCate').style.display = ''
    document.getElementById('npCate').style.display = 'none'
    document.getElementById('np2Cate').style.display = 'none'
    document.getElementById('np3Cate').style.display = 'none'
    document.getElementById('relCate').style.display = 'none'
    document.getElementById('extCate').style.display = 'none'
    document.getElementById('queCate').style.display = 'none'
    if(np1_1.length == 1) {
      document.getElementById('npWhichCate').style.display = 'none'
      document.getElementById('npCate').style.display = 'none'
      document.getElementById('np2Cate').style.display = 'none'
      document.getElementById('np3Cate').style.display = ''
      document.getElementById('relCate').style.display = 'none'
      document.getElementById('extCate').style.display = ''
    }else if (np1_2.length == 1) {
      document.getElementById('npWhichCate').style.display = 'none'
      document.getElementById('npCate').style.display = 'none'
      document.getElementById('np2Cate').style.display = 'none'
      document.getElementById('np3Cate').style.display = 'none'
      document.getElementById('relCate').style.display = ''
      document.getElementById('extCate').style.display = ''
    }
  }else if (from_where.length == 1) {
    document.getElementById('npWhichCate').style.display = 'none'
    document.getElementById('npCate').style.display = 'none'
    document.getElementById('np2Cate').style.display = 'none'
    document.getElementById('np3Cate').style.display = ''
    document.getElementById('relCate').style.display = 'none'
    document.getElementById('extCate').style.display = 'none'
    document.getElementById('queCate').style.display = 'none'
  }else if (workspace.getAllBlocks(false).length == 0) {
    hideCategory()
  }

  if(np4.length == 1 & (np2.length >= 1 | np4_from.length >= 1)){
    np4Category()
  }else if (np3.length == 1) {
    np2Category()
  }else if (np2.length >= 1) {
    np2Category()
  }

  if (rel1.length >= 1 | rel2.length >= 1) {
    rel1Category()
    if (np4.length == 1){
      np4Category()
    }
  }
}
