
# 1、提交form表单的一些配置
<form action="" method="post" enctype="multipart/form-data" accept-charset="UTF-8">
    <input type="file" name="uploadFile" />
    <input type="submit" value="提交" />
</form>

# 2、前端开发跨域问题常用解决方案：
    1、cmd打开浏览器
    chrome --disable-web-security --user-data-dir=c:\my\data --ignore-certifivate-errors --allow-running-insecure-content

    2、浏览器安装插件
    Allow-Control-Allow-Origin:*

    3、Java代理

    4、前端设置
    http-headers{
        'Access-Control-Allow-Origin':*,
        'Access-Control-Allow-Methods':'POST,GET,OPTIONS'
    }

# 3、git修改已commit的注释信息
    1、输入命令进入 vim 界面：git commit --amend
    2、进入编辑模式，修改注释信息：按键 i 可进入编辑模式（与 vim 用法相同）。修改msg。
    3、完成退出编辑模式，查看结果：按键ESC可退出编辑模式（与vim用法相同）。在非编辑模式下输入“:wq”（与vim用法相同）可保存退出。
    4、完成修改查看结果

# 4、npm start时报端口被占用，如何强制关掉进程
    打开cmd窗口，输入命令：netstat -ano 查找当前电脑端口占用的情况；
    找到相应端口（如：8086）那一行，查看其对应的PID号（例如：11464）
    也可以直接用 netstat -ano|findstr 端口号 ，命令查看
    用命令 taskkill /pid 11464 /F

# 5、ts 接收prop
    @Prop() data1;
    @Prop() data2!: Array<any>;
    @Prop() data3!: string;
    @Prop({
        type: Function,
        default: () => {}
    }) onTabClick!: Function;


# 6、package.json中的相关命令和知识点
## 1. cross-env
    配置多个环境，通过js在平台设置不同的环境变量的工具

# 7、取消项目中eslint的校验
    修改build\webpack.base.conf.js 中的 createLintingRule()

# 8、nodejs+express搭建服务器发布vue项目
    （学习地址：https://blog.csdn.net/qq_42785996/article/details/98804081）
    （1）全局安装express 和 express-generator
        npm install express --save -g
        npm install express-generator --save -g
        express-generator是express应用生成器，相当于express 的骨架
    （2）创建一个express项目
        如： express expressDemo
        打开项目：cd expressDemo
        安装:npm install
        启动项目：npm start
        浏览器输入：localhost:3000（可以在bin/www文件中修改端口号），访问成功说明node Express服务器搭建成功。
        var port = normalizePort(process.env.PORT || '3000');
    （3）vue 项目npm run build 进行打包部署，项目中会多出一个dist文件
        vue 项目npm run build 进行打包部署，在打包之前进行config下配置文件index.js的修改，将assetsPublicPath：'/' 修改成 assetsPublicPath: './',
    （4）将dist文件复制到创建好的node express服务器项目中的expressDemo/public目录下，浏览器访问localhost:3000/dist，显示vue项目界面就说明node服务器部署vue项目成功（vue项目已初始化过）

# 9、vue+node前后端分离接口调用（初学者）
    // https://blog.csdn.net/weixin_43816287/article/details/101051671
    // https://blog.csdn.net/AiHuanhuan110/article/details/90674744?utm_medium=distribute.pc_relevant.none-task-blog-OPENSEARCH-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-OPENSEARCH-2.control
    


# 10、配置的相关知识
    1、chalk 插件： 是一个颜色的插件。可以通过chalk.blue(‘hello world’)来改变颜色

