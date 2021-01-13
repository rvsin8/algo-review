//Validate BST
//Binary Search Trees

//my notes
//this question will take in a data structure like a binary tree
//the data structure contains nodes or node values
//the question wants to know if the data structure is a bst
//a bst is a ds in which every node is strictly greater than its left values and a value less/equal of its right nodes


//divide and conquer approach
//go down each node and validate their left / right trees
//each node has a min / max value, for example for 5, min value would be 5 and 10 is the greatest val bc its the root node
//5 <= node.value < 10
//we might need a helper function that takes the parent node
//when we call it on the left side of the node we will change the min val to 5 and max to 10 which was the parent node 
//we will validate every subtree using this algo
// -inf <= node.value < 10

