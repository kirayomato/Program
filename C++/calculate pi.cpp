#include<iostream> 
#include<iomanip>
using namespace std;

int main()
{
    long long a = 1000000000;
    long double b = 0;
    int x = 1;
    while (x < a)
    {
        if (x % 4 == 3)
        {
            b = b - long double (1.0 / x);
            x = x + 2;
        }
        else
        {
            b = b + long double (1.0 / x);
            x = x + 2;
        }
    }
    cout << setprecision(9)<<"Pi=" << 4*b;
    return 0;
}
