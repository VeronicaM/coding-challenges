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

let sortedArray = [];

function sortTree(tree) {
    if (tree.getNode() === null) return;
    sortTree(tree.getLeftTree());
    sortedArray.push(tree.getNode());
    sortTree(tree.getRightTree());
    return sortedArray;
}

// testing logs
for (let i = 1; i <= 5; i++) {
    console.log(sortTree(utils.buildTree(i)));
    sortedArray = [];
}