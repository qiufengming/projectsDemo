import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import projectHome from '@/pages/index'
import KungFuChina from '@/pages/KungFuChina/index'
import KungFuChinaHome from '@/pages/KungFuChina/home/index'
import KungFuChinaHome1 from '@/pages/KungFuChina/home1/index'
import KungFuChinaLiveRoom from '@/pages/KungFuChina/liveRoom/index'
import liveManager from '@/pages/liveManager/index'
import standardLib from '@/pages/standardLib/index'

Vue.use(Router)

export default new Router({
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
          component: liveManager
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
