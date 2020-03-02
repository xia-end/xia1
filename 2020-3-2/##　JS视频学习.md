##　JS视频学习
	完整的JavaScript是由ECMAScript（语法）、DOM和BOM组成
标识符
	变量，函数，属性的名字，或者函数的参数
标识符的命名规则
    由字母，数字，下划线或美元符号组成
    不能以数字开头
    不能使用关键字，保留字等作为标识符
变量
    ECMAScript的变量是松散类型
    松散类型：可以用来保存任何类型的数据
    每个变量仅仅是一个用于保存值的占位符而已
变量声明
	变量的声明要使用var操作符
	语法：var 变量名;
JavaScript的数据类型
基本数据类型:Undefined Null boolean Number String symbol
复杂数据类型　Object
typeof 功能:检测变量类型
　　　　语法:typeof 变量　或　typeof(变量)	
　　　　typeof的返回值类型是string
console.log();用于在控制台打印
当声明一个变量不给它赋值，类型为undefined
null
1.null值表示一个空对象指针
2.如果定义的变量准备在将来用于保存对象，那么最好将变量初始化为null而不是其他值
说明:undefined值是派生自null值的，所以undefined==null的返回结果为true
Number
Number:表示整数和浮点数
NaN:即非数值(Not a Number)是一个特殊的数值
说明:
１．任何涉及NaN的操作，都会返回NaN
2.NaN与任何值都不相等，包括NaN本身
isNaN()
语法:isNaN(n)
功能：检测n是否是"非数值"
返回值:boolean
参数:参数n可以是任何类型
说明:isNaN()对接收的数值，先尝试转换为数值，再检测是否为非数值
数值转换
有３个函数可以把非数值转换为数值
Number()
用于任何数据类型的强转
当转换数据不能被转换时，返回NaN
parseInt()
parseInt():会忽略字符串前面的空格，直到找到第一个非空格字符串
说明:
1.parseInt():转换空字符串返回NaN
2.parseInt()这个函数提供第二个参数：转换时使用的基数(即多少进制)
3.只能对数字在前的字符串进行转换，非数字在前，显示NaN
parseFloat()
parseFloat:从第一个字符开始解析每个字符，直到遇见一个无效的浮点数字符为止
说明:
除了第一个小数点有效外，parseFloat()与parseInt()的第二个区别在于它始终都会忽略前导的零
注：如果字符串中包含有效的十六进制格式，parseInt('0xf')将'0x'转换为相同大小的十进制数值，而parseFloat('0xf')只会输出0
说明:
1.Number()可以用于任何数据类型
2.parseInt()和parseFloat()则专门用于把字符串转换为数值
String
String类型用于表示由零或多个16位Unicode字符组成的字符序列，即字符串．字符串可以由双引号("")或('')表示
toString()与String()
语法:str.toString()
功能:将str转换为字符串
返回值:str的一个副本
参数:str是要转换的内容，可以是数值，布尔值，对象和字符串
说明:在不知道要转换的值是不是null或undefined的情况下，还可以使用String()函数,它能够将任意类型的值转换为字符串
boolean
用于表示真假的类型，即true表示真，false表示假
注意:
1.除0之外的所有数字,转换为布尔型都为true
2.除""之外的所有字符,转换为布尔型都为true
3.null和undefined转换为布尔型为false
什么是表达式
将同类型的数据(如常量,变量,函数等),用运算符号按一定的规则连接起来的,有意义的式子称为表达式
操作符的分类
隐式类型转换
1.算数操作符
+-*/%
2.逻辑操作符
3.赋值操作符
4.比较操作符
5.三元操作符
算术操作符：+ - * / % ++ --
除+以外，其他所有操作符如果涉及字符串等非数值的运算，会返回NaN,且 除+以外，浏览器会自己进行隐式类型转化，先尝试把字符串等转为数值再进行运算；
1、++a 和 a++
++a先返回递增之后的a值，指的是在实际运算中，而不影响自己本身的值，
a++ 先返回a的原值，再返回递增之后的值；指的是在实际运算中，而不影响自己本身的值；
2、递减--同递增原理；
在运算中，除了加法，其余的运算都会将字符串先转换为数字之后再进行计算，但是两个数据相加，如果有一方是字符串的话，加号的作用就是将他们进行拼接．
1、赋值操作符
（1）简单赋值： =
（2）复合赋值：+=、-=、*=、/=、%=
2、比较操作符
（1）==：只比较值是否相等
（2) ===：全等，比较值的同时还比较类型是否相等
（3）！=：只比较值是否不相等
（4）！==：不全等，比较值的同时还比较类型是否不相等
返回值：布尔
说明： null==undefined （undefined由null派生出来，值相等返回true）。
null===undefined （undefined和null是不同的数据类型，返回flase）。
3、三元操作符
条件？执行代码1：执行代码2
逻辑操作符：
&& : 与(并且)
（只要有一个条件不成立，返回false），解析：在有一个操作数不是布尔值的情况，逻辑与操作就不一定返回值，
此时它遵循下列规则：
1.如果第一个操作数隐式类型转换后为true,则返回最后的操作数
2.如果第一个操作数隐式类型转换后为flase,则返回第一个操作数
3.如果有一个操作数是null,则返回null
4.如果有一个操作数是NaN,则返回NaN
5.如果有一个操作数是undefined,则返回undefined
总结：全是true就是true的第一个操作数,如果有一个flase就是flase的操作数！
逻辑或：
|| 或 ：（只有有一个条件成立，返回true）

