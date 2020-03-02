function printTri(rows){

//需要判断输入的数能否打印菱形，前提是只有奇数才可以打印菱形,也就是满足不是偶数才能继续执行后续操作

if(rows%2!==0){

var top=Math.ceil(rows/2),

bottom=rows-top;

//打印上半部分的菱形

var str="";

for(var i=1;i<=top;i++){//控制行

//控制空格

for(var k=1;k<=top-i;k++){

str+=" ";

}

//控制每行显示的星星

for(var j=1;j<=2*i-1;j++){

str+="*";

}

str+="\n";

}

//打印下半部分的菱形

for(var i=1;i<=bottom;i++){//控制行

//控制空白

for(var j=1;j<=i;j++){

str+=" ";

}

for(var k=1;k<=2*(bottom-i)+1;k++){

str+="*";

}

str+="\n";

}

console.log(str);//易错点不是每一行完成之后就要打印一次，这样会换行会存在间距，

}

}

//调用测试函数

printTri(7);

