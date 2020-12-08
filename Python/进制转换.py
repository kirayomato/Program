import sys
a = input('需要转换的数：',)
b = int(input('原进制：',))
c = int(input('目标进制：',))
if c < 1 or b < 1 or c > 36 or b > 36:
    print('Error')
else:
    dic = {0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5',
           6: '6', 7: '7', 8: '8', 9: '9', 10: 'A', 11: 'B',
           12: 'C', 13: 'D', 14: 'E', 15: 'F', 16: 'G', 17: 'H',
           18: 'I', 19: 'J', 20: 'K', 21: 'L', 22: 'M', 23: 'N',
           24: 'O', 25: 'P', 26: 'Q', 27: 'R', 28: 'S', 29: 'T',
           30: 'U', 31: 'V', 32: 'W', 33: 'X', 34: 'Y', 35: 'Z'}
    DICT = dict(zip(dic.values(), dic.keys()))
    d = 0
    n = len(a)
    for i in range(n):
        t = DICT[a[-i - 1]]
        if t >= b:
            print('Error')
            sys.exit()
        else:
            d += t * b**i
    r = ''
    while d > 0:
        r = dic[d % c] + r
        d //= c
    print('目标数：', r)
