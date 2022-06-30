vector<int> countPrimes(int n) 
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
            int k=i*i;
            while(k<=n)
            {
                pri[k]=0;
                k+=i;
            }
        }
        ans.emplace_back(i);
    }
    return ans;
}
