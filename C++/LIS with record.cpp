#define _CRT_SECURE_NO_WARNINGS
#define F(a, i, j) for (int i = a; i < j; ++i)
#define _F(a, i, j) for (int i = a; i >= j; --i)
#include <bits/stdc++.h>
using namespace std;
static constexpr int inf = 0x7ff00000;
static constexpr int N = 3e5 + 50;
int a[N];
int n;
int d[N], c[N], len = 1;
stack<int> sta;
void solve()
{
    int n; 
    cin >> n;
    F(0, i, n)
        cin >> a[i];
    fill(d,d+n,inf);
    F(0,i,n)
    {
        int j = lower_bound(d, d + n, a[i]) - d;
        len = max(len, j+1);
        d[j] = a[i];
        c[i] = j+1;
    }
    int j = len;
    _F(n-1,i,0)
    {
        if (c[i] == j) 
        {
            sta.push(a[i]); 
            --j;
        }
        if (j == 0) 
            break;
    }
    cout << len << "\n";
    while (!sta.empty()) 
    {
        cout<<sta.top()<<" ";
        sta.pop();
    }
}
