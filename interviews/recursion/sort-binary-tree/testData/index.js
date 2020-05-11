
const TreeNode = require('../TreeNode.js').TreeNode;

const buildTree = (multiplierFactor = 1) => {
    const emptyNode = new TreeNode(null, null, null);

    const firstNodeLeftTree = new TreeNode(2 * multiplierFactor, emptyNode, emptyNode);
    const secondNodeLeftTree = new TreeNode(3 * multiplierFactor, firstNodeLeftTree, emptyNode);

    const leftTree = new TreeNode(4 * multiplierFactor, secondNodeLeftTree, emptyNode)

    const firstNodeRightTree = new TreeNode(6 * multiplierFactor, emptyNode, emptyNode);
    const secondNodeRightTree = new TreeNode(11 * multiplierFactor, emptyNode, emptyNode);

    const rightTree = new TreeNode(10 * multiplierFactor, firstNodeRightTree, secondNodeRightTree);

    return new TreeNode(5, leftTree, rightTree);
};

module.exports = {
    buildTree
};
