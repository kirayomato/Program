int n, m;
ll a[N], c[N];
int k;
ll ans[N];
p v[N];
inline int lowbit(int x) { return x & (-x); }
void add(int x,int k) 
{
	while (x <= n + 1) 
	{  
		c[x] += k;
		x +=  lowbit(x);
	}
}
ll getsum(int x) 
{  
	ll ans = 0;
	while (x > 0) 
	{
		ans += c[x];
		x = x - lowbit(x);
	}
	return ans;
}
void cdq(int l, int r)
{
	if (r-l == 1)
		return;
	int mid = (l + r) >> 1;
	cdq(l, mid);
	cdq(mid, r);
	int i = l + 1;;
	int j = mid + 1;
	sort(v + i, v + j, cmp);
	sort(v + j, v + r + 1, cmp);
	while (i <= mid) 
	{
		while (v[i].first > v[j].first && j <= r) 
			add(v[j++].second,1);
		ans[v[i].second] += getsum(v[i].second);
		i++;
	}
	i = l + 1;
	j = mid + 1;
	while (i <= mid) 
	{
		while (v[i].first > v[j].first && j <= r) 
			add(v[j++].second, -1);
		i++;
	}
	i = mid;
	j = r;
	while (j > mid) 
	{
		while (v[j].first < v[i].first && i > l) 
			add(v[i--].second, 1);
		ans[v[j].second] += getsum(v[j].second);
		j--;
	}
	i = mid;
	j = r;
	while (j > mid) 
	{
		while (v[j].first < v[i].first && i > l) 
			add(v[i--].second, -1);
		j--;
	}
	return;
}
void solve()
{
	cin >> n;
	F(1, i, n + 1)
	{
		cin >> a[i];
		b[a[i]] = i;
	}
	F(1, i, n + 1)
	{
		cin >> k;
		v[b[k]]=make_pair(k,i);
	}
	cdq(0, n);
	F(1, i, n + 1)
	{
		ans[i] += ans[i-1];
		cout << ans[i] << "\n";
	}
	cout<<flush;
}
