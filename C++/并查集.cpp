int fa[N], sz[N];
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
		if (sz[x] > sz[y])
			swap(x, y);
		sz[y] += sz[x];
		fa[x] = y;
	}
}
