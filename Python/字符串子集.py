a = input()


def fset(x):
    t = len(x)
    l1 = []
    l = []
    for j in range(1,2**t):
        s = ''
        for i in range(t):
            if j & 2**i:
                s += '1'
            else:
                s += '0'
        l1.append(s)
    for j in l1:
        s = ''
        for i in range(len(j)):
            if j[i] == '1':
                s += a[i]
        l.append(s)
    return l


for x in sorted(set(fset(a))):
    print(x, end=' ')
