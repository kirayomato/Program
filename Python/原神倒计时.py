from win32api import ShellExecute
from datetime import datetime, timedelta
from apscheduler.schedulers.blocking import BlockingScheduler
from time import sleep
from warnings import filterwarnings
import ctypes
from sys import argv
filterwarnings("ignore")
address1 = "F:/Game/Genshin Impact/"  # Your Genshin address
address2 = "F:/Game/Star Rail/"  # Your Genshin address
G1 = "F:/Game/Genshin Impact/Genshin Impact Game/YuanShen.exe"
G2 = "F:/Game/Star Rail/Game/StarRail.exe"
dt = datetime.now()
scheduler = BlockingScheduler()


def start_game(address, Gaddress):
    with open(address + "travel.txt", 'w') as f:
        f.write("False\n")
        # ShellExecute(0, 'open', "C:/Users/AMD PC/Desktop/genshin.bat", '', '', 1)
    try:
        ShellExecute(0, 'open', Gaddress, '', '', 1)
    except BaseException:
        print("\nLaunch game failed")
        i = input("press Enter to restart\n")
        if i == "":
            main()
        else:
            return

def print_time():
    td = timedelta(seconds=(dt - datetime.now()).seconds)
    print("\rRemaining time:{}".format(td), end='')
    if td.seconds <= 0:
        scheduler.shutdown(wait=False)
        print("\rTime Out!                    ")
        start_game()


def main():
    global dt
    try:
        i = argv[1]
    except BaseException:
        i = input("1:Genshin\n2:Star Rail\n")
    if i == '2':
        addr = address2
        Gaddr = G2
        print("Star Rail")
    else:
        addr = address1
        Gaddr = G1
        print("Genshin")
    with open(addr + "travel.txt", 'r') as f:
        try:
            flag = eval(f.readline())
            if flag:
                dt = datetime.strptime(f.readline(), '%Y-%m-%d %H:%M:%S\n')
        except BaseException:
            flag = False
    if not flag:
        print("input hour and minutes(format:HH MM,default 20:00)")
        a, b = map(eval, input().split() or ('20', '0'))
        t = 3600 * a + 60 * b
        dt = datetime.now() + timedelta(seconds=t)
        with open(addr + "travel.txt", 'w') as f:
            f.write("True\n{}\n".format(dt.strftime('%Y-%m-%d %H:%M:%S')))
    print("end time:", dt.strftime("%Y-%m-%d %H:%M:%S"))
    if dt > datetime.now():
        sleep(2)
        ctypes.windll.user32.ShowWindow(
            ctypes.windll.kernel32.GetConsoleWindow(), 6)
        scheduler.add_job(print_time, 'interval', seconds=1)
        try:
            scheduler.start()
        except BaseException:
            print("\nProgram failed")
            scheduler.shutdown(wait=False)
            with open(addr + "travel.txt", 'w') as f:
                f.write("False\n")
            i = input("press Enter to restart\n")
            if i == "":
                main()
            else:
                return
    else:
        start_game(addr, Gaddr)


main()
