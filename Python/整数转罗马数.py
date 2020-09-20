#输入整数∈[1,3999]
def solution (n):
    m=0
    d=0
    c=0
    l=0
    x=0
    v=0
    i=0
    if n >= 1000 :
        while n >=1000 :
            n=n-1000
            m+=1
    if n >= 500 :
        while n >=500 :
            n=n-500
            d+=1
    if n >= 100 :
        while n >=100 :
            n=n-100
            c+=1
    if n >= 50 :
        while n >=50 :
            n=n-50
            l+=1
    if n >= 10 :
        while n >=10 :
            n=n-10
            x+=1
    if n >= 5 :
        while n >=5 :
            n=n-5
            v+=1
    if n >= 1 :
        while n >=1 :
            n=n-1
            i+=1
    res=''
    res+=m*'M'
    if c==4:
    	if d==1:
    		res+='CM'
    	else:
    		res+='CD'
    else:
    	res+=d*'D'
    	res+=c*'C'
    if x==4:
    	if l ==1:
    		res+='XC'
    	else:
    		res+='XL'
    else:
    	res+=l*'L'
    	res+=x*'X'
    if i==4:
    	if v ==1:
    		res+='IX'
    	else:
    		res+='IV'
    else:
    	res+=v*'V'
    	res+=i*'I'
    print(res)
solution(int(input()))
