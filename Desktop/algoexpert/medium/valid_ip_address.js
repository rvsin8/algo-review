//Valid IP Address
//Strings

//my understanding 

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
                
            }
        }


    }
}