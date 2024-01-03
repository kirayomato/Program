from win11toast import notify
from pyperclip import copy
from os import system
from datetime import datetime
from win32api import ShellExecute
from apscheduler.schedulers.blocking import BlockingScheduler
import re
from lxml import etree
from sys import exit
import requests
from bs4 import BeautifulSoup
import win32gui
# hwnd = win32gui.GetForegroundWindow()
# 使用EditThisCookie导出cookie
dic = {}
count = 0


def getval(res, flag):
    pattern = re.compile(r'''(?<=\"%s\": \")[^\"]*(?=\")''' % flag)
    return pattern.findall(res)


def read_cookie(txt):
    with open(txt, "r")as f:
        s = f.read()
        name = getval(s, "name")
        value = getval(s, "value")
    cookie = {}
    for k, v in enumerate(name):
        cookie[v] = value[k]
    return cookie


def get(url, cookie, header, mode):
    res = ""
    for _ in range(5):
        res = requests.get(url, cookies=cookie, headers=header)
        if res.status_code == 200:
            break
    if res.status_code != 200:
        return "连接错误"
    soup = BeautifulSoup(res.content, 'html.parser')
    tree = etree.HTML(res.text)
    img_src_list = tree.xpath("//em[@id]")
    print(img_src_list[-1].text[4:])
    if mode == 'nga':
        context = soup.find_all('span', class_="postcontent")
    else:
        context = soup.find_all('td', class_="t_f")
    if len(context) == 0:
        return "验证错误"
    return context


def get_last(tid):
    url = "https://bbs.saraba1st.com/2b/thread-%d-1-1.html" % tid
    res = requests.get(url, cookies=cookie, headers=header)
    tree = etree.HTML(res.text)
    img_src_list = tree.xpath('//*[@id="pgt"]/div/div/label/span')
    return int(img_src_list[0].attrib['title'][1:-1])


def search(tid, l, cookie, header, mode0):
    global count
    count = (count+1) % 15
    if not count:
        system('cls')
    page = get_last(tid)
    url = "https://bbs.saraba1st.com/2b/thread-%d-%d-1.html" % (tid, page)
    print(datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
    print(tid, page, end=" ")
    context = get(url, cookie, header, mode0)
    if isinstance(context, str):
        print(context)
    flag = 0
    ll = []
    for jc in context:
        c = jc.get_text().lower()
        oc = jc.get_text()
        if oc in dic:
            continue
        for v in l:
            if v in c:
                ll.append(oc)
                dic[oc] = 1
                break
    if len(ll):
        notify('经费爬虫', '找到红包信息', duration='long')
        for j in ll:
            print(j)
        win32gui.ShowWindow(hwnd, 8)
        win32gui.ShowWindow(hwnd, 3)
        ShellExecute(
            0, 'open', url, '', '', 1)
        # scheduler.pause()
        # input()
        # count = 0
        # system('cls')
        # scheduler.resume()
        return
    if not flag:
        print('Not Found')


if __name__ == "__main__":
    hwnd = win32gui.FindWindow(None, '经费爬虫.py')
    cookie = read_cookie("cookies.txt")
    header = {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7',
        'connection': 'keep-alive',
        'cache-control': 'max-age=0',
        'referer': 'https://bbs.saraba1st.com/2b/forum-151-1.html',
        'sec-ch-ua': '"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183',
    }
    a = 2166471
    l = ['经费', '口令', 'zfb', '支付宝', '红包', '神秘代码']
    # win32gui.ShowWindow(hwnd, 3)
    scheduler = BlockingScheduler()
    scheduler.add_job(search, 'interval', seconds=30, args=[
                      a, l, cookie, header, 's1'])
    # input()
    # win32gui.ShowWindow(hwnd, 3)
    scheduler.start()
