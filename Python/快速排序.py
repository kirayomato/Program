def quciksort(i):
    n=int(len(i)/2)
    if n == 0:
      return i
    else:
      t=i[n]
      big=[]
      small=[]
      for p in range(len(i)):
        if p!=n:
          x=i[p]
          if x >= t:
            big.append(x)
          else:
            small.append(x)
    return quciksort(small)+[t]+quciksort(big)
i=eval(input('输入一个数组：',))
print(quciksort(i))