注意：
在有一个操作数不是布尔值的情况，逻辑或操作就不一定返回布尔值
1.如果第一个操作数隐式类型转换后为true,则返回第一个操作数
1.如果第一个操作数隐式类型转换后为false,则依次往后判断，直到最后是否为true
规则：
如果两个操作数是null,则返回null
如果两个操作数是NaN,则返回NaN
如果两个操作数式undefined,则返回undefined

逻辑非：
! : 无论操作数是什么数据类型，逻辑非都会返回一个布尔值
!! : 第二个逻辑非则对该布尔值求反

prompt()
语法：prompt()
功能：弹出输入框
返回值：
1、点击确定，返回输入内容
2、点击取消，返回null
alert()
语法：alert()
功能：弹出警告对话框

length
语法：string.length
功能：获取string字符串的长度
返回值：number
parseInt取整开头为字母则返回NaN；
NaN和任何内容都不相等，包括它本身。
NaN返回值是number类型。

if（isNaN()==true）来检测是否为非数字，记得是2个等号"=="；当判断条件为真的时候“==true”可以省略，if（isNaN());
页面中输入的任何数据都是字符串
1）用户在页面中输入的数字类型均为字符串，需要把从页面获取的值，以及case后面的值统一数据类型，要么把获取到的值转成数值类型，要么给case后面的数字加上引号，这样才能匹配上。

