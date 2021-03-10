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

        
    }
}