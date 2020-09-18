#运行前在return处写上表达式
def f(x):
	return 
dx=10**(-8)
x=eval(input('x=',))
df=f(x+dx)
d=(df-f(x))/dx
print('df/dx=','%.5f'%d)
