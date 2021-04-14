import queue
from math import log
a = list(map(eval, input().split()))


def rmq(a):
    b = []
    q = queue.Queue()
    q.put(a)
    while q.qsize() != 0:
        t = q.get()
        b.append(min(t))
        if len(t) > 1:
            n = len(t)
            if n % 2 == 0:
                n = int(n / 2)
            else:
                n = int(n / 2) + 1
            q.put(t[:n])
            q.put(t[n:])

    return b


b = rmq(a)
n = int(log(len(b), 2)) + 1
for i in range(n):
    t = 2 ** i - 1
    print(" " * (2**(n - i - 1) - 1), end="")
    for j in range(2**i):
        if j + t == len(b):
            break
        print(b[j + t], end=" " * (2**(n - i) - 1))
    print()
