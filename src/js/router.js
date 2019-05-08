import VueRouter from 'vue-router'

window.router=new VueRouter ({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'auth.login' }},
    {
      path: '/login',
      name: 'auth.login',
      component: require ('./components/pages/auth/login.vue').default,
    },
    {
      path: '/register',
      name: 'auth.register',
      component: require ('./components/pages/auth/register.vue').default,
    },
  ],
  scrollBehavior( to, from, savedPosition ) {
    return {x: 0, y: 0}
  },
})