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


//time complexity 
//O(1)

//space complexity 
//O(1)

function validIPAddresses(string) {
    const ipAddressesFound = [];

    for (let i = 0; i < Math.min(string.length, 4); i++) {
        const currentIPAddressParts = ['', '', '', ''];

        currentIPAddressParts[0] = string.slice(0,i);
        if (!isValidPart(currentIPAddressParts[0])) continue;

        for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
            currentIPAddressParts[1] = string.slice(i,j);
            if (!isValidPart(currentIPAddressParts[1])) continue;

            for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
                currentIPAddressParts[2] = string.slice(j,k);
                currentIPAddressParts[3] = string.slice(k);

                if (isValidAtPosition(currentIPAddressParts[2]) && isValidPart(currentIPAddressParts[3])) {
                    ipAddressesFound.push(currentIPAddressParts.join('.'));
                }
            }
        }


    }
    return ipAddressesFound;
}

function isValidPart(string) {
    const stringAsInt = parseInt(string);
    if (stringAsInt > 255) return false;

    return string.length === stringAsInt.toString().length;
}