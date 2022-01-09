import numpy as np
import matplotlib.pyplot as plt


def ft(x, y):
    M = 1000  # 傅里叶采样个数
    wm = 10    # 最大ω值
    N = len(x)
    t = x[-1]-x[0]
    y1 = [0]*(2*M+1)
    y2 = [0]*(2*M+1)
    lk = range(-M, M+1)
    w0 = wm/M
    for k in lk:
        y1[k+M] = -np.dot(y, np.sin(k*x*w0))*t/N
        y2[k+M] = np.dot(y, np.cos(k*x*w0))*t/N
    lx = np.linspace(-wm, wm, 2*M+1)
    plt.plot(lx, y2, color='r', label='Real')
    plt.plot(lx, y1, color='b', label='Imaginary')
    plt.xlabel('ω', loc='right')
    plt.ylabel('H(ω)', loc='top', rotation=0)
    plt.legend(loc='best')
    ax = plt.gca()
    ax.spines['right'].set_color('none')
    ax.spines['top'].set_color('none')
    ax.spines['bottom'].set_position(('data', 0))
    ax.spines['left'].set_position(('data', 0))
    plt.show()


t = 5
N = 1000
x = np.linspace(-t, t, N+1)
y0 = np.piecewise(x, [abs(x) <= 1/2, abs(x) > 1], [1, 0])
y = np.piecewise(x, [x < 0, x >= 0], [0, lambda x: np.exp(-x)])
y1 = np.cos(x)+np.sin(3*x)
y2 = np.piecewise(x, [abs(x) < 1, abs(x) >= 1], [lambda x:x, 0])
ft(x, y)
