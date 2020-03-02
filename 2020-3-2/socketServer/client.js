var net = require('net');//引入net
var hostname=process.argv[2]; 
var port=process.argv[3]; 
var date = new Date();//获取当前时间
var client = net.connect({host:hostname,port:port},
    function() { 
        process.stdin.setEncoding('utf-8');

        process.stdin.on('readable',function() {
            console.log("欢迎来到聊天室，请输入昵称：");
            var chunk = process.stdin.read();
            if(chunk !== null) {
                var name = client.write('data:' + chunk);
            }
            var liaotian = process.stdin.read();
            client.write(""+name+liaotian);

        });
    }); 
    Date.prototype.Format = function(fmt) { //author: meizz 
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "h+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "S": this.getMilliseconds() //毫秒 
        };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
    client.on('data',function(data){
        console.log(data.toString()+(new Date()).Format("yyyy-MM-dd hh:mm:ss")+'\n');
        //client.end();
    });
    client.on('end',function() {
        //console.log('\n聊天结束');
        client.end();
    });

