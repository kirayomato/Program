#include<iostream>
using namespace std;
int n,ans=1;
int num[2501], dp[2501];
int main()
{
	cin >>n;
	for (int i = 0;i < n;++i)
	{
		cin >> num[i];
		dp[i] = 1;
	}
	for (int i = 0;i < n;++i)
	{
		for (int j = 0;j < i;++j)
		{
			if (num[i] > num[j])
				dp[i] = max(dp[i], dp[j] + 1);
		}
		ans = max(ans, dp[i]);
	}
	cout << ans;
	return 0;
}
