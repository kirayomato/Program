#include <iostream>
#include <vector>
using namespace std;
vector<double> vec;
vector<double> quicksort(vector<double> &v);

int main()
{
    cout << "输入数组(回车结束)：";
    double i;
    while (cin >> i)
    {
        vec.push_back(i);
        if (cin.get() == '\n')
            break;
    }
    vec=quicksort(vec);
    int num = vec.size();
    cout << "排序后:";
    for (int k = 0;k < num;k++)
    {
        cout << " " << vec[k];
    }
    return 0;
}
vector<double> quicksort(vector<double>&v)
{
    int n = v.size();
    if(n <= 1)
        return v;
    else
    {
        vector<double> small;
        vector<double> big;
        int mn = n / 2;
        double mid = v[mn];
        for (int k = 0;k < n;k++)
        {
            if(k == mn)
                continue;
            if (v[k] > mid)
                big.push_back(v[k]);
            else
                small.push_back(v[k]);
        }
        small = quicksort(small);
        big = quicksort(big);
        small.push_back(v[mn]);
        small.insert(small.end(),big.begin(),big.end());
        return small;
    }
}
