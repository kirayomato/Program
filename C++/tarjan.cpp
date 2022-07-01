int dfn[N], low[N],in_st[N],sc[N],sz[N];
vector<set<int>>G;
stack<int> st;
int cnt = 1, num = 1;
void tarjan(int u)
{
	dfn[u] = cnt++;
	low[u] = dfn[u];
	st.emplace(u);
	in_st[u] = 1;
	FA(v, G[u])
	{
		if (!dfn[v])
		{
			tarjan(v);
			low[u] = min(low[u], low[v]);
		}
		else if (in_st[v])
			low[u] = min(low[u], dfn[v]);
	}
	if (dfn[u] == low[u])
	{
		while (!st.empty())
		{
			int t = TO(st);
			sc[t] = num;
			in_st[t] = 0;
			sz[num]++;
			if (t == u)
				break;
		}
		num++;
	}
}
