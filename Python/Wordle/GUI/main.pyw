from base64 import b64decode
from collections import Counter
from os import remove
from sys import argv
from PyQt5.QtGui import QIcon
from PyQt5.QtWidgets import QDialog, QApplication, QMessageBox
from ui_main_window import Ui_Dialog
from icon import Icon
from win32api import ShellExecute


class Dlg(QDialog, Ui_Dialog):
    def __init__(self, parent=None):
        super(Dlg, self).__init__(parent)
        self.setupUi(self)
        self.words = []
        with open("Wordle.txt", "r") as f:
            for w in f:
                self.words.append(w.strip("\n"))
        self.lens = len(self.words)
        self.num.setText(str(self.lens))

    def dele(self, i):
        self.words[i], self.words[self.lens -
                                  1] = self.words[self.lens - 1], self.words[i]
        self.lens -= 1

    def Guess(self):
        a = self.inputBrowser.toPlainText().split("\n")
        if len(a) != 2:
            return
        b, c = a
        self.inputBrowser.clear()
        # b:The Wotd you input in Wordle
        # c:The color of each box, Gray:0 Yellow:1 Green:2
        if len(b) != 5 or len(c) != 5:
            return
        l = Counter()
        for k, v in enumerate(b):
            if c[k] != "0":
                l[v] += 1
        gray = set()
        for j in range(5):
            i = 0
            if c[j] == "0":
                if b[j] in gray:
                    continue
                while i < self.lens:
                    ll = Counter()
                    for v in self.words[i]:
                        ll[v] += 1
                    if ll[b[j]] > l[b[j]]:
                        self.dele(i)
                    else:
                        i += 1
                gray.add(b[j])
            elif c[j] == "2":
                while i < self.lens:
                    if self.words[i][j] != b[j]:
                        self.dele(i)
                    else:
                        i += 1
            else:
                while i < self.lens:
                    if b[j] not in self.words[i] or self.words[i][j] == b[j]:
                        self.dele(i)
                    else:
                        i += 1
        self.num.setText(str(self.lens))

    def PrintAns(self):
        self.ansBrowser.clear()
        words = sorted(self.words[:self.lens])
        j = 0
        i = 0
        while i < self.lens:
            if j == 0:
                self.ansBrowser.insertPlainText(words[i])
                j += 1
            else:
                self.ansBrowser.insertPlainText(" " + words[i] + "\n")
                j -= 1
            i += 1
            QApplication.processEvents()

    def Reset(self):
        reply = QMessageBox.warning(
            self, "Confirm", "Do you need to reset?",
            QMessageBox.Yes | QMessageBox.No, QMessageBox.Yes)
        if reply == QMessageBox.Yes:
            self.words.sort()
            self.lens = len(self.words)
            self.num.setText(str(self.lens))
            self.ansBrowser.clear()
            self.inputBrowser.clear()


if __name__ == "__main__":
    app = QApplication(argv)
    dlg = Dlg()
    with open('tmp.ico', 'wb') as tmp:
        tmp.write(b64decode(Icon().img))
    app.setWindowIcon(QIcon('tmp.ico'))
    remove('tmp.ico')
    dlg.show()
    ShellExecute(
        0,
        'open',
        "https://www.nytimes.com/games/wordle/index.html",
        '',
        '',
        1)
    exit(app.exec_())
