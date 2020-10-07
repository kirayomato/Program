import math
L=eval(input('输入一个list:',))
l1=[]
n=0
m=0
for a in L:
  if int(a)!=float(a):
    n=max(n,len(str(a))-str(a).index('.')-1)
  if a < 0:
    m=min(m,math.floor(a))
for i in range(len(L)):
  L[i]-=m
  L[i]=int(L[i]*(10**n)+0.5)
l0=[0]*(max(L)+1)
for i in L:
  l0[int(i)]+=1
for x in range(len(l0)):
  if l0[x]!=0:
    i=0
    while i<l0[x]:
      t=x/(10**n)+m
      if int(t)!=float(t):
        l1.append(round(t,n+str(t).index('.')+1))
      else:
        l1.append(int(t))
      i+=1
print(l1)
