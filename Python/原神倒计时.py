import win32api
from datetime import datetime, timedelta
from apscheduler.schedulers.blocking import BlockingScheduler
a = eval(input("hour:",) or "9")    # default:9
b = eval(input("minute:",) or "0")  # default:0
t = 3600 * a + 60 * b
dt = datetime.now() + timedelta(seconds=t)
print("end time:", dt.strftime("%m-%d %H:%M:%S"))


def print_time():
    td = timedelta(seconds=(dt - datetime.now()).seconds)
    print("\rRemaining time:{}".format(td), end='')
    if td.seconds == 0:
        scheduler.shutdown(wait=False)
        print("\rTime Out!                    ")
        win32api.ShellExecute(0, 'open',
                              r"F:\Game\Genshin Impact\Genshin Impact Game\YuanShen.exe",  # Your Genshin address
                              '', '', 1)


scheduler = BlockingScheduler()
scheduler.add_job(print_time, 'interval', seconds=1)
scheduler.start()
