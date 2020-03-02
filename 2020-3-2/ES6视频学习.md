## let关键字的语法规范
声明变量
let声明的变量不能重复声明
不存在变量提升，临时性死区
let是块状作用域（在while循环，for循环产生）
代替闭包的一些功能
像for,if,else,while等代码块，产生块级作用域

## const
声明常量
常量的值一旦声明就不能更改
const声明的常量同样存在作用域
(局部作用域,块级作用域,全局作用域)
## 全局作用域和顶层对象
ES6中去掉了顶层对象的概念
为了向下兼容，在全局作用域中使用var声明的变量和直接声明的函数仍然是顶层对象的属性和方法
而使用let和const声明的变量不再输入顶层对象

  ## 数组的解构赋值
  	let [a,b,c] = [1,2,3];	//一次性声明数组中三个值
保证等号两边的数组模式是一样的
如果不能正确解构，有的变量可能会自动赋值undefined
变量可以有默认值
## 对象的解构赋值　
对象的解构赋值
	let {bar,foo} = {bar:'ha',foo:1};
完整的对象解构赋值
	let {bar:bar,foo:foo} = {bar:'ha',foo:'haha'};
## 特殊对象的解构赋值
一切皆对象
字符串可以被看做是由字符组成的数组
	例:let [a,b,c,d,e,f] = "hello";
  字符串当成对象
  	例:let {length:len} = "world";//得到的是长度
 	　 let {PI:p} = Math; 

## 实际用途
解构赋值实现交换两个变量的值
	例:let a = 100;
	      let b = 200;
	      [a,b] = [b,a];
提取josn中的数据
    let jsonData = {
          id:42,
          status:'OK',
          data:[1,2,3]
    };
    let {id,status,data} = jsonData;
设置函数的默认值
	function getJson({
		url,
		type='get',
		data=' ',
		async=true
	}) {
			console.log(url,type,data,async);
	}
	getJson({
		url:"http://hello.java",
		data:"a=1"
	});
ES6模块解构赋值

## for of可以遍历哪些类型的数据
Array
字符串
nodeList
类数组对象
arguments
Map
Set
## for of与其他遍历方式做个比较
for of 比较for..in:可以遍历的类型比for in更多，for of直接遍历出值，for in遍历出来的是key
for of 比较forEach方式:可以遍历更多的类型，可以使用break和continue等结束语句
## Iterator遍历器
ES6定义的一个接口
Array实现了Interator的接口
实现遍历器接口的数据类型都可以用于for of
# 字符串新增特性
## 模板字符串
书写方式　｀｀
1. 定义比较长，复杂字符串　如html代码
2. 模板字符串中写｀需要转义
3. 模板字符串中插入变量${变量名}
4. 模板字符串中插入函数的调用${函数名()}
## repeat方法
repeat()
重复打印一个字符串
## 字符串补全长度的方法
向前补全:padStart()
向后补全:padEnd()
## 字符串包含验证
是否包含: includes()
开头包含:startsWith()
结尾包含:endsWith()
	<script type="text/javascript">
	let name="haha";
	console.log(name.repeat(2));//hahahaha
	console.log(name.padStart(5,"*"));//*haha
	console.log(name.includes("a"));//true
	console.log(name.startsWith("a"));//false
	</script>
# 函数新增特性
## 函数参数的默认值
	例:finction fn (a,b="默认值") {
			console.log(a,b);
	}
	fn("1");//1,默认值
## rest参数
## 箭头函数
	例:
	<script>
		let fn = val=>val;
		//等同于
		let fn = function(val) {
				return val;
		}
	</script>
## 函数参数的尾逗号(ES2017)

