a=10**10
b=0
x=1
while x < a:
	if x % 4 ==3:
		b=b-1/x
		x=x+2
	else:
		b=b+1/x
		x=x+2
print(4*b)
