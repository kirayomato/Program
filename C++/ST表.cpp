ll a[64][N];
void init()
{
	int t = log2(n);
	for (int i = 1;i <= t;++i)
	{
		int k = 1 << (i - 1);
		int p = n - 2 * k + 1;
		for (int j = 0;j < p;++j)
			a[i][j] = max(a[i - 1][j], a[i - 1][j + k]);
	}
}
ll query(int l, int r)
{
	int t = log2(r - l + 1);
	return max(a[t][l - 1], a[t][r - (1 << t)]);
}
