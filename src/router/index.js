import Header from '@/views/header/index'
import Detail from '@/views/detail/index'
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
  }
]
export {routes}