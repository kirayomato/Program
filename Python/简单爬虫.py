from bs4 import BeautifulSoup
import requests


# 使用EditThisCookie导出cookie
def read_cookie(txt):
    name = []
    value = []
    with open(txt, "r")as f:
        for i in f:
            i = i.strip()
            if "name" in i:
                name.append(i[9:-2])
            elif "value" in i:
                value.append(i[10:-2])
    cookie = {}
    for k, v in enumerate(name):
        cookie[v] = value[k]
    return cookie


def get(url, cookie, header):
    res = ""
    for _ in range(5):
        res = requests.get(url, cookies=cookie, headers=header)
        if res.status_code == 200:
            break
    if res.status_code != 200:
        return "连接错误"
    soup = BeautifulSoup(res.content, 'html.parser')
    # nga
    context = soup.find_all('span', class_="postcontent")
    # s1
    # context = soup.find_all('td', class_="t_f")
    if len(context) == 0:
        return "验证错误"
    return context


def search(url, word):
    context = get(url, cookie, header)
    if isinstance(context, str):
        print(i, context)
    else:
        flag = True
        for jc in context:
            c = jc.get_text()
            for j in word:
                if j in c:
                    print(i, c)
                    flag = False
                    break
        if flag:
            print(i, "not found")


if __name__ == "__main__":
    cookie = read_cookie("cookies.txt")
    header = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
        'Connection': 'keep-alive'
    }
    l = ["犬山", "苔"]
    for i in range(395, 396):
        url = "https://bbs.nga.cn/read.php?tid=22516870&page=%d" % i
        search(url, l)
