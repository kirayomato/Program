#include<iostream>
#include<string>
#include<stack>
using namespace std;
string s,temp="";
stack<double> q1;
int main()
{
    ios::sync_with_stdio(false);
    getline(cin, s);
    for (int i = s.size();i >= 0;--i)
    {
        if(s[i] != ' ')
            temp = s[i] + temp;
        if (s[i] == ' '||i==0)
        {
            if (temp[0] < '0')
            {
                double a = q1.top();q1.pop();
                double b = q1.top();q1.pop();
                if (temp == "+")
                    q1.push(a + b);
                if (temp == "-")
                    q1.push(a - b);
                if (temp == "*")
                    q1.push(a * b);
                if (temp == "/")
                    q1.push(a / b);
            }
            else
                q1.push(stof(temp));
            temp = "";
        }
    }
    cout << q1.top();
    return 0;
}
