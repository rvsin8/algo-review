//Validate Three Nodes
//Binary Search Trees

//my understanding

//time complexity 

//space complexity

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    if (isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo);
    if (isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo);

    return false;
}