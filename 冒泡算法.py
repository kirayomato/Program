a=eval(input("输入一个数字list:",))
i=0
k=len(a)-1
n=0
while i <k:
	if n<k:
		if a[n]>a[n+1]:
			a[n+1],a[n]=a[n],a[n+1]	
			n=n+1
			i=1
		else:
			i=i+1
			n=n+1
	if n==k:
		n=0
print(a)
