vector<int> prime(int n)
{
	vector<int> vis(n + 1), pri;
	F(2, i, n + 1)
	{
		if (!vis[i])
		{
			pri.emplace_back(i);
			vis[i] = 1;
		}
		FA(j, pri)
		{
			if (i * j > n)
				break;
			vis[(ll)i * j] = 1;
			if (i % j == 0)
				break;
		}
	}
	return vis;
}
vector<int> euler(int n)
{
	vector<int> euler(n + 1), pri;
	euler[1] = 1;
	F(2, i, n + 1)
	{
		if (!euler[i])
		{
			pri.emplace_back(i);
			euler[i] = i - 1;
		}
		FA(j, pri)
		{
			if (i * j > n)
				break;
			if (i % j == 0)
			{
				euler[(ll)i * j] = euler[i] * j;
				break;
			}
			else
				euler[(ll)i * j] = euler[i] * euler[j];
		}
	}
	return euler;
}
vector<int> mobius(int n)
{
	vector<int> mobius(n + 1), vis(n + 1), pri;
	mobius[1] = 1;
	vis[1] = 1;
	F(2, i, n + 1)
	{
		if (!vis[i])
		{
			pri.emplace_back(i);
			mobius[i] = -1;
		}
		FA(j, pri)
		{
			if (i * j > n)
				break;
			vis[(ll)i * j] = 1;
			if (i % j == 0)
			{
				mobius[(ll)i * j] = 0;
				break;
			}
			else
				mobius[(ll)i * j] = mobius[i] * mobius[j];
		}
	}
	return mobius;
}
vector<int> linear_sieve(int n)
{
	vector<int> f(n + 1), num(n + 1), pri;
	num[1] = 1;
	f[1] = 1;
	F(2, i, n + 1)
	{
		if (!f[i])
		{
			pri.emplace_back(i);
			// 计算f(p)
			f[i] = 
			num[i] = 1;
		}
		FA(j, pri)
		{
			if (i * j > n)
				break;
			if (i % j == 0)
			{
				num[(ll)i * j] = num[i] + 1;
				int i0 = i / pow(j, num[i]);
				if (i0 == 1)
					f[(ll)i * j] =  // 计算f(p^k)
				else
					f[(ll)i * j] = f[i0] * f[(ll)i * j / i0];
				break;
			}
			else
			{
				f[(ll)i * j] = f[i] * f[j];
				num[(ll)i * j] = 1;
			}
		}
	}
	return f;
}
vector<int> theta0(int n)
{
	vector<int> theta0(n + 1), num(n + 1), pri;
	num[1] = 1;
	theta0[1] = 1;
	F(2, i, n + 1)
	{
		if (!theta0[i])
		{
			pri.emplace_back(i);
			theta0[i] = 2;
			num[i] = 1;
		}
		FA(j, pri)
		{
			if (i * j > n)
				break;
			if (i % j == 0)
			{
				num[(ll)i * j] = num[i] + 1;
				theta0[(ll)i * j] = theta0[i] / num[(ll)i * j] * (num[(ll)i * j] + 1);
				break;
			}
			else
			{
				num[(ll)i * j] = 1;
				theta0[(ll)i * j] = theta0[i] * theta0[j];
			}
		}
	}
	return theta0;
}
vector<int> theta1(int n)
{
	vector<int> theta1(n + 1), num(n + 1), pri;
	num[1] = 1;
	theta1[1] = 1;
	F(2, i, n + 1)
	{
		if (!theta1[i])
		{
			pri.emplace_back(i);
			theta1[i] = i + 1;
			num[i] = i + 1;
		}
		FA(j, pri)
		{
			if (i * j > n)
				break;
			if (i % j == 0)
			{
				num[(ll)i * j] = num[i] * j + 1;
				theta1[(ll)i * j] = theta1[i] / num[i] * num[(ll)i * j];
				break;
			}
			else
			{
				num[(ll)i * j] = 1 + j;
				theta1[(ll)i * j] = theta1[i] * theta1[j];
			}
		}
	}
	return theta1;
}
