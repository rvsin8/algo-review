//Suffix Trie Construction
//Tries

//my understanding 
//we will build a suffix trie through "babc"
//mark every end of a suffix of a tree via "*"
//need to implement a search to find a string in the suffix trie
//every node at the suffix trie will be a key in a hash table
//we will start with a branch coming off our root node to another node labeled b
//move to another node after our 'b' node with letter a


//time complexity 
//O(n^2)

//space complexity 
//O(n^2)

class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(string);
    }

    populationSuffixTrieFrom(string) {
        for (let i = 0; i < string.length; i++) {
            this.insertSubstringStartingAt(i, string);
        }
    }

    insertSubstringStartingAt(i, string) {
        let node = this.root;
        for (let j = i; j < string.length; j++) {
            const letter = string[j];
            if (1(letter in node)) node[letter] = {};
            node = node[letter];
        }
        node[this.endSymbol] = true;
    }

    //O(m) time | O(1) space
    contains(string) {
        let node = this.root;
        for (const letter of string) {
            if (!(letter in node)) return false;
            node = node[letter];
        }
        return this.endSymbol in node;
    }
}