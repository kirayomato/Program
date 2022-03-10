double Polish_Notation(string s)
{
    string temp = "";
    stack<double> q1;
    int n = s.size() - 1;
    for (int i = n; i >= 0; --i)
    {
        if (s[i] != ' ')
            temp = s[i] + temp;
        if (s[i] == ' ' || i == 0)
        {
            if (temp[0] < '0' && temp.size() == 1)
            {
                double a = q1.top();
                q1.pop();
                double b = q1.top();
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
                q1.push(stod(temp));
            temp = "";
        }
    }
    return q1.top();
}
