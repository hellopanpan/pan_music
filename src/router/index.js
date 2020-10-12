import Header from '@/views/header/index'
import Detail from '@/views/detail/index'
import Search from '@/views/search/index'
import SingerDetail from '@/views/singerDetail/index'
const routes = [
  {
    path:'/',
    component: Header,
    exact:true
  },
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
    path:'/singerDetail',
    component: SingerDetail,
    exact:true
  }
]
export {routes}