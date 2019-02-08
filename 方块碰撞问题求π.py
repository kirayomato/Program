m2=1
m1=100**int(input("m1=",))
v2=0
v1=10
i=0
while v1>=0 or v2>0 or v1>=v2:
 	v0=v1
 	v00=v2
 	v1=((m1-m2)*v0+2*m2*v00)/(m1+m2)
 	v2=((m2-m1)*v00+2*m1*v0)/(m1+m2)
 	i=i+1
 	if v2>0:
 		i=i+1
 		v2=-v2
 i=str(i)
 s=len(i)
 i=int(i)
 print('π=',round(i*10**(-s+1),s))
