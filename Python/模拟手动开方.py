import math
a=str(input('被开方数=',))
j=eval(a)
b=int(input('有效位数=',))
c=math.floor(math.log(j,10)+1)
f=0
g=0
e=''
if j < 0:
	a=a.replace('-', '')
a=str(a)
a=a.replace('.', '')
o=1
while o<= 2*b+2:
	o=o+1
	a+='0'
if c%2 == 0 and j>=1:
	i=0
	t=2
	while (t-2)/2 <= b:
		e=str(e)
		l=a[i:t]
		e+= l
		e=int(e)
		n=9
		while (f+n)*n> e:
			n=n-1
		e=e-(f+n)*n
		f=f+n
		f=(f+n)*10
		g=10*g+n
		i=i+2
		t=t+2
else:
	e=str(e)
	l= a[0]
	e+= l
	e=int(e)
	n=9
	while (f+n)*n> e:
		n=n-1
	e=e-(f+n)*n
	f=f+n
	f=(f+n)*10
	g=10*g+n
	i=1
	t=3
	while (t-2)/2 <= b:
		e=str(e)
		l= a[i:t]
		e+= l
		e=int(e)
		n=9
		while (f+n)*n> e:
			n=n-1
		e=e-(f+n)*n
		f=f+n
		f=(f+n)*10
		g=10*g+n
		i=i+2
		t=t+2
p=math.floor(math.log(abs(j)**0.5,10)+1)
u=math.floor(math.log(g,10)+1)
g=(g*10**(p-u))
if j >=0:
	print(round(g,b-p))
else :
	print(round(g,b-p),'i')
