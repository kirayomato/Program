#include<queue>
using namespace std;
//pair 
typedef pair<int, int> P;
struct cmp
{
    bool operator()(const P p1, const P p2)
    {
        return p1.second > p2.second; //小顶堆
    }
};
priority_queue<P, vector<P>, cmp> que;

//结构体
struct node
{
    int value;
};
bool operator<(const node &a, const node &b)
{
    return a.value > b.value;//小顶堆。
}
priority_queue<node> p;
