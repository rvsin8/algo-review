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
            const letter = string[j];
            if (!(letter in node)) node[letter] = {};
            node = node[letter];
        }
        node[this.endSymbol] = true;
    }

    //searching O(m) time - m is the length of the string we are searching for | O(1) space we are not storing any other space
    contains(string) {
        let node = this.root;
        for (const letter of string) {
            if (!(letter in node)) return false;
            node = node[letter];
        }
        return this.endSymbol in node;
    }
}