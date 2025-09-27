ll qmul(ll a, ll b, ll mod)
{
	ll ans = 0;
	while (b > 0)
	{
		if (b & 1)
			ans = (ans + a) % mod;
		a = (a + a) % mod;
		b >>= 1;
	}
	return ans;
}
