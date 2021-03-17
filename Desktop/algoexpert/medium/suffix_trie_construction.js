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