function f3() {
	const readLine = require('readline');
	let rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout,
	 });
	console.log("已选菱形，请输入填充样式和高度");
	//实心菱形
	rl.on('line', function (line){
		if(line=="Q"){
            process.exit(0);
            console.log("欢迎下次使用");
        }else{
            console.log(lx(line[0],line.substring(1).trim()));
            console.log("退出请输入Q");
    }
});
	function lx(t,rows){
		//需要判断输入的数能否打印菱形，前提是只有奇数才可以打印菱形,也就是满足不是偶数才能继续执行后续操作
		if(rows%2!==0){
			var top=Math.ceil(rows/2),
			bottom=rows-top;
			var str="";
		//打印上半部分的菱形
			for(var i=1;i<=top;i++){			//控制行
				for(var k=1;k<=top-i;k++){
					str+=" ";					//控制空格
				}
				for(var j=1;j<=2*i-1;j++){		//控制每行显示的星星
					str+=t;
				}
				str+="\n";
			}
		//打印下半部分的菱形
			for(var i=1;i<=bottom;i++){			//控制行
				for(var j=1;j<=i;j++){			//控制空白
					str+=" ";
				}
				for(var k=1;k<=2*(bottom-i)+1;k++){
				str+=t;
				}
				str+="\n";
			}
				console.log(str);		
				return "打印图形为菱形";			//易错点不是每一行完成之后就要打印一次，这样会换行会存在间距，
		}
		else{
			return "请输入奇数";
		}
		
	}
}
module.exports = f3;