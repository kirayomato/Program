int gcd(int a, int b) 
{
    return b > 0 ? gcd(b, a % b) : a;
}
//ax+by=gcd(a,b)=1
void exgcd(int a, int b, int& x, int& y) 
{
    if (b == 0) {
        x = 1, y = 0;
        return;
    }
    exgcd(b, a % b, y, x);
    y -= a / b * x;
}
int number_theoretic_reciprocal(int a, int b)
{
    int x = 0,y=0;
    // 求逆元：a,b互质,y任意,x为逆元
    // ax+by=gcd(a,b)=1 -> ax%b=1
    exgcd(a, b, x, y);
    int t = b / gcd(a, b);
    x = (x % t + t) % t;
    return x;
}
