//Invert Binary Tree
//Binary Tree

//my understanding
//solution are elegant but stump a lot of people
//gives us a binary tree, every node has a value integer value and every node has 0 1 or 2 children nodes
//invert this tree
//swap the left and right nodes
//iterative solution deals with like a breadth search first algo
//we can also do it recursively 
//we want to initialize a queue bc we want to traverse it level by level from root to the children - level by level 
//traverse in breadth first search manner
//we start at 1 and we will swap the two child nodes 
//need to watch video for visuals
//time O(N) n id the nodes in our tree, we explore every node 
//space O(N) we add every node to our queue 

//time complexity
//O(n)

//space complexity 
//O(d)

function invertBinaryTree(tree) {
    if (tree === null) return;
    swapLeftAndRight(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}

function swapLeftAndRight(tree) {
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}

