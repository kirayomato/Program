a = list(map(int, input().split()))
l = []
for i in range(a[0] + 1):
    l.append(i)


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


for _ in range(a[1]):
    t = list(map(int, input().split()))
    mer(t[0], t[1])

print(l[1:])
print(len([i for i in range(1, a[0]) if i == l[i]]))
