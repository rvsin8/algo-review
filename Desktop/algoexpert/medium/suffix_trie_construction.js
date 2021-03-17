//Suffix Trie Construction
//Tries

//my understanding 

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
}