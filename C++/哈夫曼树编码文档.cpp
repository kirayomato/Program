#include<iostream>
#include<string>
#include<queue>
#include<map>
using namespace std;
string s, s1, s2;
int num[128] = { 0 };
struct node
{
    node* left;
    node* right;
    int value;
    int cha;
};
bool operator<(node a, node b)
{
    if (a.value == b.value)
        return a.cha > b.cha;
    return a.value > b.value;
}
node crno(int x, int y)
{
    node n;
    n.value = x;
    n.cha = y;
    n.left = NULL;
    n.right = NULL;
    return n;
}
void CreateHT();
void ins(node n, string s);
priority_queue<node> p;
map<string, char> mpa;
map<char, string> mpb;
bool hason(node n);
string encode(string s);
string decode(string s);
int main()
{
    ios::sync_with_stdio(false);
    getline(cin, s);
    for (int i = 0;i < s.size();++i)
        ++num[(int)s[i]];
    for (int i = 0;i < 128;++i)
    {
        if (num[i] > 0)
            p.push(crno(num[i], i));
    }
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
        n3 = crno(n1->value + n2->value, 128);
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
void ins(node n, string s)
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
bool hason(node n)
{
    if (n.left != NULL || n.right != NULL)
        return true;
    else
        return false;
}
string encode(string s)
{
    string s1 = "";
    for (int i = 0;i < s.size();++i)
        s1 += mpb[s[i]];
    return s1;
}
string decode(string s)
{
    string s0 = "";
    string s1 = "";
    for (int i = 0;i < s.size();++i)
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
