// s:目标串 t:模式串
vector<int> kmp(const string &s, const string &t, const char div = '#')
{
    int m = t.size();
    int n = s.size() + 1 + m;
    auto getchar = [&](int index) -> char
    {
        if (index < m)
            return t[index];
        else if (index == m)
            return div;
        else
            return s[index - m - 1];
    };
    vector<int> v, cnt(n);
    for (int i = 1; i < n; ++i)
    {
        int j = cnt[i - 1];
        char a = getchar(i), b = getchar(j);
        while (a != b && j > 0)
        {
            j = cnt[j - 1];
            b = getchar(j);
        }
        if (a == b)
            j++;
        cnt[i] = j;
        if (cnt[i] == m)
            v.emplace_back(i - 2 * m);
    }
    return v;
}
