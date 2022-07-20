ll fq(int m)
{
	ll l = 1, r = 0;
	ll z = 0;
	while (l <= m)
	{
        ll t = m / l;
		r = m / t;
		z += (r - l + 1) * t;
		l = r + 1;
	}
	return z;
}
