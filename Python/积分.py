#运行前在return处写上表达式
def f(x):
	return 
dx=10**(-4)
s=0
a=eval(input('a=',))
b=eval(input('b=',))
if a>b :
	print('error')
else:
	while a<b:
		s=f(a)*dx+s
		a=a+dx
	print('s=','%.3f'%s)	
