#include <iostream>
#include <vector>
using namespace std;
vector<int> x;
void dead(vector<int> x,int m);
int n,m,temp=-1;
int main()
{
    cout << "总人数：";
    cin >>n;
    cout << "间隔：";
    cin >> m;
    for (int i = 0;i < n;++i)
    {
        x.push_back(i+1);
    }
    dead(x,m);
    return 0;
}
void dead(vector<int> x, int m)
{
    if (x.end()-x.begin() == 1)
           cout << endl<<"最后一位："<<x[0];
    else
    {
        temp += m;
        while (temp >= end(x) - x.begin())
            temp -= x.end() - x.begin();
        cout << *(begin(x) + temp)<<" ";
        x.erase(begin(x) + temp);
        temp -= 1;
        dead(x,m);    
    }
}
