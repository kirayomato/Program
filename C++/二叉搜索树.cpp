int cnt[2 * N];
struct TreeNode
{
	int val;
	int size;
	TreeNode* left;
	TreeNode* right;
	TreeNode(int x) : val(x), size(1), left(nullptr), right(nullptr) {}
};
inline int getsize(TreeNode* root)
{
	return root ? root->size : 0;
}
inline void upt(TreeNode* root)
{
	if (root)
		root->size = getsize(root->left) + getsize(root->right) + cnt[root->val + N];
}
void insert(TreeNode** root, int val)
{
	if (*root == nullptr)
	{
		*root = new TreeNode(val);
		return;
	}
	(*root)->size++;
	if (val > (*root)->val)
		insert(&((*root)->right), val);
	if (val < (*root)->val)
		insert(&((*root)->left), val);
}
void de(TreeNode** root)
{
	TreeNode* r = (*root)->left;
	stack<TreeNode*>st;
	st.emplace(r);
	if (!r->right)
	{
		r->right = (*root)->right;
		*root = r;
		return;
	}
	while (r->right && r->right->right)
	{
		r = r->right;
		st.emplace(r);
	}
	(*root)->val = r->right->val;
	r->right = r->right->left;
	WE(st)
	{
		upt(st.top());
		st.pop();
	}
}
void del(TreeNode** root, int val)
{
	if ((*root)->val == val)
	{
		(*root)->size--;
		if (cnt[val + N])
			return;
		int ls = getsize((*root)->left);
		int rs = getsize((*root)->right);
		if (!(ls || rs))
			(*root) = nullptr;
		else if (!ls)
			(*root) = (*root)->right;
		else if (!rs)
			(*root) = (*root)->left;
		else
			de(root);
	}
	else if (val > (*root)->val)
		del(&(*root)->right, val);
	else
		del(&(*root)->left, val);
	upt(*root);
}
int findrk(TreeNode* root, int val)
{
	if (val < root->val)
		return findrk(root->left, val);
	if (val > root->val)
		return cnt[root->val + N] + getsize(root->left) + findrk(root->right, val);
	return getsize(root->left) + 1;
}
int findx(TreeNode* root, int val)
{
	int l = getsize(root->left);
	if (val <= l)
		return findx(root->left, val);
	if (val > l + cnt[root->val + N])
		return findx(root->right, val - l - cnt[root->val+N]);
	return root->val;
}
int find_prev(TreeNode* root, int val)
{
	if (!root)
		return -inf;
	if (val > root->val)
		return max(find_prev(root->right, val), root->val);
	else
		return find_prev(root->left, val);
}
int find_next(TreeNode* root, int val)
{
	if (!root)
		return inf;
	if (val >= root->val)
		return find_next(root->right, val);
	else
		return min(find_next(root->left, val), root->val);
}
int x, y;
TreeNode* root = nullptr;
void solve()
{
	cin >> n;
	F(0, i, n)
	{
		cin >> x >> y;
		if (x == 1)
		{
			cnt[y + N]++;
			insert(&root, y);
		}
		else if (x == 2)
		{
			cnt[y + N]--;
			del(&root, y);
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
