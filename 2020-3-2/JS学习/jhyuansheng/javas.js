const readLine = require('readline');
const len      = require('./len.js');
const spli     = require('./spli.js');
const jo       = require('./jo.js');
const sera     = require('./sera.js');
const substr   = require('./substr.js');
let rl = readLine.createInterface({
	input: process.stdin,
	output: process.stdout,
});
console.log("操作字符串");
console.log("-----------------");
console.log("可进行的操作有:");
console.log("1.求字符串长度\n2.截取字符串为字符串数组\n3.拼接字符串");
console.log("4.搜索字符串中字符的下标\n5.截取字符串");
console.log("-----------------");
console.log("请选择操作序号");
rl.on('line', function (line){
	if(line[0]=="1" || line[0]=="2" || line[0]=="3" || line[0]=="4" || line[0]=="5")
		{
		switch(line) {
			
			case "1":
				rl.close();
				len();
				break;
			case "2":
				rl.close();
				spli();
				break;
			case "3": 
				rl.close();
				jo();
				break;
			case "4": 
				rl.close();
				sera();
				break;
			case "5": 
				rl.close();
				substr();
				break;
			case "0":
				console.log("退出交互页面");
				process.exit(0);
				break;
		}
	}
	else{
		console.log("请重新正确序号");
	}
 });