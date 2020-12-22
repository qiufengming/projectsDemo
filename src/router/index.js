import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import projectHome from '@/pages/index'
import KungFuChina from '@/pages/KungFuChina/index'
import KungFuChinaHome from '@/pages/KungFuChina/home/index'
import KungFuChinaHome1 from '@/pages/KungFuChina/home1/index'
import KungFuChinaLiveRoom from '@/pages/KungFuChina/liveRoom/index'
import liveManager from '@/pages/liveManager/index'
import liveManagerLiveList from '@/pages/liveManager/live/liveList/index.vue'
// H:\D\dataGit\projectsDemo\src\pages\liveManager\live\liveList\index.vue
import standardLib from '@/pages/standardLib/index'

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
        }
      ]
    }
  ]
})
