//Breadth-First Search
//Graphs 

//my understanding
//harder than depth-first search to implement
//must know
//we are traversing a graph (this ex has a tree-like data structure with nodes in which each node has a name which is a letter in the alphabet and may have children nodes as well)
//write this graph in a breadth-depth first way, grab all the nodes and put them in an array and return that array
//the way bdf works, we want to traverse the graph level by level from the top level aka root level than go down levels
//dfs is different bc its branch by branch
//its difficult bc in code it is confusing
//we will be using another data structure in this called a queue which is a ds that follows the rule of first in first out - first thing we put in will be the first thing that comes out via array
//while the queue is not empty, we will pop it and make it our current node and put it in our final array
//then we add all the child nodes of A to the queue and then pop it via first in first out to the current nodes then to the array and we keep doing this to each child nodes
//when our queue is empty we can break out of our while loop

//time complexity
//O(v + e), v is the num of vertices and e is the num of edges
//in a graph you have vertices and edges
//vertices is the nodes (diff points in a graph)
//edges are the things that connect the nodes, lines btw A and B, etc.
//edges take into account how many children nodes there are

//space complexity
//O(v)
//we are storing an array of v nodes names

breadthFirstSearch(array){ //takes in an array
    const queue = [this]; //initialize our queue - javascript array; [this] is the root node
    while (queue.length > 0) { //while the length of the queue is greater than 0 (not empty) 
        const current = queue.shift();//let the current node be queue.shift where we implement FIFO
        array.push(current.name); //push it 
        for (const child of current.children) { //for every child in our node 
            queue.push(child); //append it
        }
    }
    return array; //once it done return the array

}

