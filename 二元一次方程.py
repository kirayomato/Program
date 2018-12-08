print('ax^2+bx+c=0')
a=eval(input('a='))
b=eval(input('b='))
c=eval(input('c='))
d=b**2-4*a*c
if d > 0:
	x1=(d**0.5-b)/2*a
	x2=(-d**0.5-b)/2*a
	print('x1=%.4f'% x1)
	print('x2=%.4f'% x2)
elif d == 0:
	x=(d**0.5-b)/2*a
	print('x=%.4f'% x)
else:
	print('无解')


