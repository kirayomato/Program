#define _CRT_SECURE_NO_WARNINGS
#define F(a, i, j) for (int i = a; i < j; ++i)
#define FA(i, j) for (auto&i : j)
#define _F(a, i, j) for (int i = a; i >= j; --i)
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef unsigned int ui;
typedef pair<int, int> p;
static constexpr int inf = 0x7ff00000;
static constexpr ll inf2 = 0x7ff0000000000000;
static constexpr int mod = 1e9 + 7;
static constexpr int mod2 = 998244353;
static constexpr int nxt[4][2] = { {0, 1}, {0, -1}, {1, 0}, {-1, 0} };
static constexpr int N = 5e5 + 50;
//ifstream fin("in1.txt");
//ofstream fou("out.txt");
int k;
ll a[N], b[2 * N];
int ans;
ll n, x, y, m, z, t;
ll sum;
void init(int pos, int l, int r)
{
    if (l == r)
        b[pos] = a[l];
    else
    {
        init(2 * pos + 1, l, (l + r) / 2);
        init(2 * pos + 2, (l + r) / 2 + 1, r);
        b[pos] = min(b[2 * pos + 1] , b[2 * pos + 2]);
    }
}
ll search(int l, int r, int i, int j, int pos)
{
    if (j<l || i>r)
        return 0;
    if (i <= l && j >= r)
        return b[pos];
    int mid = (l + r) / 2;
    if (i > mid)
        return search(mid + 1, r, i, j, 2 * pos + 2);
    else if (j <= mid)
        return search(l, mid, i, j, 2 * pos + 1);
    else
        return min(search(l, mid, i, j, 2 * pos + 1) , search(mid + 1, r, i, j, 2 * pos + 2));
}
ll query(int l, int r)
{
    return search(0, n-1, l-1, r-1, 0);
}
void update(ll p, ll v)
{
    int pb = 0, l = 0, r = n - 1;
    while (r > l)
    {
        int mid = (r + l) / 2;
        if (p > mid)
        {
            l = mid + 1;
            pb = 2 * pb + 2;
        }
        else
        {
            r = mid;
            pb = 2 * pb + 1;
        }
    }
    b[pb] = v;
    while (pb > 0)
    {
        pb = (pb - 1) / 2;
        b[pb] = min(b[pb * 2 + 1] , b[pb * 2 + 2]);
    }
}
void solve()
{
    cin >> n;
    F(0, i, n)
        cin >> a[i];
    init(0, 0, n - 1);
    string op;
    while (cin >> op)
    {
        ll x, y;
        cin >> x >> y;
        if (op == "min")
            cout << query(x, y) << "\n";
        else
            update(x - 1, y);
    }
}
int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    cout.setf(ios::fixed);
    cout.precision(0);
    solve();
    cout << flush;
    return 0;
}
