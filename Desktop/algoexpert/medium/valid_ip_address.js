//Valid IP Address
//Strings

//my understanding 
//given a input string that contains digits and be at most length 12
//we need to see how many IP address we can create with the string 
//a valid IP address is one where we can insert any three periods in the string
//has to have 3 periods
//create 4 sections and must be num values btw 0-255
//cannot lead with 0 for example no 192.168.00.1 but can have 192.168.0.1
//has to have at-least 4 digits and cannot pass 12 digits
//return an empty list if criteria is not met
//solution is easy to come up with but hard to code
//we see where we cna put periods and see if the string is valid afterwards
//we need to check first section and see if its valid and in the range and then we store it and continue on
//we can only place these periods in specific places bc we dont want it to be too many or too less
//so 1.9.21.680 is invalid bc 680 > 255
//1.9.216.80 is valid so we got one valid IP address
//we need to move the first two periods bc they can be in other positions
//1.92.16.80 is a valid IP address
//now we got every possible options for 1.
//no we try 19.21.6.80 is a valid option 
//19.21.68.0 is also valid 
//so on 

//time complexity 
//O(1) the size will be at most 12 and our cpu takes 32 bits so we will only generate 2^32 --> O(2^32) will be O(1)
//we can only represent 0-255 --> 256 which is 8 bits and 8 * 4periods = 32 bits
//idk if i chatted just now

//space complexity 
//O(1)

function validIPAddresses(string) {
    const ipAddressesFound = []; //our array we store our valid IP address in

    for (let i = 0; i < Math.min(string.length, 4); i++) { //we use 4 as the minimum so we can see 1-4 pos and we have math.min for idx error
        const currentIPAddressParts = ['', '', '', '']; //stores an empty list, it has 4 strings in it - keeps track our ip address

        currentIPAddressParts[0] = string.slice(0,i); //define first part of our IP Address
        if (!isValidPart(currentIPAddressParts[0])) continue; //if it not valid then we continue 

        for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) { //second period with another for loop, we put the period one position after the first one and we have math.min for idx error
            currentIPAddressParts[1] = string.slice(i,j); //second part of our ip address, idx i is our first period and j is our second period
            if (!isValidPart(currentIPAddressParts[1])) continue; //if it is not valid then continue 

            for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) { //period 3 same as above
                currentIPAddressParts[2] = string.slice(j,k);//these define our third and fourth section
                currentIPAddressParts[3] = string.slice(k); //recheck this

                if (isValidAtPosition(currentIPAddressParts[2]) && isValidPart(currentIPAddressParts[3])) { //if period 3 and 4 are valid
                    ipAddressesFound.push(currentIPAddressParts.join('.')); //add this to our solutions array
                }
            }
        }


    }
    return ipAddressesFound; //return our final answer
}

function isValidPart(string) { //helper method for valid ip addresses
    const stringAsInt = parseInt(string); //convert it as a int so we know if its btw 0-255
    if (stringAsInt > 255) return false; //if is greater than 255 return false

    return string.length === stringAsInt.toString().length; //return the string version and get rid of any leading 0's when we do this conversion
}