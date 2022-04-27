int n, m;
ll a[N];
ll c[4 * N], d[4 * N], b[4 * N];
void pu(int pb)
{
	b[pb] = (b[pb * 2 + 1] + b[pb * 2 + 2]) % mod2;
}
void init(int pos, int l, int r)
{
	if (l == r)
		b[pos] = a[l] % mod2;
	else
	{
		int mid = (l + r) >> 1;
		init(2 * pos + 1, l, mid);
		init(2 * pos + 2, mid + 1, r);
		pu(pos);
	}
}
void upt(int pos, int l, int r, int k, int t)
{
	if (t == 2)
	{
		c[pos] = (c[pos] + (ll)k) % mod2;
		b[pos] = (b[pos] + (ll)k * ((ll)r - l + 1)) % mod2;
	}
	else
	{
		d[pos] = (d[pos] * (ll)k) % mod2;
		c[pos] = (c[pos] * (ll)k) % mod2;
		b[pos] = (b[pos] * (ll)k) % mod2;
	}
}
void pd(int pos, int l, int r)
{
	int mid = (l + r) >> 1;
	if (d[pos] != 1)
	{
		upt(2 * pos + 1, l, mid, d[pos], 1);
		upt(2 * pos + 2, mid + 1, r, d[pos], 1);
		d[pos] = 1;
	}
	if (c[pos])
	{
		upt(2 * pos + 1, l, mid, c[pos], 2);
		upt(2 * pos + 2, mid + 1, r, c[pos], 2);
		c[pos] = 0;
	}
}
ll search(int l, int r, int i, int j, int pos)
{
	if (i <= l && j >= r)
		return b[pos] % mod2;
	int mid = (l + r) >> 1;
	pd(pos, l, r);
	ll ans = 0;
	if (j > mid)
		ans = (ans + search(mid + 1, r, i, j, 2 * pos + 2)) % mod2;
	if (i <= mid)
		ans = (ans + search(l, mid, i, j, 2 * pos + 1)) % mod2;
	return ans % mod2;
}
void update(int l, int r, int k, int i, int j, int pos, int t)
{
	if (i <= l && j >= r)
	{
		upt(pos, l, r, k, t);
		return;
	}
	int mid = (l + r) >> 1;
	pd(pos, l, r);
	if (j > mid)
		update(mid + 1, r, k, i, j, 2 * pos + 2, t);
	if (i <= mid)
		update(l, mid, k, i, j, 2 * pos + 1, t);
	pu(pos);
}
void solve()
{
	cin >> n >> m;
	F(0, i, n)
		cin >> a[i];
	init(0, 0, n - 1);
	fill(LST(d, (n << 2)), 1);
	F(0, i, m)
	{
		int op, l, r;
		cin >> op >> l >> r;
		if (op != 3)
		{
			int k;
			cin >> k;
			update(0, n - 1, k, l - 1, r - 1, 0, op);
		}
		else
			cout << search(0, n - 1, l - 1, r - 1, 0) % mod2 << "\n";
	}
}
