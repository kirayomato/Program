import wave
import numpy as np
import matplotlib.pyplot as plt


def show_wave(s):
    with wave.open(s, "rb") as f:
        params = f.getparams()
        nchannels, sampwidth, framerate, nframes = params[:4]
        str_data = f.readframes(nframes)
    wave_data = np.frombuffer(str_data, dtype=np.short)
    wave_data.shape = -1, 2
    wave_data = wave_data.T
    time = np.arange(0, nframes) * (1.0 / framerate)
    ax = plt.subplots(nrows=2, ncols=1, sharex=True, sharey=True)[1]
    ax[0].plot(time, wave_data[0])
    ax[0].set_title("L")
    ax[1].plot(time, wave_data[1], c="g")
    ax[1].set_title("R")
    plt.xlabel("time/s")
    plt.show()