（2）每个case后面的执行语句最后不要忘了加上break。
for(语句1；语句2；语句3）{被执行的代码块；}
语句1：在循环钱开始执行
语句2：条件
语句3：在循环代码块被执行之后执行的语句；
循环结构
for(初始值；循环条件；迭代){}
执行顺序是先判断是否满足条件 ，满足条件执行{}里的 ，执行完{}的再去迭代
嵌套for(初始值；循环条件；迭代){
for(初始值；循环条件；迭代){}
}
执行顺序 只有当外层循环满足条件 才会执行内层循环 ，外层循环执行一次内层循环执行一周.
循环里一定要定义循环的条件，不然控制台会报错，代码不会向下执行，页面也不会有任何显示。
while语句
语法：
while（条件）{
需要执行的代码；
} 先判断条件，再执行脚本
do-while语句
语法：
do{
需要执行的代码;
}while（条件）
说明：这种语法的循环至少要被执行一次。
先执行脚本，再判断条件，至少会执行一次。
break：立即退出循环；
continue：退出本次循环，继续执行下一次循环；
JavaScript的函数
函数的作用：
通过函数可以封装任意多条语句，而且可以在任何地方、任何时候调用执行。
函数的定义  
函数使用function声明，后跟一组参数以及函数体，语法如下：
function functionName([arg0,arg1,…argn]){
statments
}
说明：
1、functionName是要定义的函数名，属于标识符
2、[]中的arg0,arg1,...argn为函数的参数
3、[]说明里面的内容不是必须的，它不是语法
函数的调用
语法：函数名（[arg0,arg1,...argn]）
函数的返回值
任何函数值通过return语句，后面跟着返回的值来实现返回值。
说明：
1、函数会在执行完return语句之后停止并立即退出
2、return 语句也可以不带有任何返回值，用于提前停止函数执行又不需要返回值的情况。
1、arguments
ECMAScript中的参数在内部用一个数组来表示，
在函数体内通过argument对象来访问这个数组参数。
说明：
1)arguments对象只是与数组类似，并不是Array的实例。
2)[]语法访问它的每一个元素。
3)length属性确定传递参数的个数。


arguments.length 可以知道传递进来的参数的个数
string.length 字符串的长度
在<script>中可以通过添加 "use strict" 这句代码开启严格模式
arguments对象只是与数组类似，并不是Array的实例
arguments对象可以获取函数传进去的参数数组；
arguments.length 可以知道传递进来的参数的个数；
非严格模式可以通过arguments[0]下标修改函数的值；下标0代表第一个参数

字符串 函数 数组都是内置对象
内置对象就是 浏览器自己封装好的对象
1. array
2.String
3.Math
4.Date

1、ECMAScript中的Array数组
数组主要是用来存储一组数据的。

2、如何创建数组
创建数组的基本方式有两种：
1)使用Array构造函数
语法：new Array（）
小括号（）说明：
①预先知道数组要保存的项目数量
②向Array构造函数中传递数组应包含的项
2)使用数组字面量表示法
由一对包含数组项的方括号[ ]表示，多个数组项之间以逗号隔开。

数组元素的读写
读取和设置时，使用方括号[ ]并提供相应的索引
说明：索引是从0开始的正整数

数组长度：
语法：array.length
功能：获取数组array的长度
返回值：number
说明：
1、通过设置length可以从数组的末尾移除项或向数组中添加新项。
2、把一个值放在超出当前数组大小的位置上时，会重新计算数组长度值，长度值等于最后一项索引加1。

---- JavaScript的内置对象（数组方法：一） ----
掌握数组的栈方法：
1、push()
语法：
arrayObject.push(newele1,newele2,...,neweX)
功能：
把它的参数顺序添加到arrayObject的尾部
返回值：
把指定的值添加到数组后的新长度
-------------------------------------------------
2、unshift()
语法：
arrayObject.unshift(newele1,newele2,...,neweX)
功能：
把它的参数顺序添加到arrayObject的开头
返回值：
把指定的值添加到数组后的新长度
-------------------------------------------------
3、pop()
语法：
arrayObject.pop()
功能：
删除arrayObject的最后一个元素
返回值：
被删除的那个元素
-------------------------------------------------
4、shift()
语法：
arrayObject.shift()
功能：
删除arrayObject的第一个元素
返回值：

被删除的那个元素
-------------------------------------------------
1、join()
语法：
arrayObject.join(separator);
功能：
用于把数组中的所有元素放入一个字符串。
返回值：
字符串。
（separator：分隔符，默认为逗号“，”）

2、reverse()
语法：
arrayObject.reverse()
功能：
用于颠倒数组中元素的顺序。
返回值：
数组。

