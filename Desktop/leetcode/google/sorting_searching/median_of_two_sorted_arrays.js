//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//
//Follow up: The overall run time complexity should be O(log (m+n)).
//
// 
//
//Example 1:
//
//Input: nums1 = [1,3], nums2 = [2]
//Output: 2.00000
//Explanation: merged array = [1,2,3] and median is 2.
//Example 2:
//
//Input: nums1 = [1,2], nums2 = [3,4]
//Output: 2.50000
//Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
//Example 3:
//
//Input: nums1 = [0,0], nums2 = [0,0]
//Output: 0.00000
//Example 4:
//
//Input: nums1 = [], nums2 = [1]
//Output: 1.00000
//Example 5:
//
//Input: nums1 = [2], nums2 = []
//Output: 2.00000
// 
//
//Constraints:
//
//nums1.length == m
//nums2.length == n
//0 <= m <= 1000
//0 <= n <= 1000
//1 <= m + n <= 2000
//-106 <= nums1[i], nums2[i] <= 106

//my understanding
//we need to concatenate the two lists to create one large array with all value using concat function
//we need to now sort every ele from lowest to highest
//we need to know if there is an even or odd amount of elements in the array, if its odd we know its the median val but if its even then we need tot ake the 2 num separating the lower and higher half we need to get their median value

function findMedianSortedArrays(arr1, arr2) {
    var concat = arr1.concat(arr2); //concat the array
    concat = concat.sort(function (a,b) {return a-b}); //js sort function and this will make sure its sorted in order
    var length = concat.length; //this length will let us know if this is an array with an odd or even num of integers/eles

    if (length % 2 == 1) { //if we divide the length by 2 and get a 1 its odd
        return concat[(length / 2) - .5]//5/2 = 2.5 - .5 = 2 so we look at idx 2
    } else {
        return (concat[length/2] + concat[(length / 2) - 1]) / 2 //upper boundary , lower boundary divided by 2
    }
}