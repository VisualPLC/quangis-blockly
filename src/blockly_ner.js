let bresult = {};
let topoRel = ['inside', 'within', 'contain', 'covered by',
    'affected by', 'overlap with', 'intersected with',
    'outside', 'away from'];
let time_unit = ['hour','hours','minute','minutes', 'second', 'seconds'];
let aggregate = ['average', 'median', 'total'];
let extrema = ['fewest', 'lowest', 'smallest', 'most', 'most popular', 'most intense', 'biggest', 'highest', 'largest', 'fastest','nearest', 'closest to'];
let comparison = ["equal to", "larger than", "smaller than", "higher than", "lower than", "more than", "less than", "more than or equal to", "less than or equal to", "older than", "younger than"];
//let extredist = ['nearest'];
// let blockTypes = ['noun_phrase2','noun_phrase3','noun_phrase4','relationship1','relationship2','relationship3','relationship4','relationship5','extent','support','grid1','grid2','dist_band',
//     'temporalextent1','temporalextent2'];
// let reminderTypes = ['np_reminder','rel_reminder','extent_reminder','temextent_reminder'];

function write_obj(key, txt){
    bresult[key] = bresult[key] || [];
    bresult[key].push(txt.trim());
}

function checkTag(cur_txt){
    if(extrema.includes(cur_txt)){
        write_obj('extrema',cur_txt);
    }else if(aggregate.includes(cur_txt)){
        write_obj('aggregate',cur_txt);
    }else if(topoRel.includes(cur_txt)) {
        write_obj('topoRel', cur_txt);
    }else if(comparison.includes(cur_txt)) {
        write_obj('comparison', cur_txt);
    }
}

