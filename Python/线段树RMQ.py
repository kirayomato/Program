from math import log
a = list(map(eval, input().split()))
[x, y] = list(map(eval, input().split()))  # query from x to y
[i, j] = list(map(eval, input().split()))  # update pos(i) to j
n = len(a)
st = [float('inf')] * (4*n)


def init(nums, st, pos, left, right):
    if left == right:
        st[pos] = nums[left]
    else:
        init(nums, st, 2 * pos + 1, left, (left + right) // 2)
        init(nums, st, 2 * pos + 2, (left + right) // 2 + 1, right)
        st[pos] = min(st[2 * pos + 1], st[2 * pos + 2])


def search(st, i, j, left, right, pos):  # [left,right]
    if right < i or left > j:
        return float('inf')
    if left <= i and right >= j:
        return st[pos]
    mid = (i + j) // 2
    if left > mid:
        return search(st, mid + 1, j, left, right, 2 * pos + 2)
    elif right <= mid:
        return search(st, i, mid, left, right, 2 * pos + 1)
    else:
        return min(search(st, mid + 1, j, left, right, 2 * pos + 2),
                   search(st, i, mid, left, right, 2 * pos + 1))


def update(st, pos, value, n):
    posb = 0
    left = 0
    right = n - 1
    while right > left:
        mid = (left + right) // 2
        if pos > mid:
            left = mid + 1
            posb = 2 * posb + 2
        else:
            right = mid
            posb = 2 * posb + 1
    st[posb] = value
    while posb > 0:
        posb = int((posb - 1) / 2)
        st[posb] = min(st[2 * posb + 1], st[2 * posb + 2])


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


init(a, st, 0, 0, n - 1)
update(st, i, j, n)
print(search(st, 0, n-1, x, y, 0))
printst(st)
