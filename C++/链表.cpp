#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;
struct node
{
    int val;
    node* left;
    node* right;
    node() :val(NULL), left(nullptr), right(nullptr) {}
    node(int x) :val(x), left(nullptr), right(nullptr) {}
    node(int x, node* l) :val(x), left(l), right(nullptr) {}
};
vector<node*> mp;
int n, q;
bool rev = false;
void insert(node* l, node* i)
{
    i->left->right = i->right;
    i->right->left = i->left;
    i->left = l;
    i->right = l->right;
    l->right->left = i;
    l->right = i;

}
void print(node* head)
{
    for (int i = 0; i < n; ++i)
    {
        if (!rev)
            head = head->right;
        else
            head = head->left;
        printf("%d ", head->val);
    }
}
int main()
{
    scanf("%d%d", &n, &q);
    mp.resize(n+1);
    node* head = new node(0);
    node* h0 = head;
    for (int i = 0; i < n; ++i)
    {
        int k;
        scanf("%d", &k);
        node* t = new node(k, h0);
        mp[k] = t;
        h0->right = t;
        h0 = t;
    }
    node* tail = new node(n+1, h0);
    h0->right = tail;
    while (q--)
    {
        int t, x, y;
        node *p1=head,*p2 = head;
        scanf("%d",&t);
        if (t != 4)
        {
            scanf("%d%d", &x, &y);
            p1 = mp[x];
            p2 = mp[y];
        }
        switch (t)
        {

        case 1:
        {
            if (!rev)
                insert(p2, p1);
            else
                insert(p2->left, p1);
            break;
        }
        case 2:
        {
            if (!rev)
                insert(p2->left, p1);
            else
                insert(p2, p1);
            break;
        }
        case 3:
        {
            p1->val = y;
            p2->val = x;
            mp[y] = p1;
            mp[x] = p2;
            break;
        }
        case 4:
        {
            node* p = tail;
            tail = head;
            head = p;
            rev ^= 1;
        }
        }
    }
    print(head);
    return 0;
}
