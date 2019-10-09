import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import a from '@/components/a'
import d from '@/components/d'
import error from '@/components/error'
Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a/:id(\\d+)/:title',
      name: 'a',
      component: a,
      beforeEnter:(to,from,next)=>{
      	console.log('进入了a模板')
      	console.log(to)
      	console.log(from)
      	next();
      	//to 和from 是一个对象
      }
    },
    {
      path: '/goHome',
      redirect:'/'
    },
      {
      path: '/c/:id/:title',
      redirect:'/a/:id/:title'
    },
    {
      path: '/d',
      name: 'D',
      component:d,
      alias:'/wjc'
    },
    {
      path: '*',
      name: 'error',
      component: error
    }

  ]
})
