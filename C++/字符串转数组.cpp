#include<vector>
#include<sstream>
vector<int> vectorin(string s)
{
	stringstream ss;
	ss << s;
	char a;
	vector<int> t;
	while (ss >> a)
	{
		int n = a-'0';
		t.push_back(n);
	}
	ss.clear();
	return t;
}
