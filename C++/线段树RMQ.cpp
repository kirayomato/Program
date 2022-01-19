#define _CRT_SECURE_NO_WARNINGS
#define F(a, i, j) for (int i = a; i < j; ++i)
#define FA(i, j) for (auto&i : j)
#define _F(a, i, j) for (int i = a; i >= j; --i)
#include <bits/stdc++.h>
using namespace std;
static constexpr int inf = 0x7ff00000;
static constexpr int N = 5e5 + 50;
int a[N], b[4 * N];
int n,m;
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
int search(int l, int r, int i, int j, int pos)
{
    if (j<l || i>r)
        return inf;
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
int query(int l, int r)
{
    return search(0, n-1, l-1, r-1, 0);
}
void update(int p, int v)
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
    cin>>m;
    F(0,i,m)
    {
        string op;
        int x, y;
        cin >>op>> x >> y;
        if (op == "min")
            cout << query(x, y) << "\n";
        else
            update(x - 1, y);
    }
}
