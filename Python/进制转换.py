a=input('需要转换的数：',)
b=int(input('原进制：',))
c=int(input('目标进制：',))
dic={10:'A',11:'B',12:'C',13:'D',14:'E',15:'F'}
DICT = dict(zip(dic.values(), dic.keys()))
d=0
n=len(a)
if b !=10:
    for i in range(n):
        if b >10:
            d+=DICT[a[-i-1]]*b**i
        else:
            d+=int(a[-i-1])*b**i
else:
    d=int(a)
r=''
while d >0:
    if d%c >9:
        r=dic[d%c]+r
        d//=c
    else:
        r=str(d%c)+r
        d//=c
print('目标数：',r)
