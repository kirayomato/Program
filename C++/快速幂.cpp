ll quickpow(ll k, ll t,int mod)
{
	ll res = 1;
	while (t)
	{
		if (t & 1)
			res = (res * k) % mod;
		k = (k * k) % mod;
		t >>= 1;
	}
	return res;
}
