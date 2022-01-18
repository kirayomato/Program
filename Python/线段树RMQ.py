from math import log
from math import ceil
a = list(map(eval, input().split()))
[x, y] = list(map(eval, input().split()))  # query from x to y
[i, j] = list(map(eval, input().split()))  # update pos(i) to j
t = len(a)
b = [float('inf')] * (2 ** (ceil(log(t, 2) + 1)) - 1)


def st(list_a, list_b, pos, left, right):
    if left == right:
        list_b[pos] = list_a[left]
    else:
        st(list_a, list_b, 2 * pos + 1, left, (left + right) // 2)
        st(list_a, list_b, 2 * pos + 2, (left + right) // 2 + 1, right)
        list_b[pos] = min(list_b[2 * pos + 1], list_b[2 * pos + 2])


def search(list_b, left, right, i, j, pos):
    if j < left or i > right:
        return float('inf')
    if i <= left and j >= right:
        return list_b[pos]
    mid = (left + right) // 2
    if i > mid:
        return search(list_b, mid + 1, right, i, j, 2 * pos + 2)
    elif j <= mid:
        return search(list_b, left, mid, i, j, 2 * pos + 1)
    else:
        return min(search(list_b, mid + 1, right, i, j, 2 * pos + 2),
                   search(list_b, left, mid, i, j, 2 * pos + 1))


def query(list_a, list_b, left, right):
    return search(list_b, 0, len(list_a) - 1, left-1, right-1, 0)


def update(list_a, list_b, pos, value):
    posb = 0
    left = 0
    right = len(list_a) - 1
    while right > left:
        mid = (left + right) // 2
        if pos > mid:
            left = mid + 1
            posb = 2 * posb + 2
        else:
            right = mid
            posb = 2 * posb + 1
    list_b[posb] = value
    while posb > 0:
        posb = int((posb - 1) / 2)
        list_b[posb] = min(list_b[2 * posb + 1], list_b[2 * posb + 2])


def printst(list_b):
    n = int(log(len(list_b), 2)) + 1
    for i in range(n):
        t = 2 ** i - 1
        print(" " * (2 ** (n - i - 1) - 1), end="")
        for j in range(2 ** i):
            if j + t == len(list_b):
                break
            if list_b[j + t] == float('inf'):
                print(" ", end=" " * (2 ** (n - i) - 1))
            else:
                print(list_b[j + t], end=" " * (2 ** (n - i) - 1))
        print()


st(a, b, 0, 0, t - 1)
update(a, b, i - 1, j)
print(query(a, b, x, y))
printst(b)
