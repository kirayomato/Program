#include<unordered_map>
class Trie {
public:
    char chr;
    unordered_map<char, Trie*> mp;
    Trie(char s=' ')
    {
        chr = s;
    }
    void insert(string word)
    {
        Trie* t;
        if (word == "")
        {
            t = new Trie();
            mp[' '] = t;
            return;
        }
        if (mp.find(word[0]) == mp.end())
        {
            t = new Trie(word[0]);
            mp[word[0]] = t;
        }
        else
            t = mp[word[0]];
        t->insert(word.substr(1, word.size()));
    }
    bool search(string word)
    {
        Trie* t = this;
        for (char c : word)
        {
            if (t->mp.find(c) == t->mp.end())
                return false;
            else
                t = t->mp[c];
        }
        if (t->mp.find(' ') != t->mp.end())
            return true;
        return false;
    }
    bool startsWith(string prefix) {
        Trie* t = this;
        for (char c : prefix)
        {
            if (t->mp.find(c) == t->mp.end())
                return false;
            else
                t = t->mp[c];
        }
        return true;
    }
};
