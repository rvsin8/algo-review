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
//we should go the opposite way --> right visit left
//we will get an ordered that is in descending order 
//we start at 15 go to the right to 20 then to 22 and add 22 to our list --> [22]
//then go revisit 20 and add it --> [22,20]
//then go to the left and add 17 --> [22,20,17] our k=3 and we have found the third largest node
//when we find the kth node we return that value
//instead of keeping it stored in a list or array we want to just keep track of the num of nodes we visited and the value of the last node we visited 
//we will update these two variables --> visited, lastvalue
//#visited = 1 / lastvalue = 22 ; #visited = 2 / lastvalue = 20 ; visited = 3 / lastvalue = 17


//time complexity 
//O(h + k) even tho we may visit a few nodes or a lot of nodes we have to visit "h" amount of nodes
//h is for height and k is for the value

//space complexity 
//O(h) this is a recursive algo and we will have a stack that will keep track of all of the recrusive calls
//we will never have more than h recursive stacks bc thats the height of the bst

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class TreeInfo { //keep track of the numbers or nodes visited and our most recent node visited 
    constructor(numberOfNodesVisited, latestVisitedNodeValue) {
        this.numberOfNodesVisited = numberOfNodesVisited; //num of nodes visited 
        this.latestVisitedNodeValue = latestVisitedNodeValue; //latest visited node value
    }
}

function findKthLargestValueInBst(tree, k) {
    const treeInfo = new TreeInfo(0, -1); //instance of a class we will define
    reverseInOrderTraverse(tree, k, treeInfo); //will modify our class
    return treeInfo.latestVisitedNodeValue; //return the latest visited node aka our answer 
}

function reverseInOrderTraverse(node, k, treeInfo) {
    if (node === null || treeInfo.numbeOfNodesVisited >= k) return; //base case 

    reverseInOrderTraverse(node.right, k, treeInfo);
    if (treeInfo.numberOfNodesVisited < k) { //check if we have not visited k nodes
        treeInfo.numberOfNodesVisited++; //iterate
        treeInfo.latestVisitedNodeValue = node.value; //once found the value at the kth node
        reverseInOrderTraverse(node.left, k, treeInfo); //we found our answer
    }
}