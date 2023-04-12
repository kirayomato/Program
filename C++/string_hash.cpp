static constexpr int BASE = 73;
static constexpr int mod = 1e9 + 7;
vector<ll> string_hash(string s)
{
    int n = s.size();
    vector<ll> has(n+1);
    F(0, i, n)
        has[i+1] = (s[i] + (has[i] * BASE) % mod) % mod;
    return has;
}
vector<ll> init(int n)
{
    vector<ll> pe;
    pe.resize(N);
    pe[0] = 1;
    F(1, i, n)
        pe[i] = pe[i - 1] * BASE % mod;
    return pe;
}
ll shash(int x, int y, const vector<ll>& has)
{
    if (x == 0)
        return has[y + 1];
    else
        return (has[y + 1] - (has[x] * pe[y - x + 1]) % mod + mod) % mod;
}