3、sort
语法：
arrayObject.sort(sortby);
功能：
用于对数组的元素进行排序。
返回值：
数组。
说明：
1）即使数组中的每一项都是数值，sort()方法比较的也是字符串。
2）sort()方法可以接收一个比较函数作为参数。                                                                                                     

concat:把一个数组和另外一个或者多个数组连接到一个数组，最后返回一个新数组。
splice:从一个数组中选取一个或者多个下来。splice（arguments1,arguments2）的第一个参数是开始时候的下标，第二个参数是用来表示有多少位数。

2、slice()
语法：
arrayObject.slice(start,end)
功能：
从已有的数组中返回选定的元素。
参数：
start（必需）规定从何处开始选取，如是负数，从数组尾部开始算起。
end（可选）规定从何处结束选取，是数组片段结束处的数组下标。
说明：
1)如没指定end，切分的数组包含从start到数组结束的所有元素。
2)如slice()方法的参数中有一个负数，则用数组长度加上该数来确定相应的位置。
返回值：
数组。

1、concat()
语法：
arrayObject.concat(arrayX,arrayX,......,arrayX)
功能：
用于连接两个或多个数组。
返回值：
数组。
b 
splice()
1、删除数组项
语法：arrayObject.splice(index,count)
说明：count是要删除的项目数量，如果设置为0，则不会删除项目。如果不设置，则删除从index开始的所有值
功能：删除从index处开始的零个或多个元素
返回值：含有被删除的元素的数组
2、插入数组项
语法：arrayObject.splice(index,0,item1,....,itemX)
功能：在指定位置插入值
参数：index：起始位置 
             0：要删除的项数 
             item1,....,itemX：要插入的项
返回值：数组
3、替换数组项
语法：arrayObject.splice(index,count,item1,.....itemX)
功能：在指定位置插入值，且同时删除任意数量的项
参数：index：起始位置 count：要删除的项数 item1,.....itemX：要插入的项
返回值：从原始数组中删除的项（如果没有删除任何项，则返回空数组）  
\
为数组实例添加的两个位置方法：
1、indexOf()
语法：arrayObject.indexOf(searchvalue,startIndex)
功能：从数组的开头（位置0）开始向后查找
参数：searchvalue：必需，要查找的项
startIndex：可选，起点位置的索引
返回值：number，查找的项在数组中的位置，没有找到的情况下返回-1
2、lastIndexOf()
语法：arrayObject.lastIndexOf(searchvalue,startIndex)
功能：从数组的末尾开始向前查找
参数：searchvalue：必需，要查找的项
startIndex：可选，起点位置的索引
返回值：number，查找的项在数组中的位置，没有找到的情况下返回-1
说明：1）在比较第一个参数与数组中的每一项时，会使用全等操作符，即要求查找的项必须严格相等
2）数组的位置方法是ECMAScript5为数组实例新增的，所以支持的浏览器有：IE9+、Firefox、Safari、Opera和Chrome
不兼容的老版本浏览器使用自己封装函数的方法
indexOF 相等效果：
function ArrayIndexOf(arr,value){
if(arr[i]==value){
return i;
}
return -1;
}
var pos2=ArrayIndexOf(num,15);
console.log(pos2);

1、charAt()
语法：
stringObject.charAt(index)
功能：
返回stringObject中index位置的字符。


2、charCodeAt()
语法：
stringObject。charCodeAt(index)
功能：
返回stringObject中index位置字符的字符编码。
说明：
ECMAScript5中可使用“方括号加字符索引”来访问字符串中特定的字符，但是IE7及更早的浏览器会返回undefined。

3、indexOf()
语法：
stringObject。indexOf("o");
功能：
从一个字符串中搜索给定子字符串，返回子字符串的位置。
返回值：
数值。
说明：
如果没有找到该子字符串，则返回-1.

4、lastIndex()
语法：
stringObject.lastIndexOf("o");
功能：
从一个字符串中搜索给定的子字符串（从后往前搜索），返回子字符串的 位置。
返回值：
数值。
说明：
如果没有找到该子字符串，则返回-1.

