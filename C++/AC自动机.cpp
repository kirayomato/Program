int trie[N][26], fail[N], cnt[N];
int num = 0;
vector<vector<int>> son;
vector<vector<int>> idx;
int add(string &word)
{
	int root = 0;
	FA(c, word)
	{
		int j = c - 'a';
		if (!trie[root][j])
			trie[root][j] = ++num;
		root = trie[root][j];
	}
	return root;
}
void build()
{
	queue<int> q;
	F(0, i, 26)
	if (trie[0][i])
		q.emplace(trie[0][i]);
	while (!q.empty())
	{
		int root = FR(q);
		F(0, i, 26)
		{
			if (trie[root][i])
			{
				fail[trie[root][i]] = trie[fail[root]][i];
				q.emplace(trie[root][i]);
			}
			else
				trie[root][i] = trie[fail[root]][i];
		}
	}
}
void search(string &word)
{
	int root = 0;
	int n = word.size();
	F(0, i, n)
	{
		root = trie[root][word[i] - 'a'];
		cnt[root]++;
		idx[root].eb(i);
	}
}
void dfs(int root)
{
	FA(i, son[root])
	{
		if (i)
		{
			dfs(i);
			cnt[root] += cnt[i];
			FA(j, idx[i])
			idx[root].eb(j);
		}
	}
}
vector<int> mp;
void solve()
{
	cin >> n;
	vector<string> words;
	F(0, i, n)
	{
		cin >> s;
		words.eb(s);
		mp.eb(add(s));
	}
	build();
	son.resize(num + 1);
	idx.resize(num + 1);
	F(0, i, num + 1)
	son[fail[i]].eb(i);
	cin >> s;
	search(s);
	dfs(0);
	F(0, i, n)
	{
		cout << words[i] << ": ";
		FA(j, idx[mp[i]])
		{
			cout << j - words[i].size() + 1 << " ";
		}
		cout << "\n";
	}
}
