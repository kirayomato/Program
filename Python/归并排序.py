def dvisort(i):
  if len(i) <= 1:
    return i
  n=int(len(i)/2)
  a=i[:n]
  b=i[n:]
  a1=dvisort(a)
  b1=dvisort(b)
  def sort(a,b):
    c=[]
    j=0
    i=0
    while i <= (len(a)-1) and j <= (len(b)-1):
      if a[i]<=b[j]:
        c.append(a[i])
        i=i+1
      else:
        c.append(b[j])
        j=j+1
    if i == (len(a)):
      c=c+b[j:]
    else:
      c=c+a[i:]
    return c  
  return sort(a1,b1)
i=eval(input('输入一个数组：',))
print(dvisort(i))
