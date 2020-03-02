function f2() {    
    const readLine = require('readline');
    let rl = readLine.createInterface({
    	input: process.stdin,
    	output: process.stdout,
     });
    console.log("已选等腰三角形，请输入填充样式和高度");
    // 实心三角形
    rl.on('line', function (line){
        if(line=="Q"){
            process.exit(0);
            console.log("欢迎下次使用");
        }else{
            console.log(sjx(line[0],line.substring(1).trim()));
            console.log("退出请输入Q");
    }
});
    function sjx(t,h) {
    	var alt = "";
            for(var i=1; i<=h; i++){
                var blank = "";
                for(var j=1; j<=h-i; j++){   //打印空格
                    blank += " ";
                }
                var stars = "";
                for(var m=1; m<=2*i-1; m++){    //打印*
                    stars += t;
                }
                alt += blank + stars + "\n";   //字符串的拼接,拼为一行
            }
            return alt;
    }
}
module.exports = f2;

