vector<int> prefix_function(string& s)
{
    n = s.size();
    vector<int>pre(n);
    for(int i=1;i<n;++i)
    {
        int j = pre[i - 1];
        while (s[i]!=s[j]&&j>0)
            j = pre[j - 1];
        if (s[i] == s[j])
            j++;
        pre[i] = j;
    }
    return pre;
}
vector<int> z_function(string& s)
{
    n = s.size();
    vector<int> z(n);
    for (int i = 1, l = 0, r = 0; i < n; ++i) 
    {
        if (i <= r && z[i - l] < r - i + 1) 
            z[i] = z[i - l];
        else 
        {
            z[i] = max(0, r - i + 1);
            while (i + z[i] < n && s[z[i]] == s[i + z[i]]) 
                ++z[i];
        }
        if (i + z[i] - 1 > r)
        {
            l = i;
            r = i + z[i] - 1;
        }
    }
    return z;
}
