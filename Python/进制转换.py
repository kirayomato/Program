def base_convert(a, b, c, pre=1e-3):
    dic = {0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5',
           6: '6', 7: '7', 8: '8', 9: '9', 10: 'A', 11: 'B',
           12: 'C', 13: 'D', 14: 'E', 15: 'F', 16: 'G', 17: 'H',
           18: 'I', 19: 'J', 20: 'K', 21: 'L', 22: 'M', 23: 'N',
           24: 'O', 25: 'P', 26: 'Q', 27: 'R', 28: 'S', 29: 'T',
           30: 'U', 31: 'V', 32: 'W', 33: 'X', 34: 'Y', 35: 'Z'}
    DICT = dict(zip(dic.values(), dic.keys()))
    if '.' not in a:
        a += '.'
    a1, a2 = str(a.upper()).split('.')
    n, m = len(a1), len(a2)
    r1 = r2 = ''
    if a1 != '':
        d = 0
        for i in range(n):
            t = DICT[a1[-i - 1]]
            d += t * b**i
        while d > 0:
            r1 = dic[d % c] + r1
            d //= c
    else:
        r1 = '0'
    if a2 == '':
        return r1
    d = 0
    for i in range(m):
        t = DICT[a2[i]]
        d += t * b**(-i-1)
    while d > pre:
        d *= c
        r2 += dic[int(d)]
        d -= int(d)
        pre *= c
    return r1+"."+r2
