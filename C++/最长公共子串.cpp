#define _CRT_SECURE_NO_WARNINGS
#define F(a, i, j) for (int i = a; i < j; ++i)
#define FA(i, j) for (auto&i : j)
#define _F(a, i, j) for (int i = a; i >= j; --i)
#define WE(i) while(!i.empty())
#define vect(i) i.begin(),i.end()
#define lis(i,n) i,i+n
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef pair<int, int> p;
static constexpr int mod = 1e9 + 7;
static constexpr int N = 1e5 + 50;
static constexpr int mm = 73;
int k;
p res;
unordered_map<ll, int>cnt;
unordered_map<ll, p> sub;
unordered_set<ll> vis;
vector<string>s;
vector<vector<ll>>has;
vector<ll> pe;
vector<ll> string_hash(string s)
{
    int n = s.size();
    vector<ll> has(n + 1);
    F(0, i, n)
        has[i + 1] = (s[i] + has[i] * mm % mod) % mod;
    return has;
}
ll shash(int x, int y, const vector<ll>& has)
{
    if (x == 0)
        return has[y + 1];
    else
        return (has[y + 1] - (has[x] * pe[y - x + 1]) % mod + mod) % mod;
}
bool check(int mid)
{
    cnt.clear();
    sub.clear();
    for (int i = 0; i < k; ++i)
    {
        vis.clear();
        int n = s[i].size();
        for (int j = 0; j + mid - 1 < n; ++j)
        {
            ll num = shash(j, j + mid - 1, has[i]);
            sub[num] = make_pair(i, j);
            if (!vis.count(num))
            {
                vis.emplace(num);
                cnt[num]++;
            }
        }
    }
    for (auto& i : cnt)
        if (i.second == k)
        {
            res = sub[i.first];
            return 1;
        }
    return 0;
}
vector<ll> init(int n)
{
    vector<ll> pe;
    pe.resize(n);
    pe[0] = 1;
    F(1, i, n)
        pe[i] = pe[i - 1] * mm % mod;
    return pe;
}
void solve()
{
    pe = init(N);
    cin >> k;
    s.resize(k);
    has.resize(k);
    F(0, i, k)
    {
        cin >> s[i];
        has[i] = string_hash(s[i]);
    }
    int l = 0, r = N, ans = 0;
    while (l <= r)
    {
        int mid = (l + r) >> 1;
        if (check(mid))
            l = mid + 1, ans = mid;
        else
            r = mid - 1;
    }
    cout << s[res.first].substr(res.second, ans);
}
