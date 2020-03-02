var net = require('net');
var client = net.connect({port: 1271}, function() {
	console.log('连接到服务器！');  
	process.stdin.setEncoding('utf-8');
    process.stdin.on('readable',function(){
        var read1 = process.stdin.read();
    });
});
client.on('data', function(data) {
   console.log(data.toString());
   //client.end();
});
client.on('end', function() { 
   console.log('断开与服务器的连接');
});