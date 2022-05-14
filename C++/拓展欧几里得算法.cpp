#define _CRT_SECURE_NO_WARNINGS
#include<iostream>
#include<cstdio>
using namespace std;
int extgcd(int a, int b, int &x, int &y)
{
    int d = a;
    if (b != 0)
    {
        d = extgcd(b, a % b, y, x);
        y -= (a / b) * x;
    }
    else
    {
        x = 1;
        y = 0;
    }
    return d;
}
int main()
{
    int x, y,a, b;
    cin >> a >> b;
    int d=extgcd(a,b,x,y);
    if(x==0)
        printf("%d*%d=%d", y, b, d);
    else if(y>0)
        printf("%d*%d+%d*%d=%d", x, a, y, b, d);
    else if(y==0)
        printf("%d*%d=%d", x, a, d);
    else
        printf("%d*%d%d*%d=%d", x, a, y, b, d);
    return 0;
}
