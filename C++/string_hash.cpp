static constexpr int m = 998244353;
static constexpr int mod = 1e9 + 7;
typedef long long ll;
vector<ll> ans;
vector<ll> string_hash(string s,int m)
{
    n = s.size();
    vector<ll> has(n+1);
    F(0, i, n)
        has[i+1] = (s[i] + (has[i] * m) % mod) % mod;
    return has;
}
ll qpow(ll x, ll y)
{
    ll t = 1;
    if (y == 0)
        return 1;
    while (y > 0)
    {
        if (y & 1)
            t = (t * x) % mod;
        x = (x * x) % mod;
        y >>= 1;
    }
    return t % mod;
}
ll shash(int x,int y) //index start from 0
{
    if (x == 0)
        return ans[y+1] ;
    else
        return (ans[y+1] - (ans[x] * qpow(m, y - x + 1))%mod+mod)%mod;
}
