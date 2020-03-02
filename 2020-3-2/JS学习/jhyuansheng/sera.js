function fn4(){
	const readLine = require('readline');
	const len = require('./len.class');
	let rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	console.log("请输入搜索字符和字符串（例：b abc),输入Q为退出");
	rl.on('line', function (line){
		if(line!="Q"){
			console.log("搜索字符的下标为："+fn3(line[0],line.substring(1).trim()));
		}
		else{
			rl.close();
			console.log("谢谢使用");
		}
	});
//字符串搜索
	function fn3(search,str) {
		var str1 = "";
		for(var i=0;i<len.le(str);i++) {
			for(var j=0;j<len.le(search);j++){
				if(str[i]==search[j]) {
					str1 += str[i];
					if(str1==search) {
						return i-j;
					}
				}
			}
		}
	}
}
module.exports = fn4;