# 11、JS关于深拷贝浅拷贝
    （1）引用赋值：
    var person = {name: "Jason", age: 18, car: {brand: "Ferrari", type: "430"}};
    var person1 = person;
    （2）浅拷贝：不考虑对象的引用类型的属性，只对当前对象的所有成员进行拷贝
    function copy(obj){
        var objCopy = {};
        for(var key in obj){
            objCopy[key] = obj[key];
        }
        return objCopy;
    }
    var person = {name: "Jason", age: 18, car: {brand: "Ferrari", type: "430"}};
    var personCopy = copy(person);
    上面这段代码中，person对象拥有两个基本类型的属性name和age，一个引用类型的属性car，当使用如上方法进行拷贝的时候，name和age属性会被正常的拷贝，但是car属性，只会进行引用的拷贝，这样会导致拷贝出来的对象personCopy和person会共用一个car对象。
    （3）深拷贝
    需要将当前要拷贝的对象内的所有引用类型的属性进行完整的拷贝，拷贝出来的对象和原对象之间没有任何数据是共享的。
    1）jQuery的$.extend() 可实现深复制，但是jQuery中的`$.extend()`并没有处理循环引用的问题。
    2）使用JSON对象实现深拷贝：它能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象，即那些能够被 json 直接表示的数据结构。
    3）自己手动处理

# 12、js中(function(){}()),(function(){})(),$(function(){});之间的区别
    （1）(function(){}()) 与 (function(){})()
    都是立即执行函数的写法，即IIFE (Immediately Invoked Function Expression)。
    (function foo(){/*...*/}());
    (function foo(){/*...*/})();
    !function foo() {/*...*/}();
    +function foo() {/*...*/}();
    -function foo() {/*...*/}();
    ~function foo() {/*...*/}();
    
    void function(){/*...*/}(); // void声明了不需要返回值
    var foo = function(){/*...*/}(); 
    true && function () { /*...*/ }();
    0, function () { /*...*/ }();
    对于IIFE函数，也可以给它们传入参数，例如：
        (function foo(arg1,arg2,...){...}(param1,param2,...));
    （2）$(function(){});
    $(function(){/*...*/}); 是 $(document).ready(function(){/*...*/}) 的简写形式

# 13、JS原型链
    （1）所有引用类型（函数、数组、对象）都拥有 __proto__ 属性 （隐式原型），指向构造该对象的构造函数的原型。
    （2）所有函数（仅限函数）拥有 prototype 属性 （显式原型），指向一个包含所有实例共享的属性和方法的对象，称之为原型对象。
    原型对象也有一个constructor属性，该属性指回该函数。
    （3）
    实例.__proto__ === 构造函数.prototype;
    实例.__proto__.__proto__.constructor ⇒ 多个参数的 Object 函数
    构造函数.prototype.__proto__.constructor == Object()
    实例.__proto__.constructor ⇒ 构造函数本身
    构造函数.prototype.constructor == 构造函数本身
    ⇒ 实例.__proto__.__proto__ == Object.prototype
    （4）Object.__proto__  === Function.prototype
    Function.__proto__    ===     Function.prototype
    Function.prototype是引擎创造出来的对象，一开始就有了，又因为其他的构造函数都可以通过原型链找到Function.prototype，Function本身也是一个构造函数。
    Object是对象的构造函数，那么它也是一个函数，当然它的__proto__也是指向Function.prototype

# 14、JS闭包
    ①函数嵌套函数
    ②函数内部可以引用函数外部的参数和变量
    ③参数和变量不会被垃圾回收机制回收
    （1）demo1
    function a(){
        let num = 0;
        return function(){
            var val = 0;
            return ++num
        };
    }
    var d = a();
    d()
    d()
    （2）demo2 定时器与闭包
    // 100毫秒后同时打印出0 1 2 3 4
    for(var i=0; i<5; ++i){
        (function(i){
            setTimeout(function(){
                console.log(i+'');
            }, 100);
        }(i));
    }
    // 每隔100毫秒分别依次输出数字
    for(var i=1; i<5; i++){
        (function(i){
            setTimeout(function(){
                console.log(i);
            }, i*100);
        }(i));
    }
    （3）demo3 闭包作为参数传递
    var num = 15;
    var fn1 = function(x){
        if(x > num){
            console.log(x);
        }
    };
    void function(fn2){
        var num = 100;
        fn2(30);
    }(fn1)
    // 打印 30
    函数 fn1 作为参数传入立即执行函数中，执行到 fn2(30) 时，30作为参数传入 fn1 中，这时 if(x>num) 中的 num 取的并不是立即执行函数中的 num，而是取创建函数的作用域中的 num 这里函数创建的作用域是全局作用域下。
    （4）闭包的好处和坏处
    好处：
    ①保护函数内的变量安全 ，实现封装，防止变量流入其他环境发生命名冲突
    ②在内存中维持一个变量，可以做缓存（但使用多了同时也是一项缺点，消耗内存）
    ③匿名自执行函数可以减少内存消耗
    坏处：
    ①其中一点上面已经有体现了，就是被引用的私有变量不能被销毁，增大了内存消耗，造成内存泄漏，解决方法是可以在使用完变量后手动为它赋值为null；
    ②其次由于闭包涉及跨域访问，所以会导致性能损失，我们可以通过把跨作用域变量存储在局部变量中，然后直接访问局部变量，来减轻对执行速度的影响

