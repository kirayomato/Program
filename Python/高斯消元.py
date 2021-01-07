from math import log
t = list(map(int, input().split()))
m, n = t[0], t[1]

mat = []


def matplus(l1, l2):
    return [l1[ni] + l2[ni] for ni in range(len(l1))]


def matmul(l1, x):
    return [ni * x for ni in l1]


for i in range(m):
    l = list(map(float, input().split()))
    for _ in range(m):
        l.append(0)
    l[i - m] = 1
    mat.append(l)
book = [0] * m
for u in range(n):
    for i in range(m):
        if mat[i][u] == 0 or book[i] == 1:
            continue
        else:
            book[i] = 1
            mat[i] = matmul(mat[i], 1 / mat[i][u])
            for j in range(i + 1, m):
                mat[j] = matplus(mat[j], matmul(mat[i], -mat[j][u]))

book = [0] * m
for i in reversed(range(m)):
    if book[i] == 1:
        continue
    for u in reversed(range(n)):
        if mat[i][u] == 0:
            continue
        else:
            book[i] = 1
            mat[i] = matmul(mat[i], 1 / mat[i][u])
            for j in range(i):
                mat[j] = matplus(mat[j], matmul(mat[i], -mat[j][u]))

book = [i for i in range(m)]
for i in range(m):
    for j in range(min(n, m)):
        if mat[i][j] == 1:
            book[j] = i
mat = [mat[book[i]] for i in range(m)]
sp = [0] * (m + n)
for i in range(n + m):
    for j in range(m):
        if abs(mat[j][i]) >= 10:
            sp[i] = max(sp[i], int(log(abs(mat[j][i]), 10)))

for i in mat:
    print('|', end="")
    for j in range(n + m):
        if i[j] == 0:
            i[j] = 0
        if abs(i[j]) < 10:
            t = 0
        else:
            t = int(log(abs(i[j]), 10))
        if i[j] >= 0:
            print('%s%.3f' % (' ' * (sp[j] - t + 1), i[j]), end=" ")
        else:
            print('%s%.3f' % (' ' * (sp[j] - t), i[j]), end=" ")
    print('|')
