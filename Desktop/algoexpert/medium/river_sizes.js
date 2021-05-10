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