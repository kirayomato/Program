#include<string>
#include<vector>
vector<bool> vis;
void permute(vector<string>& res, string output, int first, int len)
{
    if (first == len)
        res.emplace_back(output);
    else
        for (int i = first; i < len; ++i)
        {
            if (i > 0 && output[i] == output[i - 1] && !vis[i - 1])
                continue;
            vis[first] = true;
            swap(output[i], output[first]);
            permute(res, output, first + 1, len);
            swap(output[i], output[first]);
            vis[first] = false;
        }
}
vector<string> permutation(string s)
{
    vector<string> ans;
    vis.resize(s.size());
    sort(s.begin(), s.end());
    permute(ans, s, 0, s.size());
    return ans;
}
