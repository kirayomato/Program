import numpy as np
import matplotlib.pyplot as plt


def fft(x, y):
    M = 1000  # 傅里叶级数个数
    wm = 10  # (pi)
    N = len(x)
    t2 = x[-1]-x[0]
    y2 = np.zeros(2*M+1)
    lk = range(-M, M+1)
    w0 = wm/M
    for k in lk:
        for i in range(N):
            y2[k+M] += np.real(y[i]*np.exp(-1j*k*x[i]*w0))
    y2 /= N/t2
    lx = np.linspace(-wm, wm, 2*M+1)
    plt.plot(lx, y2)
    plt.show()


t = 10
N = 1000
x = np.linspace(-t, t, N+1)
y = np.piecewise(x, [x < 0, x >= 0], [0, lambda x: np.exp(-x)])
y1 = 1+2*np.cos(5*x)+np.cos(7*x)
fft(x, y1)
