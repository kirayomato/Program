n=int(input('人数:',))
r=int(input('间隔:',))
b=[]
ans=[]
for i in range(1,n+1):
    b.append(i)
r0=r-1
o=1
s=1
while s<=n:
    t=len(b)
    if r > t:
        r%=t
    if r==0:
        r=t
    ans.append(b[r-1])
    del b[r-1]
    r+=r0
    s+=1
print("死亡顺序:",ans)
