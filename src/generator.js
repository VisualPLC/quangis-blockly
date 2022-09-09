import * as Blockly from 'blockly';

const hintWords = ["noun_phrases", "relationships_", "extent_", "spatial_extent", "temporal_extent"];
const removehintWords = (str, arr) => {
    return arr.reduce((acc, val) => {
        const regex = new RegExp(` ${val}`, "g");
        return acc.replace(regex, '');
    }, str);
};

export function ques_generator(workspace) {
    let question = '';

    const where = workspace.getBlocksByType("where");
    const what = workspace.getBlocksByType("what");
    const which = workspace.getBlocksByType("which");
    const what_area1 = workspace.getBlocksByType("what_area1");
    const what_area2 = workspace.getBlocksByType("what_area2");
    const how_many = workspace.getBlocksByType("how_many");
    const from_where = workspace.getBlocksByType("from_where");

    if (where.length == 1){
        let wherewords = where[0].toString();
        question += wherewords;
        question = removehintWords(question, hintWords);
        document.getElementById("questionDiv").innerHTML = question;
    }else if(what.length == 1){
        let whatwords = what[0].toString();
        question += whatwords;
        question = removehintWords(question, hintWords);
        document.getElementById("questionDiv").innerHTML = question;
    }else if(which.length == 1){
        let whichwords = which[0].toString();
        question += whichwords;
        question = removehintWords(question, hintWords);
        document.getElementById("questionDiv").innerHTML = question;
    }else if(what_area1.length == 1){
        let areawords = what_area1[0].toString();
        question += areawords;
        question = removehintWords(question, hintWords);
        document.getElementById("questionDiv").innerHTML = question;
    }else if(what_area2.length == 1){
        let areawords = what_area2[0].toString();
        question += areawords;
        question = removehintWords(question, hintWords);
        document.getElementById("questionDiv").innerHTML = question;
    }else if(how_many.length == 1){
        let manywords = how_many[0].toString();
        question += manywords;
        question = removehintWords(question, hintWords);
        document.getElementById("questionDiv").innerHTML = question;
    }else if(from_where.length == 1){
        let fromwords = from_where[0].toString();
        question += fromwords;
        question = removehintWords(question, hintWords);
        document.getElementById("questionDiv").innerHTML = question;
    }else{
        document.getElementById("questionDiv").innerHTML = question;
    }
}

Blockly.myFlyout={};
Blockly.MYFLYOUT_CATEGORY_NAME="flyout_extent";
Blockly.myFlyout.Blocks=[];

Blockly.gridFlyout={};
Blockly.GRIDFLYOUT_CATEGORY_NAME="flyout_grid";
Blockly.gridFlyout.Blocks=[];

export function disable_sup_grid(workspace){
  let elelist=[];
  workspace.getAllBlocks(true).forEach(element =>{
    elelist.push(element.type);
  });

  console.log(elelist)

  if (elelist.includes('support')) {
    Blockly.myFlyout.Blocks=[];
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
    let label1DOM= Blockly.Xml.textToDom('<label text="Spatial extent:"></label>');
    Blockly.myFlyout.Blocks.push(label1DOM);
    let extDOM = Blockly.Xml.textToDom('<block type="extent"><value name = "temext_shadow"><shadow type="temextent_reminder"></shadow></value></block>');
    Blockly.myFlyout.Blocks.push(extDOM);
    let label2DOM = Blockly.Xml.textToDom('<label text="Temporal extent:"></label>');
    Blockly.myFlyout.Blocks.push(label2DOM);
    let temDOM1 = Blockly.Xml.textToDom('<block type="temporalextent1"></block>');
    Blockly.myFlyout.Blocks.push(temDOM1);
    let temDOM2 = Blockly.Xml.textToDom('<block type="temporalextent2"></block>');
    Blockly.myFlyout.Blocks.push(temDOM2);
  }else{
    Blockly.myFlyout.Blocks=[];
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
    let label1DOM= Blockly.Xml.textToDom('<label text="Spatial extent:"></label>');
    Blockly.myFlyout.Blocks.push(label1DOM);
    let extDOM = Blockly.Xml.textToDom('<block type="extent"><value name = "temext_shadow"><shadow type="temextent_reminder"></shadow></value></block>');
    Blockly.myFlyout.Blocks.push(extDOM);
    let label2DOM = Blockly.Xml.textToDom('<label text="Temporal extent:"></label>');
    Blockly.myFlyout.Blocks.push(label2DOM);
    let temDOM1 = Blockly.Xml.textToDom('<block type="temporalextent1"></block>');
    Blockly.myFlyout.Blocks.push(temDOM1);
    let temDOM2 = Blockly.Xml.textToDom('<block type="temporalextent2"></block>');
    Blockly.myFlyout.Blocks.push(temDOM2);
  }

  if (elelist.includes('noun_phrase4') && (elelist.includes("grid1") || elelist.includes("grid2"))) {
    Blockly.gridFlyout.Blocks=[];
    let np2DOM = Blockly.Xml.textToDom('<block type="noun_phrase2"><value name = "adjcoreC_shadow"><shadow type="rel_reminder"></shadow></value></block>');
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

export function hideCategory(){
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

export function setCategory(workspace) {
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
  const rel3 = workspace.getBlocksByType("relationship3");
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
