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
//a self loop can be a cycle as well
//an adjaceny list is just the outbound edges in a list
//[1,3],[2,3,4],[0],[],[2,5],[]]
//the first ele represents the vertex --> [1,3] 0 so it goes from 0 --> 3 and 0 --> 1
//vertex 1 is 1 --> 2, 1 --> 3, 1 --> 4
//and so on
//using DFS may help bc we can find ancestors and descendants 
//backedge - we already looked and discovered and is an ancestor which helps us know there is a cycle
//whenever we have an edge of a descendant to an ancestor 


//solution
//initialize two data structures --> 1. visited = [] 2. inStack = []
//if a node is in the stack, if we reach it from another node then we have a backedge 
//we will use dfs will return a true or false on a value and see if we find an edge that leads to a node already visited 


//time complexity 
//O(v + e) v for vertices and e for edges 
//when we have to do a dfs we have to consider all the vertex and edges

//space complexity 
//O(v) we hold our vertices in our two data structures 

function cycleInGraph(edges) {
    const numberOfNodes = edges.length; //length of our edges aka the number of our edges
    const visited = new Array(numberOfNodes).fill(false); //ds initialize to false value
    const currentlyInStack = new Array(numberOfNodes).fill(false); //ds initialize to false value

    for (let node = 0; node < numberOfNodes; node++) { //loop through all nodes
        if (visited[nodes]) continue; //if the node is visited 

        const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack); //if not visited we need to run a DFS, returns true/false
        if (containsCycle) return true; //if it contains a cycle we return true
    }

    return false; //if not then return false cause there was no cycles found
}

function isNodeInCycle(node, edges, visited, currentlyInStack) { //helper for DFS
    visited[node] = true; //mark the current node as visited 
    currentlyInStack[node] = true; //currently in stack in idx node is true as well

    const neighbors = edges[node]; //look at the neighbors 
    for (const neighbor of neighbors) { //loop through the neighbors 
        if (!visited[neightbor]) { //if not visited neighbor 
            const containsCycle = isNodeInCycle(neighbor, edges, visited, currentlyInStack); //run DFS
            if (containsCycle) return true; //if it does contain cycle then return true 
        } else if (currentlyInStack[neighbor]) { //else see if they are currently in the stack
            return true; //we found a backedge so return true
        }
    }

    currentlyInStack[node] = false; //making sure we ended the function call
    return false;
}