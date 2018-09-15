a=eval(input('输入一个数:',))
i=2
b=1
if a <= 1 or not isinstance(a,int):
	print('error')
else:
	while i< a:
		b=a%i
		i=i+1
		if b == 0:
			break
if b == 0:
	print('合数')
elif i == a:
	print('质数')
