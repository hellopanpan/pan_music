import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import Header from '@/views/header/index'
import Detail from '@/views/detail/index'
import Search from '@/views/search/index'
import SingerDetail from '@/views/singerDetail/index'
const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

// const Header = lazy(() => import("@/views/header/index"));
// const Detail = lazy(() => import("@/views/detail/index"));
// const Search = lazy(() => import("@/views/search/index"));
// const SingerDetail = lazy(() => import("@/views/singerDetail/index"));
// import Header from '@/views/header/index'

// const routes = [
//   {
//     path:'/detail',
//     component:  SuspenseComponent(Detail),
//     exact:true
//   },
//   {
//     path:'/search',
//     component: SuspenseComponent(Search),
//     exact:true
//   },
//   {
//     path:'/',
//     component: SuspenseComponent(Header),
//     routes: [
//       {
//         path: "/singerDetail/:id",
//         component: SuspenseComponent(SingerDetail),
//       }
//     ]
//   },
// ]
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