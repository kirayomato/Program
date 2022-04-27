int n, m;
int c[4 * N];
ll a[N],b[N<<2];
void pu(int pb)
{
    b[pb] = b[pb * 2 + 1] + b[pb * 2 + 2];
}
void init(int pos, int l, int r)
{
    if (l == r)
        b[pos] = a[l];
    else
    {
        int mid = (l + r) >> 1;
        init(2 * pos + 1, l, mid);
        init(2 * pos + 2, mid + 1, r);
        pu(pos);
    }
}
void upt(int pos, int l, int r, int k)
{
    c[pos] += k;
    b[pos] = b[pos] + (ll)k * ((ll)r - l + 1)
}
void pd(int pos, int l, int r)
{
    int mid = (l + r) >> 1;
    if (c[pos])
    {
        upt(2 * pos + 1, l, mid, c[pos]);
        upt(2 * pos + 2, mid + 1, r, c[pos]);
        c[pos] = 0;
    }
}
ll search(int l, int r, int i, int j, int pos)
{
    if (i <= l && j >= r)
        return b[pos];
    pd(pos, l, r);
    int mid = (l + r) >> 1;
    ll ans = 0;
    if (j > mid)
        ans += search(mid + 1, r, i, j, 2 * pos + 2);
    if (i <= mid)
        ans += search(l, mid, i, j, 2 * pos + 1);
    return ans;
}
void update(int l, int r, int k, int i, int j, int pos)
{
    if (i <= l && j >= r)
    {
        upt(pos, l, r, k);
        return;
    }
    int mid = (l + r) >> 1;
    pd(pos, l, r);
    if (j > mid)
        update(mid + 1, r, k, i, j, 2 * pos + 2);
    if (i <= mid)
        update(l, mid, k, i, j, 2 * pos + 1);
    pu(pos);
}
void solve()
{
    cin >> n >> m;
    F(0, i, n)
        cin >> a[i];
    init(0, 0, n - 1);
    F(0, i, m)
    {
        int op, l, r;
        cin >> op >> l >> r;
        if (op != 2)
        {
            int k;
            cin >> k;
            update(0, n - 1, k, l - 1, r - 1, 0);
        }
        else
            cout << search(0, n - 1, l - 1, r - 1, 0) << "\n";
    }
}
