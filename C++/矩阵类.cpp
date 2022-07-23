struct mat {
	int x; int y;
	vector<vector<int>> mt;
	mat() :x(0), y(0), mt(vector<vector<int>>(0)) {};
	mat(int a, int b) :x(a), y(b), mt(vector<vector<int>>(x, vector<int>(y))) {};
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
	mat operator *(const int a)
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
