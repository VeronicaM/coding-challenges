const common = require('../../../common/utils.js');
const testData = require('./testData/index.js');

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
    if (tree.getNode() === null) {
        return;
    } else {
        const leftTree = [].concat(sortTree(tree.getLeftTree())).concat(tree.getNode());
        const rightTree = [].concat(sortTree(tree.getRightTree()));
        return [...leftTree, ...rightTree].filter(Boolean);
    }
}

common.printTestResult(sortTree, testData.testTrees, 'sorted tree', 'array');
