#include<string>
#include<vector>
vector<bool> vis;
void uni_per(string s,vector<string>& res, string output, int pos, int len)
{
    if (pos == len)
        res.emplace_back(output);
    else
        for (int i = 0; i < len; ++i)
        {
            if (vis[i]||i > 0 && s[i] == s[i - 1] && !vis[i - 1])
                continue;
            vis[i] = true;
            output += s[i];
            uni_per(s,res, output, pos + 1, len);
            vis[i] = false;
            output.erase(output.begin() + pos);
        }
}
vector<string> unique_permutation(string s)
{
    vector<string> ans;
    vis.resize(s.size());
    sort(s.begin(), s.end());
    permute(s,ans, "", 0, s.size());
    return ans;
}


void per(vector<string>& res, string output, int first, int len)
{
    if (first == len)
        res.emplace_back(output);
    else
        for (int i = first; i < len; ++i)
        {
            swap(output[i], output[first]);
            per(res, output, first + 1, len);
            swap(output[i], output[first]);
        }
}
vector<string> permutation(string s)
{
    vector<string> ans;
    vis.resize(s.size());
    per(ans, s, 0, s.size());
    return ans;
}
