import math
a=str(input('输入一串数字或字母:',))
a=a.replace(' ','00')
a=a.replace('a','01')
a=a.replace('b','02')
a=a.replace('c','03')
a=a.replace('d','04')
a=a.replace('e','05')
a=a.replace('f','06')
a=a.replace('g','07')
a=a.replace('h','08')
a=a.replace('i','09')
a=a.replace('j','10')
a=a.replace('k','11')
a=a.replace('l','12')
a=a.replace('m','13')
a=a.replace('n','14')
a=a.replace('o','15')
a=a.replace('p','16')
a=a.replace('q','17')
a=a.replace('r','18')
a=a.replace('s','19')
a=a.replace('t','20')
a=a.replace('u','21')
a=a.replace('v','22')
a=a.replace('w','23')
a=a.replace('x','24')
a=a.replace('y','25')
a=a.replace('z','26')
a=a.replace('A','27')
a=a.replace('B','28')
a=a.replace('C','29')
a=a.replace('D','30')
a=a.replace('E','31')
a=a.replace('F','32')
a=a.replace('G','33')
a=a.replace('H','34')
a=a.replace('I','35')
a=a.replace('J','36')
a=a.replace('K','37')
a=a.replace('L','38')
a=a.replace('M','39')
a=a.replace('N','40')
a=a.replace('O','41')
a=a.replace('P','42')
a=a.replace('Q','43')
a=a.replace('R','44')
a=a.replace('S','45')
a=a.replace('T','46')
a=a.replace('U','47')
a=a.replace('V','48')
a=a.replace('W','49')
a=a.replace('X','50')
a=a.replace('Y','51')
a=a.replace('Z','52')
a=float(a)
a=a*12345678987654321
a=a*10**(10-int(math.log(a,10)))
p=''
i=1
b=1
while i<=256 :
	c=str(a)
	k=b*i+4
	d=len(c)
	while k>= d:
		k=int(0.9*k)
	if k<=1:
		k=k+1
	p+= c[k]
	b=int(abs(a*math.cos(a)/(10**(int(math.log(abs(a*math.cos(a)),10))-2))))
	a=abs((a)*(math.sin(5*a)-math.cos(2*a)*math.tan(3*a)))
	while a< 1:
		a=math.acos(a)
	while a>=10:
		a=a*10**(int(-math.log(a,10)))
	i=i+1
print(p)