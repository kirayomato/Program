pr = list(map(int, input("输入物品价格:",).split()))
we = list(map(int, input("输入物品重量:",).split()))
ba = int(input("输入背包容量:",))
if len(pr) != len(we):
    print("Error")
else:
    t = len(pr)
    pr.append(0)
    pr.insert(0, 0)
    we.append(0)
    we.insert(0, 0)
    choose = []
    for _ in range(t + 1):
        choose.append([0] * (ba + 1))
    for i in range(1, t + 1):
        for j in range(ba + 1):
            if we[i] > j:
                choose[i][j] = choose[i - 1][j]
            else:
                choose[i][j] = max(choose[i - 1][j - we[i]] + pr[i], choose[i - 1][j])
    print("max value:", choose[-1][-1])
