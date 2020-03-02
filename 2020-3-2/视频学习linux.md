## unix与linux历史
	 Linux内核官网:www.kernel.org
	隐藏文件的意义是告诉用户这是一个系统文件,轻易不要动它
	文件处理命令
	ls
	mkdir
	rmdir删除一个空目录
	-p递归
	pwd 显示当前目录
	cp copy拷贝
	-r拷贝目录
	-p
	可改名
	mv 剪切 更名  move
	rm remove 删除文件
	-r 删除目录
	-f 强制删除
	touch 
	cat 显示内容
	-n 行号
	tac 倒叙显示
	 more 分页显示内容
	 less 可向上翻页,搜索(/搜索关键词,摁n next)
	 head -n   前多少行   默认十行
	 tail  -n    末尾多少行  默认十行
	 tail -f  监控
	 ln 生成链接文件
	 软链接权限lrwxrwxrwx,相当于windows系统的快捷键,只是一个符号链接,用来指向源文件,文件大小特别小
	 硬链接类似于拷贝,可以和源文件同步更新,源文件即使丢失,硬链接也存在,而软链接就不存在了
	 硬链接通过i节点识别
	 硬链接不能跨分区
	 硬链接不可以针对目录使用
	 权限管理命令chmod
	 语法: chmod [{ugoa}{+-=}{rwx}[文件或目录]
	 -R 递归修改(改目录下子文件权限)
	 文件的读写执行权限
	 r  读权限 可以查看文件内容 (less,more,head,tail,cat)
	 w 写权限 可以修改文件内容 (vim)
	 x 执行权限 可以执行文件 (script,command)
	  目录的读写执行权限
	r 可以列出目录中的内容
	w 可以在目录中创建,删除文件
	x 可以进入目录
	*删除一个文件必须对目录有写权限*
	 其他权限管理命令
	chown  改变文件或目录的所有者
	语法:chown[用户][文件或目录]
	改变一个文件的所有者只有root可以实现
	用户添加 useradd 用户名
	chgrp 改变文件或目录的所属组
	语法: chgrp [用户名] [文件或目录]
	添加组 groupadd 组名
	缺省组?
	umask命令  查看缺省文件的权限和更改缺省文件的权限
	umask  -S
	显示初始目录权限(rwx rx rx)
	当初始文件时不能加入x,执行权限.(rw-r-- r--) 
	文件搜索命令
	find命令 文件搜索
	语法 find [搜索范围][匹配条件]
	根据文件名搜索
	find 目录 -name 文件名(精准搜索)
	find 目录 -name *文件名* (模糊搜索)
	* 匹配任意字符
	?匹配单个字符
	-iname(不区分大小写)
	find 目录 -size [选项] 文件大小
	+n 大于
	-n 小于
	n 等于
	一个数据块是512字节 0.5k
	数剧块是linux里存储数据的最小字节
	1M=1024k
	根据所有者查找
	find 目录 -user 所有者名
	根据所属组查找
	find 目录 -group 所有组名
	根据文件属性进行查找
	find 目录 -cmin -n(时间分钟)
	-amin 访问时间
	-mmin 文件内容
	 例:find /etc -size +163840 -a -size -204800
	 在/etc下查找大于80mb小于100mb的文件
	 -a 两个条件同时满足
	 -o 两个条件满足任意一个即可
	 例: find /etc -name inittab -exec ls -l {} \;
	 在/etc下查找inittab文件并显示其详细信息
	 -exec/-ok(交互命令)命令 {} \;对搜索结果执行操作
	 例: find /etc -name init* -a -type f exec ls -l {} \.
	 查找/etc目录下名字为以init开头的并且是文件类型最后进行长显示.
	 -type 根据文件类型查找
	 f 文件      d目录      l软链接文件
	 inum     根据i节点查找
	 例: find . -inum 31531 -exec rm {} \.
	 在当前目录下查找节点为31531的文件把它删除
	 其他搜索
	 locate命令     在文件资料库中查找文件
	 语法:   locate    文件名
	  因为是在文件资料库中查找,所以做不到实时更新,需要用updatedb手动更新.
	  ctrl+d退出当前用户
	  -i  不区分大小写
	  有些目录不在文件资料库的收录范围
	  which命令   搜索命令所在目录及别名信息
	  例: which rm
	  显示   rm="rm -i"
	  whereis  能找到命令的绝对路径和帮助文档
	  grep命令(在文件命令中查找指定行 )
	  语法: grep -iv [指定字符串] [文件]
	  -i 不区分大小写
	  -v 排除指定字串
	  在linux中以#开头为注释
	  例:grep -v ^# 文件目录
	  排除以#字开头的一行
	  帮助命令
	  man命令(查看命令和配置文件帮助信息)
	  例: man ls
	  在查找帮助文档时,是结合more和less进行的查找
	  1 ,命令的帮助
	  5 配置文件的帮助
	     --help 
	     whatis
	     help 获得Shell内置命令的帮助信息
	     用户管理命令
	     useradd添加新用户
	     linux关机
	     1.sync  将数据由内存同步到硬盘中
	     2.shutdown -h 10 十分钟后关机
	     3.shutdown -h now 现在关机
	     4.shutdown -r now 系统立刻重启
	     5.reboot  重启
	     6.halt  关闭系统(halt命令通知硬件来停止所有的cpu功能,但是仍保持通电)
	     7.halt -p 关闭机器
	     8.halt --reboot 重启机器
		shutdown -c 取消即将进行的关机
useradd：le 组已经存在 - 如果您想将此用户加入到该组，请使用 -g 参数。

​		
​		

​	 
​	 
​	 

​	
​	
​	








