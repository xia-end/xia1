#include <stdio.h>

int main()
{
    int flag=1;//while的循环条件,1为无限循环
    int s=0;
    int i;//屏幕输入的变量
    int num;//用来标记用户要进行的操作
    printf("请选择要进行的操作(0数字结束输入):\n");
    printf("1进行加法运算  2进行减法运算\n3进行乘法运算  4进行除法运算\n");
    scanf("%d",&num);	
    	//加法运算
        if(1==num)
            {
                printf("请输入相加的数字:\n");
		//while循环实现多个数的累加
                while(flag)
		{ 
                    scanf("%d",&i);
		    	    //输入0时,跳出循环,加法运算结束
		            if(0==i)break;
	                    s+=i;
		}
            printf("%d",s);
            }
	//减法运算
        if(2==num)
            {
                printf("请输入相减的数字:\n");
		//循环实现多个数的减法
                while(flag)
		{ 
                    scanf("%d",&i);
		    //输入0时,跳出循环,减法运算结束
		    if(0==i)break;
		    //第一次输入时
		    if(0==s)
		        {
			    s=i;
		        }
		    else
	               {
	                   s=s-i;
		       }
		}
            printf("%d",s);
            }
        if(3==num)
            {
                int s=1;
		printf("请输入相乘的数字:\n");
                while(flag)
		{ 
                    scanf("%d",&i);
		    //输入0时,跳出循环,乘法运算结束
		    if(0==i)break;
	            s*=i;
		}
            printf("%d",s);
            }
        if(4==num)
            {
	        float s=1;
		float i;
                printf("请输入相除的数字:\n");
                while(flag)
		{ 
                    scanf("%f",&i);
		    //输入0时,跳出循环,除法运算结束
		    if(0==i)break;
		    //第一次输入时
		    if(1==s)
		    { 
	                s=i;
		    }else
		    {
		        s=s/i;
	            }
	            
		}
            printf("%f\n",s);
            }
}
