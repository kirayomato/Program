a = list(map(int, input().split()))
imap = []
u = -1
for _ in range(a[0]):
    imap.append(list(map(int, input().split())))


def dfs(x, y):
    global u, imap
    next = [[0, -1], [-1, 0], [1, 0], [0, 1]]
    for i in range(4):
        tx = x + next[i][0]
        ty = y + next[i][1]
        if tx < 0 or ty < 0 or tx >= a[0] or ty >= a[1]:
            continue
        elif imap[tx][ty] <= 0:
            continue
        else:
            imap[tx][ty] = u
            dfs(tx, ty)


for i in range(a[0]):
    for j in range(a[1]):
        if imap[i][j] <= 0:
            continue
        else:
            dfs(i, j)
            u -= 1
for i in imap:
    print(i)
