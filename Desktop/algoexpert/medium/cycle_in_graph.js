//Cycle in Graph
//Graphs 

//my understanding 

//time complexity 
//O(v + e)

//space complexity 
//O(v)

function cycleInGraph(edges) {
    const numberOfNodes = edges.length;
    const visited = new Array(numberOfNodes).fill(false);
    const currentlyInStack = new Array(numberOfNodes).fill(false);
}