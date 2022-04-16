vector<vector<int>>G;
vector<int>mp;
int fa[N][31];
void bfs(int s)
{
    bool vis[N]={0};
    queue<int> q;
    F(0, i, n)
        fill(fa[i], fa[i] + 31, -1);
    q.emplace(s);
    vis[s] = 1;
    mp[s] = 0;
    WE(q)
    {
        int i = FR(q);
        FA(j, G[i])
        {
            if (!vis[j])
            {
                q.emplace(j);
                vis[j] = 1;
                mp[j] = mp[i] + 1;
                fa[j][0] = i;
                int t = i;
                F(0, u, 31)
                {
                    if (fa[t][u] != -1)
                    {
                        fa[j][u + 1] = fa[t][u];
                        t = fa[t][u];
                    }
                    else
                        break;
                }
            }
        }
    }
}
int lca(int x, int y)
{
    if (mp[x] < mp[y])
        swap(x, y);
    int tmp = mp[x] - mp[y];
    _F(30, i, 0)
    {
        if (tmp & (1 << i))
        {
            x = fa[x][i];
            tmp ^= (1 << i);
        }
        if(!tmp)
            break
    }
    if (x != y)
    {
        _F(30, i, 0)
        {
            if (fa[x][i] != fa[y][i] && fa[x][i] != -1 && fa[y][i] != -1)
            {
                x = fa[x][i];
                y = fa[y][i];
            }
        }
        x = fa[x][0];
        y = fa[y][0];
    }
    return x;
}
