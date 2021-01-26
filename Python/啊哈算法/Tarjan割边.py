a = list(map(int, input().split()))
first, nxt = [-1] * (a[0] + 1), [0] * (2 * a[1] + 1)
flag, num, low = [0] * (a[0] + 1), [0] * (a[0] + 1), [0] * (a[0] + 1)
t = [[]]

for _ in range(a[1]):
    i = list(map(int, input().split()))
    t.append(i)
    t.append([i[1], i[0]])
for i in range(1, 2 * a[1] + 1):
    nxt[i] = first[t[i][0]]
    first[t[i][0]] = i
index = 0


def dfs(i, j):
    global index
    child = 0
    index += 1
    num[i] = low[i] = index
    k = first[i]
    while k != -1:
        x = t[k][1]
        if num[x] == 0:
            dfs(x, i)
            low[i] = min(low[i], low[x])
            if low[x] > num[i]:
                print("%d -> %d" % (i, x))
        elif x != j:
            low[i] = min(low[i], low[x])
        k = nxt[k]


dfs(1, 1)
