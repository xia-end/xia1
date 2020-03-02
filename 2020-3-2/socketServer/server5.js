  // 引入网络库
const net = require('net');
// 创建一个socket服务
const socketServer = net.createServer();
// 所有连接的客户端
let clients = new Array();
// 监听连接事件
socketServer.on('connection', sock => {
    // 新的连接进来都会走这里
    console.log('有客户端连接进来' + sock.remotePort);
    // 广播上线
    broadcast(sock, sock.remotePort+'上线了');
    // 设置编码
    sock.setEncoding("utf-8");
    // 监听隧道数据
    sock.on("data", msg => {
        console.log(msg);
        // 广播
        broadcast(sock, msg);
    });
    // 将客户端保存起来
    clients.push(sock);

});
// 监听错误
socketServer.on('error', sock => {
    console.error('出错了' + err);
});
// 监听关闭事件
socketServer.on("close", () => {
    console.log("Server closed.");
});
// 在1234端口上开启服务
socketServer.listen(1234, err => {
    if (err)
        return console.error('服务器启动失败，原因：' + err);
    console.log('服务启动成功！');
});
// 广播信息出去
function broadcast(client,mesg) {
    clients.forEach(sock => {
        if(sock.remotePort != client.remotePort){
            // 不是自己说的话都发
            sock.write(client.remotePort + '说：' + mesg);
        }
    });
}