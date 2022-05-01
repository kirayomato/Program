string max(string s1, string s2)
{
    int n = s1.size(), m = s2.size();
    if (n > m)
        return s1;
    else if (n < m)
        return s2;
    else
    {
        for (int i = 0;i < n;++i)
        {
            if (s1[i] < s2[i])
                return s2;
        }
        return s1;
    }
}
bool cmp(string s1, string s2) //升序
{
    int n = s1.size(), m = s2.size();
    if (n > m)
        return false;
    else if (n < m)
        return true;
    else
    {
        for (int i = 0;i < n;++i)
        {
            if (s1[i] < s2[i])
                return true;
            else if(s1[i] > s2[i])
                return false;
        }
        return false;
    }
}
