前端与后端结合框架
===========================

> 集成了静态资源管理系统，适合php Ci

## 环境依赖：

1. npm install -g fis
2. npm install -g fis-pure
3. 安装PHP环境（例如xampp）
	例如：E:\xampp
	进入E:\xampp\apache\conf\extra 增加行 d:\public_test (此为发布测试路径)
    设置host
	127.0.0.1	pt.detu.cc
	
	
<VirtualHost *:80>
    DocumentRoot "D:/public_test/"
    ServerName pt.detu.com
    ErrorLog "logs/dummy-host.localhost-error.log"
    CustomLog "logs/dummy-host.localhost-access.log" combined
	<Directory "D:/public_test/">
        AllowOverride All
        Order Allow,Deny
        Allow from all
    </Directory>
</VirtualHost>



## 运行方法：

1. 启动内置服务器
    * fis server start
1. 进入项目目录
    * cd project
1. 构建项目
    * 预览开发效果命令： ``pure release -d D:/public_test/``
    * 预览开发效果，并监听文件变化命令： ``pure release -w -d D:/public_test/``
打开pt.detu.cc看效果

##访问测试
  c为控制器资源定位参数
http://pt.detu.cc/index.php?c=index
 对应的数据目录为
 /php-test-data/index_data.php
  对应的页面为
 /views/index.php
 
 
