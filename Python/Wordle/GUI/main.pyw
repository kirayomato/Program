from base64 import b64decode
from collections import Counter
from os import remove
from sys import argv

from PyQt5.QtGui import QIcon
from PyQt5.QtWidgets import QDialog, QApplication
from ui_main_window import Ui_Dialog

from icon import Icon


class Dlg(QDialog, Ui_Dialog):
    def __init__(self, parent=None):
        super(Dlg, self).__init__(parent)
        self.setupUi(self)
        self.a = []
        with open("Wordle.txt", "r") as f:
            for w in f:
                self.a.append(w.strip("\n"))
        self.n = len(self.a)
        self.num.setText(str(self.n))

    def dele(self, i):
        self.a[i], self.a[self.n - 1] = self.a[self.n - 1], self.a[i]
        self.n -= 1

    def Guess(self):
        b, c = self.inputBrowser.toPlainText().split("\n")
        self.inputBrowser.clear()
        # b:The Wotd you input in Wordle
        # c:The color of each box, Gray:0 Yellow:1 Green:2
        if len(b) != 5 or len(c) != 5:
            return
        l = Counter()
        for j in range(5):
            i = 0
            if c[j] != "0":
                l[b[j]] += 1
            if c[j] == "0":
                while i < self.n:
                    ll = Counter()
                    for ch in self.a[i]:
                        ll[ch] += 1
                    if ll[b[j]] > l[b[j]]:
                        self.dele(i)
                    else:
                        i += 1
            elif c[j] == "2":
                while i < self.n:
                    if self.a[i][j] != b[j]:
                        self.dele(i)
                    else:
                        i += 1
            else:
                while i < self.n:
                    if b[j] not in self.a[i] or self.a[i][j] == b[j]:
                        self.dele(i)
                    else:
                        i += 1
        self.num.setText(str(self.n))

    def PrintAns(self):
        self.ansBrowser.clear()
        i = 0
        while i < self.n:
            if i + 1 < self.n:
                self.ansBrowser.append(self.a[i] + " " + self.a[i + 1])
                i += 2
            else:
                self.ansBrowser.append(self.a[i])
                i += 1


if __name__ == "__main__":
    app = QApplication(argv)
    dlg = Dlg()
    with open('tmp.ico', 'wb') as tmp:
        tmp.write(b64decode(Icon().img))
    app.setWindowIcon(QIcon('tmp.ico'))
    remove('tmp.ico')
    dlg.show()
    exit(app.exec_())
