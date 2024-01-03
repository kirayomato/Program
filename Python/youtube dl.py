from os import system
from subprocess import Popen, PIPE
from pyperclip import copy
# a = "youtube-dl -"
a = "yt-dlp -"
h = ' -o "E:/Download/Video/%(title)s.%(ext)s"'
url=input("url:",)
if "http" not in url:
    url="https://youtu.be/"+url
b = " " + url+' --proxy "socks5://127.0.0.1:10808"'
cmd=a+"F"+b
# print(cmd)
f = Popen(cmd, shell=True, stdout=PIPE, errors='replace')
for i in f.stdout:
    print(i, end="")
g = " " + input("download code:")
cmd = a+"f"+g+b+h
# print(cmd)
# sub = a+"-write-sub --skip-download"+b+h
# print(sub)
# copy(sub)

# Directly execute Version
f = Popen(cmd, shell=True, stdout=PIPE, errors='replace')
for i in f.stdout:
    if r'% of' in i:
        print('\r'+i.strip('\n'), flush=True, end="")
    else:
        print(i, flush=True, end="")
     
# Copy command Version   
# print(cmd)
# copy(cmd)
# system('start powershell')
a=input("Download Completed\n")
