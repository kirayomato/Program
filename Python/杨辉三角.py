o=int(input('输入需要的行数：',))
l=[]
p=0
while p<o:
  l.append(0)
  k=tuple(l)
  n=len(l)
  i=1
  while i < n:
    t=k[i-1]+k[i]
    l[i]=t
    i=i+1
  if i==n:
    l[i-1]=1
  print(l)
  p=p+1
