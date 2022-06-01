ll a[32][N];
ll func(int i, int j, int k)
{
    return max(a[i][j], a[i][k]);
}
void init()
{
    int t = log2(n);
    for (int i = 1; i <= t; ++i)
    {
        int k = 1 << (i - 1);
        int p = n - 2 * k + 1;
        for (int j = 0; j < p; ++j)
            a[i][j] = func(i - 1, j, j + k);
    }
}
ll query(int l, int r)
{
    int t = log2(r - l + 1);
    return func(t, l - 1, r - (1 << t));
}
