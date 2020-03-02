# include <stdio.h>
 
int main() {
 
    char f, fuhao;//定义并声明两个字符串变量：f是后期判断是否退出计算的输入字符；fuhao是进行switch判断的值，即运算中的加减乘除。
    double yi,er;//定义并声明两个双精度浮点型变量：yi、er分别代表用户两次输入的数字。
    int jisuan=1;//定义并初始化一个int型变量，对while循环的判断值赋值为1。
    while (jisuan){
        printf("--------------------------------\n");
        printf("这是一个简单的计算器\n");
        printf("仅用于计算两个数字之间的加减乘除,运算结果仅保留一位小数。\n");
        printf("请输入两个数字之间的运算。\n例如:20+30（加法）或10-5（减法）或4*5（乘法）10/2（除法） \n");
        printf("--------------------------------\n");
    scanf("%lf%c%lf",&yi, &fuhao, &er);//从键盘取入：数字和字符串
   // fc = getchar();
    if(yi<'0'|| yi>'9'){
      printf("您输入有误，这是一个简单的算数运算，请输入阿拉伯数字！\n");
     // break;
    }    
    //进行运算符号的识别判断，然后对应执行后边的操作
    switch(fuhao)
    {   
        case '+':
            printf("%.1lf + %.1lf = %.1lf\n",yi, er, yi + er);//%.1lf是数字带一个小数位，%.2lf两个小数位数字，依此类推。
            break;
 
        case '-':
            printf("%.1lf - %.1lf = %.1lf\n",yi, er, yi - er);//%.1lf是数字带一个小数位，%.2lf依此类推。
            break;
 
        case '*':
            printf("%.1lf * %.1lf = %.1lf\n",yi, er, yi * er);//%.1lf是数字带一个小数位，%.2lf依此类推。
            break;
 
        case '/':
            if(er!=0){
               printf("%.1lf / %.1lf = %.1lf\n",yi, er, yi / er);//%.1lf是数字带一个小数位，%.2lf依此类推。
              printf("%.1lf / %.1lf = %.1lf\n",yi, er, yi / er);//%.1lf是数字带一个小数位，%.2lf依此类推。
            }else{
               printf("除数不能为零，请重新输入\n");
                 }
            break;
        // 其他不识别的计算符号，直接报错
        default:
        printf("对不起，您输入的运算符号有错，请重新输入！\n");
            break;
    }

    printf("您想进行下一次计算么？退出计算，请输入y或Y加回车键。继续计算，请输入任意字符加回车键！\n");
    /*获取一个字符，询问是否进行下一次计算*/
    getchar();//获取字符串
    scanf("%c",&f);//从键盘输入
    //如果输入y或Y,直接跳出循环
    if (f == 'y' || f == 'Y'){
    break;
    }else{
        //若输入的是其他字符，换到下一页，进行计算
        printf("\f");
     }
 }
    return 0;
}
