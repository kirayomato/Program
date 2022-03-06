a = []
with open("Wordle.txt", "r") as f:
    for w in f:
        a.append(w.strip("\n"))
n = len(a)


def dele(i):
    global n
    a[i], a[n-1] = a[n-1], a[i]
    n -= 1


while True and n > 1:
    try:
        b = input()  # The Wotd you input in Wordle, Don't use words with repeated letters
        c = input()  # The color of each box, Gray:0 Yellow:1 Green:2
        for j in range(5):
            i = 0
            if c[j] == "0":
                while i < n:
                    if b[j] in a[i]:
                        dele(i)
                    else:
                        i += 1
            elif c[j] == "2":
                while i < n:
                    if a[i][j] != b[j]:
                        dele(i)
                    else:
                        i += 1
            else:
                while i < n:
                    if b[j] not in a[i] or a[i][j] == b[j]:
                        dele(i)
                    else:
                        i += 1
        print("Remaining %d" % n)
    except BaseException:
        break
print("Possible answers:", end=" ")
for i in range(n):
    print(a[i], end=" ")
