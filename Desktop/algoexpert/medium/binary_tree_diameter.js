//Binary Tree Diameter
//Binary Trees

//my notes
//binary tree is a ds in which each branch has two nodes at most or no nodes
//binary tree do not have to be ordered unlike bionary search tree
//a diameter of a binary tree diameter which is the longest path in the tree.
//the longest path does no have to go through the root

//write a function given the root node and return an integer giving us the diameter
//we will probably use a depth first traversal bc we want to go down deep in a branch to find the longest path
//we will return from our recursive two things - height and height
//we keep recursively calling it until we get to a one node tree
//1-3-7-8-9 diameter is 0 and height is 1
//longest path is 1 at the moment and height is 2 bc its 2 nodes
//going backwards 9-8-7 (2,3)
//6-5-4-3-7-8-9 (6,4) //this is super confusing

//time complexity 
//O(N) we visit every node once so its this, n is the num of nodes in the tree

//space complexity
//recursive calls

function binaryTreeDiameter(tree) {
    return getTreeInfo(tree).diameter; //return the helper method's diameter
}

function getTreeInfo(tree){
    if (tree === null) { //if there is none node we got to a leaf node
        return new TreeInfo(0,0); //return 0,0 for null values
    }

    const leftTreeInfo = getTreeInfo(tree.left); //left side of the tree
    const rightTreeInfo = getTreeInfo(tree.right); //right side oif the tree
.
    const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height; //height of left and right tree added together will give us the longest path from root
    const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter); //max diam so far from our recursive results --> max diameter from the left subtree and the max of the right subtree
    const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar); //we want to calculate the current diameter, the longest path in the root can be longer than the max diam
    const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height); //1 + max of the left and right subtree

    return new TreeInfo(currentDiameter, currentHeight); //return the treeinfo
}

class TreeInfo { //define this class
    constructor(diameter, height){
        this.diameter = diameter; //return diameter
        this.height = height; //return height
    }
}