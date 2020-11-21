import random
import math

a = int(input('抽号数量:', ))
print('输入抽号范围')
n = int(input('下限:', ))
m = int(input('上限:', ))
i = 0
r = [i for i in range(n, m + 1)]
l = []
if a > m - n + 1:
    print('error')
else:
    while i < a:
        g = random.randint(m, 9 * m)
        t = 0
        while t < 10:
            g *= random.randint(m, 9 * m)
            t += 1
        g = int(str(g)[1:])
        g = int(g*10**(-int(math.log(g, 10))) * random.randint(m, 9 * m)) % len(r)
        l.append(r[g])
        del r[g]
        i += 1
    print("抽号结果：", l)
