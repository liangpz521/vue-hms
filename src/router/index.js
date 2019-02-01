import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import UserList from '@/views/UserList.vue'
import Layout from '@/views/page/Layout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login,
      name: '用户登录',
      hidden: true
    },
    {
      path: '/',
      component: Home,
      name: '系统设置',
      iconCls: 'el-icon-message',
      children: [
        {path: '/table', component: HelloWorld, iconCls: 'el-icon-message', name: 'Table'},
        {path: '/form', component: HelloWorld, name: 'Form'},
        {path: '/user', component: Login, name: '列表'},
        {path: '/user/page', component: UserList, name: '用户列表'}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '页面布局',
      iconCls: 'el-icon-message',
      children: [
        {path: '/page/layout', component: Layout, iconCls: 'el-icon-message', name: '布局'}
      ]
    }
  ]
})

// let routes = [
//   {
//     path: '/',
//     component: Home,
//     name: '导航一',
//     iconCls: 'el-icon-message',
//     children: [
//       {path: '/main', component: HelloWorld, name: '主页', hidden: true},
//       {path: '/table', component: HelloWorld, name: 'Table'},
//       {path: '/form', component: HelloWorld, name: 'Form'},
//       {path: '/user', component: HelloWorld, name: '列表'},
//     ]
//   }
//
// ]
//
// export default routes
