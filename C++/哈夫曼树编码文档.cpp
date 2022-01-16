#include<iostream>
#include<string>
#include<queue>
#include<unordered_map>
using namespace std;
struct node
{
    node* left;
    node* right;
    int value;
    int cha;
    node():left(NULL),right(NULL),value(0),cha(0){}
    node(int x,int y):left(NULL),right(NULL),value(x),cha(y){}
};
bool operator<(const node& a, const node& b)
{
    if (a.value == b.value)
        return a.cha > b.cha;
    return a.value > b.value;
}
void CreateHT();
void ins(const node& n, const string& s);
bool hason(const node& n);
string encode(const string& s);
string decode(const string& s);
string s, s1, s2;
int num[128];
priority_queue<node> p;
unordered_map<string, char> mpa;
unordered_map<char, string> mpb;
int main()
{
    ios::sync_with_stdio(false);
    getline(cin, s);
    int n=s.size();
    for (int i = 0;i < n;++i)
        ++num[(int)s[i]];
    for (int i = 0;i < 128;++i)
        if (num[i] > 0)
            p.push(node(num[i], i));
    CreateHT();
    ins(p.top(), "");
    s1 = encode(s);
    cout << "编码:" << s1 << endl;
    s2 = decode(s1);
    cout << "解码:" << s2 << endl;
    return 0;
}
void CreateHT()
{
    node n1, n2, n3;
    while (p.size() > 1)
    {
        node* n1 = new node(p.top());p.pop();
        node* n2 = new node(p.top());p.pop();
        n3 = node(n1->value + n2->value, 128);
        if (hason(*n1))
        {
            n3.right = n1;
            n3.left = n2;
        }
        else
        {
            n3.right = n2;
            n3.left = n1;
        }
        p.push(n3);
    }
}
void ins(const node& n, const string& s)
{
    if (n.cha < 128)
    {
        mpa[s] = (char)n.cha;
        mpb[(char)n.cha] = s;
    }
    if (n.left != NULL)
        ins(*n.left, s + "0");
    if (n.right != NULL)
        ins(*n.right, s + "1");
}
bool hason(const node& n)
{
    if (n.left != NULL || n.right != NULL)
        return true;
    else
        return false;
}
string encode(const string& s)
{
    string s1 = "";
    int n=s.size();
    for (int i = 0;i < n;++i)
        s1 += mpb[s[i]];
    return s1;
}
string decode(const string& s)
{
    string s0 = "";
    string s1 = "";
    int n=s.size();
    for (int i = 0;i < n;++i)
    {
        s0 += s[i];
        if (mpa.find(s0) != mpa.end())
        {
            s1 += mpa[s0];
            s0 = "";
        }
    }
    return s1;
}
