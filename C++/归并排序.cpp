void mers(vector<int>&v)
{
    int n=v.size();
    if(n==1)
        return;
    else
    {
        vector<int> v1{v.begin(),v.begin()+n/2};
        vector<int> v2{v.begin()+n/2,v.end()};
        int k1=v1.size(),k2=v2.size();
        mers(v1);
        mers(v2);
        int l=0,r=0;
        while(l+r<n)
        {
            if(l<k1&&r<k2)
            {
                if(v1[l]<=v2[r])
                {
                    v[l+r]=v1[l];
                    ++l;
                }
                else
                {
                    v[l+r]=v2[r];
                    ++r;
                }
            }
            else if(l<k1)
            {
                v[l+r]=v1[l];
                ++l;
            }
            else
            {
                v[l+r]=v2[r];
                ++r;
            }
        }
    }
}
