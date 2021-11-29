#include<queue>
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

//another version for pair
typedef pair<int, int> p;
auto cmp = [&](const p& p1, const p& p2)
{
    if (p1.second != p2.second)
        return p1.second > p2.second;//小顶堆
    return p1.first > p2.first;
};
priority_queue<p, vector<p>, decltype(cmp)> que(cmp);

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
priority_queue<node> que;

//力扣链表用
struct ListNode {
    int val;
    ListNode* next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode* next) : val(x), next(next) {}
};
struct ln
{
    ListNode* t;
    ln(ListNode* ln) : t(ln) {}
    bool operator<(const ln& a) const
    {
        return t->val > a.t->val;
    }
};
priority_queue<ln> que;
