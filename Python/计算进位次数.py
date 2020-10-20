a=[]
a.append(int(input('数字1(十进制):',)))
a.append(int(input('数字2(十进制):',)))
k=int(input('目标进制:',))
num1=min(a)
num2=max(a)
n1=[]
n2=[]
while num1 >0:
    n1.insert(0,num1%k)
    num1//=k
while num2 >0:
    n2.insert(0,num2%k)
    num2//=k
n=0
temp=0
t=len(n1)
i=-1
while -i<=t :
    if n1[i]+n2[i]+temp>=k:
        n+=1
        temp=1
    else:
        temp=0
    i-=1
while -i<=len(n2):
    if n2[i]+temp>=k:
        n+=1
        temp=1
    else:
        temp=0
    i-=1
print('进位次数:',n)
