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
    soup = BeautifulSoup(res.content, 'html.parser')
    if mode == 'nga':
        context = soup.find_all('span', class_="postcontent")
    else:
        context = soup.find_all('td', class_="t_f")
    if len(context) == 0:
        return "验证错误"
    return context


t0, t1 = 0, 0


def search(i, j, word, cookie, header, mode0, mode1):
    if mode0 == 'nga':
        url = "https://bbs.nga.cn/read.php?tid=%d&page=%d" % (j, i)
    else:
        url = "https://bbs.saraba1st.com/2b/thread-%d-%d-1.html" % (j, i)
        url = f'https://bbs.saraba1st.com/2b/forum.php?mod=viewthread&tid={j}&extra=&authorid=525398&page={i}'
        header['referer'] = 'https://bbs.saraba1st.com/2b/forum-151-1.html'
    global t0, t1
    t0 -= time()
    context = get(url, cookie, header, mode0)
    t0 += time()
    t1 -= time()
    if isinstance(context, str):
        if mode1 == 'cmd':
            print("{}\n{}\n".format(i, context), end="")
        else:
            f.write("{}\n{}\n".format(i, context))
    else:
        l = []
        # k = ["枪男", "枪女", "打枪"]
        for jc in context:
            c = jc.get_text().lower()
            for j in word:
                if j in c:
                    flag = 1
                    # for u in k:
                    #     if u in c:
                    #         flag = 0
                    #         break
                    if flag:
                        l.append(c)
                    break
        if len(l):
            if mode1 == 'cmd':
                print("\n\n%d\n" % i, end="")
            else:
                f.write("\n\n%d\n" % i)
            for j in l:
                print(j)
        else:
            if mode1 == 'cmd':
                print(str(i)+" ", end="")
            else:
                f.write(str(i)+" ")
    t1 += time()


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
    l = ["真真", "真总", "孟", "mhr", "hiru", "肥牛", "绯", "瑠", ]
    l = ['karisa', 'krs', '手刹', '狩砂']
    l = ['白桃','牛奶','xjnn','咲间','妮娜','妮老师']
    l = ['双面死狗']
    # l = ["乐","http","bili","b23"]
    # a, b, c = map(int, input().split())
    a, b, c = 2148798, 1, 12
    # f = open('pl/%d.txt' % a, 'w', encoding='utf-8')
    for i in range(b, c+1):
        search(i, a, l, cookie, header, 's1', 'cmd')
    # f.close()
print("\n{:.2f}s,{:.2f}s".format(t0, t1))
