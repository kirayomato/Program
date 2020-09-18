import math
print('欢迎使用借贷服务')
x=eval(input('借款金额=',))
t=int(eval(input('借款时间=',)))
print('[1]微信支付宝\n[2]现金\n[3]银行转账')
i=int(input('请选择还款方式：',))
if i == 1:
	if 0<=t<=7:
		w=1.005*x
		j=x/1.005
	else:
		w=1.005*x+0.12*x*(t-7)/365
		j=x/(1.005+0.12*(t-7)/365)
if i == 2:
	if 0<=t<=7:
		w=1.01*x
		j=x/1.01
	else:
		w=1.01*x+0.12*x*(t-7)/365
		j=x/(1.01+0.12*(t-7)/365)
if i == 3:
	w=x+0.12*x*t/365
	j=x/(1+0.12*t/365)

w=math.ceil(w)
j=math.floor(j)
print('借%d还%d\nOR\n借%d还%d'%(x,w,j,x))
