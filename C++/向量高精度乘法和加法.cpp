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
	while (*a.begin() == 0&&a.size()>1)
		a.erase(a.begin());
	return a;
}
vector<int> vecmul(vector<int> x, vector<int> b)
{
	while (x.size() < b.size())
		x.insert(x.begin(), 0);
	while (x.size() > b.size())
		b.insert(b.begin(), 0);
	vector<int>::reverse_iterator ita;
	vector<int>::reverse_iterator itb;
	vector<int> t;
	for (itb = b.rbegin(); itb != b.rend(); ++itb)
	{
		int t1, t2 = 0;
		vector<int>a = x;
		for (ita = a.rbegin(); ita != a.rend();++ita)
		{
			t1 = *ita * *itb + t2;
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
		t = vecadd(t, a);
		x.push_back(0);
	}
	while (*t.begin() == 0 && t.size() > 1)
		t.erase(t.begin());
	return t;
}
