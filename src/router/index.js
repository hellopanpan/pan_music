import Recomend from '@/views/recomend/index'
import Detail from '@/views/detail/index'
import Search from '@/views/search/index'
const routes = [
  {
    path:'/',
    component: Recomend,
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