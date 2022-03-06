# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'main_window.ui'
#
# Created by: PyQt5 UI code generator 5.15.4
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_Dialog(object):
    def setupUi(self, Dialog):
        Dialog.setObjectName("Dialog")
        Dialog.resize(345, 276)
        font = QtGui.QFont()
        font.setFamily("Consolas")
        Dialog.setFont(font)
        self.guess = QtWidgets.QPushButton(Dialog)
        self.guess.setGeometry(QtCore.QRect(45, 110, 70, 25))
        font = QtGui.QFont()
        font.setFamily("Consolas")
        font.setPointSize(14)
        self.guess.setFont(font)
        self.guess.setObjectName("guess")
        self.ansBrowser = QtWidgets.QTextBrowser(Dialog)
        self.ansBrowser.setGeometry(QtCore.QRect(160, 40, 171, 211))
        font = QtGui.QFont()
        font.setFamily("Consolas")
        font.setPointSize(16)
        self.ansBrowser.setFont(font)
        self.ansBrowser.setVerticalScrollBarPolicy(QtCore.Qt.ScrollBarAsNeeded)
        self.ansBrowser.setHorizontalScrollBarPolicy(QtCore.Qt.ScrollBarAlwaysOff)
        self.ansBrowser.setMarkdown("")
        self.ansBrowser.setObjectName("ansBrowser")
        self.inputBrowser = QtWidgets.QTextEdit(Dialog)
        self.inputBrowser.setGeometry(QtCore.QRect(35, 40, 90, 61))
        font = QtGui.QFont()
        font.setFamily("Consolas")
        font.setPointSize(16)
        self.inputBrowser.setFont(font)
        self.inputBrowser.setVerticalScrollBarPolicy(QtCore.Qt.ScrollBarAlwaysOff)
        self.inputBrowser.setHorizontalScrollBarPolicy(QtCore.Qt.ScrollBarAlwaysOff)
        self.inputBrowser.setLineWrapMode(QtWidgets.QTextEdit.WidgetWidth)
        self.inputBrowser.setObjectName("inputBrowser")
        self.printans = QtWidgets.QPushButton(Dialog)
        self.printans.setGeometry(QtCore.QRect(210, 10, 70, 25))
        font = QtGui.QFont()
        font.setFamily("Consolas")
        font.setPointSize(14)
        self.printans.setFont(font)
        self.printans.setObjectName("printans")
        self.label = QtWidgets.QLabel(Dialog)
        self.label.setGeometry(QtCore.QRect(30, 150, 100, 25))
        font = QtGui.QFont()
        font.setFamily("Consolas")
        font.setPointSize(14)
        self.label.setFont(font)
        self.label.setAlignment(QtCore.Qt.AlignCenter)
        self.label.setObjectName("label")
        self.num = QtWidgets.QTextEdit(Dialog)
        self.num.setGeometry(QtCore.QRect(40, 180, 80, 30))
        font = QtGui.QFont()
        font.setFamily("Consolas")
        font.setPointSize(16)
        self.num.setFont(font)
        self.num.setVerticalScrollBarPolicy(QtCore.Qt.ScrollBarAlwaysOff)
        self.num.setHorizontalScrollBarPolicy(QtCore.Qt.ScrollBarAlwaysOff)
        self.num.setObjectName("num")

        self.retranslateUi(Dialog)
        self.printans.clicked.connect(Dialog.PrintAns)
        self.guess.clicked.connect(Dialog.Guess)
        QtCore.QMetaObject.connectSlotsByName(Dialog)

    def retranslateUi(self, Dialog):
        _translate = QtCore.QCoreApplication.translate
        Dialog.setWindowTitle(_translate("Dialog", "Wordle"))
        self.guess.setText(_translate("Dialog", "Guess"))
        self.ansBrowser.setHtml(_translate("Dialog", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:\'Consolas\',\'Consolas\'; font-size:16pt; font-weight:400; font-style:normal;\">\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p></body></html>"))
        self.inputBrowser.setHtml(_translate("Dialog", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:\'Consolas\',\'Consolas\'; font-size:16pt; font-weight:400; font-style:normal;\">\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p></body></html>"))
        self.printans.setText(_translate("Dialog", "Print"))
        self.label.setText(_translate("Dialog", "Remaining"))
        self.num.setHtml(_translate("Dialog", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:\'Consolas\',\'Consolas\'; font-size:16pt; font-weight:400; font-style:normal;\">\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p></body></html>"))
