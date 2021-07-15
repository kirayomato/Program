#include<queue>
using namespace std;
//pair 
typedef pair<int, int> p;
struct cmp
{
    bool operator()(const p p1, const p p2)
	{
		if(p1.second != p2.second)
			return p1.second > p2.second;//小顶堆
		return p1.first > p2.first;
	}
};
priority_queue<p, vector<p>, cmp> que;

//结构体
struct node
{
    int value;
    node() :value(0) {}
    node(int x) :value(x) {}
};
bool operator<(const node &a, const node &b)
{
    return a.value > b.value;//小顶堆
}
priority_queue<node> p;
