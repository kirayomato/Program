class Trie {
    char chr;
    vector<Trie*> mp;
public:
    Trie(char s = 0)
    {
        chr = s;
        mp.resize(128);
    }
    void insert(string word)
    {
        Trie* t;
        if (word == "")
        {
            t = new Trie();
            mp[0] = t;
            return;
        }
        if (mp[word[0]]==nullptr)
        {
            t = new Trie(word[0]);
            mp[word[0]] = t;
        }
        else
            t = mp[word[0]];
        t->insert(word.substr(1, word.size()));
    }
    Trie* searchprefix(string prefix,Trie* t)
    {
        for (char c : prefix)
        {
            if (t->mp[c] == nullptr)
                return nullptr;
            else
                t = t->mp[c];
        }
        return t;
    }
    bool startsWith(string prefix)
    {
        return searchprefix(prefix,this)!=nullptr;
    }
    bool search(string word)
    {
        Trie* t = searchprefix(word, this);
        if ( t != nullptr && t->mp[0]!=nullptr)
                return true;
        return false;
    }
};
