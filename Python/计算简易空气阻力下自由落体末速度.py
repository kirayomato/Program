print('f=kv^2')
a=eval(input('v0=',))
b=eval(input('t=',))
c=eval(input('k=',))
d=0
while d <= b :
	a=a+0.0001*(10-c*(a**2))
	d=d+0.0001
print('vt=',a)