# 15、HTML5的meta属性
<meta charset="ISO-8859-1">
<meta charset="utf-8">
<!-- 定义针对搜索引擎的关键词： -->
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript" />
<!-- 定义对页面的描述： -->
<meta name="description" content="免费的 web 技术教程。" />
<!-- 定义页面的最新版本： -->
<meta name="revised" content="David, 2008/8/8/" />
<!-- 每 5 秒刷新一次页面： -->
<meta http-equiv="refresh" content="5" />
<!-- 声明文档的兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge" /> 指示IE以目前可用的最高模式显示内容
<meta http-equiv="X-UA-Compatible" content="IE=Emulate IE7" />指示IE使用 <!DOCTYPE> 指令确定如何呈现内容。标准模式指令以IE7 标准模式显示，而 Quirks 模式指令以 IE5 模式显示。
<!-- SEO 优化 -->
    <meta name="description" content="不超过150个字符" />页面描述
    <meta name="keywords" content="html5, css3, 关键字"/>页面关键词
    <meta name="author" content="魔法小栈" />定义网页作者
    <meta name="robots" content="index,follow" />定义网页搜索引擎索引方式，robotterms是一组使用英文逗号「,」分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。
<!-- 为移动设备添加 viewport -->
    <meta name ="viewport" content ="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
        content 参数解释：
        width  　　　　 viewport 宽度(数值/device-width)
        height            viewport 高度(数值/device-height)
        initial-scale  初始缩放比例
        maximum-scale  最大缩放比例
        minimum-scale  最小缩放比例
        user-scalable  是否允许用户缩放(yes/no)
        minimal-ui      iOS 7.1 beta 2 中新增属性，可以在页面加载时最小化上下状态栏。这是一个布尔值，可以直接这样写：
    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
<!-- iOS 设备 -->
    <meta name="apple-mobile-web-app-title" content="标题">添加到主屏后的标题（iOS 6 新增）
    <meta name="apple-mobile-web-app-capable" content="yes" />是否启用 WebApp 全屏模式
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />设置状态栏的背景颜色
        只有在 "apple-mobile-web-app-capable" content="yes" 时生效
        content 参数：
        default 默认值。
        black 状态栏背景是黑色。
        black-translucent 状态栏背景是黑色半透明。
        设置为 default 或 black ,网页内容从状态栏底部开始。
        设置为 black-translucent ,网页内容充满整个屏幕，顶部会被状态栏遮挡。
<!-- iOS 图标 rel 参数 -->
    iPad 的启动画面是不包括状态栏区域的。
    iPad 竖屏 768 x 1004（标准分辨率）
    <link rel="apple-touch-startup-image" sizes="768x1004" href="/splash-screen-768x1004.png" />iPad 竖屏 1536x2008（Retina）
    <link rel="apple-touch-startup-image" sizes="1536x2008" href="/splash-screen-1536x2008.png" />iPad 横屏 1024x748（标准分辨率）
    <link rel="apple-touch-startup-image" sizes="1024x748" href="/Default-Portrait-1024x748.png" />iPad 横屏 2048x1496（Retina）
    <link rel="apple-touch-startup-image" sizes="2048x1496" href="/splash-screen-2048x1496.png" />
    iPhone 和 iPod touch 的启动画面是包含状态栏区域的。
    iPhone/iPod Touch 竖屏 320x480 (标准分辨率)
    <link rel="apple-touch-startup-image" href="/splash-screen-320x480.png" />iPhone/iPod Touch 竖屏 640x960 (Retina)
    <link rel="apple-touch-startup-image" sizes="640x960" href="/splash-screen-640x960.png" />iPhone 5/iPod Touch 5 竖屏 640x1136 (Retina)
    <link rel="apple-touch-startup-image" sizes="640x1136" href="/splash-screen-640x1136.png" />
    <link rel="apple-touch-startup-image" href="Startup.png" />  当用户点击主屏图标打开 WebApp 时，系统会展示启动画面，在未设置情况下系统会默认显示该网站的首页截图，当然这个体验不是很好
