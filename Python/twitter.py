from pyperclip import copy
from win32api import ShellExecute
acc = input("account:")
year = input("year:")
m1 = input("month1:")
d1 = input("day1:")
m2 = input("month2:") or m1
d2 = input("day2:")
s = "(from:{}) since:{}-{}-{} until:{}-{}-{} -filter:replies".format(acc,
                                                     year, m1, d1, year, m2, d2)
copy(s)
ShellExecute(0, 'open', "https://twitter.com/explore", '', '', 1)
