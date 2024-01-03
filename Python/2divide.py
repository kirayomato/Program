l,r = map(int,input("l,r:").split())
print("----1----mid----0----")
while r-l > 0:
    mid = (l+r) >> 1
    print("mid:{}\tstep=:{}".format(mid,r-l+1))
    if input() == '0':
        l = mid+1
    else:
        r = mid
input("find:%d"%r)
