pr = list(map(int, input().split()))  # 物品价格
we = list(map(int, input().split()))  # 物品重量
ba = int(input())                     # 背包容量
t = len(pr)
choose = []
for _ in range(t + 1):
    choose.append([0] * (ba + 1))
for i in range(1, t + 1):
    for j in range(1, ba + 1):
        if we[i - 1] > j:
            choose[i][j] = choose[i - 1][j]
        else:
            choose[i][j] = max(choose[i - 1][j - we[i - 1]] + pr[i - 1], choose[i - 1][j])
   #完全背包 choose[i][j] = max(choose[i][j - we[i - 1]] + pr[i - 1], choose[i - 1][j]) 
print("max value:", choose[-1][-1])
