ǰ�����˽�Ͽ��
===========================

> �����˾�̬��Դ����ϵͳ���ʺ�php Ci

## ����������

1. npm install -g fis
2. npm install -g fis-pure
3. ��װPHP����������xampp��
	���磺E:\xampp
	����E:\xampp\apache\conf\extra ������ d:\public_test (��Ϊ��������·��)
    ����host
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



## ���з�����

1. �������÷�����
    * fis server start
1. ������ĿĿ¼
    * cd project
1. ������Ŀ
    * Ԥ������Ч����� ``pure release -d D:/public_test/``
    * Ԥ������Ч�����������ļ��仯��� ``pure release -w -d D:/public_test/``
��pt.detu.cc��Ч��

##���ʲ���
  cΪ��������Դ��λ����
http://pt.detu.cc/index.php?c=index
 ��Ӧ������Ŀ¼Ϊ
 /php-test-data/index_data.php
  ��Ӧ��ҳ��Ϊ
 /views/index.php
 
 