function block_ner() {

    bresult.question = ques_generator();

    let cur_blocks= getAllBlocksList();
    console.log('cur_blocks',cur_blocks);

    let uni_blocks = [...new Set(cur_blocks)];
    uni_blocks.forEach((block) => {
        let instances = workspace.getBlocksByType(block);
        if (block == 'noun_phrase2') {
            instances.forEach((eachnp2) => {
                let eachnp2_txt = eachnp2.getFieldValue('adj_num');
                checkTag(eachnp2_txt);
            });
        }else if (block == 'noun_phrase3') {
            instances.forEach((eachnp3) => {
                let eachnp3_txt = eachnp3.getFieldValue('adj_aggre');
                checkTag(eachnp3_txt);
            });
        }else if (block == 'noun_phrase4') {
            instances.forEach((eachnp4) => {
                let eachnp4_txt = eachnp4.getFieldValue('aggregate');
                checkTag(eachnp4_txt);
            });
        }else if (block == 'relationship1') {
            instances.forEach((eachr1) => {
                let eachr1_txt = eachr1.getFieldValue('topology');
                checkTag(eachr1_txt);
            });
        }else if (block == 'relationship2') {
            instances.forEach((eachr2) => {
                let eachr2_topo = eachr2.getFieldValue('r2_topology');
                checkTag(eachr2_topo);
                let r2_unit = eachr2.getFieldValue('r2_buffer_unit');
                let r2_entity = eachr2.getFieldValue('r2_number') + ' ' + r2_unit;
                if(time_unit.includes(r2_unit)){
                    write_obj('time',r2_entity);
                }else{
                    write_obj('quantity',r2_entity);
                }
            });
        }else if (block == 'relationship3') {
            instances.forEach((eachr3) => {
                let eachr3_txt = eachr3.getFieldValue('r3_comparison');
                checkTag(eachr3_txt);
                let r3_entity = eachr3.getFieldValue('r3_number') + ' ' + eachr3.getFieldValue('r3_unit'); // todo?: older than 65 is date
                write_obj('quantity',r3_entity);
            });
        }else if (block == 'relationship4') {
            instances.forEach((eachr4) => {
                let eachr4_txt = eachr4.getFieldValue('r4_comparision');
                checkTag(eachr4_txt);
                let r4_entity = eachr4.getFieldValue('r4_number') + ' ' + eachr4.getFieldValue('r4_unit'); // todo?: older than 65 is date
                write_obj('quantity',r4_entity);
            });
        }else if (block == 'relationship5') {
            instances.forEach((eachr5) => {
                let eachr5_txt = eachr5.getFieldValue('r5_comparison');
                checkTag(eachr5_txt);
            });
        }else if (block == 'noun_phrase_sup'){
            let np_sup_coreC = workspace.getBlocksByType('noun_phrase_sup')[0].getFieldValue('np_sup_coreC');
            write_obj('sup_object',np_sup_coreC);
            bresult.replaceQ = bresult.question.replace('for each ' + np_sup_coreC, 'support').trim();
        }else if (block == 'grid1'){
            let grid1 = workspace.getBlocksByType('grid1');
            g1_parent = grid1[0].parentBlock_.type;
            if(g1_parent == 'support'){
                write_obj('sup_grid',grid1[0].toString());
                bresult.replaceQ = bresult.question.replace('for each ' + grid1[0].toString(), 'support').trim();
            }else{
                write_obj('grid',grid1[0].toString());
            }
        }else if (block == 'grid2') {
            let grid2 = workspace.getBlocksByType('grid2');
            g2_parent = grid2[0].parentBlock_.type;
            if(g2_parent == 'support'){
                write_obj('sup_grid', grid2[0].toString());
                bresult.replaceQ = bresult.question.replace('for each ' + grid2[0].toString(), 'support').trim();
            }else{
                write_obj('grid',grid2[0].toString());
            }
        }else if (block == 'dist_band') {
            let dist_band = workspace.getBlocksByType('dist_band')[0].toString();
            write_obj('sup_distBand', dist_band);
            bresult.replaceQ = bresult.question.replace('for each ' + dist_band, 'support').trim();
        }else if (block == 'extent') {
            let ext = workspace.getBlocksByType('extent');
            let extStr = ext[0].getFieldValue('toponymy')
            bresult.placename = [];
            bresult.placename = extStr.split(/,|and |the |in |of /).map(ele => ele.trim()).filter(Boolean); //extract placenames
            // where is the ski piste in Amsterdam => where is the ski piste extent
            in_extStr = 'in ' + extStr;
            of_extStr = 'of ' + extStr;
            if (ext[0].parentBlock_.type == 'support') {
                bresult.replaceQ = bresult.replaceQ.replace(in_extStr, 'extent').replace(of_extStr, 'extent').trim();
            }else{
                bresult.replaceQ = bresult.question.replace(in_extStr, 'extent').replace(of_extStr, 'extent').trim();
            }
        }else if (block == 'temporalextent1') {
            let temporalextent1 = workspace.getBlocksByType('temporalextent1')[0].toString();
            write_obj('temEx', temporalextent1.replace('in ',''));
            bresult.replaceQ = bresult.replaceQ.replace(temporalextent1, 'temporalEx').trim();
        }else if (block == 'temporalextent2') {
            let temporalextent2 = workspace.getBlocksByType('temporalextent2')[0].toString();
            write_obj('temEx', temporalextent2);
            bresult.replaceQ = bresult.replaceQ.replace(temporalextent2, 'temporalEx').trim();
        }
    });

    console.log('bresult',bresult);
    return bresult

}

function writeBresult(){
    // Convert the object to a JSON string
    let res;
    res = block_ner()

    const jsonString = JSON.stringify(res);

    // Create a new Blob object with the JSON string data
    const blob = new Blob([jsonString], {type: "application/json"});

    // Create a temporary URL for the blob object
    const url = URL.createObjectURL(blob);

    // Create a link element with the URL and add it to the document body
    const link = document.createElement('a');
    link.href = url;
    link.download = 'bresult.json';
    document.body.appendChild(link);

    // Simulate a click on the link element to trigger the file download
    link.click();

    // Remove the link element from the document body
    document.body.removeChild(link);

    // Revoke the temporary URL to free up memory
    URL.revokeObjectURL(url);
}
