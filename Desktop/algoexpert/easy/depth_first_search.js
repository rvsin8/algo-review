//Depth-first Search
//Graphs

//notes
//famous graph traversal algorithm, sibling of bst
//must-know
//we are traversing a graph (tree-like with nodes)
//each node might have some children nodes
//we are asked to traverse this graph in a depth first search way, as we traverse it we grab each letter at a node and return it in an array
//we are going to explore a branch and go as deep as we can before exploring the next branch

//algorithm
//we call the function on each node, maybe recursively
//whenever we are at a given node, we are going to add that node to the final array and for every children in that node we will call in the dfs on it and return the final array
