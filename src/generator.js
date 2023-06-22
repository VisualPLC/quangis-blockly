const hintWords = ["noun_phrases", "relationships_", "extent_", "spatial_extent", "temporal_extent"];
// const removehintWords = (str, arr) => {
//     return arr.reduce((acc, val) => {
//         const regex = new RegExp(` ${val}`, "g");
//         return acc.replace(regex, '');
//     }, str);
// };

function removehintWords (str, arr){
    return arr.reduce(myFunc, str)
}

function myFunc (acc, val) {
    const regex = new RegExp(` ${val}`, "g");
    return acc.replace(regex, '')
}

function ques_generator() {
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

    //get the types of relationship blocks used in the workspace and deduplicate them
    var relBlocks = [...new Set(getAllBlocksList())].filter(function(block) {
        return block.startsWith('relationship');
    });
    //if multiple (sub)conditions, add " and " between the last one and the second last one, and add a comma between the rest.
    let rel_noaux = ['relationship4', 'relationship5'];
    relBlocks.forEach((block) => {
        let instances = workspace.getBlocksByType(block);
        instances.forEach((relBlock) => {
            let nextBlock = relBlock.getNextBlock();
            if(nextBlock != null && nextBlock.getNextBlock() != null){
                let relBlock_txt = removehintWords(relBlock.toString(), hintWords);
                question = question.replace(relBlock_txt, relBlock_txt + ', ');
                document.getElementById("questionDiv").innerHTML = question;
            }else if(nextBlock != null && nextBlock.getNextBlock() == null && (rel_noaux.includes(nextBlock.type) || nextBlock.getFieldValue('subcon_aux') == "")){
                let relBlock_txt = removehintWords(relBlock.toString(), hintWords);
                question = question.replace(relBlock_txt, relBlock_txt + ' and ');
                document.getElementById("questionDiv").innerHTML = question;
            }
        })
    })

    return question
}
