## JavaScript 显示数据
	JavaScript 可以通过不同的方式来输出数据：
	
	1. 使用 window.alert() 弹出警告框。
	2. 使用 document.write() 方法将内容写到 HTML 文档中。
	3. 使用 innerHTML 写入到 HTML 元素。
	4. 使用 console.log() 写入到浏览器的控制台
## 程序中调试是测试，查找及减少bug(错误)的过程
## JavaScript语法
JavaScript 字面量
在编程语言中，一般固定值称为字面量，如 3.14。
数字（Number）字面量 可以是整数或者是小数，或者是科学计数(e)。
字符串（String）字面量 可以使用单引号或双引号
表达式字面量 用于计算
数组（Array）字面量 定义一个数组
对象（Object）字面量 定义一个对象
函数（Function）字面量 定义一个函数
JavaScript 变量
在编程语言中，变量用于存储数据值。

JavaScript 使用关键字 var 来定义变量， 使用等号来为变量赋值
变量可以通过变量名访问。在指令式语言中，变量通常是可变的。字面量是一个恒定的值
变量是一个名称。字面量是一个值。
	JavaScript操作符
	JavaScript使用 算术运算符 来计算值
	JavaScript使用赋值运算符给变量赋值
	JavaScript语言有多种类型的运算符：

类型	                                           实例	                    描述
赋值，算术和位运算符      	=  +  -  *  /	          在 JS 运算符中描述
条件，比较及逻辑运算符  	==  != <  > 	        在 JS 比较运算符中描述
JavaScript 关键字
JavaScript 关键字用于标识要执行的操作。
和其他任何编程语言一样，JavaScript 保留了一些关键字为自己所用。
var 关键字告诉浏览器创建一个新的变量
JavaScript 注释
不是所有的 JavaScript 语句都是"命令"。双斜杠 // 后的内容将会被浏览器忽略
JavaScript 数据类型
JavaScript 有多种数据类型：数字，字符串，数组，对象等等
JavaScript 函数
JavaScript 语句可以写在函数内，函数可以重复引用：
引用一个函数 = 调用函数(执行函数内的语句)。
JavaScript 字母大小写
JavaScript 对大小写是敏感的。
JavaScript 字符集
JavaScript 使用 Unicode 字符集。
JavaScript 中，常见的是驼峰法的命名规则
下面的 JavaScript 语句向 id="demo" 的 HTML 元素输出文本 "你好 Dolly" 
document.getElementById("demo").innerHTML = "你好 Dolly";
分号 ;
分号用于分隔 JavaScript 语句。

通常我们在每条可执行的语句结尾添加分号。

使用分号的另一用处是在一行中编写多条语句。
您也可能看到不带有分号的案例。
在 JavaScript 中，用分号来结束语句是可选的。
JavaScript 代码块
JavaScript 可以分批地组合起来。

代码块以左花括号开始，以右花括号结束。

代码块的作用是一并地执行语句序列。
JavaScript 语句标识符
JavaScript 语句通常以一个 语句标识符 为开始，并执行该语句。

语句标识符是保留关键字不能作为变量名使用。

下表列出了 JavaScript 语句标识符 (关键字) ：

语句	描述
break	用于跳出循环。
catch	语句块，在 try 语句块执行出错时执行 catch 语句块。
continue	跳过循环中的一个迭代。
do ... while	执行一个语句块，在条件语句为 true 时继续执行该语句块。
for	在条件语句为 true 时，可以将代码块执行指定的次数。
for ... in	用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
function	定义一个函数
if ... else	用于基于不同的条件来执行不同的动作。
return	退出函数
switch	用于基于不同的条件来执行不同的动作。
throw	抛出（生成）错误 。
try	实现错误处理，与 catch 一同使用。
var	声明一个变量。
while	当条件语句为 true 时，执行语句块。
JavaScript 语句标识符
JavaScript 语句通常以一个 语句标识符 为开始，并执行该语句。
语句标识符是保留关键字不能作为变量名使用。
下表列出了 JavaScript 语句标识符 (关键字) ：
语句	描述
break	用于跳出循环。
catch	语句块，在 try 语句块执行出错时执行 catch 语句块。
continue	跳过循环中的一个迭代。
do ... while	执行一个语句块，在条件语句为 true 时继续执行该语句块。
for	在条件语句为 true 时，可以将代码块执行指定的次数。
for ... in	用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
function	定义一个函数
if ... else	用于基于不同的条件来执行不同的动作。
return	退出函数
switch	用于基于不同的条件来执行不同的动作。
throw	抛出（生成）错误 。
try	实现错误处理，与 catch 一同使用。
var	声明一个变量。
while	当条件语句为 true 时，执行语句块。
空格
JavaScript 会忽略多余的空格。您可以向脚本添加空格，来提高其可读性。
对代码行进行折行
您可以在文本字符串中使用反斜杠对代码行进行换行。下面的例子会正确地显示：
document.write("你好 \
世界!");

## JavaScript 多行注释

JavaScript 多行注释
多行注释以 /* 开始，以 */ 结尾。
 在JavaScript中，数组是一种特殊的对象类型。 因此 typeof [1,2,3,4] 返回 object。 