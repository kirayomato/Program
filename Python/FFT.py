import numpy as np
import matplotlib.pyplot as plt


def fft(x, y):
    M = 50  # 傅里叶级数个数
    N = len(x)
    t2 = x[-1]-x[0]
    y2 = np.zeros(2*M+1)
    lk = range(-M, M+1)
    w0 = 2*np.pi/t2
    for k in lk:
        for i in range(N):
            y2[k+M] += np.real(y[i]*np.exp(-1j*k*x[i]*w0))
    y2 /= N/t2
    plt.plot(lk, y2)
    plt.show()


t = 5
N = 1000
x = np.linspace(-t, t, N+1)
y = np.piecewise(x, [x < 0, x >= 0], [0, lambda x: np.exp(-x)])
fft(x, y)
