a=eval(input('输入一个数:',))
a0=a
i=2
c='1'
if a0 <= 1 or not isinstance(a0,int):
	print('error')
else:
	while i<= a :
		if i > 2 and i%2==0:
			i=i+1
		b=a%i
		if b == 0:
			a=a/i
			c+='x'+str(i)
			if i >= a0**0.5 :
				break
			i=1
		i=i+1		
if i==a0:
	print('质数')
else:
	print('合数',a0,'=',c[2:])
