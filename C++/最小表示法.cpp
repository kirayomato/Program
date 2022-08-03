string minimal_string(string s)
{
    int n = s.size();
    int i = 0, j = 1, k = 0;
    while (i < n && k < n)
    {
        if (s[(i + k) % n] == s[(j + k) % n])
        {
            k++;
            continue;
        }
        if (s[(i + k) % n] < s[(j + k) % n])
            j += k + 1;
        else
            i += k + 1;
        if (i == j)
            j++;
        k = 0;
    }
    return s.substr(i, n - i) + s.substr(0, i);
}
