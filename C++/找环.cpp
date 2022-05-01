vector<int> G[N];
bool vis[N];
unordered_set<int>ring;
bool dfs(int u, int s)
{
	if (vis[u])
	{
		ring.emplace(u);
		return true;
	}
	vis[u] = 1;
	FA(i, G[u])
	{
		if (i == s)
			continue;
		if (dfs(i, u) && !ring.count(u))
		{
			ring.emplace(u);
			return true;
		}
	}
	return false;
}