<!-- Windows 8 -->
    <meta name="msapplication-TileColor" content="#000"/> Windows 8 磁贴颜色
    <meta name="msapplication-TileImage" content="icon.png"/>Windows 8 磁贴图标
<!-- 不常用的 -->
    <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />添加 RSS 订阅
    <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />添加 favicon icon
    <meta name="format-detection" content="telephone=no" />禁止数字识自动别为电话号码
    <meta name="format-detection" content="email=no" />不让android识别邮箱
    <meta name="renderer" content="webkit">启用360浏览器的极速模式(webkit)
    <meta http-equiv="X-UA-Compatible" content="IE=edge">避免IE使用兼容模式
    <meta name="HandheldFriendly" content="true">针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓
    <meta name="MobileOptimized" content="320">微软的老式浏览器
    <meta name="x5-orientation" content="portrait">QQ强制竖屏
    <meta name="full-screen" content="yes">UC强制全屏
    <meta name="x5-fullscreen" content="true">QQ强制全屏
    <meta name="browsermode" content="application">UC应用模式
    <meta name="x5-page-mode" content="app">QQ应用模式
    <meta http-equiv="Cache-Control" content="no-siteapp" />禁止百度转码
    <meta name="msapplication-tap-highlight" content="no">windows phone 点击无高光
    <meta name="keywords" content="" />  关键字
    <meta name="description" content="" />  描述
    <meta name="title" content="" />  标题
    <meta name="author" content="-06" />  作者
    <meta name="Copyright" content="" />  公司
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">   让IE浏览器用最高级内核渲染页面 还有用 Chrome 框架的页面用webkit 内核 
    <meta name="apple-mobile-web-app-capable" content="yes">  IOS6全屏
    <meta name="mobile-web-app-capable" content="yes">  Chrome高版本全屏
    <meta name="renderer" content="webkit">  让360双核浏览器用webkit内核渲染页面
    <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL"> 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari）
<!-- sns 社交标签 -->
    <meta property="og:type" content="类型" />
    <meta property="og:url" content="URL地址" />
    <meta property="og:title" content="标题" />
    <meta property="og:image" content="图片" />
    <meta property="og:description" content="描述" />
<!-- 条件注释判断IE浏览器 -->
    <!--[if IE]>条件注释区分非IE浏览器
    <!--[if lt IE 7 ]><html class="oldie ie ie6"> <![endif]-->  
    <!--[if IE 7 ]><html class="oldie ie ie7"> <![endif]-->  
    <!--[if IE 8 ]><html class="ie ie8"> <![endif]-->  
    <!--[if (gte IE 9)|!(IE)]><!--><html> <!--<![endif]--> 
    <!--[if lt IE 9]>  <![endif]-->
<!-- 如果页面上出现很多http请求会自动转换成https -->
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
<!-- meta属性 -->
    charset：定义文档的字符编码。
    content：定义与 http-equiv 或 name 属性相关的元信息。
    http-equiv：把 content 属性关联到 HTTP 头部。content-type | expires | refresh | set-cookie。
    name：把 content 属性关联到一个名称。author | description | keywords | generator | revised | others

# 16、JS高阶函数
    （1）map()
<script>
    // 需求:让数组内的数字乘以2返回新数组
    var numbers = [4, 9, 16, 25];
    var newNumbers=numbers.map(item => item*2)
    console.log(newNumbers)  //打印结果[8,18,32,50]
</script>
    （2）reduce()
