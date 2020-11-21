import random
import math
a = int(input('抽号数量:',))
print('输入抽号范围')
n = int(input('下限:',))
m = int(input('上限:',))
i = 1
l = []
if a > m - n + 1:
    print('error')
else:
    while i <= a:
        c = random.randint(1, 9)
        b = random.randint(1, 9)
        d = random.randint(1, 9)
        e = random.randint(1, 9)
        f = random.randint(1, 9)
        h = random.randint(1, 9)
        j = random.randint(1, 9)
        g = (math.sin(c) * math.cos(b) * math.tan(d) +
             math.sin(e) * math.cos(f) * math.tan(h)) * j * 100000
        g = str(g)
        g = g[-3:-1]
        g = int(float(g))
        if n <= g <= m:
            if g not in l:
                i = i + 1
                l.append(g)
    print("抽号结果", l)
