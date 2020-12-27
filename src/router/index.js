import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import projectHome from '@/pages/index'
import projectsList from '@/pages/projectsList/index'
/* 功夫中国门户网站 */
import KungFuChina from '@/pages/KungFuChina/index'
import KungFuChinaHome from '@/pages/KungFuChina/home/index'
import KungFuChinaHome1 from '@/pages/KungFuChina/home1/index'
import KungFuChinaLiveRoom from '@/pages/KungFuChina/liveRoom/index'
/* 功夫中国后台管理系统 */
import liveManager from '@/pages/liveManager/index'
import liveManagerLiveList from '@/pages/liveManager/live/liveList/index.vue'
/* 华为技术规范标准库 */
import standardLib from '@/pages/standardLib/index'
/* 株洲能耗*/
import zhuzhouCityEnergy from '@/pages/zhuzhouCityEnergy/index'
/* 文档结构化 */
import docStructure from '@/pages/docStructure/index'
import docStructureList from '@/pages/docStructure/list/index'
import docStructureDetails from '@/pages/docStructure/doc/index'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'projectHome',
      component: projectHome,
      children: [
        {
          path: '',
          name: 'projectsList',
          component: projectsList,
        },
        {
          path: '/KungFuChina',
          name: 'KungFuChina',
          component: KungFuChina,
          children: [
            {
              path: 'KungFuChinaHome',
              name: 'KungFuChinaHome',
              component: KungFuChinaHome
            },
            {
              path: 'home',
              name: 'KungFuChinaHome1',
              component: KungFuChinaHome1
            },
            {
              path: 'liveRoom',
              name: 'KungFuChinaLiveRoom',
              component: KungFuChinaLiveRoom
            },
          ]
        },
        {
          path: '/liveManager',
          name: 'liveManager',
          component: liveManager,
          children: [
            {
              path: '',
              name: '',
              redirect: 'liveList',
            },
            {
              path: 'liveList',
              name: 'liveList',
              component: liveManagerLiveList
            },
            // {
            //   path: '',
            //   components: {
            //     default: () => import('@/pages/liveManager/live/liveList/index.vue'),
            //     liveList: () => liveManagerLiveList,
            //   }
            // },
          ]
        },
        {
          path: '/standardLib',
          name: 'standardLib',
          component: standardLib
        },
        {
          path: '/zhuzhouCityEnergy',
          name: 'zhuzhouCityEnergy',
          component: zhuzhouCityEnergy
        },
        {
          path: '/docStructure',
          name: 'docStructure',
          component: docStructure,
          children: [
            {
              path: '',
              name: '',
              redirect: 'docStructureList', 
            },
            {
              path: 'docStructureList',
              name: 'docStructureList',
              component: docStructureList
            },
            {
              path: 'docStructureDetails',
              name: 'docStructureDetails',
              component: docStructureDetails
            },
          ]
        },
      ]
    }
  ]
})
