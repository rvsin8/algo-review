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
//O(n) n is the nodes in our tree, we explore every node 

//space complexity 
//O(d) d for the depth of our tree can also be log(n) //look into more details

//recursive solution
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

//iterative solution 
function invertBinaryTree(tree) {
    const queue = [tree]; //an array that holds our root node
    while (queue.length) { //as long as the queue is not empty
        const current = queue.shift();  //our current node will be the first node in the queue which follows a first in first out rule
        if (current === null) continue; //if our current node is none aka leaf node
        swapLeftAndRight(current); //otherwise call our helper function 
        queue.push(current.left); //we want to add its children nodes to the queue
        queue.push(current.right); //we want to add its children nodes to the queue
    }
}

function swapLeftAndRight(tree) { //swap helper function
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}