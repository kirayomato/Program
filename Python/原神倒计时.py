import win32api
import time
a = eval(input("hour:",) or "9") #default:9
b = eval(input("minute:",) or "0") #default:0
t = 3600 * a + 60 * b
print("end time:", time.asctime(time.localtime(time.time() + t)))
print("Remaining time:%02d:%02d:%02d" % (a, b, 0), end='')
while t > 0:
    time.sleep(1)
    t -= 1
    h = t // 3600
    m = (t - 3600 * h) // 60
    s = t - 3600 * h - 60 * m
    print("\rRemaining time:%02d:%02d:%02d" % (h, m, s), end='')
print("\rTime Out!                    ")
win32api.ShellExecute(0, 'open',
                      r"F:\Game\Genshin Impact\Genshin Impact Game\YuanShen.exe" #Your Genshin address
                      , '', '', 1)
