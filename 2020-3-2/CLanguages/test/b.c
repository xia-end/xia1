#include <stdio.h>

int main()
{
    int count=0;
    int i;
    int s=0;
    int flag=1;
    while(flag)
        {
	    scanf("%d",&i);
	    if(0==i)break;
	    s+=i;
	    count++;
	}
    printf("%d,%d",s,count);
    return 0;
}
