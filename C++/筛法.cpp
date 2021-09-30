#include <vector>
using namespace std;
vector<int> FilterPrime(int num)
{
    vector<int> vec(num + 1);
    for (int i = 0;i <= num;i++)
        vec[i] = i;
    vec[1] = 0;
    for (int i = 2;i <= num/2;i++)
        if (vec[i] != 0)
            for (int t = 2;t * i <= num;t++)
                vec[i * t] = 0;
    for (vector<int>::iterator it = vec.begin();it != vec.end();)
    {
        if (*it == 0)
            it = vec.erase(it);
        else
            it++;
    }
    return vec;
}
