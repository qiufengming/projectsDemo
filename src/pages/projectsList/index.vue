<template>
    <div class="projects_list">
        <!-- 项目列表 -->
        <el-row>
            <ul class="project_list_wrap">
                <li v-for="(item, i) in projects" :key="item.id" @click="toProject(item)">
                    <span>{{ item.name }}</span>
                </li>
            </ul>
        </el-row>
        <!-- <el-row class="project_list_wrap">
            <router-link v-for="(item, i) in projects" :to="{name: item.pathName }" :key="item.id" class="project"> 
                {{ item.name }} 
            </router-link>
        </el-row> -->

        <!-- 项目 -->
        <!-- <router-view/> -->
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                projects: [],
            };
        },
        created(){
            this.getProjectList();
        },
        mounted(){
        },
        methods: {
            // 获取项目列表
            getProjectList(){
                let self= this;
                self.$http.get('./static/data/projectList.json').then(res => {
                    let d = res.data;
                    self.projects = d;
                }).catch(err => {
                    console.log(err);
                });
            },
            // 项目跳转
            toProject(item){
                let self= this;
                self.$router.push({
                    name: item.pathName
                });
                // this.$router.push({  //核心语句
                //     path:'/select',   //跳转的路径
                //     query:{           //路由传参时push和query搭配使用 ，作用时传递参数
                //         id:this.id , 
                //     }
                // })
            },
            // 接口调试
            getMenus(){
                let self= this;
                self.$http.get('/apis/kungfuChina/getMenus').then(res => {
                    let d = res.data;
                }).catch(err => {
                    console.log(err);
                });
            },
        }


    }
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.projects_list{
    padding: 1px;
    .project_list_wrap{
        display: flex;
        flex-direction: row; /* | row-reverse | column | column-reverse */
        flex-wrap: wrap; /* nowrap | wrap | wrap-reverse */
        justify-content: space-around; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
        align-items: stretch; /* flex-start | flex-end | center | baseline | stretch */
        padding: 0; margin: 0;
        li, .project{
            background: tomato; color: white;
            font-weight: bold; font-size: 16px; text-align: center;
            width: 300px; height: 150px; line-height: 150px;
            padding: 0px 10px; margin-top: 10px;
            border-radius: 6px;
            cursor: pointer;
            &:hover{
                box-shadow: 0 0 10px tomato;
            }
        }
    }
}
</style>