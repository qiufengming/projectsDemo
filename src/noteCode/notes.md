
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
    





# 一些学习地址
https://juejin.cn/post/6844903875334537230


https://blog.csdn.net/weixin_37542119/article/details/89384768


https://blog.csdn.net/feifanzhuli/article/details/78332822


https://blog.csdn.net/tzllxya/article/details/93507394



