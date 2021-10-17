import sys
from PyQt5.QtWidgets import QApplication, QMainWindow
from ui_untitled import Ui_Dialog
addr = sys.argv[1]  # 从 pcr.satroki.tech 获得csv文件


class MyMainForm(QMainWindow, Ui_Dialog):
    def __init__(self, parent=None):
        super(MyMainForm, self).__init__(parent)
        self.setupUi(self)
        self.yesButton.clicked.connect(self.showMap)
        self.yesButton2.clicked.connect(self.brush)
        self.noButton.clicked.connect(self.clear)

    def showMap(self):
        a = self.input_item.text()
        self.textBrowser.setText('')
        for k, v in d.items():
            if a in k:
                self.textBrowser.append(k)
                self.textBrowser.append("{}\t{}\t{}\t{}".format("地图", "次数", "推荐", "ID"))
                for i in v:
                    self.textBrowser.append(i.show())
        self.input_item.setText('')

    def brush(self):
        _id = int(self.input_map.text())
        ti = int(self.input_times.text())
        l[_id].fight(ti)
        self.textBrowser.append(l[_id].show())
        self.input_map.setText('')
        self.input_times.setText('')

    def clear(self):
        self.input_map.setText('')
        self.input_times.setText('')

    def closeEvent(self, event):
        with open(addr, 'w', encoding='utf-8') as f:
            f.write("关卡,次数,推荐,掉落期望\n")
            for i in l:
                if i.times > 0:
                    f.write("{},{},{},{}".format(i.name, i.times, i.rtimes, ','.join(i.drops)))
        event.accept()


class CheckPoint:
    def __init__(self, name, times, rtimes, drops, _id):
        self.name = name
        self.times = int(times)
        self.rtimes = int(rtimes)
        self.drops = drops
        self._id = int(_id)

    def fight(self, bat):
        self.times -= bat
        self.rtimes -= bat

    def show(self):
        return "{}\t{}\t{}\t{}".format(
            self.name, self.times, self.rtimes, self._id)


def strcut(s):
    return s[:s.index(' +')]


if __name__ == "__main__":
    l = []
    d = {}
    j = 0
    with open(addr, 'r', encoding='utf-8') as f:
        f.readline()
        for s in f:
            s = s.split(',')
            l.append(CheckPoint(s[0], s[1], s[2], s[3:], j))
            for i in s[3:]:
                st = strcut(i)
                if st in d:
                    d[st].append(l[j])
                else:
                    d[st] = [l[j]]
            j += 1
    app = QApplication(sys.argv)
    myWin = MyMainForm()
    myWin.show()
    app.exec_()
