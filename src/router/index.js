import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/FirstPage'
import Home from '@/components/Home'
import AboutUs from '@/components/aboutus/AboutUs'
import FindPeople from '@/components/joinus/FindPeople'
import Plan from '@/components/joinus/Plan'
import JoinUs from '@/components/joinus/JoinUs'
import News from '@/components/News/News'
import Newscontent from '@/components/News/Newscontent'
import News0 from '@/components/News/News0'
import News1 from '@/components/News/News1'
import News2 from '@/components/News/News2'
import News3 from '@/components/News/News3'
import News4 from '@/components/News/News4'
import News5 from '@/components/News/News5'
import News6 from '@/components/News/News6'
import Lab from '@/components/Lab'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage,
      redirect: {name: 'home'},
      children:[
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/aboutus',
          name: 'aboutus',
          component: AboutUs,
        },
        {
          path: '/lab',
          name: 'lab',
          component: Lab,
        },
        {
          path: '/joinus',
          name: 'joinus',
          component: JoinUs,
          // redirect: {name: 'plan'},
          children:[
          {
            path: 'plan',
            name: 'plan',
            component: Plan
          },
          {
            path: 'findpeople',
            name: 'findpeople',
            component: FindPeople
          },
          ]
        },{
          path: '/news',
          name: 'news',
          component: News,
          redirect: {name: 'newscontent'},
          children:[
          {
            path: '/newscontent',
            name: 'newscontent',
            component: Newscontent
          },
          {
            path: '/news0',
            name: 'news0',
            component: News0
          },
          {
            path: '/news1',
            name: 'news1',
            component: News1,
          },
           {
            path: '/news2',
            name: 'news2',
            component: News2
          },
          {
            path: '/news3',
            name: 'news3',
            component: News3,
          },
           {
            path: '/news4',
            name: 'news4',
            component: News4
          },
          {
            path: '/news5',
            name: 'news5',
            component: News5,
          },
          {
            path: '/news6',
            name: 'news6',
            component: News6,
          }
          ]
        }
      ]
    }
  ]
})
