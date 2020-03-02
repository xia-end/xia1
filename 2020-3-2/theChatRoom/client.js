var net = require('net');
var hostname=process.argv[2]; 
var port=process.argv[3]; 
var client = net.connect({host:hostname,port:port},
    function() { //'content' listener
        console.log('欢迎进入聊天室');
        //client.write('world!\r\n');
        process.stdin.setEncoding('utf-8');

        process.stdin.on('readable',function() {
            var chunk = process.stdin.read();
            if(chunk !== null) {
                client.write('data:' + chunk);
            }
        });
    }); 
    client.on('data',function(data){
        console.log(data.toString());
        //client.end();
    });
    client.on('end',function() {
        console.log('\n聊天结束');
        client.end();
    });

