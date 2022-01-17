vector<int> kmp(string s,string t,char div)
{
    int m = t.size();
    t+=div+s;
    int n=t.size();
    vector<int>v,cnt(n);
    for(int i=1;i<n;++i)
    {
        int j = cnt[i - 1];
        while (t[i]!=t[j]&&j>0)
            j = cnt[j - 1];
        if(t[i] == t[j])
            j++;
        cnt[i] = j;
        if (cnt[i] == m)
           v.emplace_back(i-2*m);
    }
    return v;    
}
