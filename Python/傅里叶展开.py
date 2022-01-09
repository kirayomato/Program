import numpy as np
import matplotlib.pyplot as plt
from math import cos, sin


def fe(x, y, w0):  # w0为基频
    M = 10  # 傅里叶级数个数
    N = len(x)
    y1 = [0]*(2*M+1)
    y2 = [0]*(2*M+1)
    lk = range(-M, M+1)
    for k in lk:
        for i in range(N):
            y1[k+M] -= y[i]*sin(k*x[i]*w0)/N
            y2[k+M] += y[i]*cos(k*x[i]*w0)/N
    plt.bar(np.arange(-M, M+1), y2, color='r', width=0.5, label='Real')
    plt.bar(np.arange(-M, M+1)+0.5, y1, color='b', width=0.5, label='Imaginary')
    plt.legend(loc='best')
    plt.xlabel('n/ω0', loc='right')
    plt.ylabel('H(ω)', loc='top', rotation=0)
    ax = plt.gca()
    ax.spines['right'].set_color('none')
    ax.spines['top'].set_color('none')
    ax.spines['bottom'].set_position(('data', 0))
    ax.spines['left'].set_position(('data', 0))
    plt.show()


t = 10
N = 1000
x = np.linspace(-t, t, N+1)
y = np.cos(x)+np.sin(3*x)
fe(x, y, 1)
