//Find Kth Largest Value In BST
//Binary Search Tree

//my understanding 
//we get two inputs, the first one is the root node of our bt and another integer k
//k=3 --> 17 bc its the third largest value
//all our nodes in our binary search tree will be represented by a class and our nodes will have a left and right node and a value
//K will always be <= to the total nodes
//brute force will lead to O(n) time and space
//we can look at the inorder traversal and find the k highest
//in order-traversal --> we go left, visit the node and then right
//15 is root so we go left to 5 then left to 2 and then left to 1 and there is no more node so we add 1 to the array --> [1]
//then we go to node 2 we add and then we go to the right to 3 and add --> [1,2,3]
//back up to 5 --> [1,2,3,4,5] and we go right and add the second 5 --> [1,2,3,4,5,5]
//back up to `15 our root node --> [1,2,3,4,5,5,15] and we go right and so on until we have [1,2,3,4,5,5,15,17,20,22]
//an inorder traversal on a binary search tree will give you an ordered list so its easy to fint he kth highest node
//this solution is O(N) space and time bc we need to traverse through every node in our bst

//my solution 


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