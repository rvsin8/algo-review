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