<script>
    // 需求:求数组内所有数的和
    var numbers = [4, 9, 16, 25];
    var newNumbers=numbers.reduce((total,item) => item+total)
    console.log(newNumbers)  //打印结果:54
</script>
    （3）filter()
<script>
    // 需求:求数组内大于9的所有数
    var numbers = [4, 9, 16, 25,33,24,13];
    var newNumbers=numbers.filter(item => item > 9)
    console.log(newNumbers)  //打印结果:[16,25,33,24,13]
</script>

# 17、js递归异步高阶

# 18、CSS中的BFC

# 19、Cookie的弊端
    （1）每次请求时都会加上去，增加了数量，还有被抓包的风险。
    （2）安全性问题，若 cookie 被人拦截了，可以取得所有的 session 信息。
    （3）每个特定的域名下最多生成的 cookie 个数是有限制的。
    （4）cookie 的最大大约为 4096 字节，为了兼容性，一般不超过 4095 字节。

# 20、Nginx
    Nginx是一个高性能的HTTP和反向代理服务，也是一个IMAP/POP3/SMTP服务。
    作用：反向代理，集群，虚拟服务器，负载均衡，动静分离，解决跨域问题等
## 1、安装
    教程：https://www.cnblogs.com/taiyonghai/p/9402734.html
    （1）去官网下载 nginx https://nginx.org/en/download.html
    （2）解压，并在解压后的目录下打开cmd，使用命令操作，不要直接双击nginx.exe
    不要直接双击nginx.exe，这样会导致修改配置后重启、停止nginx无效，需要手动关闭任务管理器内的所有nginx进程，再启动才可以。
    （3）启动nginx服务，启动时会一闪而过是正常的：start nginx
    （4）查看任务进程是否存在：tasklist /fi "imagename eq nginx.exe"
    常见的错误：
        1)端口号被占用
        2)nginx文件夹路径含中文
        其他错误就详细看log中的描述
    （5）若要修改配置，则打开 conf 下的 nginx.conf 文件，修改。
    修改完成后保存，使用以下命令检查一下配置文件是否正确，后面是nginx.conf文件的路径，successful就说明正确了。
    nginx -t -c /nginx-1.15.2/conf/nginx.conf
    nginx -t -c /D/tools/nginx-1.18.0/nginx-1.18.0/conf/nginx.conf
    如果程序没启动就直接start nginx启动，如果已经启动了就使用以下命令重新加载配置文件并重启：nginx -s reload
    （6）在浏览器打开http://localhost:8800（localhost域名和8800端口是在 nginx.conf 文件配置的），出现欢迎页就说明部署成功了。
    （7）闭nginx服务使用以下命令，同样也是一闪而过是正常的，看一下是否进程已消失即可
    快速停止：nginx -s stop
    完整有序的关闭：nginx -s quit
