#include<iostream>
#include<vector>

using namespace std;

int a;
int n, i,temp;

int main()
{
    cout << "输入数组长度：";
    cin >> a;
    vector<int> x(a);
    cout << "输入数组：";
    for (i = 0;i < a;++i)
        cin>> x[i];
    for (i = 0;i < a;++i)
    {
        for (n = 0; n < a-1;++n)
        {
            if (x[n] > x[n + 1])
            {
                temp = x[n + 1];
                x[n + 1] = x[n];
                x[n] = temp;
            }
            
        }
        
    }
    cout << "排序后:";
    for (i = 0;i < a;++i)
        cout << x[i]<<" ";

}
