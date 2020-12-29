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