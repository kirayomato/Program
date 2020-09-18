import random
import math
a=eval(input('抽号数量:',))
i=1
while i<=a :
	c=random.randint(1,9)
	b=random.randint(1,9)
	d=random.randint(1,9)
	e=random.randint(1,9)
	f=random.randint(1,9)
	h=random.randint(1,9)
	j=random.randint(1,9)
	g=(math.sin(c)*math.cos(b)*math.tan(d)+math.sin(e)*math.cos(f)*math.tan(h))*j*100000
	g=str(g)
	g=g[-3:-1]
	g=int(float(g))
	if 0<g<=46:
		i=i+1
		print(g)

	
