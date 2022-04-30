ll a[N][64];
void init()
{
	int t = log2(n);
	for (int i = 1;i <= t;++i)
	{
		int k = 1 << (i - 1);
		int p = n - 2 * k + 1;
		for (int j = 0;j < p;++j)
			a[j][i] = max(a[j][i - 1], a[j + k][i - 1]);
	}
}
ll query(int l, int r)
{
	int t = log2(r - l + 1);
	return max(a[l - 1][t], a[r - (1 << t)][t]);
}
