vector<int> EratosthenesPrimes(int n) 
{
    vector<int> ans,pri(n+1);
    F(1,i,n+1)
        pri[i]=i;
    F(2,i,n+1)
    {
        if(pri[i]==0)
            continue;
        if(i<=sqrt(n))
        {
			for(int k=i*i;k<=n;k+=i)
			{
				pri[k] = 0;
				b[k] *= i;
			}
        }
        ans.emplace_back(i);
    }
    return ans;
}
