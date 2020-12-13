#include<iostream>
#include<vector>
vector<int> vectorcin()
{
	char a;
	vector<int> t;
	while (a=cin.get())
	{
		if (a == '\n')
			break;
		const char* p = &a;
		int n = atoi(p);
		t.push_back(n);
	}
	return t;
}
