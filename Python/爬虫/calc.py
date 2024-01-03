import json
from math import ceil
import requests


def get(uid, mode='fans'):
    header = {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7',
        'connection': 'keep-alive',
        'cache-control': 'max-age=0',
        'referer': f'https://live.bilibili.com/{uid}',
        'origin': f'https://live.bilibili.com/{uid}',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78'

    }

    def fans(i):
        return f'https://api.live.bilibili.com/xlive/general-interface/v1/rank/getFansMembersRank?ruid={uid}&page={i}&page_size=20'

    def guard(i):
        return f'https://api.live.bilibili.com/xlive/app-room/v2/guardTab/topList?roomid=27628019&page={i}&ruid={uid}&page_size=20&typ=0'
    ans = []
    if mode == 'guard':
        url = guard
        res = requests.get(url=url(1), headers=header)
        f = json.loads(res.text)
        num = f['data']['info']['num']
        m = ceil(num/20)
        for i in range(m):
            res = requests.get(url=url(i+1), headers=header)
            f = json.loads(res.text)['data']['list']
            for j in f:
                ans.append(j['username'])
    else:
        url = fans
        res = requests.get(url=url(1), headers=header)
        f = json.loads(res.text)
        num = f['data']['num']
        m = ceil(num/20)
        for i in range(m):
            res = requests.get(url=url(i+1), headers=header)
            f = json.loads(res.text)['data']['item']
            for j in f:
                ans.append(j['name'])
    return set(ans)


uid = ['2080519347', '1283658', '1954091502', '1932862336']
s0 = get(uid[0])
print(len(s0))
for i in range(1, len(uid)):
    s0 &= get(uid[i])
    print(len(s0))
s0 &= get('1932862336', 'guard')
print(len(s0))
print(s0)
