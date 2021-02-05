#include<iostream>
using namespace std;
int n, m;
long long dp[1001][1001];
int main()
{
	cin >> n>>m;
	dp[0][0] = 1;
	for(int i=1;i<=m;++i)
		for (int j = 0;j <= n;++j)
		{
			if (j >= i)
				dp[i][j] = dp[i - 1][j] + dp[i][j - i];
			else
				dp[i][j] = dp[i - 1][j];
		}
	cout << dp[m][n];
	return 0;
}
