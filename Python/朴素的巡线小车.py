a=list(map(int,input().split()))
iup=0
ileft=1
iright=2
idown=3
m=[]
st=[]
en=[]
for i in range(0,a[0]):
    t=list(map(int,input().split()))
    if 2 in t:
        st.append(i)
        st.append(t.index(2))
    m.append(t)
i=st[0]
j=st[1]
ld=-1
n=0
end=0
def up(i,j):
    if i==0:
        return 0
    else:
        i-=1
        return m[i][j]
def down(i,j):
    if i == a[0]-1:
        return 0
    else:
        i+=1
        return m[i][j]
def right(i,j):
    if j == a[1]-1:
        return 0
    else:
        j+=1
        return m[i][j]
def left(i,j):
    if j == 0:
        return 0
    else:
        j-=1
        return m[i][j]
def tup():
    global i
    i-=1
def tdown():
    global i
    i+=1
def tright():
    global j
    j+=1
def tleft():
    global j
    j-=1
move={0:tup,1:tleft,2:tright,3:tdown}
while m[i][j]!=3:
    temp=[up(i,j),left(i,j),right(i,j),down(i,j)]
    if 3 in temp:
        n+=1
        break
    else:
        if ld==iup:
            toward=[temp[2],temp[0],temp[1],temp[3]]
            direx={0:2,1:0,2:1,3:3}
        elif ld==ileft:
            toward=[temp[0],temp[1],temp[3],temp[2]]
            direx={0:0,1:1,2:3,3:2}
        elif ld==iright:
            toward=[temp[3],temp[2],temp[0],temp[1]]
            direx={0:3,1:2,2:0,3:1}
        elif ld==idown:
            toward=[temp[1],temp[3],temp[2],temp[0]]
            direx={0:1,1:3,2:2,3:0}
        else:
            toward=temp
            direx={0:0,1:1,2:2,3:3}
        move[direx[toward.index(1)]]()
        ld=direx[toward.index(1)]
        n+=1
print(n)
