//Array of Products
//Arrays

//notes
//our array will contain int > 2 so it will have at-least 3
//int can be positive 0, pos, neg and even dups
//the input and output have to be the same length 
//idx of the output cannot be the sum of that same idx of the input
//[5,1,4,2] --> [8,40,10,20] 8 --> 1 * 4 *2
//40 --> 5 * 4 * 2 and so on

//algorithm
//have to solve it without division
//traverse the array in a 
//we are going top be using two variables - leftrunningproduct and rightrunningproduct
//we can traverse through the array and get our leftrunningproduct in there
//then we will reverse and do the same for runningproduct and multiply by it from left product that is already in there
//[1,5,5,20] leftrunningproduct
//[[8,40,10,20] multiply it by right and get our final answer

//time complexity 
//time = O(N) //we are traversing right to left and left to right

//space complexity
//space = O(N) //rework this

function arrayOfProducts(array){
    const products = new Array(array.length).fill(1); //have a new array and declare every var in there with 1 and that is where we will store the left products

    let leftRunningProduct = 1; //declare left running product 
    for (let i = 0; i < array.length; i++) { //iterate through the array
        products[i] = leftRunningProduct; //replace each idx with the left running point
        leftRunningProduct *= array[i]; //calc the left running product and mult by the original array
    }

    let rightRunningProduct = 1; //declare right running point
    for (let i = array.length - 1; i > -1; i--){ //iterate reverse through the array to get the right running products
        products[i] *= rightRunningProduct; //replace each idx with the right running point
        rightRunningProduct *= array[i]; //calc the right running product with the left running points that was saved
    }
    return products; //return that array
}
