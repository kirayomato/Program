import random
a=random.randint(0,100)
b=random.randint(0,100)
c=random.randint(0,100)
d=random.randint(0,100)
e=random.randint(0,100)
f=random.randint(0,100)
g=random.randint(0,100)
x=[a,b,c,d,e,f,g]
i=a
j=a
for z in x:
	if i>=z:
		i=z
	if j<=z:
		j=z
h=sum(x)-i-j
avg=h/(len(x)-2)
print('score1=',a)
print('score2=',b)	
print('score3=',c)
print('score4=',d)
print('score5=',e)
print('score6=',f)
print('score7=',g)
print('avg=',avg)
