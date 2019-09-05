import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/views/HomePage'
import DepartmentPage from '@/components/views/DepartmentPage'
import RegisterPage from '@/components/views/RegisterPage'
import Maintain from '@/components/views/Maintain'
import Advertise from '@/components/views/Advertise'
import RightPage from '@/components/views/RightPage'
import Process from '@/components/components/RightPage/RouteView/Process'
import MyRights from '@/components/components/RightPage/RouteView/MyRights'
import RightFeedback from '@/components/components/RightPage/RouteView/RightFeedback'
import ProcessShow from '@/components/components/RightPage/RouteView/ProcessShow'
import AllProblem from '@/components/components/RightPage/RouteView/AllProblem'
import VentPanel from '@/components/views/VentPanel'
import VentWall from '@/components/components/VentPage/RouteView/VentWall'
import SubmitVent from '@/components/components/VentPage/RouteView/SubmitVent'
import AdminPage from '@/components/views/AdminPage'
import LoginPage from '@/components/components/AdminPage/LoginPage'
import AdminForm from '@/components/components/AdminPage/AdminForm'
import Statistics from '@/components/components/AdminPage/RouteView/Statistics'
import DepartmentShow from '@/components/components/AdminPage/RouteView/DepartmentShow'
import HomePageAlert from '@/components/components/AdminPage/RouteView/HomePageAlert'
import HomePageSlide from '@/components/components/AdminPage/RouteView/HomePageSlide'
import ImageNews from '@/components/components/AdminPage/RouteView/ImageNews'
import ImportmentNews from '@/components/components/AdminPage/RouteView/ImportmentNews'
import NewestActivity from '@/components/components/AdminPage/RouteView/NewestActivity'
import StarForm from '@/components/components/AdminPage/RouteView/StarForm'
import MaterialShow from '@/components/components/AdminPage/RouteView/MaterialShow'
import SoftWareShow from '@/components/components/AdminPage/RouteView/SoftWareShow'
import RightAdmin from '@/components/components/AdminPage/RouteView/RightAdmin'
import RegisterForm from '@/components/components/AdminPage/RouteView/RegisterForm'
import RightAdminDealing from '@/components/components/AdminPage/RouteView/RightAdminDealing'
import RightAdminDone from '@/components/components/AdminPage/RouteView/RightAdminDone'
import MaterialPage from '@/components/views/MaterialPage'
import MaterialForm from '@/components/components/MaterialPage/MaterialForm'
import SoftWareForm from '@/components/components/MaterialPage/SoftWareForm'
import BookManager from '@/components/views/BookManager'
import BookDetail from '@/components/components/BookManager/Router/BookDetail'
import BookList from '@/components/components/BookManager/Router/BookList'
import MyAppointment from '@/components/components/BookManager/Router/MyAppointment'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/DepartmentPage',
      name: 'DepartmentPage',
      component: DepartmentPage
    },
    {
      path: '/MaterialPage',
      name: 'MaterialPage',
      component: MaterialPage,
      children:[
        {
          path: '/MaterialPage',
          name: 'MaterialForm',
          component: MaterialForm,
        },
        {
          path: '/MaterialPage/SoftWareForm',
          name: 'SoftWareForm',
          component: SoftWareForm,
        },
      ]
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/BookManager',
      name: 'BookManager',
      component: BookManager,
      children:[
        {
          path: '/BookManager',
          name: 'BookList',
          component: BookList,
        },
        {
          path: '/BookManager/BookDetail',
          name: 'BookDetail',
          component: BookDetail,
        },
        {
          path: '/BookManager/MyAppointment',
          name: 'MyAppointment',
          component: MyAppointment,
        },
      ]
    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/Advertise',
      name: 'Advertise',
      component: Advertise
    },
    {
      path: '/Maintain',
      name: 'Maintain',
      component: Maintain
    },
    {
      path: '/RightPage',
      name: 'RightPage',
      component: RightPage,
      children:[{
        path: '/Process',
        name: 'Process',
        component: Process,
      },
      {
        path: '/MyRights',
        name: 'MyRights',
        component: MyRights,
      },
      {
        path: '/RightFeedback',
        name: 'RightFeedback',
        component: RightFeedback,
      },
      {
        path: '/ProcessShow',
        name: 'ProcessShow',
        component: ProcessShow,
      },
      {
        path: '/RightPage',
        name: 'RightPage',
        component: AllProblem,
      }
    ]
    },
    {
      path: '/VentPanel',
      name: 'VentPanel',
      component: VentPanel,
      children:[
        {
          path: '/VentPanel',
          name: 'VentWall',
          component: VentWall,
        },
        {
          path: '/SubmitVent',
          name: 'SubmitVent',
          component: SubmitVent,
        },
      ]
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/AdminPage',
      name: 'AdminPage',
      component: AdminPage,
      children:[
        // {
        //   path: '/AdminPage',
        //   name: 'LoginPage',
        //   component: LoginPage,
        // },
        {
          path: '/AdminPage/AdminForm',
          name: 'AdminForm',
          component: AdminForm,
          children:[
            {
              path: '/AdminPage/RegisterForm',
              name: 'RegisterForm',
              component: RegisterForm,
            },
            {
              path: '/AdminPage/Statistics',
              name: 'Statistics',
              component: Statistics,
            },
            {
              path: '/AdminPage/AdminForm',
              name: 'DepartmentShow',
              component: DepartmentShow,
            },
            {
              path: '/AdminPage/HomePageAlert',
              name: 'HomePageAlert',
              component: HomePageAlert,
            },
            {
              path: '/AdminPage/HomePageSlide',
              name: 'HomePageSlide',
              component: HomePageSlide,
            },
            {
              path: '/AdminPage/ImageNews',
              name: 'ImageNews',
              component: ImageNews,
            },
            {
              path: '/AdminPage/ImportmentNews',
              name: 'ImportmentNews',
              component: ImportmentNews,
            },
            {
              path: '/AdminPage/NewestActivity',
              name: 'NewestActivity',
              component: NewestActivity,
            },
            {
              path: '/AdminPage/StarForm',
              name: 'StarForm',
              component: StarForm,
            },
            {
              path: '/AdminPage/MaterialShow',
              name: 'MaterialShow',
              component: MaterialShow,
            },
            {
              path: '/AdminPage/SoftWareShow',
              name: 'SoftWareShow',
              component: SoftWareShow,
            },
            {
              path: '/AdminPage/RightAdmin',
              name: 'RightAdmin',
              component: RightAdmin,
            },
            {
              path: '/AdminPage/RightAdminDealing',
              name: 'RightAdminDealing',
              component: RightAdminDealing,
            },
            {
              path: '/AdminPage/RightAdminDone',
              name: 'RightAdminDone',
              component: RightAdminDone,
            },
          ]
        },
      ]
    },
  ]
})
