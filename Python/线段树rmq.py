from math import log
from math import ceil
a = list(map(eval, input().split()))

t = len(a)
b = [0] * (2 ** (ceil(log(t, 2) + 1)) - 1)


def lrmq(list_a, list_b, pos, left, right):
    if left == right:
        list_b[pos] = list_a[left]
    else:
        lrmq(list_a, list_b, 2 * pos + 1, left, (left + right) // 2)
        lrmq(list_a, list_b, 2 * pos + 2, (left + right) // 2 + 1, right)
        list_b[pos] = min(list_b[2 * pos + 1], list_b[2 * pos + 2])


lrmq(a, b, 0, 0, t - 1)
n = int(log(len(b), 2)) + 1
for i in range(n):
    t = 2 ** i - 1
    print(" " * (2**(n - i - 1) - 1), end="")
    for j in range(2**i):
        if j + t == len(b):
            break
        if b[j + t] == 0:
            print(" ", end=" " * (2 ** (n - i) - 1))
        else:
            print(b[j + t], end=" " * (2**(n - i) - 1))
    print()
