//Longest Peak
//Arrays

//notes
//gives us an array of integers and asks us to return the length of the longest peak
//is a minimum of three consecutive integers that are positioned in such a way that they are strictly increasing until they hit some value and decrease
//[1,2,3,3,4,0,10,6,5,-1,-3,2,3] peak has a length of 6 bc 0 to (-3)
//can have multiple peaks but we need the longest one

//algorithm
//find all the peaks, compare their length and find the longest
//top be the tip of the peak, it has to be greater than the 2 adjacent values
//we go through every value, we start at the second value and end at the second to last value of the array
//2 is not the tip of a peak bc its not greater than 3
//3,3 is not the of a peak bc it is not greater than 3
//4 is because it is greater than both 3 and 0
//10 is because it is greater than 0 and 6
//the rest are not
//now we have to compare the peak lengths, from both of the peaks lets traverse to the left and right and see how long we can go without strictly decreasing
//once the num stop decreasing we found the edges
//[3,4,0] vs [0,10,6,5,-1-3], length 3 vs 6

//time complexity
//with no peaks its constant time
//with peaks its linear time O(N) bc if you have an array full of peaks - you stop at the points where the triangles meet
//you will never visit more than N nodes/elements in an array again
//we will go through the peaks twice, once when we iterate the first time and then again backwards when we find the peak

//space complexity
//we might need a lil bit auxillary space if we store all peaks
//can we do our two tasks in a single operation ? find peaks and compare lengths - yes we can
//we can record length in our first iteration, combining two tasks
//instead of storing the length we will just update it peak by peak
//O(1)space if we do this

function longestPeak(array){
    let longestPeakLength = 0; //set it to 0 we will add to this the length of our longest peak
    let i = 1; //we will start from idx at 1 bc we need to check the adjacent values to see if it indeed a peak

    while (i < array.length - 1) {
        const isPeak = array[i-1] < array[i] && array[i + 1] < array[i];
        if (!isPeak){
            i++;
            continue;
        }

        let leftIdx = i - 2;
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
        leftIdx --;
        }

        let rightIdx = i + 2;
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
        rightIdx ++;
        }

        const currentPeakLength = rightIdx - leftIdx - 1;
        longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
        i = rightIdx 
    }
}