import numpy as np
from PIL import Image
w, h = 512, 512
# 单通道
# img = np.zeros((w, h), dtype="uint8")
# 三通道
img = np.zeros((w, h, 3), dtype="uint8")
for i in range(w):
    for j in range(h):
        # 单通道
        # img[j, i] = np.uint8(i/2)
        # 三通道
        img[j, i, 0] = np.uint8(i/2)
        img[j, i, 1] = np.uint8(i/2)
        img[j, i, 2] = np.uint8(i/2)

im = Image.fromarray(img)
im.show()
im.save("file.jpg")
