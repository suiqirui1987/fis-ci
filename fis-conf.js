fis.config.set("statics","/static");
fis.config.set("template","/application");
fis.config.set('roadmap.path', [
			 {
                reg : /^\/views\/([\s\S]*)$/i,
				respath : '${statics}/',
                release : '${template}/$&'
            },
            {
                //一级同名组件，可以引用短路径，比如modules/jquery/juqery.js
                //直接引用为var $ = require('jquery');
                reg : /^\/modules\/([^\/]+)\/\1\.(js)$/i,
                isMod : true,
                id : '$1',
                release : '${statics}/$&'
            },
            {
                //modules目录下的其他文件
                reg : /^\/modules\/(.*)\.(js)$/i,
                isMod : true,
                //id是去掉modules和.js后缀中间的部分
                id : '$1',
                release : '${statics}/$&'
            },
            {
                //less的mixin文件无需发布
                reg : /^(.*)mixin\.less$/i,
                release : false
            },
            {
                //其他css文件
                reg : /^(.*)\.(css|less)$/i,
                //css文件会做csssprite处理
                useSprite : true,
                release : '${statics}/$&'
            },
            {
                //前端模板
                reg : '**.tmpl',
                //当做类js文件处理，可以识别__inline, __uri等资源定位标识
                isJsLike : true,
                //只是内嵌，不用发布
                release : false
            },
            {
                reg : /.*\.(php)/,
                useCache : false,
				isHtmlLike : true,
                release : '$&'
            },
            {
                reg : "README.md",
                release : false
            },
		    {
                //img目录下的其他文件
                reg : /^\/img\/([\s\S]*)$/i,
                id : '$1',
                release : '${statics}/$&'
            },
			 {
                //lib目录下的其他文件
                reg : /^\/lib\/([\s\S]*)$/i,
                id : '$1',
                release : '${statics}/$&'
            }
        
   
]);

fis.config.set('pack', {
    'pkg/lib.js': [
        '/modules/underscore/**.js',
        '/modules/backbone/**.js',
        '/modules/jquery/**.js',
        '/modules/vendor/**.js',
        '/modules/common/**.js'
    ]
});



//在postprocessor对所有php后缀的文件进行内容处理：
fis.config.set('modules.postprocessor.php', function(content, file){
    //只对模块化js文件进行包装
	if(file.respath)
	{
		var reg = /(<script(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(?:<\/script\s*>)|<(link)\s+[\s\S]*?["'\s\w\/]>/ig;
		var single, result;
		
		var replaced = content.replace(reg, function (m, $1, $2, $3, $4) 
		{
			//$1为script标签, $2为内嵌脚本内容, $3为link标签, $4为注释内容
			if ($1) 
			{
				result = m.match(/(?:\ssrc\s*=\s*)(?:'([^']+)'|"([^"]+)"|[^\s\/>]+)/i);
				if (result && (result[1] || result[2])) 
				{
					var jsUrl = result[1] || result[2];
					if (jsUrl.indexOf("?") !== -1) 
					{
						jsUrl = jsUrl.slice(0, jsUrl.indexOf("?"));
					}
					var newjsUrl = file.respath + jsUrl;
					
					m = m.replace(result[0],'  src="'+newjsUrl+'" ');
			
				}
			}
			else if ($3) 
			{
				result = m.match(/(?:\shref\s*=\s*)(?:'([^']+)'|"([^"]+)"|[^\s\/>]+)/i);
				if (result && (result[1] || result[2])) 
				{
					var cssUrl = result[1] || result[2];
					var newcssUrl = file.respath + cssUrl;
					m =  m.replace(cssUrl,newcssUrl);
					
					m = m.replace(result[0],'  href="'+newcssUrl+'" ');
					
				}
			}
			
			return m;
		});
		
		return replaced;
	}
	  
    return content;
});


//静态资源域名，使用pure release命令时，添加--domains或-D参数即可生效
//fis.config.set('roadmap.domain', 'http://127.0.0.1:8080');

//如果要兼容低版本ie显示透明png图片，请使用pngquant作为图片压缩器，
//否则png图片透明部分在ie下会显示灰色背景
//使用spmx release命令时，添加--optimize或-o参数即可生效
//fis.config.set('settings.optimzier.png-compressor.type', 'pngquant');

//设置jshint插件要排除检查的文件，默认不检查lib、jquery、backbone、underscore等文件
//使用pure release命令时，添加--lint或-l参数即可生效
fis.config.set('settings.lint.jshint.ignored', [ 'lib/**', /jquery|backbone|underscore/i ]);

//csssprite处理时图片之间的边距，默认是3px
fis.config.set('settings.spriter.csssprites.margin', 20);