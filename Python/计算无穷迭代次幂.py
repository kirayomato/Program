print('计算一个数的迭代次方 ')
a=eval(input('数:'))
d=eval(input('次方:'))
b=eval(input('次数:'))
count=0
e=d
while (count < (b-1)):
	e=d**e
	count = count + 1
print('=',a**e)
