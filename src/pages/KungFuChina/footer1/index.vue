<template>
    <div class="kung_fu_footer">
        <div class="w1024 footer">
            <el-row class="friendship_link">
                <el-col :span="2" class="t_c"><strong>友情链接</strong></el-col>
                <el-col :span="22" class="link_list">
                    <a v-for="(item, i) in friendshipLink" :key="i" href="" target="_blank">{{ item.name }}</a>
                </el-col>
            </el-row>
            <el-row class="footer_link">
                <a class="i-link">关于我们</a><div class="aHr"></div>
                <a class="i-link">招聘英才</a><div class="aHr"></div>
                <a class="i-link">广告服务</a><div class="aHr"></div>
                <a class="i-link">合作加盟</a><div class="aHr"></div>
                <a class="i-link">供稿服务</a><div class="aHr"></div>
                <a class="i-link">网站声明</a><div class="aHr"></div>
                <a class="i-link">网站律师</a><div class="aHr"></div>
                <a class="i-link">联系我们</a>
            </el-row>
            <el-row class="fixed_content">
                <span>网络文化经营许可证</span>
                <span>京网文[2014]2108-308号</span>
                <span>信息网络传播视听节目许可证0104065</span>
                <span>晋ICP备09009861</span>
            </el-row>
            <el-row class="fixed_content">
                <span class="phone">热线：029-87368808</span>
                <span class="email">邮箱：zgxindu@163.com</span>
                <span>功夫中国版权所有，未经书面授权禁止使用</span>
                <span class="Copyright">Copyright@2009-2012</span>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                friendshipLink: [],
            };
        },
        created(){
            let self = this;
            self.getFriendshipLink();
        },
        mounted(){},
        methods: {
            // 获取友情链接
            getFriendshipLink(){
                let self = this;
                let data = [
                    {id: 1, link: '', name: '中国报业' },
                    {id: 2, link: '', name: '新华网' },
                    {id: 3, link: '', name: '中国网' },
                    {id: 4, link: '', name: '央视网' },
                    {id: 5, link: '', name: '中国日报网' },
                    {id: 6, link: '', name: '国际在线' },
                    {id: 7, link: '', name: '中国青年网' },
                    {id: 8, link: '', name: '中国台湾网' },
                    {id: 9, link: '', name: '中国西藏网' },
                    {id: 10, link: '', name: '中国文明网' },
                    {id: 11, link: '', name: '央广网' },
                    {id: 12, link: '', name: '中国政府网' },
                    {id: 13, link: '', name: '国新办' },
                    {id: 14, link: '', name: '中国网信网' },
                    {id: 15, link: '', name: '国防部' },
                    {id: 16, link: '', name: '中央纪委监察部' },
                    {id: 17, link: '', name: '中联部' },
                    {id: 18, link: '', name: '中国志愿服务联合会' },
                    {id: 19, link: '', name: '法制网' },
                    {id: 20, link: '', name: '文汇网' },
                    {id: 21, link: '', name: '中国军网' },
                    {id: 22, link: '', name: '互联网举报中心' },
                    {id: 23, link: '', name: '求是网' },
                    {id: 24, link: '', name: '中国小康网' },
                    {id: 25, link: '', name: '中国作家网' },
                    {id: 26, link: '', name: '北方网' },
                    {id: 27, link: '', name: '南方网' },
                    {id: 28, link: '', name: '红网' },
                    {id: 29, link: '', name: '西藏新闻网' },
                    {id: 30, link: '', name: '天山网' },
                    {id: 31, link: '', name: '荆楚网' },
                    {id: 32, link: '', name: '浦东新闻网' },
                    {id: 33, link: '', name: '黄冈新闻网' },
                    {id: 34, link: '', name: '千龙网' },
                    {id: 35, link: '', name: '红色旅游网' }
                ];
                self.friendshipLink = data;
            },
        }
    }
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.kung_fu_footer{
    position: relative; width: 100%; padding: 20px 0; background-color: #FDFBFB; color: #989898; text-align: center; 
    .footer{ min-height: 100px; font-size: 12px; }
    .friendship_link{
        padding: 10px 0; zoom: 1; margin: 0 auto; text-align: left; min-height: 30px; border-bottom: 1px solid #ECEBEB; position: relative;
        strong{ width: 75px; height: auto; float: left; display: block; color: #000; padding: 0 25px; font-size: 14px; font-weight: 500; }
        .link_list{ border-left: 1px solid #ECEAEB; }
        a{ display: inline-block; margin: 0; line-height: 26px; padding-right: 19px; }
    }
    .footer_link{
        height: 30px; line-height: 30px; margin: 3px auto; margin-top: 10px; text-align: center;
        a{ padding: 0 10px; }
        .aHr{ display: inline-block; width: 1px; border: none; background-color: #333; height: 0.9em; }
    }
    .fixed_content{
        margin: 0 auto; height: 30px; line-height: 30px; color: #333; text-align: center; font-size: 12px;
        span{ padding: 0 3px; }
    }
    
}
</style>