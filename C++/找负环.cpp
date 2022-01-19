#define _CRT_SECURE_NO_WARNINGS
#define F(a, i, j) for (int i = a; i < j; ++i)
#define _F(a, i, j) for (int i = a; i >= j; --i)
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef unsigned int ui;
typedef pair<int, int> p;
// bool cmp(const p& p1, const p& p2)
// {
//         if (p1.first != p2.first)
//                 return p1.first < p2.first;
//         else
//                 return p1.second < p2.second;
// }
static constexpr int inf = 0x7ff00000;
static constexpr ll inf2 = 4e18;
static constexpr int mod = 1e9 + 7;
static constexpr int mod2 = 998244353;
static constexpr int nxt[4][2] = { {0, 1}, {0, -1}, {1, 0}, {-1, 0} };
static constexpr int N = 2e3 + 50;
//ifstream fin("in1.txt");
//ofstream fou("out.txt");
int T, n;
int m, k;
int d[N];
ll ans[N];
int town[N];
vector<unordered_map<int, ll>>g;
bool vis[N];
int cnt[N];
queue<int>q, qe;
void solve()
{
    int s;
    cin >> n >> m >> s;
    g.resize(n + 1);
    fill(ans, ans + n + 1, inf2);
    F(0, i, m)
    {
        int x, y;
        ll l;
        cin >> x >> y >> l;
        if (g[x].count(y))
            g[x][y] = min(g[x][y], l);
        else
            g[x][y] = l;
    }
    ans[s] = 0; vis[s] = 1; cnt[s] = 1;
    q.emplace(s);
    while (!q.empty())
    {
        int u = q.front(); q.pop();
        bool flag = false;
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
                    if (cnt[j.first] > n)
                        qe.emplace(j.first);
                    else
                        q.emplace(j.first);
                }
            }
        }
    }
    memset(vis, 0, sizeof vis);
    while (!qe.empty())
    {
        int u = qe.front(); qe.pop();
        vis[u] = true;
        ans[u] = -inf2;
        for (auto& j : g[u])
            if (!vis[j.first])
                qe.emplace(j.first);
    }
    F(1, i, n + 1)
    {
        if (ans[i] == inf2)
            cout << "*\n";
        else if (ans[i] == -inf2)
            cout << "-\n";
        else
            cout << ans[i] << "\n";
    }

}
int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    cout.setf(ios::fixed);
    cout.precision(0);
    // cin >> T;
    // while(T--)
    solve();
    cout << flush;
    return 0;
}
