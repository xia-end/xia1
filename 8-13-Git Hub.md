Git Hub

huxpro.github.io

###　板块一:胡俢廷，涉及到下边会讲解到的命令可以不写

http://www.imooc.com/article/269298bendi

#### 铺垫:git 的一些基本（常用）命令介绍:并且可以熟练运用

* git init初始化仓库

* git config --global user.name XXX  #用户名  设置用户名

  git config --global user.email XXX   #用户邮箱  设置用户邮箱

  git config --list  #查看用户信息

* git add 添加到暂存区 

*   git commit –m “XXXX”  提交到本地仓库    

* git status查看项目现在的状态    

* git push origin 本地分支:远程分支名  能简写是因为本地分支和远程分支名字相同 把本地库分支的内容推到远程库

* git pull  拉取远程仓库某个分支的更新到本地 

* /git fetch获取远程分支最新版本号到本地     

   

    

## 一.本地库与远程库的建立联系；

####   	1.初始化一个本地库，git init 连接远程库的方式；本地库连接远程库1 $ git remote add origin   克隆远程库2 git clonehttps://github.com/lixuehe/aaa.git`

####           两种连接方式的区别  连接远程库是之后里面没有任何东西的，克隆的话会出现线上库master分支上的东西。

####       			



## 　三．分支管理

 小问题 ：首先让大家猜一猜克隆完空库之后有没有gitbranch 为什么第一次创建分支后,使用git branch没有东西 . **因为git的分支必须指向一个commit，没有任何commit就没有任何分支提交第一个commit后git自动创建master分支”** 

#### 	创建分支(1.本地 git branch 分支名 2.远程分支1.可以再github创建 2.可以在本地把分支推到远程仓库)

删除分支（1.本地 git branch -d（D强制删除） 分支名 2.远程 git push origin --delete 分支名）

查看所有分支（git branch -a  ）

切换分支（git checkout 分支名 ）

合并分支（git merge orgin/分支名）本地  就得说fetch从把同步远程分支更新到本地     

比较fetch加merge  和 pull 。

结果上来看 确实 fetch 加merge 等于 pull

但是 fetch是让你本地所关联的远程端的commit id 版本号更新到了最新，然后我在本地在合并远程。

git pull 会将本地库更新至远程库的最新状态 

https://www.cnblogs.com/sunshisonghit/p/6806255.html                                --       



## 四：模拟解决冲突和版本回退

 线下冲突：1.git checkout dev
git vim bb.txt 
修改一些内容并保存
git checkout devliu 
git vim bb.txt
在 devliu 的分支上修改一些内容并保存
git checkout dev
git merge devliu产生了冲突

这种事情我想可能很少有人会出现，但是这种请况就可能会出现了，比如，我切了一个devliu的分支就是为了开发新功能，但是突然发现了有bbtxt有bug.然后在dev分支下改掉了，接着回devliu去开发功能。

产生冲突的原因是什么：2行都有修改，合并的时候，git不知道你想要哪个，所以让你手动解决。

线上冲突：组员A和组员B同时对一个文件进行修改，然后分别提交到远程，组长在第二天合并代码的时候就会产生冲突。那么这个冲突的原因

拒绝合并无关的历史   添加–allow-unrelated-histories    没有共同的祖先历史，比如，我初始化仓库并连接线上仓库，创建了一个文件，进行add和commit，也就是说让仓库知道了我文件的存在，那么我去啦线上我分之的东西会出现这个拒绝，就是因为，线上的仓库有记录日志，而线下的这个新仓库没有线上文件的记录，没有共同的历史祖先

版本回退: git reset  --hard版本号 回退到指定版本  git reset --hard HEAD^ 回退到上一个版本

查看版本号 git log 查看commit提交历史  git reflog 可以查看所有分支的所有操作记录

gitlog可以查看时间，gitreflog会能查看到具体的改动情况

### 

### 四.组员与组长的git分工:

#### 	1.组员的工作; 组员保持每天本地dev和远程dev保持同步，本地自己的分支和自己dev分支保持同步，然后在自己分支进行工作，最后提交到自己远程分支上

#### 	2.组长的工作:组长定期将dev分支合并到master分支；每天将远程组员分支的代码检查无误后合并到本地dev分支上，然后将dev分支更新。



#### 分享一个常见的小问题

1. 解决每次都需要输入密码的问题  ;git bash进入你的项目目录，输入git config --global credential.helper store。在你的本地记录下了账号和密码

---



### 版块四--胡俢廷

####   1.案例互动及讲解一个,比如加法问题

####  2.课后思考题一个;











