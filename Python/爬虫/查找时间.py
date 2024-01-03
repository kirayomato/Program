from bs4 import BeautifulSoup
import requests
from sys import exit
import re
from datetime import datetime
from win32api import ShellExecute
from lxml import etree
# 使用EditThisCookie导出cookie


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
# for k,v in read_cookie("cookies2.txt").items():
#     print("%s=%s; "%(k,v),end="")
# exit(0)


def get(url, cookie, header, mode):
    res = ""
    for _ in range(5):
        res = requests.get(url, cookies=cookie, headers=header)
        if res.status_code == 200:
            break
    if res.status_code != 200:
        return "连接错误"
    if mode == 'nga':
        soup = BeautifulSoup(res.content, 'html.parser')
        img_src_list = soup.find_all('span', title='reply time')
    else:
        tree = etree.HTML(res.text)
        img_src_list = tree.xpath("//em[@id]")
    if len(img_src_list) == 0:
        return "验证错误"
    return img_src_list


def search(url, cookie, header, mode):
    context = get(url, cookie, header, mode)
    for jc in context:
        c = jc.text
        # if "发表于" in c:
        print(c)
        if mode == 's1':
            c = c[4:]
        return datetime.strptime(c, '%Y-%m-%d %H:%M')
    return 'error'


def get_last(tid):
    url = "https://bbs.saraba1st.com/2b/thread-%d-1-1.html" % tid
    res = requests.get(url, cookies=cookie, headers=header)
    tree = etree.HTML(res.text)
    img_src_list = tree.xpath('//*[@id="pgt"]/div/div/label/span')
    return int(img_src_list[0].attrib['title'][1:-1])

if __name__ == "__main__":
    cookie = read_cookie(r"D:\Program\VS_Code\CODE_Python\cookies.txt")
    header = {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7',
        'connection': 'keep-alive',
        'cache-control': 'max-age=0',
        'referer': 'https://bbs.saraba1st.com/2b/forum-151-1.html',
        'Origin': 'https://bbs.saraba1st.com/2b/forum-151-1.html',
        'sec-ch-ua': '"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78'
    }
    j = 2146692
    # j = 37678803
    l = 1
    r = get_last(j)
    mode = 's1'
    target = datetime.strptime("2023-09-13 00:00", '%Y-%m-%d %H:%M')
    while r > l:
        mid = int((r+l+1)/2)
        if mode == 'nga':
            url = "https://bbs.nga.cn/read.php?tid=%d&page=%d" % (j, mid)
        else:
            url = "https://bbs.saraba1st.com/2b/thread-%d-%d-1.html" % (j, mid)
        print(mid, end=" ")
        t = search(url, cookie, header, mode)
        if isinstance(t, str):
            print('error')
            exit(0)
        # print((t-target).total_seconds()/60)
        if t > target:
            r = mid-1
        else:
            l = mid
    if mode == 'nga':
        ShellExecute(
            0, 'open', "https://bbs.nga.cn/read.php?tid=%d&page=%d" % (j, l), '', '', 1)
    else:
        ShellExecute(
            0, 'open', "https://bbs.saraba1st.com/2b/thread-%d-%d-1.html" % (j, l), '', '', 1)
