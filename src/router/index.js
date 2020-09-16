import Header from '@/views/header/index'
import Detail from '@/views/detail/index'
import Search from '@/views/search/index'
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
  }
]
export {routes}