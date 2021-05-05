from math import log
from math import ceil
a = list(map(eval, input().split()))
[l, r] = list(map(eval, input().split()))


def init_st(x):
    dp = []
    t = len(a)
    n = ceil(log(t, 2))
    for i in range(n):
        dp.append([0] * (len(a)))
    dp.insert(0, a)
    for i in range(1, n + 1):
        m = 2**(i - 1)
        for j in range(max(1, t - m * 2 + 1)):
            dp[i][j] = min(dp[i - 1][j], dp[i - 1][min(t - m, j + m)])
    return dp


def rmq(dp, l, r):
    if l == r:
        return dp[0][l-1]
    else:
        n = int(log(r - l, 2))
        return min(dp[n][max(0,l - 1)], dp[n][max(l, r - 2**n)])


dp = init_st(a)
print(rmq(dp, l, r))