## 2、nginx.conf 一些简单的配置
/**********************************配置开始*****************************************/
    #user  nobody;

    #==工作进程数，一般设置为cpu核心数
    worker_processes  1;

    #error_log  logs/error.log;
    #error_log  logs/error.log  notice;
    #error_log  logs/error.log  info;

    #pid        logs/nginx.pid;


    events {

        #==最大连接数，一般设置为cpu*2048
        worker_connections  1024;
    }


    http {
        include       mime.types;
        default_type  application/octet-stream;

        #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
        #                  '$status $body_bytes_sent "$http_referer" '
        #                  '"$http_user_agent" "$http_x_forwarded_for"';

        #access_log  logs/access.log  main;

        sendfile        on;
        #tcp_nopush     on;

        #keepalive_timeout  0;
        
        #==客户端链接超时时间
        keepalive_timeout  65;

        #gzip  on;

        #当配置多个server节点时，默认server names的缓存区大小就不够了，需要手动设置大一点
        server_names_hash_bucket_size 512;

        #server表示虚拟主机可以理解为一个站点，可以配置多个server节点搭建多个站点
        #每一个请求进来确定使用哪个server由server_name确定
        server {
            #站点监听端口
            listen       8800;
            #站点访问域名
            server_name  localhost;
            
            #编码格式，避免url参数乱码
            charset utf-8;

            #access_log  logs/host.access.log  main;

            #location用来匹配同一域名下多个URI的访问规则
            #比如动态资源如何跳转，静态资源如何跳转等
            #location后面跟着的/代表匹配规则
            location / {
                #站点根目录，可以是相对路径，也可以使绝对路径
                root   html;
                #默认主页
                index  index.html index.htm;
                
                #转发后端站点地址，一般用于做软负载，轮询后端服务器
                #proxy_pass http://10.11.12.237:8080;

                #拒绝请求，返回403，一般用于某些目录禁止访问
                #deny all;
                
                #允许请求
                #allow all;
                
                add_header 'Access-Control-Allow-Origin' '*';
                add_header 'Access-Control-Allow-Credentials' 'true';
                add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
                add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
                #重新定义或者添加发往后端服务器的请求头
                #给请求头中添加客户请求主机名
                proxy_set_header Host $host;
                #给请求头中添加客户端IP
                proxy_set_header X-Real-IP $remote_addr;
                #将$remote_addr变量值添加在客户端“X-Forwarded-For”请求头的后面，并以逗号分隔。 如果客户端请求未携带“X-Forwarded-For”请求头，$proxy_add_x_forwarded_for变量值将与$remote_addr变量相同  
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                #给请求头中添加客户端的Cookie
                proxy_set_header Cookie $http_cookie;
                #将使用代理服务器的主域名和端口号来替换。如果端口是80，可以不加。
                proxy_redirect off;
                
                #浏览器对 Cookie 有很多限制，如果 Cookie 的 Domain 部分与当前页面的 Domain 不匹配就无法写入。
                #所以如果请求 A 域名，服务器 proxy_pass 到 B 域名，然后 B 服务器输出 Domian=B 的 Cookie，
                #前端的页面依然停留在 A 域名上，于是浏览器就无法将 Cookie 写入。
                
    　　         #不仅是域名，浏览器对 Path 也有限制。我们经常会 proxy_pass 到目标服务器的某个 Path 下，
                #不把这个 Path 暴露给浏览器。这时候如果目标服务器的 Cookie 写死了 Path 也会出现 Cookie 无法写入的问题。
                
                #设置“Set-Cookie”响应头中的domain属性的替换文本，其值可以为一个字符串、正则表达式的模式或一个引用的变量
                #转发后端服务器如果需要Cookie则需要将cookie domain也进行转换，否则前端域名与后端域名不一致cookie就会无法存取
    　　　　　　  #配置规则：proxy_cookie_domain serverDomain(后端服务器域) nginxDomain(nginx服务器域)
                proxy_cookie_domain localhost .testcaigou800.com;
                
                #取消当前配置级别的所有proxy_cookie_domain指令
                #proxy_cookie_domain off;
                #与后端服务器建立连接的超时时间。一般不可能大于75秒；
                proxy_connect_timeout 30;
            }

            #error_page  404              /404.html;

            # redirect server error pages to the static page /50x.html
            #
            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   html;
            }

        }
        
    　　#当需要对同一端口监听多个域名时，使用如下配置，端口相同域名不同，server_name也可以使用正则进行配置
    　　#但要注意server过多需要手动扩大server_names_hash_bucket_size缓存区大小
    　　server {
    　　　　listen 80;
    　　　　server_name www.abc.com;
    　　　　charset utf-8;
    　　　　location / {
    　　　　　　proxy_pass http://localhost:10001;
    　　　　}
    　　}
    　　server {
    　　　　listen 80;
    　　　　server_name aaa.abc.com;
    　　　　charset utf-8;
    　　　　location / {
    　　　　　　proxy_pass http://localhost:20002;
    　　　　}
    　　}
    }
/**********************************配置结束*****************************************/
## 3、反向代理
    学习地址：https://www.cnblogs.com/ysocean/p/9392908.html
    反向代理和正向代理的区别就是：正向代理代理客户端，反向代理代理服务器。
## 4、Vue 之 Nginx 部署
    学习地址：https://www.cnblogs.com/jingxuan-li/p/11754275.html





