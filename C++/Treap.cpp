// https://www.luogu.com.cn/problem/P3369
mt19937 e(time(0));
unordered_map<int, int> cnt;
uniform_int_distribution<int> d(0, inf);
struct TreeNode
{
	int val;
	int size;
	int pri;
	TreeNode *left;
	TreeNode *right;
	TreeNode(int x) : val(x), size(1), pri(d(e)), left(nullptr), right(nullptr) {}
};
typedef pair<TreeNode *, TreeNode *> ptt;
inline int getsize(TreeNode *root)
{
	return root ? root->size : 0;
}
inline void pu(TreeNode *root)
{
	if (root)
		root->size = getsize(root->left) + getsize(root->right) + cnt[root->val];
}
ptt split(TreeNode *root, int key)
{
	if (root == nullptr)
		return make_pair(nullptr, nullptr);
	if (key < root->val)
	{
		ptt o = split(root->left, key);
		root->left = o.second;
		pu(root);
		return make_pair(o.first, root);
	}
	else
	{
		ptt o = split(root->right, key);
		root->right = o.first;
		pu(root);
		return make_pair(root, o.second);
	}
}
TreeNode *merge(TreeNode *u, TreeNode *v)
{
	if (u == nullptr)
		return v;
	if (v == nullptr)
		return u;
	if (u->pri < v->pri)
	{
		u->right = merge(u->right, v);
		pu(u);
		return u;
	}
	else
	{
		v->left = merge(u, v->left);
		pu(v);
		return v;
	}
}
void insert(TreeNode *&root, int val)
{
	ptt p = split(root, val);
	if (cnt[val] == 1)
		p.first = merge(p.first, new TreeNode(val));
	root = merge(p.first, p.second);
	pu(root);
}
void del(TreeNode *&root, int val)
{
	if (root->val == val)
	{
		root->size--;
		if (cnt[val])
			return;
		ptt o = split(root, val - 1);
		ptt p = split(o.second, val);
		root = merge(o.first, p.second);
	}
	else if (val > root->val)
		del(root->right, val);
	else
		del(root->left, val);

	pu(root);
}
int findrk(TreeNode *root, int val)
{
	if (!root)
		return 1;
	if (val < root->val)
		return findrk(root->left, val);

	if (val > root->val)
		return cnt[root->val] + getsize(root->left) + findrk(root->right, val);

	return getsize(root->left) + 1;
}
int findx(TreeNode *root, int val)
{
	int l = getsize(root->left);

	if (val <= l)
		return findx(root->left, val);

	if (val > l + cnt[root->val])
		return findx(root->right, val - l - cnt[root->val]);

	return root->val;
}
int find_prev(TreeNode *root, int val)
{
	if (!root)
		return -inf;

	if (val > root->val)
		return max(find_prev(root->right, val), root->val);
	else
		return find_prev(root->left, val);
}
int find_next(TreeNode *root, int val)
{
	if (!root)
		return inf;

	if (val >= root->val)
		return find_next(root->right, val);
	else
		return min(find_next(root->left, val), root->val);
}
int x, y;
TreeNode *root = nullptr;
void solve()
{
	cin >> n;
	F(0, i, n)
	{
		cin >> x >> y;
		if (x == 1)
		{
			cnt[y]++;
			insert(root, y);
		}
		else if (x == 2)
		{
			cnt[y]--;
			del(root, y);
		}
		else if (x == 3)
			cout << findrk(root, y) << "\n";
		else if (x == 4)
			cout << findx(root, y) << "\n";
		else if (x == 5)
		{
			int j = find_prev(root, y);
			if (j == -inf)
				cout << "NOT FOUND\n";
			else
				cout << j << "\n";
		}
		else if (x == 6)
		{
			int j = find_next(root, y);
			if (j == inf)
				cout << "NOT FOUND\n";
			else
				cout << j << "\n";
		}
	}
}
