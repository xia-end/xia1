// 引入网络库
const net = require('net');
// 引入扫描库
const readline = require('readline');
// 设置输入输出
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 目标服务器地址端口
const HOST = 'localhost',
    PORT = '1234';

// 创建一个连接
const socketClient = net.createConnection({
    host: HOST,
    port: PORT
}, err => {
    if (err)
        console.error('连接失败' + err);
    else
        console.log('连接目标主机成功');
    say();
});
// 指定编码方式
socketClient.setEncoding('utf-8')
// 监听数据回来
socketClient.on('data', msg => {
    console.log('\n' + msg);
    say();
});
// 发言
function say() {
    rl.question('请输入：', (msg) => {
        console.log('我：' + msg);
        socketClient.write(msg + '\n');
    });
}