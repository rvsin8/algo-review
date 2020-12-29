//Find Closest Value in BST
//binary Search Tree

//notes
//given a bst and a target int value, we find the closest value to the target value in the bst
//using logic similar to insertion and removal
//we want to initialize a variable that will keep track of the closest value in that bst and continualy update it
//in the beginning we will have the closest val equal to infinity, you can initialize it to whatever and this var will hold the best candidate for the closest value
//we start at the root node and compare this value to the target value
//before we compare, we compute the absolute diff with the current value and target value, |10-12| = 2, we do this bc is it smaller than the abs value of the curr and closest node
//is infinity smaller than 2, so 10 is closer to 12 than infinity is so we keep track of 10 now
//closest = 10, now we compare 10 to 12 - is it equal to 12 or less or greater bc bc all the num right from 10 is greater or equal too and the left side will have num less than 10 and farther away from 12
//now we go through the right side of the tree to 15, 15-12 = 3, 3 > 2 so that means 15 is farther away from 12 than 10 is so we do not update 
//so now we compare 12 and 15, we know that 12 is less than 15 so 22 is eliminated aka half the bst and on avg
//now we look at the left of 15, 13 - 12 = 1 and that is less than 2 so we update the bst to 13 as the current closest
//now we for the last time compare 13 to 12, 12 is smaller so we are going to eliminate the the right side of that bst and we are done

//edge case
//if we ever get to the point if the abs diff is 0, we can stop there.

//time complexity
//O(log(N)) where N is the number of nodes in our tree bc we are eliminating on avg half the tree every time we search a node
//worst case is O(N) is when we have a tree with one branch, we can't take adv of the bst property bc we can't eliminate half the tree, we would have to go down the entire tree


//space complexity
//recursive will be O(log(N)), we would be calling the findBST value multiple times and so we are adding frames on the call stack and using extra memory
//worst O(N) N if theres one branch so we call it on each and every node