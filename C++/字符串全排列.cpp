#include<string>
#include<set>
void permute(set<string>& res, string output, int first, int len)
{
    if (first == len)
        res.emplace(output);
    else
        for (int i = first; i < len; ++i)
        {
            swap(output[i], output[first]);
            permute(res, output, first + 1, len);
            swap(output[i], output[first]);
        }
}
set<string> permutation(string s)
{
    set<string> ans;
    permute(ans, s, 0, s.size());
    return ans;
}
