function fn3(){
	const readLine = require('readline');
	const len = require('./len.class');
	let rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	console.log("请输入拼接字符和字符串（例：b abc),输入Q为退出");
	rl.on('line', function (line){
		if(line!="Q"){
			console.log("字符串为："+fn2(line[0],line.substring(1).trim()));
		}
		else{
			rl.close();
			console.log("谢谢使用");
		}
	});
	//拼接字符串
	function fn2(num,arr) {
		str = "";
		for(var i = 0; i < len.le(arr);i++) {
			if(i<len.le(arr)-1){ 
				str += (arr[i]+num);
			}
			else{
				str += arr[i];
			}	
		}
		return str;
	}
}
module.exports = fn3;