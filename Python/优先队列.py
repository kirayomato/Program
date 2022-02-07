from queue import PriorityQueue
class Class:
    def __init__(self, x, y) -> None:
        self.a = x
        self.b = y

    def __lt__(self, c):
        if self.a == c.a:
            return self.b < c.b #大顶堆
        else:
            return self.a > c.a #小顶堆
          
p = PriorityQueue()
