#include<iostream>
#include<string>
#include<set>
using namespace std;
set<string> permutation(string s) {
    set<string> ans;
    int t = s.size();
    if (t == 1)
        ans.insert(s);
    else
    {
        set<string> k;
        for (int i = 0;i < t;++i)
        {
            string l = s.substr(0, i) + s.substr(i + 1);
            k = permutation(l);
            for (string j : k)
                ans.insert(s[i] + j);
        }
    }
    return ans;
}
int main()
{
    string j;
    cin >> j;
    set<string> s = permutation(j);
    for (string i : s)
        cout << i << " ";
    return 0;
}