截取子字符串方法：
slice（start，end）；
注意：1、第二个参数是不在范围之内，第二个参数是可选的。
2、当参数是负数的时候，负数加上字符串长度
substring(start,end)方法:
区别：1、当参数为负数的时候，索引为0.
2、substring()会将较小的数作为开始位置，将较大的数作为结束位置
substr(start,len)方法：
1、startb必需，指定子字符串的开始位置
2、len：可选，表示截取的字符总数，省略时截取至字符串的末尾。
3、当Start为负数时，会将传入的负值与字符串的长度相加。
4、当len为负数时，返回空字符串。
slice,substring,substr的区别
slice:当参数为负数时，表示参数与长度相加后的值
substring:当参数为负数时，表示下标为零处
substr:两个参数分别是开始位置和截取个数
当开始位置为负数时，表示参数与长度相加后的值
当截取个数为负数是，截取个数为零

split()
stringObj.split(separator)
把一个字符串分割成字符串数组
返回值：Array
说明：必需，分隔符

replace（）
stringObj.replace(regexp/substr, replacement)
在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
返回值：string
参数：regexp：必需。规定子字符串或要替换的模式的RegExp对象。
replacement：必需，一个字符串值


toUpperCase()与toLowerCase()
语法：
stringObject.toUpperCase()
功能：把字符串转换为大写
语法：
stringObject.toLowerCase()
功能：把字符串转换为小写


Math
掌握Math对象的方法：
min()
语法：
Math.min(num1,num2,…num3);

max()
Math.min(num1,num2,…num3);

ceil()
语法：
Math.ceil(num);
功能：
向上取整，即返回大于num的最小整数。
返回值：Number

floor()
语法：
Math.floor(num)
功能：
向下取整，返回num的整数部分
返回值：Number

round()
语法：
Math.round(num)
功能：
将数值四舍五入为最接近的整数。
返回值：Number

abs()
语法：
Math.abs(num)
功能
返回num的绝对值
返回值：Number

Math.random(); 返回大于等于0小于1的随机数；返回number；
说明：求n到m之间的随机整数的公式： random=Math.floor(Math.random()*(m-n+1)+n);
m--大数； n--小数 ；m-n+1表示随机整数的个数 求任意数组之间的随机整数：

Date对象
获取年月日时分秒及星期的方法
1、getFullYear():返回4位数的年份
2、getMonth():返回日期中月份，返回值为0-11
3、getDate()：返回月份中的某一天
4、getDay():返回星期，返回值为0-6
5、getHours()：返回小时
6、getMinutes()：返回分
7、getSeconds()：返回秒
8、getTime()：返回表示日期的毫秒数


日期对象
语法：new Date()
创建日期时间对象
返回值：不传参的情况下，返回当前的日期时间对象。

封装创建一个日期时间对象
tody.getTime()获取的是：
从1970年1月1日00：00：00开始到现在时间的毫秒数

//javaScript错误处理
//简单的说，语法错误就是不符合js语法的错误，出现语法错误，控制台会进行自动报错并告知错误的行号（但是行号不一定准确）。
//常见语法错误：
//符号漏写，多打，少打，错打
//使用了不合语法的变量名
//语句写错，没写完等等。
//浏览器一次总是只告诉你第一个错误
//SyntaxError语法错误
//unexpected token(连续字母，符号)
//js中函数可以当参数传


运行时错误：
unexpected identifier 未知符号错误 unexpected token 未知符号错误。
指代码没有语法错误，而在运行的时候才发生的错误。运行时错误是一个统称
1、ReferenceError 变量引用异常触发，一般是未定义变量或者定义错误
2、TypeError 类型使用错误时触发
（1）获取未初始化的变量的属性或方法
var foo; console.log(foo.length);
（2）调用类型错误
var bar=9; bar();