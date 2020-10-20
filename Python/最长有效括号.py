a=input('输入一串仅由‘（’和‘）’构成的序列：',)
i=0
n=0
k=[-1]
while i< len(a):
  if a[i]=='(' or a[i]=='（':
    k.append(i)
  else:
    del(k[-1])
    if k==[]:
      k.append(i)
    else:
      n=max(n,i-max(k))
  i+=1
print(n)
