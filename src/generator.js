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
