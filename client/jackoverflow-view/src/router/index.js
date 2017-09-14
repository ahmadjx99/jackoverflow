import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Questions from '@/components/questions'
// import Users from '@/components/users'
import Signin from '@/components/signin'
import Signup from '@/components/signup'
import Detailquestion from '@/components/questiondetail'
import CreateQuestion from '@/components/createQuestion'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: CreateQuestion
        },
        {
          path: '/questions',
          component: Questions
        },
        {
          path: '/questions/:id',
          component: Detailquestion,
          props: true
        }
      ]
    },
    {
      path: '/signin',
      component: Signin
    },
    {
      path: '/signup',
      component: Signup
    }
  ]
})
