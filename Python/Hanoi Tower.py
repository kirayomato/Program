x=0
def Hanoi(n,a,b,c):
	global x
	if n==1:
		print (b,'-->',c)
		x=x+1
	else:
		Hanoi(n-1,c,b,a)
		print(b,'-->',c)
		x=x+1
		Hanoi(n-1,b,a,c)
n=int(input('x=',))
Hanoi(n,'①','②','③')
print('n=',x)
