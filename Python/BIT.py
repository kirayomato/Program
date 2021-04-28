from math import log
a = list(map(eval, input().split()))


def bit(list):
    n = len(list)
    b = [0] * n
    for i in range(1, n + 1):
        j = i - 1
        b[j] += a[j]
        t = int(log(i & -i, 2))
        if t > 0:
            b[j] += b[j - 1]
            i -= 2
            for k in range(t - 1):
                i -= 2**k
                b[j] += b[i]
    return b


def printbit(list):
    t = len(list)
    n = int(log(t, 2))
    book = [True] * t
    for i in reversed(range(n + 1)):
        j = 0
        lp = 0
        while j < t:
            j += 2**i
            if book[j - 1]:
                print("%s%d" % (" " * 2 * (j - 1 - lp), list[j - 1]), end=' ')
                book[j - 1] = False
                lp = j
        print()


printbit(bit(a))
