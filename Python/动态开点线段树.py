class SegmentTree:
    def __init__(self) -> None:
        self.val, self.edit = 0, 0
        self.lson, self.rson = None, None

    def upt(self, k, l, r):
        self.edit += k
        self.val += k

    def pd(self, l, r):
        mid = (l+r)>>1
        if self.edit:
            if not self.lson:
                self.lson = SegmentTree()
            self.lson.upt(self.edit, l, mid)
            if not self.rson:
                self.rson = SegmentTree()
            self.rson.upt(self.edit, mid+1, r)
            self.edit = 0

    def search(self, l, r, i, j):
        if i <= l and j >= r:
            return self.val
        self.pd(l, r)
        ans = 0
        mid = (l+r)>>1
        if j > mid:
            if self.rson:
                ans = max(ans, self.rson.search(mid+1, r, i, j))
        if i <= mid:
            if self.lson:
                ans = max(ans, self.lson.search(l, mid, i, j))
        return ans

    def pu(self):
        self.val = 0
        if self.lson:
            self.val = max(self.val, self.lson.val)
        if self.rson:
            self.val = max(self.val, self.rson.val)

    def update(self, l, r, k, i, j):
        if i <= l and j >= r:
            self.upt(k, l, r)
            return
        self.pd(l, r)
        mid = (l+r)>>1
        if j > mid:
            if not self.rson:
                self.rson = SegmentTree()
            self.rson.update(mid+1, r, k, i, j)
        if i <= mid:
            if not self.lson:
                self.lson = SegmentTree()
            self.lson.update(l, mid, k, i, j)
        self.pu()
