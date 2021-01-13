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