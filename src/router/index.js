import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../components/pages/Home.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/pages/Login.vue'], resolve)
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: resolve => require(['../components/pages/Recruit.vue'], resolve),
      children:[
          {
            path: 'changepassword',
            component: resolve => require(['../components/component/change-password.vue'], resolve)
          },
        {
          path: 'haveresume',
          component: resolve => require(['../components/component/haveresume.vue'], resolve)
        },
        {
          path: 'personresume',
          component: resolve => require(['../components/component/personresume.vue'], resolve)
        },
        ]
    },
    {
      path: '/recruit_message',
      name: 'recruit',
      component: resolve => require(['../components/pages/MessageLogin.vue'], resolve)
    },
    {
      path: '/login_success',
      name: 'login_success',
      component: resolve => require(['../components/pages/LoginSuccess.vue'], resolve)
    },
    {
      path: '/amend_success',
      name: 'amend_success',
      component: resolve => require(['../components/pages/AmendSuccess.vue'], resolve)
    },
    {
      path: '/register',
      name: 'amend_success',
      component: resolve => require(['../components/pages/Register.vue'], resolve)
    },
    {
      path: '/find_password',
      name: 'amend_success',
      component: resolve => require(['../components/pages/FindPassword.vue'], resolve)
    },
    {
      path: '/certification',
      name: 'certification',
      component: resolve => require(['../components/pages/Certification.vue'], resolve)
    },
    {
      path: '/subsuccess',
      name: 'certification',
      component: resolve => require(['../components/pages/SubSuccess.vue'], resolve)
    },
    {
      path: '/newpassword',
      name: 'newpassword',
      component: resolve => require(['../components/pages/NewPassword.vue'], resolve)
    },
    // {
    //   path: '/unfilledresume',
    //   name: 'newpassword',
    //   component: resolve => require(['../components/pages/UnfilledResume.vue'], resolve)
    //   children:[
    //     {
    //       path: '/noresume',
    //       component: resolve => require(['../components/page/ProjectList.vue'], resolve)
    //     },
    //     {
    //       path: '/industryList',
    //       component: resolve => require(['../components/page/IndustryList.vue'], resolve)   //
    //     },
    //     {
    //       path: '/projectUndertake',
    //       component: resolve => require(['../components/page/projectUndertake.vue'], resolve)
    //     },
    //     {
    //       path: '/systemLog',
    //       component: resolve => require(['../components/page/systemLog.vue'],resolve)
    //     },
    //     // {
    //     //     path: '/tagManagement',
    //     //     component: resolve => require(['../components/page/TagManagement.vue'], resolve)
    //     // },
    //   ]
    // },
  ]
})
