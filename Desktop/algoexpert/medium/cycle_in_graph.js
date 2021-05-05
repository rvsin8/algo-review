//Cycle in Graph
//Graphs 

//my understanding 
//we are given an input graph and it is going to be represented by an adjacency list
//our graph will be directed and unweighted 
//you can only travel in one direction via edges for directed
//unweighted means they are all the same distances
//if we find any cycles in the graph we return true if not then return false
//no need to identify what cycle 
//a cycle is a closed chain of vertices that are connected together, the first node being the last node as well

//time complexity 
//O(v + e)

//space complexity 
//O(v)

function cycleInGraph(edges) {
    const numberOfNodes = edges.length;
    const visited = new Array(numberOfNodes).fill(false);
    const currentlyInStack = new Array(numberOfNodes).fill(false);

    for (let node = 0; node < numberOfNodes; node++) {
        if (visited[nodes]) continue;

        const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack);
        if (containsCycle) return true;
    }

    return false;
}

function isNodeInCycle(node, edges, visited, currentlyInStack) {
    visited[node] = true;
    currentlyInStack[node] = true;

    const neighbors = edges[node];
    for (const neighbor of neighbors) {
        if (!visited[neightbor]) {
            const containsCycle = isNodeInCycle(neighbor, edges, visited, currentlyInStack);
            if (containsCycle) return true;
        } else if (currentlyInStack[neighbor]) {
            return true;
        }
    }

    currentlyInStack[node] = false;
    return false;
}