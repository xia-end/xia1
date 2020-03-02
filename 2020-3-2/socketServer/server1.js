var net = require('net');//引入Net模块
var clientList=[];//用数组来放客户端用户
var server = net.createServer(function(connection) { 
   console.log('client connected');
   clientList.push(connection);
   connection.on('data',function(data){
        console.log(data.toString());
        broadcast(data);
    });
   connection.on('end', function() {	//在客户端关闭时显示
      console.log('客户端关闭连接');
   });
   connection.write('Hello World!\r\n');//客户端显示
   connection.pipe(connection);
});
function broadcast(data){         //广播函数
    for(var i=0;i<clientList.length;i++) {
        clientList[i].write(data);
    }
}
server.listen(1271, function() { 
  console.log('server is listening');
});
// socket.on('data',function(data){
//         console.log(data.toString());
//         broadcast(data);
//     });