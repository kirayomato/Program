from collections import defaultdict
from bs4 import BeautifulSoup
import requests
from sys import exit
import re
from time import time
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


def get(url, cookie, header, mode):
    res = ""
    for _ in range(5):
        res = requests.get(url, cookies=cookie, headers=header)
        if res.status_code == 200:
            break
    if res.status_code != 200:
        return "连接错误"
    soup = BeautifulSoup(res.content, 'html5lib')
    if mode == 'nga':
        context = soup.find_all('a', class_="author")
        context0 = [i.attrs['href'] for i in context]
    else:
        context = soup.find_all('td', class_="t_f")
    if len(context) == 0:
        return "验证错误"
    return context0


d = defaultdict(int)


def search(i, j, cookie, header, mode0):
    if mode0 == 'nga':
        url = "https://bbs.nga.cn/read.php?tid=%d&page=%d" % (j, i)
    else:
        url = "https://bbs.saraba1st.com/2b/thread-%d-%d-1.html" % (j, i)
        header['referer'] = 'https://bbs.saraba1st.com/2b/forum-151-1.html'
    context = get(url, cookie, header, mode0)
    for jc in context:
        c = jc[jc.find('uid')+4:]
        d[c] += 1


if __name__ == "__main__":
    cookie = read_cookie(r"D:\Program\VS_Code\CODE_Python\cookies.txt")
    header = {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7',
        'connection': 'keep-alive',
        'cache-control': 'max-age=0',
        'referer': 'https://bbs.nga.cn/thread.php?fid=-60204499',
        'sec-ch-ua': '"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'User-Agent': 'NGA_WP_JW/(;WINDOWS)',
    }
    # l = ["乐","http","bili","b23"]
    # a, b, c = map(int, input().split())
    a, b, c = 37678803, 1000, 1100
    # a, b, c = 2141630, 1348, 1388
    for i in range(b, c+1):
        search(i, a, cookie, header, 'nga')
    d = list(d.items())
    d.sort(key=lambda x: -x[1])
    for k, v in d:
        print(f'{k}:{v}')
    print(sum([i[1] for i in d]))
