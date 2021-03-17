//Suffix Trie Construction
//Tries

//my understanding 
//we will build a suffix trie through "babc"
//mark every end of a suffix of a tree via "*"
//need to implement a search to find a string in the suffix trie
//every node at the suffix trie will be a key in a hash table
//we will start with a branch coming off our root node to another node labeled b
//move to another node after our 'b' node with letter a until we get a branch like b-a-b-c-*
//go back to the root node, is a in the root node ? no just b so now we add a new branch start with the node 'a
//then we continue building that tree; a-b-c-*
//the next letter is b and we already have a b from the root node so now go down back to the b branch 
//next letter is c, does this b branch have a child ndoe c ? no so we add --> b-c-*
//lastly we arrive at c and our root node does not have a c --> c-*
//imagine we add a suffix "abd" we would just add d to a-b and get a-b-d-*
//"abdf" --> a-b-d-f-*
//if we are looking for babc is a suffix of our original string
//what about bab ? --> its a prefix not a suffix so we should not find it bc we can find bab but it has no asterik after


//time complexity for creation
//O(n^2) n is the length of the input string we do a double for loop bc we iterate through the suffix's and then their characters
//we are performing constant time operations

//space complexity for creation
//O(n^2) 

class SuffixTrie {
    constructor(string) {
        this.root = {}; //hash table
        this.endSymbol = '*'; //asteriks at the end of every suffix
        this.populateSuffixTrieFrom(string); //implement this in the bottom for creation
    }

    populationSuffixTrieFrom(string) { 
        for (let i = 0; i < string.length; i++) { //go through the string
            this.insertSubstringStartingAt(i, string); //helper method
        }
    }

    insertSubstringStartingAt(i, string) { //inserts a string into our tree
        let node = this.root; //node variable, green arrow that will point to a node
        for (let j = i; j < string.length; j++) { //iterate through all char in our substr
            const letter = string[j]; //represent our second green arrow
            if (!(letter in node)) node[letter] = {}; //if the letter is not in the current node then we have an empty hash
            node = node[letter]; //can be an existing node or one we just created
        }
        node[this.endSymbol] = true; //end of a string is true
    }

    //searching O(m) time - m is the length of the string we are searching for | O(1) space we are not storing any other space
    contains(string) { //to search for a suffix
        let node = this.root; //start at root
        for (const letter of string) { //dont need to track indices
            if (!(letter in node)) return false; //if the letter is not in node then return false
            node = node[letter]; //update the node and keep traversing down
        }
        return this.endSymbol in node; //to make sure we are dealing with a string in the suffix tree and see if the asteriks is in that suffix to make sure it is a valid string we found
    }
}