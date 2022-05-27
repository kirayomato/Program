int trie[N][26], fail[N], cnt[N];
int num = 0;
vector<vector<int>>son;
int add(string& word)
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
	queue<int>q;
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
void search(string& word)
{
	int root = 0;
	FA(c, word)
	{
		root = trie[root][c - 'a'];
		cnt[root]++;
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
		}
	}
}
vector<int>mp;
void solve()
{
	cin >> n;
	F(0, i, n)
	{
		cin >> s;
		mp.eb(add(s));
	}
	build();
	son.resize(num + 1);
	F(0, i, num + 1)
		son[fail[i]].eb(i);
	cin >> s;
	search(s);
	dfs(0);
	FA(i, mp)
		cout << cnt[i] << "\n";
}
