//Find Kth Largest Value In BST
//Binary Search Tree

//my understanding 

//time complexity 
//O(h + k)

//space complexity 
//O(h)

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo {
    constructor(numberOfNodesVisited, latestVisitedNodeValue) {
        this.numberOfNodesVisited = numberOfNodesVisited;
        this.latestVisitedNodeValue = latestVisitedNodeValue;
    }
}

function findKthLargestValueInBst(tree, k) {
    const treeInfo = new TreeInfo(0, -1);
    reverseInOrderTraverse(tree, k, treeInfo);
    return treeInfo.latestVisitedNodeValue;
}

function reverseInOrderTraverse(node, k, treeInfo) {
    if (node === null || treeInfo.numbeOfNodesVisited >= k) return;

    reverseInOrderTraverse(node.right, k, treeInfo);
    if (treeInfo.numberOfNodesVisited < k) {
        treeInfo.numberOfNodesVisited++;
        treeInfo.latestVisitedNodeValue = node.value;
        reverseInOrderTraverse(node.left, k, treeInfo);
    }
}