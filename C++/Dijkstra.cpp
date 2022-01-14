static constexpr int inf = 0x7ff00000;
unordered_map<int, unordered_map<int, int>>dis;
int ans[N];
bool vis[N];
struct edge
{
    int f;
    int l;
    edge() :f(0), l(0) {}
    edge(int x, int z) :f(x), l(z) {}
};
bool operator<(const edge& a, const edge& b)
{
    return a.l > b.l;//小顶堆
}
priority_queue<edge> q;
void dij(int s)
{
    ans[s] = 0;
    q.emplace(s, 0);
    while (!q.empty())
    {
        int u = q.top().f;
        q.pop();
        if (vis[u])
            continue;
        vis[u] = 1;
        for(auto &j:dis[u])
        {
            if (ans[j.first] > ans[u] + j.second)
                {
                    ans[j.first] = ans[u] + j.second;
                    q.emplace(j.first, ans[j.first]);
                }
        }
    }
}
void solve()
{
    int s, f,k;
    cin >> n >> m;
    fill(ans, ans + n, inf);
    F(0, i, m)
    {
        cin >> s >> f >> k;
        dis[s - 1][f - 1] = k;
    }
    dij(0);
    F(0, i, n)
        cout << ans[i]<<" ";
}
