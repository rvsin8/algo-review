//Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
//
//Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
//
// 
//
//Example 1:
//
//Input: num1 = "2", num2 = "3"
//Output: "6"
//Example 2:
//
//Input: num1 = "123", num2 = "456"
//Output: "56088"

//my understandings
//we need to solve this but multiplying the two values until we get two intermediate values and add them up and get the final result
//we want to reuse the intermediate space

var multiply = function(num1, num2) {
    if(num1== 0 || num2==0){
        return "0";
    }
    var sum = [];
    for(i = 0; i < num1.length; i++){
        for(j = 0; j < num2.length; j++){
            if(sum[i+j] == undefined){
                sum[i+j] =num1[i]*num2[j];
            }else{
                sum[i+j] += num1[i]*num2[j];
            }
        }
    }
    
    sum.reverse();
    for(let i = 0; i< sum.length; i++){
        if(sum[i] > 9){          
            if(sum[i+1] == undefined){
                sum[i+1] = Math.floor(sum[i] / 10);
            }else{
                sum[i+1] += Math.floor(sum[i] / 10);
            }
           sum[i] = sum[i] % 10; 
        }
    }
    return sum.reverse().join("");
};