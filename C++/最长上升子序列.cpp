#define INF 999999
#include<iostream>
using namespace std;
int n, ans = 1;
int num[2501], dp[2501];
int main()
{
	cin >> n;
	for (int i = 0;i < n;++i)
	{
		cin >> num[i];
		dp[i] = INF;
	}
	for (int i = 0;i < n;++i)
		*lower_bound(dp, dp+n, num[i]) = num[i];
	cout << lower_bound(dp, dp + n, INF)-dp;
	return 0;
}
