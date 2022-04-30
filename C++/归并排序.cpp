void mers(vector<int>& v, int x, int y)
{
	int n = y - x;
	if (n == 1)
		return;
	else
	{
		int k = x + n / 2;
		mers(v, x, k);
		mers(v, k, y);
		vector<int>p(n);
		int l = x, r = k;
		F(0, i, n)
		{
			if (l < k && r < y)
			{
				if (v[l] <= v[r])
					p[i] = v[l++];
				else
					p[i] = v[r++];
			}
			else if (l < k)
				p[i] = v[l++];
			else
				p[i] = v[r++];
		}
		F(0, i, n)
			v[x++] = p[i];
	}
}
