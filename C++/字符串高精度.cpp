#include<string>
string stradd(string x, string y)//仅支持非负整数
{
        if (y.size() > x.size())
            swap(x, y);
        int n = x.size();
        string t = "";
        for (int i = 0; i < n - y.size(); ++i)
            t += "0";
        y = t + y;
        int t1 = 0, t2 = 0;
        for (int i = n - 1; i >= 0; --i)
        {
            t1 = x[i] + y[i] - '0' - '0' + t2;
            t2 = t1 / 10;
            t1 %= 10;
            x[i] = t1 + '0';
        }
        if (t2)
            x = char(t2 + '0') + x;
        return x;
}
string strmul(string x, string y)
{
    while (x.size() < y.size())
        x.insert(0, "0");
    while (x.size() > y.size())
        y.insert(0, "0");
    string::reverse_iterator ita, itb;
    string t = "";
    for (itb = y.rbegin();itb != y.rend();++itb)
    {
        int t1 = 0, t2 = 0;
        string a = x;
        for (ita = a.rbegin();ita != a.rend();++ita)
        {
            t1 = (*ita - '0') * (*itb - '0') + t2;
            if (t1 >= 10)
            {
                t2 = t1 / 10;
                t1 %= 10;
            }
            else
                t2 = 0;
            *ita = t1 + '0';
        }
        if (t2 > 0)
            a = char(t2 + '0') + a;
        t = stradd(t, a);
        x = x + '0';
    }
    int i = 0, n = t.size();
    while (t[i]=='0'&&i<n-1)
        ++i;
    t = t.substr(i,n);
    return t;
}
