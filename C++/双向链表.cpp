struct node
{
    int val;
    node* left;
    node* right;
    node() :val(NULL), left(nullptr), right(nullptr) {}
    node(int x) :val(x), left(nullptr), right(nullptr) {}
    node(int x, node* l) :val(x), left(l), right(nullptr) {}
};
