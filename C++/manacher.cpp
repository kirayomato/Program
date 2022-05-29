int mc[N];
void manacher(string & s)
{
	string s1 = "#";
    int m=s.size();
	F(0, i, m)
	{
		s1 += s[i];
		s1 += '#';
	}
	int l = 0, r = -1, n = s1.size();
	F(0, i, n)
	{
		int j = l + r - i;
		if (j > 0 && mc[j] < r - i + 1)
			mc[i] = mc[j];
		else
		{
			mc[i] = max(1, r - i + 1);
			while (i + mc[i] < n && i - mc[i] >= 0 && s1[i + mc[i]] == s1[i - mc[i]])
				++mc[i];
			r = i + mc[i] - 1;
			l = i - mc[i] + 1;
		}
	}
}
string getd1(int i)
{
	int l= mc[i * 2 + 1] / 2;
	return s.substr(i - l + 1, mc[i * 2 + 1] - 1);
}
string getd2(int i)
{
	int l = mc[i * 2 + 2] / 2;
	return s.substr(i - l + 1, mc[i * 2 + 2] - 1);
}
