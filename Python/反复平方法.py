from functools import reduce


def quickpow(x, n):
    vec = []
    while n > 0:
        if n % 2 == 1:
            vec.append(x)
        n //= 2
        x *= x
    return reduce(lambda a, b: a * b, vec)


[x, n] = list(map(eval, input().split()))
print(x, "^", n, "=", quickpow(x, n))
