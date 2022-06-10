int num, last;
struct node
{
	int len, fail, cnt;
	int ch[26] = { 0 };
	node() :len(0), fail(0), cnt(0) {};
	node(int l) :len(l), fail(0), cnt(0) {};
}pam[N];
int add(int l)
{
	pam[num] = node(l);
	return num++;
}
void init() 
{  
	add(0);add(-1);
	pam[0].fail = 1;
}
int getfail(int x,int p) 
{  
	while (s[p - pam[x].len-1] != s[p])
		x = pam[x].fail;
	return x;
}
void insert(char c,int p) 
{  
	int now = getfail(last,p);
	if (!pam[now].ch[c - 'a'])
	{
		int x = add(pam[now].len + 2);
        int t = getfail(pam[now].fail,p);
		pam[x].fail = pam[t].ch[c - 'a'];
		pam[now].ch[c - 'a'] = x;
	}
	last = pam[now].ch[c - 'a'];
	pam[last].cnt++;
}
void update()
{
	_F(num - 1, i, 0)
		pam[pam[i].fail].cnt += pam[i].cnt;
}
