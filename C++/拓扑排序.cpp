#include <bits/stdc++.h>
using namespace std;
static constexpr int N = 1e6 + 50;
vector<vector<int>> G;
int c[N];
vector<int> topo;
bool dfs(int u)
{
    c[u] = -1;
    for (int v : G[u])
    {
        if (c[v] < 0)
            return false;
        else if (!c[v])
            if (!dfs(v))
                return false;
    }
    c[u] = 1;
    topo.push_back(u);
    return true;
}
bool toposort()
{
    for (int u = 0; u < n; u++)
        if (!c[u])
            if (!dfs(u))
                return false;
    reverse(topo.begin(), topo.end());
    return true;
}
void solve()
{
    cin >> n >> m;
    G.resize(n);
    F(0, i, m)
    {
        int x, y;
        cin >> x >> y;
        --x;
        --y;
        G[x].emplace_back(y);
    }
    if (toposort())
    {
        for (int i : topo)
            cout << i + 1 << " ";
    }
    else
        cout << "-1";
}
