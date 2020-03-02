const readLine = require('readline');
const zfx = require('./zfx.js');
const lx = require('./lx.js');
const sjx = require('./sjx.js');
let rl = readLine.createInterface({
	input: process.stdin,
	output: process.stdout,
});
console.log("交互式三种图形打印");
console.log("-----------------");
console.log("可选择的图形有:");
console.log("1.正方形\n2.等腰三角形\n3.菱形");
console.log("-----------------");
console.log("请选择图形序号");
rl.on('line', function (line){
	switch(line) {
		
		case "1":
			rl.close();
			zfx();
			break;
		case "2":
			rl.close();
			sjx();
			break;
		case "3":
			rl.close();
			lx();
			break;
	}
 });