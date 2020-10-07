L=eval(input('输入一个list:',))
l0=[]
l1=[]
while len(l0)<max(L)+1:
  l0.append(0)
for i in L:
  l0[i]+=1
for x in range(len(l0)):
  if l0[x]!=0:
    i=0
    while i<l0[x]:
      l1.append(x)
      i+=1
print(l1)
