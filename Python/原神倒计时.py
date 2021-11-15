from win32api import ShellExecute
from datetime import datetime, timedelta
from apscheduler.schedulers.blocking import BlockingScheduler
from time import sleep
from warnings import filterwarnings
import ctypes
filterwarnings("ignore")
address = "F:/Game/Genshin Impact/"  # Your Genshin address
with open(address + "travel.txt", 'r') as f:
    try:
        flag = eval(f.readline())
        if flag:
            dt = datetime.strptime(f.readline(), '%Y-%m-%d %H:%M:%S\n')
            try:
                times = eval(f.readline())
            except BaseException:
                times = False
    except BaseException:
        flag = False


if not flag or times:
    a = eval(input("hour:", ) or "9")    # default:9
    b = eval(input("minute:", ) or "0")  # default:0
    t = 3600 * a + 60 * b
    dt = datetime.now() + timedelta(seconds=t)
    with open(address + "travel.txt", 'w') as f:
        f.write("True\n{}\n".format(dt.strftime('%Y-%m-%d %H:%M:%S')))
print("end time:", dt.strftime("%Y-%m-%d %H:%M:%S"))


def start_genshin():
    try:
        # ShellExecute(0, 'open', address + "Genshin Impact Game/YuanShen.exe", '', '', 1)
        ShellExecute(0, 'open', "C:/Users/AMD PC/Desktop/genshin.bat", '', '', 1)
        with open(address + "travel.txt", 'w') as f:
            f.write("False\n")
    except BaseException:
        with open(address + "travel.txt", 'a') as f:
            f.write('True')


def print_time():
    td = timedelta(seconds=(dt - datetime.now()).seconds)
    print("\rRemaining time:{}".format(td), end='')
    if td.seconds <= 0:
        scheduler.shutdown(wait=False)
        print("\rTime Out!                    ")
        start_genshin()


if dt > datetime.now():
    scheduler = BlockingScheduler()
    sleep(5)  # 五秒后自动最小化窗口
    ctypes.windll.user32.ShowWindow(ctypes.windll.kernel32.GetConsoleWindow(), 6)
    scheduler.add_job(print_time, 'interval', seconds=1)
    try:
        scheduler.start()
    except KeyboardInterrupt:
        scheduler.shutdown(wait=False)
        with open(address + "travel.txt", 'a') as f:
            f.write('True')
else:
    start_genshin()
