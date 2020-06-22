import Header from '@/views/header/index'
import Detail from '@/views/detail/index'
const routes = [
  {
    path:'/',
    component: Header,
    exact:true
  },
  {
    path:'/detail2',
    component: Detail,
    exact:true
  }
]
export {routes}