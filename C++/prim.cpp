bool vis[N];
ll ans[N];
unordered_map<int, unordered_map<int, ll>>dis;
struct point
{
    int f;
    ll l;
    point() :f(0), l(0) {}
    point(int x, ll z) :f(x), l(z) {}
};
bool operator<(const point& a, const point& b)
{
    return a.l > b.l;//小顶堆
}
priority_queue<point> q, q1;
ll prim(int s)
{
    ans[s] = 0;
    q.emplace(s, 0);
    ll res = 0;
    while (!q.empty())
    {
        int u = q.top().f;
        ll v = q.top().l;
        q.pop();
        if (vis[u])
            continue;
        vis[u] = 1;
        res += (ll)v;
        for (auto& j : dis[u])
        {
            if (ans[j.first] > j.second)
            {
                ans[j.first] = j.second;
                q.emplace(j.first, ans[j.first]);
            }
        }
    }
    return res;
}
