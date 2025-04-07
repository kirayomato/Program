int pre[N];
void prefix_function(string& s)
{
    int n = s.size();
    F(1, i, n)
    {
        int j = pre[i - 1];
        while (s[i]!=s[j]&&j>0)
            j = pre[j - 1];
        if (s[i] == s[j])
            j++;
        pre[i] = j;
    }
}
int z[N];
void z_function(string& s)
{
	int n = s.size(), l = 0, r = 0;
	F(0, i, n)
	{
		if (i <= r && z[i - l] < r - i + 1)
			z[i] = z[i - l];
		else
		{
			z[i] = max(0, r - i + 1);
			while (i + z[i] < n && s[z[i]] == s[i + z[i]])
				++z[i];
		}
		if (i + z[i] - 1 > r)
		{
			l = i;
			r = i + z[i] - 1;
		}
	}
}
