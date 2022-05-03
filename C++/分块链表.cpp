int n, m;
int t, x, y, z;
int MAXN = 10000;
struct Block
{
	vector<int> v;
	Block* next;
	Block() :next(nullptr) { v.reserve(2 * MAXN); }
	Block(vector<int> &vt, Block* b) :v(vt), next(b) { v.reserve(2*MAXN); }
};
void split(Block* b)
{
	vector<int> v1 = { b->v.begin(),b->v.begin() + MAXN };
	vector<int> v2 = { b->v.begin() + MAXN,b->v.end() };
	v1.reserve(2 * MAXN);
	v2.reserve(2 * MAXN);
	b->v = v1;
	b->next = new Block(v2, b->next);
	
}
void insert(Block* b0, int val, int pos)
{
	Block* b = b0;
	while (b->next && pos > b->v.size())
	{
		pos -= b->v.size();
		b = b->next;
	}
	if (b->v.size() == 0 || pos > b->v.size())
		b->v.emplace_back(val);
	else
		b->v.emplace(b->v.begin() + pos, val);
	if (b->v.size() == 2 * MAXN)
		split(b);
}
int query(Block* b0, int pos)
{
	Block* b = b0;
	while (b->next && pos > b->v.size())
	{
		pos -= b->v.size();
		b = b->next;
	}
	return b->v[pos - 1];
}
void solve()
{
	cin >> n >> m;
	Block* head = new Block();
	F(0, i, n)
	{
		cin >> t;
		insert(head, t, i);
	}
	F(0, i, m)
	{
		cin >> x >> y;
		if (x == 1)
		{
			cin >> z;
			insert(head, y, z - 1);
		}
		else
			cout << query(head, y) << '\n';
	}


}
