//River Sizes
//Graphs

//my understanding
//classic graph traversal 
//you are given a matrix aka 2d array, not an equal width and height
//contains 0 and 1, 0 is land and 1 is river 
//1's next to each other are rivers as well
//we have to return an array of all the sizes of river
//adjacent 1's do not count only horizontal and vertical 
//we need to keep track of all 1's so we should treat it as a graph
//if we treat this matrix as a graph we can treat every ele as a node 
//each node has a value 0 or 1 and each node has a neighboring node
//you can traverse this matrix and at every node we check its every value, if it has a value 1 we can apply either DFS or BFS to find its length
//whenever we find the value 1 we can start exploring its neighboring nodes and if that neighbor is also 1 so we do the same for that neighbor 
//you will xplore a bunch of nodes multiple times we need to improve this 
//we will keep track of a node we have visited and when we arrive to it again we just simply ignore it
//we can do explore them iteratively or recursively 
//we found another 1 so we increase the length to 2 and we explore that new 1 and find no other neighbor so the length we add to our final array is 2
//and so on we do this for every node

//time complexity 
//O(w*h) w is the length and h is the height of the matrix
//we visit every node at least once

//space complexity 
//O(w*h) we are going to building this auxillary data structure the same exact size 

function riverSizes(matrix) {
    const sizes = []; //initialize our sizes array that we will return in the end
    const visited = matrix.map(row => row.map(value => false)); //it will be the same size of our input matrix and every value will be a boolean 
    for (let i = 0; i < matrix.length; i++) { //iterate through the input matrix for i
        for (let j = 0; j < matrix[i].length; j++) { //for j
            if (visited[i][j]) continue; //if its visited at idx i and j then we just continue
            traverseNode(i, j, matrix, visited, sizes); //otherwise we call a helper function
        }
    }
    return sizes; //we return the sizes array
}

function traverseNode(i, j, matrix, visited, sizes) { //helper function
    let currentRiverSize = 0; //every potential river size begins with a length of 0
    const nodesToExplore = [[i,j]]; //apply DFS, declare an array of nodes we need to explore begininng with i and j
    while (nodesToExplore.length) { //while the length is not 0
        const currentNode = nodesToExplore.pop(); //the current node we pop out the final value in our array
        i = currentNode[0]; //i is idx 0
        j = currentNode[1]; //j is idx 0
        if (visited[i][j]) continue; //if i and j is truthy we want to continue
        visited[i][j] = true; //if they are not visited, we set them as visited 
        if (matrix[i][j] === 0) continue; //if we are dealing a piece of land we skip it
        currentRiveSize++; //update current river size by 1
        const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited); //explore its neighboring nodes another helper 
        for (const neighbor of unvisitedNeighbors) { 
            nodesToExplore.push(neighbor);
        }
    }
    if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
    const unvisitedNeighbors = [];
    if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
    if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
    if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
    if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
}