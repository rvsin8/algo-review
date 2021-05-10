//River Sizes
//Graphs

//my understanding

//time complexity 

//space complexity 

function riverSizes(matrix) {
    const sizes = [];
    const visited = matrix.map(row => row.map(value => false));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (visited[i][j]) continue;
            traverseNode(i, j, matrix, visited, sizes);
        }
    }
    return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
    let currentRiverSize = 0;
    const nodesToExplore = [[i,j]];
    while (nodesToExplore.length) {
        const currentNode = nodesToExplore.pop();
        i = currentNode[0];
        j = currentNode[1];
        if (visited[i][j]) continue;
        visited[i][j] = true;
        if (matrix[i][j] === 0) continue;
        currentRiveSize++;
        const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
        for (const neighbor of unvisitedNeighbors) {
            nodesToExplore.push(neighbor);
        }
    }
    if (currentRiverSize > 0) sizes.push(currentRiverSize);
}