static constexpr int N = 3e5 + 50;
int a[N],d[N];
int sum;
int n,m,maxn;
int cnt[N];
vector<int>vt;
struct edge 
{
    int l, r, id;
    edge():l(-1),r(-1),id(-1){}
    edge(int x,int y,int z):l(x),r(y),id(z){}
    bool operator < (const edge& x) const
    {
        if (l/maxn != x.l / maxn)
            return l / maxn < x.l / maxn;
        else
            return (l / maxn) & 1 ? r < x.r : r > x.r;
    }
}v[N];
void add(int i)
{
    cnt[d[i]]++;
    if (cnt[d[i]] == 1)
        ++sum;
}
void del(int i)
{
    cnt[d[i]]--;
    if (cnt[d[i]] == 0)
        --sum;
}
void solve()
{
    cin >> n;
    F(0, i, n)
    {
        cin >> d[i];
        vt.emplace_back(d[i]);
    }
    //  数据离散化
    sort(VEC(vt));
	vt.erase(unique(VEC(vt)));
    F(0, i, n)
        d[i] = lower_bound(VEC(vt), d[i]) - vt.begin()+1;
    //Another Version
    //int k = 1;
    //F(0, i, n) 
    //{
    //    cin >> d[i];
    //    if (!mp.count(d[i]))
    //    {
    //        mp[d[i]] = k;
    //        d[i] = k++;
    //    }
    //    else
    //        d[i] = mp[d[i]];
    //}
    cin >> m;
    maxn = sqrt(n);
    F(0, i, m)
    {
        cin >> v[i].l >> v[i].r;
        v[i].l--;
        v[i].id = i;
    }
    sort(LST(v,m));
    int l = 0,r = 0;
    F(0,i,m) 
    {
        const edge& q = v[i];
        while (l > q.l) 
            add(--l);
        while (r < q.r) 
            add(r++);
        while (l < q.l) 
            del(l++);
        while (r > q.r) 
            del(--r);
        a[q.id] = sum;
    }
    F(0, i, m)
        cout << a[i] << "\n";
}
