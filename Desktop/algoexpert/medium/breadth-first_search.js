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
//then we add all the child nodes of A to the queue and then pop it out to the current nodes then to the array and we keep doing this to each child nodes

