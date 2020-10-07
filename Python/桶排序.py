L=eval(input('输入一个list:',))
l0=[]
l1=[]
n=0
for a in L:
  if int(a)!=float(a):
    n=max(n,len(str(a))-str(a).index('.')-1)
for i in range(len(L)):
  L[i]*=(10**n)
while len(l0)<max(L)+1:
  l0.append(0)
for i in L:
  l0[int(i)]+=1
for x in range(len(l0)):
  if l0[x]!=0:
    i=0
    while i<l0[x]:
      t=x/(10**n)
      if int(t)!=float(t):
        l1.append(t)
      else:
        l1.append(int(t))
      i+=1
print(l1)
