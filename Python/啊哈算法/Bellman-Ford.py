a = list(map(int, input().split()))
n = a[0]
m = a[1]
l = []
dis = [999] * n
book = [0] * n
que=[]
book[0] = 1
dis[0] = 0

u = [0] * m
v = [0] * m
w = [0] * m
first = [-1] * n
nxt = [-1] * m
for i in range(m):
    b = list(map(int, input().split()))
    u[i], v[i], w[i] = b[0] - 1, b[1] - 1, b[2]
    nxt[i] = first[u[i]]
    first[u[i]] = i

que.append(0)
book[0]=1

while que:
    i=que[0]
    j=first[i]
    while j!=-1:
        if dis[v[j]]>dis[i]+w[j]:
            dis[v[j]]=dis[i]+w[j]
            if book[v[j]]==0:
                que.append(v[j])
                book[v[j]]=1
        j=nxt[j]
    book[que[0]]=0
    del que[0]
print(dis)
