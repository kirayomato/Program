a=input()
def frange(x):
    t=len(x)
    if t==1:
        return [x]
    else:
        l=[]
        for i in range(t):
            p=x[:i]+x[i+1:]
            lt=[x[i]]
            lp=frange(p)
            l+=[i+j for i in lt for j in lp]
        return l
for x in frange(a):
    print(x,end=' ')
