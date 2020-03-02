const readline = require('readline');
const rl       = readline.createInterface({
	input :process.stdin,
	output:process.stdout,
	prompt:
	'\t\t欢迎进入交互式图形打印界面\n\t$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n\t\t请输入要打印的图形序号\n\t\t1.正方形  2.等腰三角形\n\t\t3.菱形\t4.回字\t5.梯形\n'
});
	rl.prompt();
	rl.on('line',(line)=>{
		switch()
	}()