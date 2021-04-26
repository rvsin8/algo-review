//Validate Three Nodes
//Binary Search Trees

//my understanding
//we are given three inputs and these inputs are individual nodes contained in the same binary search tree
//these nodes are labeled node one, node two and node three 
//what we need to try to find out is if node 2 is btw node 1 and 3, are they ancestors of node 2
//if one is the descendant we need to check if the other is an ancestor
//return true if it is true
//these nodes will be unique and not null
//we have a bst which means that these nodes have a value, right, left property 
//a bst i ony valid if its left child is strictly less than its right child
//a descendant is a node that is in the ame branch as another node but is below it
//an ancestor is in the same branch but above it 

//solve this non-optimal
//use the bst way to search for values bc it is faster ypu can keep pruning half of a tree
//we can start at our value aka node 2 and look for node 1 in O(h) time and then node 3
//we find the descendant and then look for the ancestor 
//we are checking multiple ways to do this bc we can check if node 1 is the anc or des and if node 3 is the anc or des
//based on those result we return true or false
//O(h) time | O(1) space

//solve this optimal
//if we find node1 or node3 before node 2 we can terminate 
//as soon as we find node 2, and then we look for node 3 from node 2
//if we ever find node 3 or node1 from each other we know we need to stop
//search1 = 5
//search2 = 3
//we will check if search 1 has found search 3 or if search 2 have found search 1 and we stop
//if search 1 or 3 = none we also stop
//we compare each node to search 1 and search 3, we can look at node value = 2 and see it is less than search 1 which is 5 and we update search 1 to 2
//we compare search 1 to node 3 which is search 3, the left child of search 2 is now none 
//once we found node 2, we compare values until we hit node 3 and find out it is a descendant and we return true

//time complexity 
//O(d) it can be better or the same as O(h)
//it can be worse but this is the avg time complexity 

//space complexity
//O(1) there is no auxillary space we need

//non optimal solution 
function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    if (isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo); //if the second node pass is the descendant of the first and we will see if node 2 is a descendat of node 3
    if (isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo); //if node 3 is a descendant of node 2 and check if node 1 is the ancestor

    return false; //if not return false
}

function isDescendant(node, target) { //iteratively
    if (node !== null && node !== target) {
        node = target.value < node.value ? node.left : node.right; //look to the left is node value > greater than target value
    }
    return node === target; //we found the target node
}

//optimal solution 
function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    let searchOne = nodeOne;
    let searchTwo = nodeThree;

    while (true) {
        const foundThreeFromOne = searchOne === nodeThree;
        const foundOneFromThree = searchTwo === nodeOne;
        const foundNodeTwo = searchOne === nodeTwo || searchTwo === nodeTwo;
        const finishedSearching = searchOne === null && searchTwo === null;
        if (foundThreeFromOne || foundOneFromThree || foundNodeTwo || finishedSearching) {
            break;
        }
        if (searchOne !== null) {
            searchOne = searchOne.value > nodeTwo.value ? searchOne.left : searchOne.right;
        }
        if (searchTwo !== null) {
            searchTwo = searchTwo.value > nodeTwo.value ? searchTwo.left : searchTwo.right;
        }
    }
    const foundNodeFromOther = searchOne === nodeThree || searchTwo === nodeOne;
    const foundNodeTwo = searchOne === nodeTwo || searchTwo === nodeTwo;
    if (!foundNodeTwo || foundNodeFromOther) return false;

    return searchForTarget(nodeTwo, searchOne === nodeTwo ? nodeThree : nodeOne);
}

function searchForTarget(node, target) {
    while (node !== null && node !== target) {
        node = target.value < node.value ? node.left : node.right;
    }
    return node === target;
}
