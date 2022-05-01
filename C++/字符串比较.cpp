bool cmp(string s1, string s2) //升序
{
    int n = s1.size(), m = s2.size();
    if (n > m)
        return false;
    else if (n < m)
        return true;
    else
    {
        F(0,i,n)
        {
            if (s1[i] < s2[i])
                return true;
            else if(s1[i] > s2[i])
                return false;
        }
        return false;
    }
}
string max(string s1, string s2)
{
   if(cmp(s1,s1))
       return s2;
    return s1;
}
