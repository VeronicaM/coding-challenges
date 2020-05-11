const common = require('../../../common/utils.js');
const utils = require('./testData/index.js');

/* 
 *  Arguments: tree: TreeNode
 *  
 *  returns array representing sorted node values
 * 
 * eg. 
 *  tree =   5
 *        4    10  
 *      3     6  11
 *    2
 * sortTree(tree) 
 * returns [ 2, 3, 4, 5, 6, 10, 11 ]
*/

function sortTree(tree) {
    return []
}

// testing logs
for (let i = 0; i <= 5; i++) {
    console.log(sortTree(utils.buildTree(i)));
}