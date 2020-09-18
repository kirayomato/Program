# -*- coding: utf-8 -*-
h=eval(input('身高(m):'))
w=eval(input('体重(kg):'))
b=w/(h**2)
print('BMI=','%.3f' % b)
if b<18.5:
	print('过轻')
elif 18.5<=b<25:
	print('正常')
elif 25<=b<28:
	print('过重')
elif 28<=b<32:
	print('肥胖')
elif b>=32:
	print('严重肥胖')
else:
	print('error')
