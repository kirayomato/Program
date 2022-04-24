import threading
import numpy as np
import matplotlib.pyplot as plt
from time import time
y1 = []
y2 = []


def calc1(y, x, w0, t, M, N):
    global y1
    y1 = [0]*(M+1)
    for k in range(0, M+1):
        y1[k] = [2*np.dot(y, np.sin(k*x*w0))*t/N]


def calc2(y, x, w0, t, M, N):
    global y2
    y2 = [0]*(M+1)
    for k in range(0, M+1):
        y2[k] = [2*np.dot(y, np.cos(k*x*w0))*t/N]


def ft(x, y):
    M = 5000  # 傅里叶采样个数
    wm = 20    # 最大ω值
    N = len(x)
    t = x[-1]-x[0]
    w0 = wm/M
    t0 = time()
    thread1 = threading.Thread(target=calc1, args=(y, x, w0, t, M, N))
    thread2 = threading.Thread(target=calc2, args=(y, x, w0, t, M, N))
    thread1.start()
    thread2.start()
    thread1.join()
    thread2.join()
    print("Calc Time:%.4fs" % (time()-t0))
    lx = np.linspace(0, wm, M+1)
    plt.plot(lx, y2, color='r', label='COS')
    plt.plot(lx, y1, color='b', label='SIN')
    plt.xlabel('ω', loc='right')
    plt.ylabel('H(ω)', loc='top', rotation=0)
    plt.legend(loc='best')
    ax = plt.gca()
    ax.spines['right'].set_color('none')
    ax.spines['top'].set_color('none')
    ax.spines['bottom'].set_position(('data', 0))
    ax.spines['left'].set_position(('data', 0))
    plt.show()


t = 10
N = 5000
x = np.linspace(-t, t, N+1)
y0 = np.piecewise(x, [abs(x) <= 1/2, abs(x) > 1], [1, 0])
y = np.piecewise(x, [x < 0, x >= 0], [0, lambda x: np.exp(-x)])
y1 = np.cos(x)+np.sin(3*x)
y2 = np.piecewise(x, [abs(x) < 1, abs(x) >= 1], [lambda x:x, 0])
ft(x, y)
