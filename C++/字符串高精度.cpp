#include<string>
string stradd(string x, string y)//仅支持非负整数
{
    int i = 0;
    while (x[i] == '0')
        ++i;
    x = x.substr(i);
    i = 0;
    while (y[i] == '0')
        ++i;
    y = y.substr(i);
    while (x.size() < y.size())
        x.insert(0, "0");
    while (x.size() > y.size())
        y.insert(0, "0");
    string::reverse_iterator ita, itb;
    int t1 = 0, t2 = 0;
    for (ita = x.rbegin(), itb = y.rbegin();ita != x.rend(), itb != y.rend();++ita, ++itb)
    {
        t1 = *ita + *itb - '0' - '0' + t2;
        if (t1 >= 10)
        {
            t2 = 1;
            t1 -= 10;
        }
        else
            t2 = 0;
        *ita = t1 + '0';
    }
    if (t2 > 0)
        x = char(t2 + '0') + x;
    return x=="" ?"0":x;
}
string strmul(string x, string y)
{
    int i = 0;
    while (x[i] == '0')
        ++i;
    x = x.substr(i);
    i = 0;
    while (y[i] == '0')
        ++i;
    y = y.substr(i);
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
            t1 = (*ita-'0') * (*itb - '0') + t2;
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
    return x == "" ? "0" : x;
}
