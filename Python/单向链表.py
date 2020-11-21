class slink:
    def __init__(self, num, _next=None):
        self.num = num
        self.next = _next

    def insert(self, k):
        self.next = k

    def delete(self, _front, _next):
        _front.next = _next

    def printl(self):
        print(self.num, end=" ")
        if self.next is not None:
            return self.next.printl()


l = [slink(i) for i in range(10)]
for i in range(0, 9):
    l[i].next = l[i + 1]
l[0].printl()
a = slink(10, l[6])
l[5].insert(a)
print()
l[0].printl()
print()
a.delete(l[5], l[6])
l[0].printl()
