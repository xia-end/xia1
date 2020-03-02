linux考核内容

1.文件夹、文件： 增、删、改、查

2.权限管理：文件

3.用户 增删改查及权限管理

4.磁盘管理 挂载及其他

5.进程管理 管道符使用、杀死查看进程等等

6.链接

7.ip、dns、子网掩码、网关配置，及hosts文件配置

一、将本机文件复制到远程服务器上

\#scp /home/administrator/news.txt root@192.168.6.129:/etc/squid

二、将远程服务器上的文件复制到本机

\#scp remote@www.abc.com:/usr/local/sin.sh /home/administrator