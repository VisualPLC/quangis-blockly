function generator() {
    let question = '';

    const where = workspace.getBlocksByType("where");
    const what = workspace.getBlocksByType("what");
    const which = workspace.getBlocksByType("which");
    const what_area = workspace.getBlocksByType("what_area");
    const howmany = workspace.getBlocksByType("how_many");
    const fromwhere = workspace.getBlocksByType("from_where");

    //question words types
    // const qw_types = ["where","what","which","what_area","how_many","from_where"];
    // for (let i=0; i<=6 ; i++){
    //     let questwords = workspace.getBlocksByType(qw_types[i])[0].toString();
    //     if (questwords){
    //         question += questwords;
    //         console.log(question)
    //     }
    // }
    if (where){
        let questwords = where[0].toString();
        console.log('123');
        question += questwords;
        document.getElementById("questionDiv").innerHTML = question;
    }
    if (what){
        let questwords = what[0].toString();
        question += questwords;
        document.getElementById("questionDiv").innerHTML = question;
    }
    if (which){
        let questwords = which[0].toString();
        question += questwords;
        document.getElementById("questionDiv").innerHTML = question;
    }

}