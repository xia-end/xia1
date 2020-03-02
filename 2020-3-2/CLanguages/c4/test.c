#include <stdio.h>

int main(){
    int a[10];
    int i = 0;
    while (scanf("%d%*c", a + i++) == 1);
    return 0;
}
