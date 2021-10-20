class Trie {
    char chr;
    unordered_map<char, Trie*> mp;
public:
    Trie(char s = 0)
    {
        chr = s;
    }
    void add(string& word, int pos)
    {
        Trie* t;
        if (word == "" || pos >= word.size())
        {
            t = new Trie();
            mp[0] = t;
            return;
        }
        if (mp[word[pos]] == nullptr)
        {
            t = new Trie(word[pos]);
            mp[word[pos]] = t;
        }
        else
            t = mp[word[pos]];
        t->add(word, pos + 1);
    }
    void insert(string word)
    {
        this->add(word, 0);
    }
    Trie* searchprefix(string prefix, Trie* t)
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
        return searchprefix(prefix, this) != nullptr;
    }
    bool search(string word)
    {
        Trie* t = searchprefix(word, this);
        if (t != nullptr && t->mp[0] != nullptr)
            return true;
        return false;
    }
};
