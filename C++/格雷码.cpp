# 第n个格雷码
int gray(int n) 
{ 
  return n ^ (n >> 1); 
}

int rev_gray(int g) 
{
  int num = 0;
  while(g)
  {
    num ^= g;
    g>>=1;
  }
  return num;
}
