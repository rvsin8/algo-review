//Branch Sums
//Binary Tree

//notes
//branch sums is the sum of all the values of a branch in a binary tree
//a branch is a path that starts at the root node and ends at one of the leaf nodes (nodes at the very bottom of the tree)
//we are going to be calling a recursive function on each node of the tree starting at the root node that calcs the branch sum of the tree rooted at that node
//we keep track of a running sum from the nodes above us
//our root node has 2 children nodes, we would call a recursive call on each of these nodes while keeping track of the running sum 1 and 1
//we are keeping going down with the running sum being 3 and 4
//again call it recursively with the running sum being now 7, 8, 10, 11
//running sum 15, 16, 18 once we hit the leaf nodes
//we will pass down an array and fill it up once we hit the leaf nodes [15,16,18,10,11]

//time complexity
//O(N) because we have to traverse through all of the nodes to account for each of their values, at every node we are just doing constant time operations like adding or checking if nodes exists

//space complexity
//recursively, we will have multiple calls on the callstack O = Log(N) bc you are eliminating half of the nodes as you move around
