import numpy as np
import matplotlib.pyplot as plt


def fft(t1, t2):  # 周期t2，脉宽t1
    N = 1000  # 采样点
    M = 50  # 傅里叶级数个数
    x = np.linspace(-t2 / 2, t2 / 2, N+1)
    # y1 = np.piecewise(x, [abs(x) <= t1/2, abs(x) > t1], [1, 0])
    y2 = np.zeros(2*M+1)
    lk = range(-M, M+1)
    n = N*t1/(2*t2)
    lx = range(int(N/2-n), int(N/2+n)+1)
    w0 = 2*np.pi/t2
    for k in lk:
        for i in lx:
            y2[k+M] += np.real(np.exp(-1j*k*x[i]*w0))
    y2 /= (N+1)/t2
    print(lk[M], y2[M])
    plt.plot(lk, y2)
    plt.show()

