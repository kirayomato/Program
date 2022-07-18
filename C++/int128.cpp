string int128_to_string(__int128 x)
{
	string s = "";
	if (x == 0)
		return "0";
	bool f = 0;
	if(x<0)
	{
		x=-x;
		f=1;
	}
	while (x)
	{
		char t = x % 10 + '0';
		s = t + s;
		x /= 10;
	}
	if (f)
		s = '-' + s;
	return s;
}
__int128 string_to_int128(string x)
{
	__int128 ans = 0;
	int n = x.size(), i = 0;
	bool f = 0;
	if (x[0] == '-')
	{
		f = 1;
		i++;
	}
	while (i < n)
		ans = ans * 10 + x[i++] - '0';
	if (f)
		ans = -ans;
	return ans;
}
void print(__int128 x)
{
	static constexpr ll k=1e18;
	static constexpr ll k1=1e17;
	if(x<0)
	{
		cout<<'-';
		x=-x;
	}
	if(x<k)
		cout<<(ll)x;
	else
	{
		cout<<(ll)(x/k);
		ll t=x%k;
		F(0,i,18)
		{
			cout<<t/k1;
			t=(t%k1)*10;
		}
	}
}
