struct mat {
	int x; int y;
	vector<vector<ll>> mt;
	mat() :x(0), y(0), mt(vector<vector<ll>>(0)) {};
	mat(int a, int b) :x(a), y(b), mt(vector<vector<ll>>(x, vector<ll>(y))) {};
	mat(vector<vector<ll>>v) :x(v.size()), y(v[0].size()), mt(v) {};
	mat operator *(const mat& m1)
	{
		if(y!=m1.x)
			return mat();
		mat ans = mat(x, m1.y);
		F(0,i,x)
			F(0,j,m1.y)
				F(0,k,y)
					ans.mt[i][j] += mt[i][k] * m1.mt[k][j];
		return ans;
	}
	mat operator *(const ll a)
	{
		F(0, i, x)
			F(0, j, y)
				mt[i][j] *= a;
		return *this;
	}
	mat operator +(const mat& m1)
	{
		if (m1.x != x || m1.y != y)
			return mat();
		F(0, i, x)
			F(0, j, y)
				mt[i][j] += m1.mt[i][j];
		return *this;
	}
};
mat unitmat(int n)
{
	mat ans = mat(n, n);
	F(0, i, n)
		ans.mt[i][i] = 1;
	return ans;
}
mat matmodmul(const mat& m1, const mat& m2, int mod)
{
	if (m1.y != m2.x)
		return mat();
	mat ans = mat(m1.x, m2.y);
	F(0, i, m1.x)
		F(0, j, m2.y)
			F(0, k, m1.y)
			ans.mt[i][j] = (ans.mt[i][j]+m1.mt[i][k] * m2.mt[k][j])%mod;
	return ans;
}
ostream& operator<<(ostream& os, const mat& m)
{
	F(0, i, m.x)
	{
		F(0, j, m.y)
		{
			cout << m.mt[i][j] << " ";
		}
		cout << "\n";
	}
	return os;
}
mat quickpow(mat k, ll t, ll mod) 
{
	mat res = unitmat(k.x);
	while (t) {
		if (t & 1)
			res = matmodmul(res, k, mod);

		k = matmodmul(k, k, mod);
		t >>= 1;
	}
	return res;
}
