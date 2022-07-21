ll quickmul(ll a, ll b, ll m) {
	ull c = (ull)a * b -
		(ull)((long double)a / m * b + 0.5L) * m;
	return (c + m) % m;
}
ll quickpow(ll k, ll t, ll mod) {
	ll res = 1;

	while (t) {
		if (t & 1)
			res = quickmul(res, k, mod);

		k = quickmul(k, k, mod);
		t >>= 1;
	}
	return res;
}
mt19937 e(time(0));
bool millerRabin(ll n) {
	if (n < 3 || n % 2 == 0)
		return n == 2;

	ll a = n - 1, b = 0;
	uniform_int_distribution<ll> uid{ 2, n - 1 };

	while (a % 2 == 0) {
		a /= 2;
		b++;
	}

	F(0, i, 20) {
		ll x = uid(e), v = quickpow(x, a, n);

		if (v == 1)
			continue;

		int j = 0;
		F(0, j, b) {
			if (v == n - 1)
				break;

			if (j == b - 1)
				return 0;

			v = quickmul(v, v, n);
		}
	}
	return 1;
}
ll Pollard_Rho(ll x)
{
	uniform_int_distribution<ll> uid{ 1,x - 1 };
	ll s = 0, t = 0, c = uid(e), d = 1, val = 1;
	int goal = 128;
	while (d == 1)
	{
		F(0, step, goal)
		{
			t = (quickmul(t, t, x) + c) % x;
			val = quickmul(val, abs(t - s), x);
			if ((step % 127) == 0)
			{
				d = gcd(val, x);
				if (d > 1)
					return d;
			}
		}
		d = gcd(val, x);
		goal <<= 1;
		s = t;
		val = 1;
	}
	return d;
}
void divide(ll x, map<ll, int>&mp)
{
	if (x <= 1)
		return ;
	if (millerRabin(x))
	{
		mp[x] ++;
		return;
	}
	ll k = Pollard_Rho(x);
	divide(x/k,mp);
	divide(k,mp);
}
