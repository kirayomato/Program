import numpy as np
from PIL import Image
# 单通道
# img = np.zeros((256, 256), dtype="uint8")
# 三通道
img = np.zeros((256, 256, 3), dtype="uint8")
for i in range(256):
    for j in range(256):
        img[j, i, 0] = np.uint8(i)
        img[j, i, 1] = np.uint8(i)
        img[j, i, 2] = np.uint8(i)

im = Image.fromarray(img)
im.show()
im.save("file.jpg")
