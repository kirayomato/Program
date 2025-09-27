#include<iostream>
using namespace std;
int n;
int m1[1005], m2[1005];
int dp[1005][1005];
int main()
{
	cin >> n;
	for (int i = 0;i < n;++i)
		cin >> m1[i];
	for (int i = 0;i < n;++i)
		cin >> m2[i];
	dp[0][0] = 0;
	dp[1][0] = 0;
	dp[0][1] = 0;
	for(int i=1;i<n+1;++i)
	{
		for (int j = 1;j < n+1;++j)
		{
			if (m1[i-1] == m2[j-1])
				dp[i][j] = dp[i - 1][j - 1] + 1;
			else
				dp[i][j] = max(dp[i][j - 1], dp[i - 1][j]);
		}
	}
	cout << dp[n][n];
	return 0;
}

// P1439 两个排列的最长公共子序列
// https://www.luogu.com.cn/problem/P1439
int num1[N], num2[N], dp[N];
int pos[N];
int solve()
{
	cin >> n;
	for (int i = 0; i < n; ++i)
	{
		cin >> num1[i];
		pos[num1[i]] = i;
	}
	for (int i = 0; i < n; ++i)
	{
		cin >> num2[i];
		num2[i] = pos[num2[i]];
		dp[i] = inf;
	}
	for (int i = 0; i < n; ++i)
		*lower_bound(dp, dp + n, num2[i]) = num2[i];
	cout << lower_bound(dp, dp + n, inf) - dp;
	return 0;
}
