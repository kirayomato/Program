vector<double>v[2];
vector<complex<double>>a, b;
void init(int n)
{
	v[0].resize(n + 1);
	v[1].resize(n + 1);
	F(1, i, n + 1)
	{
		v[0][i]=cos(2 * PI / i);
		v[1][i]=sin(2 * PI / i);
	}
}
void fft(vector<complex<double>>& a, int flag)
{
	int n = a.size();
	if (n == 1)
		return;
	int mid = n / 2;
	vector<complex<double>> f1(mid), f2(mid);
	for (int i = 0; i < n; i += 2)
	{
		f1[i / 2] = a[i];
		f2[i / 2] = a[i + 1];
	}
	fft(f1, flag);
	fft(f2, flag);
	complex<double> w0(1, 0), wn(v[0][n], flag * v[1][n]);
	F(0, i, mid)
	{
		a[i] = f1[i] + w0 * f2[i];
		a[i + n / 2] = f1[i] - w0 * f2[i];
		w0 *= wn;
	}
}
void solve()
{
	cin >> n >> m;
	int t = 1 << (int)(ceil(log2(n + m + 1)));
	a.resize(t);
	b.resize(t);
	F(0, i, n + 1)
		cin >> a[i];
	F(0, i, m + 1)
		cin >> b[i];
	init(t);
	fft(a, 1);
	fft(b, 1);
	F(0, i, t)
		a[i] *= b[i];
	fft(a, -1);
	F(0, i, n + m + 1)
		cout << a[i].real() / t << " ";

}
