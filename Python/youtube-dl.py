from os import system
from subprocess import Popen, PIPE
from pyperclip import copy
a = "youtube-dl -"
h = ' -o "D:/Download/%(title)s.%(ext)s"'
b = " " + input("url:",)+' --proxy "socks5://127.0.0.1:10808"'
cmd=a+"F"+b
f = Popen(cmd, shell=True, stdout=PIPE, errors='replace')
for i in f.stdout:
    print(i, end="")
g = " " + input("download code:",)
cmd = a+"f"+g+b+h
# sub = a+"-write-sub --skip-download"+b+h
# print(sub)
# copy(sub)

# Directly execute Version
f = Popen(cmd, shell=True, stdout=PIPE, errors='replace')
for i in f.stdout:
    if 'at' in i:
        print('\r'+i.strip('\n'), flush=True, end="")
    else:
        print(i, flush=True, end="")
     
# Copy command Version   
# print(cmd)
# copy(cmd)
# system('start powershell')
# a=input()
