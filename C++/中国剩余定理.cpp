ll gcd(ll a, ll b) 
{
    return b > 0 ? gcd(b, a % b) : a;
}
//ax+by=gcd(a,b)=1
void exgcd(ll a, ll b, ll& x, ll& y) 
{
    if (b == 0) {
        x = 1, y = 0;
        return;
    }
    exgcd(b, a % b, y, x);
    y -= a / b * x;
}
ll number_theoretic_reciprocal(ll a, ll mod)
{
	ll x = 0, y = 0;
    // 求逆元：a,b互质,y任意,x为逆元
    // ax+by=gcd(a,b)=1 -> ax%b=1
	exgcd(a, mod, x, y);
	ll t = mod / gcd(a, mod);
	x = (x % t + t) % t;
	return x;
}
//要求两两互质
ll crt(unordered_map<int, int>mp) 
{
    ll nn = 1, ans = 0;
    FA(i, mp)
        nn *= i.first;
    FA(i, mp)
    {
        ll m1 = nn / i.first;
        int m2 = number_theoretic_reciprocal(m1, i.first);
        ans = (ans + i.second * m1 * m2 % nn) % nn;
    }
    return ans;
}
