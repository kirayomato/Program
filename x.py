import math
print('欢迎使用曾畅借贷服务')
x=eval(input('借款金额=',))
t=int(eval(input('借款时间=',)))
print('[1]微信\n[2]现金')
i=int(input('请选择还款方式：',))
if i == 1:
	if 0<=t<=7:
		w=1.005*x
	else:
		w=1.005*x+0.12*x*(t-7)/365
else :
	if 0<=t<=7:
		w=1.01*x
	else:
		w=1.01*x+0.12*x*t/365
w=math.ceil(w)
print('还款金额=',w)