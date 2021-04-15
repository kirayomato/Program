a = input()


def fset(x):
    t = len(x)
    l = []
    for j in range(1, 2**t):
        s = ""
        for i in range(t):
            if j & 2**i:
                s += a[i]
        l.append(s)
    return l


for x in sorted(set(fset(a))):
    print(x, end=' ')
