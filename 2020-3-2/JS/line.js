var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
  console.log('这是用户输入的内容：' + line);
 })
// rl.question("请输入你的要求"，zfx(t,h,w))；
// rl.on('line', function(line){
//     switch(line.trim()) {
//         case 'copy':
//             console.log("复制");
//             break;
//         case 'hello':
//             rl.write("Write");
//             console.log('world!');
//             break;
//         case 'close':
//             rl.close();
//             break;
//         default:
//             console.log('没有找到命令！');
//             break;
//     }
// });
// rl.on('close', function() {
//     console.log('bye bye');
//     process.exit(0);
// });


// function zfx(t,h,w) {
//     var str = "";
//     var str1 = "";
//     for(var i=0;i<=h;i++){
//         str = "";
//         for(var j=0;j<=w;j++){
//                 str += t + " ";
//         }
//         str1 += str + "\n"; 
//     }
//     return str1;
// }
// console.log(zfx("*",4,4));