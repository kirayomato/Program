#include<iostream>
#include<vector>
#include<sstream>
using namespace std;
vector<int> vectorin(string s)
{
	stringstream ss;
	ss << s;
	char a;
	vector<int> t;
	while (ss>>a)
	{
		const char* p = &a;
		int n = atoi(p);
		t.push_back(n);
	}
	ss.clear();
	return t;
}
