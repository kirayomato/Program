typedef long long ll;
typedef pair<ll, ll> p;
const p operator+(const p& p1, const p& p2)
{
    p ret;
    ret.first = p1.first + p2.first;
    ret.second = p1.second + p2.second;
    return ret;
}
const p operator*(const p& p1, ll v)
{
    p ret;
    ret.first = p1.first * v;
    ret.second = p1.second * v;
    return ret;
}
static constexpr ll inf2 = 9.2e18;
static constexpr int N = 1e6 + 100;
int n, m;
p a[N], b[N << 2], c[N << 2];
string s;
p se(const p& p1, const p& p2)
{
    int l, r;
    if (p1.first < p2.first)
    {
        l = p1.first;
        r = min(p1.second, p2.first);
    }
    else
    {
        l = p2.first;
        r = min(p2.second, p1.first);
    }
    return make_pair(l, r);
}
void pu(int pb)
{
    b[pb] = se(b[2 * pb + 1], b[2 * pb + 2]);
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
p search(int l, int r, int i, int j, int pos)
{
    if (i <= l && j >= r)
        return b[pos];
    int mid = (l + r) >> 1;
    p ans = make_pair(inf2, inf2);
    if (j < i)
        return ans;
    if (j > mid)
        ans = se(ans, search(mid + 1, r, i, j, 2 * pos + 2));
    if (i <= mid)
        ans = se(ans, search(l, mid, i, j, 2 * pos + 1));
    return ans;
}
int x, y;
void solve()
{
    cin >> n >> m;
    F(0, i, n)
    {
        cin >> x;
        a[i] = make_pair(x, inf);
    }
    init(0, 0, n - 1);
    F(0, u, m)
    {
        cin >> x >> y;
        cout << search(0, n - 1, x - 1, y - 1, 0).second << endl;
    }
}
