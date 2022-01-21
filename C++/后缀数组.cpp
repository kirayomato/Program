//nlog^2(n)
vector<int>rk, sa;
void suffix_array(string& s)
{
    int n = s.size();
    sa.resize(n);
    rk.resize(2 * n);
    for (int i = 0; i < n; ++i)
    {
        sa[i] = i;
        rk[i] = s[i];
    }
    for (int w = 1; w < n; w *= 2)
    {
        auto cmp = [&](const int& x, const int& y)
        {
            return  rk[x] == rk[y] ? rk[x + w] < rk[y + w] : rk[x] < rk[y];
        };
        vector<int> t = rk;
        sort(sa.begin(), sa.end(), cmp);
        int p = 1;
        rk[sa[0]] = 1;
        for (int i = 1; i < n; ++i)
        {
            if (t[sa[i]] == t[sa[i - 1]]&& t[sa[i]+w] == t[sa[i - 1]+w])
                rk[sa[i]] = p;
            else
                rk[sa[i]] = ++p;
        }
    }
}
