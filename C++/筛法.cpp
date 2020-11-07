#include <iostream>
#include <vector>
using namespace std;
vector<int> vec;
bool prime(int);

int main()
{
    int i, t,num;
    cout << "结束范围：";
    cin >> num;
    for (i = 0;i <= num;i++)
    {
        vec.push_back(i);
    }
    for (i = 0;i <= num;i++)
    {
        if (prime(vec[i]))
        {
            int *max = &vec.back();
            while (*max == 0)
                max -= 1;
            int n = *max / vec[i];
            for (t = 2;t <= n;t++)
                vec[vec[i] * t] = 0;

        }
    }
    for (vector<int>::iterator it = vec.begin();it != vec.end();)
    {
        if (*it == 0)
            it = vec.erase(it);
        else
            it++;
    }
    for (i = 1;i < vec.size();i++)
    {
        cout<<vec[i]<<" ";
    }
    return 0;
}
bool prime(int x)
{
    if (x <= 1)
        return false;
    if (x == 2)
        return true;
    for (int k = 2;k < x;k++)
    {
        if (x % k == 0)
            return false;
        else  if (x == k - 1)
            return true;
    }
}
