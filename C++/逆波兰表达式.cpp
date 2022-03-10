int Reverse_Polish_Notation(string s)
{
    string temp = "";
    stack<int> q1;
    int n = s.size();
    for (int i = 0; i < n; ++i)
    {
        if (s[i] != ' ')
            temp += s[i];
        if (s[i] == ' ' || i == n - 1)
        {
            if (temp[0] < '0' && temp.size() == 1)
            {
                int b = q1.top();
                q1.pop();
                int a = q1.top();
                q1.pop();
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
}
