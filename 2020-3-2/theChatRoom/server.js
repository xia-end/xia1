var net = require('net');
var chatServer = net.createServer(),
    clientList = [];//已连接的client列表
var clientsBuffer={};
//telnet 127.0.0.1 9000
chatServer.on('connection', function(client) {
    // name 的自定义属性，用于表示哪个客户端（客户端的地址+端口为依据）
    client.name = client.remoteAddress + ':' + client.remotePort;
    client.write('Hi ' + client.name + '!\n');
    clientList.push(client);
    clientsBuffer[client.name]=new Buffer(0);//发送消息的缓存
    client.on('data', function(data) {
        console.log(data);
        var myBuffer=clientsBuffer[client.name];
        console.log(myBuffer);
        //以回车换行为分割
        if(data.equals(new Buffer([0x0d,0x0a]))){
            broadcast(myBuffer, client);// 接受来自客户端的信息
            clientsBuffer[client.name]=new Buffer(0);//清空缓存
        }else{
            //将发送过来的字符拼入缓存中
            var buflist=[myBuffer,data];
            clientsBuffer[client.name]=Buffer.concat(buflist,myBuffer.length+data.length);
        }

    });
    client.on('end', function() {
        clientList.splice(clientList.indexOf(client), 1); // 删除数组中的制定元素。这是 JS 基本功哦~
    });
    client.on('error', function(e) {
        console.log(e);
    });
});
/**
 * 广播给其他所有用户
 * @param message 消息内容
 * @param client 发送人客户端
 */
function broadcast(message, client) {
    var cleanup = [];//需要销毁的列表
    for(var i=0;i<clientList.length;i+=1) {
        if(client !== clientList[i]) {
            if(clientList[i].writable) { // 先检查 sockets 是否可写
                var msg=client.name + " says " + message;
                console.log(msg);
                clientList[i].write(msg);
            } else {
                cleanup.push(clientList[i]) // 如果不可写，收集起来销毁。销毁之前要 Socket.destroy() 用 API 的方法销毁。
                clientList[i].destroy()
            }
        }
    }
    //销毁
    for(i=0;i<cleanup.length;i+=1) {
        clientList.splice(clientList.indexOf(cleanup[i]), 1)
    }
}
chatServer.listen(9000);