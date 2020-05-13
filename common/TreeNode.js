
class TreeNode {
    node = 0;
    leftTree = {}; // TreeNode
    rightTree = {}; // TreeNode

    constructor(node, leftTree, rightTree) {
        this.node = node;
        this.leftTree = leftTree;
        this.rightTree = rightTree;
    }

    getNode() {
        if (this) return this.node;

        return
    }

    getLeftTree() {
        return this.leftTree;
    }

    getRightTree() {
        return this.rightTree;
    }
};

module.exports = {
    TreeNode
};