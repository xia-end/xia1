function fn5(){
	const readLine = require('readline');
	const len = require('./len.class');
	let rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	console.log("请输入截取起始位置和字符串（例：1 abc),输入Q为退出");
	rl.on('line', function (line){
		if(line!="Q"){
			console.log("截取字符串为："+fn4(line[0],line.substring(1).trim()));
		}
		else{
			rl.close();
			console.log("谢谢使用");
		}
	});
	// 截取字符串
	function fn4(sub,str){
		var str1 = "";
		for(var i=0;i<len.le(str);i++) {
			if(i==sub) {
				str1 += str[i];
				sub++;
			}
		}
		return str1;
	}
}
module.exports = fn5;