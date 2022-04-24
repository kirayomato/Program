int fa[N], dp[N];
int gf(int x)
{
	if (x == fa[x])
		return x;
	fa[x] = gf(fa[x]);
	return fa[x];
}
void uni(int x, int y)
{
	x = gf(x);
	y = gf(y);
	if (x != y)
	{
		if (dp[x] > dp[y])
			swap(x, y);
		dp[y] += dp[x];
		fa[x] = y;
	}
}
