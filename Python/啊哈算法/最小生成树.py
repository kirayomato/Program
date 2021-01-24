a = list(map(int, input().split()))
l = []
for i in range(a[0] + 1):
    l.append(i)
t = []
for _ in range(a[1]):
    t.append(list(map(int, input().split())))


def quicksort(l):
    if len(l) <= 1:
        return l
    else:
        n = l[int(len(l) / 2)][2]
        big = []
        small = []
        for i in l[int(len(l) / 2) + 1:] + l[:int(len(l) / 2)]:
            if i[2] <= n:
                small.append(i)
            else:
                big.append(i)
        return quicksort(small) + [l[int(len(l) / 2)]] + quicksort(big)


t = quicksort(t)


def gf(i):
    if l[i] == i:
        return i
    else:
        l[i] = gf(l[i])
        return l[i]


def mer(x, y):
    i = gf(x)
    j = gf(y)
    if i != j:
        l[j] = i


ans = []
for i in t:
    x = gf(i[0])
    y = gf(i[1])
    if x != y:
        ans.append(i)
        l[y] = x

for i in sorted(ans):
    print('%d -> %d = %d' % (i[0], i[1], i[2]))
