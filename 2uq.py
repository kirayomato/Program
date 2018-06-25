print('a1x+b1y=c1\na2x+b2y=c2')
def f(a1,b1,c1,a2,b2,c2):
	m=a1*b2-a2*b1
	n=a1*c2-a2*c1
	if m==0:
		if n==0:
			print('无穷解')
		else :
			print('无解')
	else :
		x=(c1*m-b1*n)/(a1*m)
		y=n/m
		print('x=',x,'y=',y)
a1=eval(input('a1=',))
b1=eval(input('b1=',))
c1=eval(input('c1=',))
a2=eval(input('a2=',))
b2=eval(input('b2=',))
c2=eval(input('c2=',))
f(a1,b1,c1,a2,b2,c2)


