var net = require('net');
var clientList=[];//用数组来放客户端用户
var server = net.createServer(function(socket) {
    server.getConnections((err, connect) => {
        socket.write(`你好，当前在线用户${connect}人\r\n`)
    })
    clientList.push(socket);
    socket.write('请输入聊天昵称');
    socket.on('data',function(data){
        console.log(data.toString());
        broadcast(data);
    });
    socket.on('end',function(){
        clientList.splice(clientList.indexOf(socket), 1); //删除数组中的指定元素
        socket.write("退出聊天室");
  });
});
function broadcast(data){
    for(var i=0;i<clientList.length;i++) {
        clientList[i].write(data);
    }
}
server.listen(1270,'127.0.0.1');//监听
