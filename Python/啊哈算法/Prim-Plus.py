a = list(map(int, input().split()))
first, nxt, dis = [-1] * (a[0] + 1), [0] * (2 * a[1] + 1), [99999] * (a[0] + 1)
book = [0] * (a[0] + 1)
book[1] = 1
dis[1] = 0
t = [[]]
size = a[0]
for _ in range(a[1]):
    i = list(map(int, input().split()))
    t.append(i)
    t.append([i[1], i[0], i[2]])
for i in range(1, 2 * a[1] + 1):
    nxt[i] = first[t[i][0]]
    first[t[i][0]] = i

pos, h = [i for i in range(a[0] + 1)], [i for i in range(a[0] + 1)]


def sw(x, y):
    h[x], h[y] = h[y], h[x]
    pos[h[x]], pos[h[y]] = pos[h[y]], pos[h[x]]


def sd(x):
    t = x
    while 2 * x <= size:
        if dis[h[x]] > dis[h[x * 2]]:
            t = x * 2
        if 2 * x + 1 <= size:
            if dis[h[t]] > dis[h[2 * x + 1]]:
                t = 2 * x + 1
        if t != x:
            sw(x, t)
            x = t
        else:
            break


def su(x):
    if x == 1:
        return
    else:
        while x != 1:
            if dis[h[x]] < dis[h[int(x / 2)]]:
                sw(x, int(x / 2))
                x = int(x / 2)
            else:
                break


def pop():
    global size
    t = h[1]
    pos[h[size]] = 1
    pos[h[1]] = -1
    h[1] = h[size]
    size -= 1
    sd(1)
    return t


for i in reversed(range(1, int(size / 2) + 1)):
    sd(i)
map = [0] * (a[0] + 1)
for _ in range(a[0]):
    j = pop()
    book[j] = 1
    k = first[j]
    while k != -1:
        if book[t[k][1]] == 0 and dis[t[k][1]] > t[k][2]:
            dis[t[k][1]] = t[k][2]
            map[t[k][1]] = t[k]
            su(pos[t[k][1]])
        k = nxt[k]
for i in sorted(map[2:]):
    print('%d -> %d = %d' % (i[0], i[1], i[2]))
