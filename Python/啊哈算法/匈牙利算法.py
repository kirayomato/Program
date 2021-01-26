[n, m] = list(map(int, input().split()))
mp = []
for _ in range(n + 1):
    mp.append([0] * (n + 1))
for _ in range(m):
    [x, y] = list(map(int, input().split()))
    mp[x][y] = 1
match = [0] * (n + 1)


def dfs(x):
    for i in range(1, n + 1):
        if book[i] == 0 and mp[x][i] == 1:
            book[i] = 1
            if match[i] == 0 or dfs(match[i]):
                match[i] = x
                return True
    return False


for i in range(1, n + 1):
    book = [0] * (n + 1)
    dfs(i)
for i in range(1, n + 1):
    if match[i] != 0:
        print("%d -> %d" % (i, match[i]))
