ll ans[N];
vector<map<int, ll>>g;
bool vis[N];
int cnt[N];
queue<int>q, Negative;
bool bellman_ford(int s)
{
	ans[s] = 0; vis[s] = 1;
    q.emplace(s);
    while (!q.empty())
    {
        int u = q.front(); q.pop();
        vis[u] = 0;
        for (auto& j : g[u])
        {
            if (ans[j.first] > ans[u] + j.second)
            {
                ans[j.first] = ans[u] + j.second;
                if (!vis[j.first])
                {
                    vis[j.first] = 1;
                    cnt[j.first] ++;
                    if (cnt[j.first] == n)
                        Negative.emplace(j.first);
                    else
                        q.emplace(j.first);
                }
            }
        }
    }
	return Negative.size()==0;
}
