//Find Kth Largest Value In BST
//Binary Search Tree

//my understanding 

//time complexity 

//space complexity 

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo {
    constructor(numbeOfNodesVisited, latestVisitedNodeValue) {
        this.numbeOfNodesVisited = numbeOfNodesVisited;
        this.latestVisitedNodeValue = latestVisitedNodeValue;
    }
}

function findKthLargestValueInBst(tree, k) {
    const treeInfo = new TreeInfo(0, -1);
    reverseInOrderTraverse(tree, k, treeInfo);
    return treeInfo.latestVisitedNodeValue;
}

