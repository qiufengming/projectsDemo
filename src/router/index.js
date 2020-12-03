import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import projectHome from '@/pages/index'
import KungFuChina from '@/pages/KungFuChina/index'
import KungFuChinaHome from '@/pages/KungFuChina/home/index'
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
            }
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
