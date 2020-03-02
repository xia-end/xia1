const readLine = require('readline');
const zfx = require('./zfx.js');
let rl = readLine.createInterface({
	input: process.stdin,
	output: process.stdout,
 });
console.log("交互式图形打印");
console.log("可选择的图形有:");
console.log("1.正方形\n2.等腰三角形\n3.菱形\n");
console.log("-----------------");
console.log("请输入打印的图形，和想设置的长宽");
rl.on('line', function (line){

// 	function zfx(t,h,w) {
// 	var str = "";
// 	var str1 = "";
// 	for(var i=0;i<=h;i++){
// 		str = "";
// 		for(var j=0;j<=w;j++){
// 				str += t + " ";
// 		}
// 		str1 += str + "\n"; 
// 	}
// 	return str1;
// }
console.log(zfx.zfx(line[0],line[1],line[2]));
 });