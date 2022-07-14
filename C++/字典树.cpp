class Trie {
	char chr;
	vector<Trie*>mp = vector<Trie*>(27, nullptr);
public:
	Trie(char s = 0)
	{
		chr = s;
	}
	void add(string& word, int pos)
	{
		Trie* t;
		if (pos >= word.size())
		{
			t = new Trie();
			mp[0] = t;
			return;
		}
		if (mp[word[pos] - 'a' + 1] == nullptr)
		{
			t = new Trie(word[pos]);
			mp[word[pos] - 'a' + 1] = t;
		}
		else
			t = mp[word[pos] - 'a' + 1];
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
			if (t->mp[c - 'a' + 1] == nullptr)
				return nullptr;
			else
				t = t->mp[c - 'a' + 1];
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
