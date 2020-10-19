import Header from '@/views/header/index'
import Detail from '@/views/detail/index'
import Search from '@/views/search/index'
import SingerDetail from '@/views/singerDetail/index'
const routes = [
  {
    path:'/detail',
    component: Detail,
    exact:true
  },
  {
    path:'/search',
    component: Search,
    exact:true
  },
  {
    path:'/',
    component: Header,
    routes: [
      {
        path: "/singerDetail/:id",
        component: SingerDetail,
      }
    ]
  },
]
export {routes}