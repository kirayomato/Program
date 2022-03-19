def base_convert(ori_num, ori_base, tar_base, pre=1):
    dic = {0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5',
           6: '6', 7: '7', 8: '8', 9: '9', 10: 'A', 11: 'B',
           12: 'C', 13: 'D', 14: 'E', 15: 'F', 16: 'G', 17: 'H',
           18: 'I', 19: 'J', 20: 'K', 21: 'L', 22: 'M', 23: 'N',
           24: 'O', 25: 'P', 26: 'Q', 27: 'R', 28: 'S', 29: 'T',
           30: 'U', 31: 'V', 32: 'W', 33: 'X', 34: 'Y', 35: 'Z'}
    DICT = dict(zip(dic.values(), dic.keys()))
    if '.' not in ori_num:
        ori_num += '.'
    a1, a2 = ori_num.upper().split('.')
    r1 = r2 = ''
    flag = False
    if a1 == '':
        a1 = '0'
    if a1[0] == '-':
        flag = True
        a1 = a1[1:]
    n, m = len(a1), len(a2)
    d = 0
    for i in range(n):
        t = DICT[a1[-i - 1]]
        d += t * ori_base**i
    while d >= 0:
        r1 = dic[d % tar_base] + r1
        d //= tar_base
        if d == 0:
            break
    if flag:
        r1 = '-'+r1
    if a2 == '':
        return r1
    d = 0
    for i in range(m):
        t = DICT[a2[i]]
        d += t * ori_base**(-i-1)
    if pre == 1:
        pre = 10**(-m-1)
    while d > pre:
        d *= tar_base
        r2 += dic[int(d)]
        d -= int(d)
        pre *= tar_base
    return r1+"."+r2


# 任意进制转二进制补码
def ttscom(ori_num, ori_base, pre=1):
    l = list(base_convert(ori_num, ori_base, 2, pre))
    if l[0] == '-':
        l[0] = '0'
        n = len(l)
        for i in range(n):
            if l[i] == '.':
                continue
            l[i] = int(l[i]) ^ 1
        t = 1
        for i in reversed(range(n)):
            if l[i] == '.':
                continue
            t1 = l[i]+t
            if t1 > 1:
                t = 1
                t1 %= 2
            else:
                t = 0
            l[i] = t1
            if not t:
                break
        for i in range(n-1):
            if l[i+1] != l[i]:
                break
        return ''.join(map(str, l[i:]))
    else:
        return '0'+''.join(l)
