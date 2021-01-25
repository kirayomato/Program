a = list(map(int, input().split()))
dis = [99999]*(a[0] + 1)
book=[0]*(a[0] + 1)
dis[1]=0
t = []
for _ in range(a[1]):
    i=list(map(int, input().split()))
    t.append(i)
    t.append([i[1],i[0],i[2]])

def quicksort(l):
    if len(l) <= 1:
        return l
    else:
        n = l[int(len(l) / 2)][0]
        big = []
        small = []
        for i in l[int(len(l) / 2) + 1:] + l[:int(len(l) / 2)]:
            if i[0] <= n:
                small.append(i)
            else:
                big.append(i)
        return quicksort(small) + [l[int(len(l) / 2)]] + quicksort(big)

t=quicksort(t)
tree=[1]
map=[0]*(a[0]+1)
while tree:
    n=len(tree)
    te=dis[tree[0]]
    x=tree[0]
    for i in range(n):
        if dis[tree[i]]<te and book[tree[i]]==0:
            x=tree[i]
            te=dis[tree[i]]
    book[x]=1
    for j in t:
        if j[0]==x and dis[j[1]]>j[2] and book[j[1]]==0:
            dis[j[1]]=j[2]
            map[j[1]]=[j[0],j[1],j[2]]
            tree.append(j[1])
    del tree[tree.index(x)]
for i in sorted(map[2:]):
    print('%d -> %d = %d' % (i[0], i[1], i[2]))


