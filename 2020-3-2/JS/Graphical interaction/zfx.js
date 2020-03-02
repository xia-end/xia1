function f1() {
	const readLine = require('readline');
	let rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout,
 	});
 	console.log("已选正方形，请输入填充样式和长度");
//实心正方形
rl.on('line', function (line){
	if(line=="Q"){
		process.exit(0);
		console.log("欢迎下次使用");
	}else{


		console.log(zfx(line[0],line.substring(1).trim()));
		console.log("退出请输入Q");
	}
});
	function zfx(t,h) {
		var str = "";
		var str1 = "";
		for(var i=0;i<h;i++){
			str = "";
			for(var j=0;j<h;j++){
				str += t + " ";
			}
			str1 += str + "\n"; 
		}
		return str1;
	}
}


module.exports = f1;