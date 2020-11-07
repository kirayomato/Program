#include <iostream>
#include <vector>
using namespace std;
vector<int> vec0,vec1;

int main()
{
    int n;
    cout << "输入需要行数:";
    cin >> n;
    for (int i = 0;i < n; i++)
    {
        vec1.push_back(1);
        int t = vec1.size();
        cout << endl;
        for (int k = 0;k < t;k++)
            cout << vec1[k] << " ";
        vec0 = vec1;
        for (int k = 1;k < t;k++)
            vec1[k] = vec0[k] + vec0[k - 1];
    }
    return 0;
}
