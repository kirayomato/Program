vector<int> vecadd(vector<int> a, vector<int> b)
{
	while (a.size() < b.size())
		a.insert(a.begin(), 0);
	while (a.size() > b.size())
		b.insert(b.begin(), 0);
	vector<int>::reverse_iterator ita;
	vector<int>::reverse_iterator itb;
	int t1, t2 = 0;
	for (ita = a.rbegin(), itb = b.rbegin();ita != a.rend(), itb != b.rend();++ita, ++itb)
	{
		t1 = *ita + *itb + t2;
		if (t1 >= 10)
		{
			t2 = t1 / 10;
			t1 %= 10;
		}
		else
			t2 = 0;
		*ita = t1;
	}
	if (t2 > 0)
		a.insert(a.begin(), t2);
	return a;
}
