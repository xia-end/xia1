function fn2(){
	const readLine = require('readline');
	const len = require('./len.class');
	let rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	console.log("请输入截取字符和字符串（例：b abc),输入Q为退出");
	rl.on('line', function (line){
		if(line!="Q"){
			console.log("字符串数组为："+fn1(line[0],line.substring(1).trim()));
		}
		else{
			rl.close();
			console.log("谢谢使用");
		}
	});
	//分割字符串为数组
	function fn1(split1,str) {
		var arr = [];
		var num = 0;
		arr[0]="";
		for(var i = 0; i<len.le(str);i++) {
			if(str[i]==split1) {
				num++;
				arr[num]="";
			}
			else{
				arr[num] += str[i]; 
			}
		}
		return arr;
	}
}
module.exports = fn2;