# 21、webpack-dev-server和http服务器如nginx有什么区别?
    webpack-dev-server使用内存来存储webpack开发环境下的打包文件，并且可以使用模块热更新，他比传统的http服务对开发更加简单高效。








# 一些学习地址
https://juejin.cn/post/6844903875334537230
https://blog.csdn.net/weixin_37542119/article/details/89384768
https://blog.csdn.net/feifanzhuli/article/details/78332822
https://blog.csdn.net/tzllxya/article/details/93507394
webpack api： https://blog.csdn.net/handsomezhanghui/article/details/107904250
CSS3 Flexbox布局：https://www.html.cn/archives/8629

# 小鹅通 面试经
第一题： 请用冒泡排序算法将数组[B,A,E,C,D] 排序为[A,B,C,D,E] 
function sort(arr){
    var len = arr.length;
    for(var i=0; i<len-1; i++){
        for(var j=0; j<len-i-1; j++){
            if(arr[j]>arr[j+1]){
                var max = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = max;
            }
        }
    }
}
var element = ['B',"A",'E','C','D'];
sort(element);
console.log(element)

第二题： css样式题 
<div class="area"> 
    <div class="circle leftCircle"></div> 
    <div class="circle rightCircle"></div> 
</div> 
area 在页面居中 leftCircle rightCircle 是两个交叉的圆环，请分别写出他们的样式 
方法一：
    .area_wrap{
        position: relative; min-height: 100vh;
    }
    .area{
        width: 400px; height: 400px; background-color: #ffe1e1;
        position: absolute; top: 50%;  left: 50%; transform: translate(-50%,-50%);
    }
    .circle{
        width: 300px; height: 300px; border-radius: 50%; border: 2px solid #ff0000; position: absolute; 
    }
    .leftCircle{
        left: 0; border-color: #ff0000;
    }
    .rightCircle{
        right: 0; border-color: #1bff00;
    }
方法二：
    .area_wrap{
        display: flex; min-height: 100vh;
        justify-content: center; /* 水平居中 */
        /* justify-content: space-between; */ /* 两端对齐 */
        /* justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly; */
        align-items: center; /* 垂直居中 */
    }
    .area{
        width: 400px; height: 400px; background-color: #ffe1e1; position: relative;
    }
    .circle{
        width: 300px; height: 300px; border-radius: 50%; border: 2px solid #ff0000; position: absolute; 
    }
    .leftCircle{
        left: 0; border-color: #ff0000;
    }
    .rightCircle{
        right: 0; border-color: #1bff00;
    }

第三题 请描述网页从加载到渲染的整个过程 
    URL → DNS 域名解析 → 找到真IP → 向服务器发起TCP链接 → 与浏览器建立TCP三次握手（客户端发送请求链接、服务器同意、客户端发送确认信号） → 浏览器发送HTTP请求 → 服务器处理请求，并返回HTTP报文 → 断开链接
    解析HTML文件，创建DOM树 → 解析CSS,形成CSS对象模型 → 将CSS与DOM合并，构建渲染树（renderingtree） → 布局和绘制

## 技术面 
1、主要使用的技术栈？ 
2、vue diff算法？ 
    diff算法就是进行虚拟节点对比，并返回一个patch对象，用来存储两个节点不同的地方，最后用patch记录的消息去局部更新Dom。
    diff的过程就是调用名为patch的函数，比较新旧节点，一边比较一边给真实的DOM打补丁
3、Promise的用法？ 
    Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
    new Promise((resolve, reject) => {
        axios({ url: '', method: 'get', data: params }).then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error);
        });
    }).then((data: any) => {
        // do something
    }).then((data: any) => {
        // do something
    }).catch(error => {
        // do something
    })
4、前端缓存机制？ 
    从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络。 
    Service Worker
    Memory Cache（内存中的缓存）
    Disk Cache（硬盘中的缓存）
    Push Cache
    网络请求
5、vue data更新是马上渲染得嘛？ 
6、做过得性能优化有哪些？ 
主要是动画、视频相关的 
7、面试官给了两个场景 1.一个是js太大，如何做拆分？ 2.一个视频播放场景，弹幕较多的时候，如何控制弹幕的展示，性能会更好？ 需要考虑多种方案

