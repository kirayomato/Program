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
        return sorted(set(l))


for x in frange(a):
    print(x, end=' ')
