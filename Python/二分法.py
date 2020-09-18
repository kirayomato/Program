#运行前在return处写上表达式
def f(x):
	return 
a=eval(input('a=',))
b=eval(input('b=',))
d=eval(input('d=',))
while abs(a-b)>= d:
	m=(a+b)/2
	if f(a)*f(m)<=0:
		b=m
	else:
		a=m
print('x=',m,'±',d)
