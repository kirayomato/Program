from math import log

a = list(map(eval, input().split()))
[i, j] = list(map(eval, input().split()))  # query [i,j]
[pos, val] = list(map(eval, input().split()))  # add val to a[pos]


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
                i -= 2 ** k
                b[j] += b[i]
    return b


def query(list, i, j):
    i -= 1
    sum0 = sum1 = 0
    while i > 0:
        sum0 += list[i - 1]
        i -= i & -i
    while j > 0:
        sum1 += list[j - 1]
        j -= j & -j
    return sum1 - sum0


def add(list, pos, val):
    t = len(list)
    while pos <= t:
        list[pos - 1] += val
        pos += pos & -pos


def printbit(list):
    t = len(list)
    n = int(log(t, 2))
    book = [True] * t
    for i in reversed(range(n + 1)):
        j = 0
        lp = 0
        while j < t:
            j += 2 ** i
            if book[j - 1]:
                print("%s%d" % (" " * 2 * (j - 1 - lp), list[j - 1]), end=' ')
                book[j - 1] = False
                lp = j
        print()


a = bit(a)
add(a, pos, val)
print(query(a, i, j))
printbit(a)
