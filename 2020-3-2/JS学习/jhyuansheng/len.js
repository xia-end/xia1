function fn1(){
	const readLine = require('readline');
	let rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	console.log("请输入想求长度的字符串（例：123),输入Q为退出");
	rl.on('line', function (line){
		if(line!="Q"){
			console.log("字符串长度为："+fn(line));
			console.log("可继续输入想要求长度的字符串，退出请输入Q");
		}else{
			rl.close();
			console.log("谢谢使用");
		}
		
		
	});
	//求字符串长度
	function fn(arr) {
		var len=0;
		for(index in arr){
			len++;
		}	
		return len;
	}
}
module.exports = fn1;