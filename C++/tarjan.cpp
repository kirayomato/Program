int dfn[N], low[N],in_st[N],sc[N],sz[N];
vector<set<int>>G;
stack<int> st;
int cnt = 1, num = 1;
// 强连通分量
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
// 割点
int gd[N];
void tarjan(int u,int f)
{
	dfn[u] = cnt++;
	low[u] = dfn[u];
	int chi = 0;
	FA(v, G[u])
	{
		if (v == f)
			continue;
		if (!dfn[v])
		{
			tarjan(v,u);
			low[u] = min(low[u], low[v]);
			if (u != f && low[v] >= dfn[u])
				gd[u] = 1;
			++chi;
		}
		else
			low[u] = min(low[u], dfn[v]);
	}
	if (u == f && chi > 1)
		gd[u] = 1;
}
// 割边
int gb[N],fa[N];
void tarjan(int u,int f)
{
	dfn[u] = cnt++;
	low[u] = dfn[u];
	fa[u] = f;
	FA(v, G[u])
	{
		if (v == f)
			continue;
		if (!dfn[v])
		{
			tarjan(v,u);
			low[u] = min(low[u], low[v]);
			if (low[v] > dfn[u])
				gb[v] = 1;
		}
		else
			low[u] = min(low[u], dfn[v]);
	}
}
