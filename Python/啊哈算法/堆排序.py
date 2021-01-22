a = int(input())
l = list(map(int, input().split()))


def doch(x):
    flag = 0
    while 2 * x + 1 < a and flag == 0:
        if l[x] < l[2 * x + 1]:
            t = 2 * x + 1
        else:
            t = x
        if 2 * x + 2 < a:
            if l[t] < l[2 * x + 2]:
                t = 2 * x + 2
        if t != x:
            l[x], l[t] = l[t], l[x]
            x = t
        else:
            flag = 1


for x in reversed(range(int((a - 1) / 2))):
    doch(x)
for _ in range(a):
    l[0], l[a - 1] = l[a - 1], l[0]
    a -= 1
    doch(0)
print(l)
