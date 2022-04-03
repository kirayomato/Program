#include<string>
#include<vector>
void per(vector<string>& res, string output, int pos, int len)
{
    if (pos == len)
        res.emplace_back(output);
    else
        for (int i = pos; i < len; ++i)
        {
            swap(output[i], output[pos]);
            per(res, output, pos + 1, len);
            swap(output[i], output[pos]);
        }
}
vector<string> permutation(string s)
{
    vector<string> ans;
    per(ans, s, 0, s.size());
    return ans;
}
vector<bool> vis;
void uni_per(string s, vector<string>& res, string cur, int pos, int len)
{
    if (pos == len)
        res.emplace_back(cur);
    else
        for (int i = 0; i < len; ++i)
        {
            if (vis[i] || i > 0 && s[i] == s[i - 1] && !vis[i - 1])
                continue;
            vis[i] = true;
            cur += s[i];
            uni_per(s, res, cur, pos + 1, len);
            vis[i] = false;
            cur.pop_back();
        }
}
vector<string> unique_permutation(string s)
{
    vector<string> ans;
    vis.resize(s.size());
    sort(s.begin(), s.end());
    uni_per(s,ans, "", 0, s.size());
    return ans;
}
