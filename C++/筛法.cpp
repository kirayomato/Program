#include <iostream>
#include <vector>
using namespace std;
vector<int> vec;
int main()
{
    int i, t, num;
    cout << "结束值：";
    cin >> num;
    for (i = 0;i <= num;i++)
    {
        vec.push_back(i);
    }
    for (i = 2;i <= num;i++)
    {
        if (vec[i]!=0)
        {
            int n = num / vec[i];
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
        cout << vec[i] << " ";
    }
    return 0;
}
