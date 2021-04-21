a = input()


def frange(x):
    t = len(x)
    if t == 1:
        return [x]
    else:
        l = []
        for i in range(t):
            lp = frange(x[:i] + x[i + 1:])
            l += [x[i] + j for j in lp]
        return l


for x in sorted(set(frange(a))):
    print(x, end=' ')
