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
	
>
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
 
 
 ## 如何与CI框架集成

前端工程师就独立去完成CI模版的修改与调试了。

1.传统CI框架目录结构如下
>
	 appliction
		cache
	 	config
	 	controllers
	 	core
	 	errors
	 	helpers
	 	hooks
	 	logs
	 	models
	 	views
    system
	index.php
	
2.前端集成框架生成的目录结构如下

>
	 appliction
	 php-test-data
	 static
	 index.php
	 map.json


3.简单模拟CI框架行为
	
	a.CI页面
	
	
		例如：
			application/controllers/index.php
				class login extends CI_Controller {
			
					
					public function index()
					{
						$userinfo = $this->usermodel->get(...);//得到用户信息
						$data = array();
						$data["userinfo"]= $userinfo;
						$this->load->view('login',$data);
					}
				}
			
			application/views/login.php
				
				.....
				<body>
					...
					<div>用户名: <?=$userinfo["username"]?></div>
				</body>
				...
		
		在CI里面访问是http://127.0.0.1/login

		
	b.前端工程里面
		1.在php-test-data(页面数据,在CI里面也就是controllers里面的视图数据)创建
			login_data.php文件(模拟login/index控制器的数据能力)
				
				$userinfo = array(
					"userid"=>1,"username"=>"sqr"
				 );
	   2。在views目录里面创建login.php
                 .....
				<body>
					...
					<div>用户名: <?=$userinfo["username"]?></div>
				</body>
				...

		这样就在前端工程里面完成了CI框架的模拟
		 　　 http://pt.detu.cc/index.php?c=login


**调试完成后只要将application目录与static目录复制到CI框架的根目录下即可**
		
