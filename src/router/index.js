import React, { lazy, Suspense } from "react";
const Header = lazy(() => import(/* webpackChunkName: "Header" */ '@/views/header/index')); 
const Detail = lazy(() => import(/* webpackChunkName: "Detail" */ '@/views/detail/index'));  
const Search = lazy(() => import(/* webpackChunkName: "Search" */ '@/views/search/index'));   
const SingerDetail = lazy(() => import(/* webpackChunkName: "SingerDetail" */ '@/views/singerDetail/index'));   

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const routes = [
  {
    path:'/detail',
    component: SuspenseComponent(Detail),
    exact:true
  },
  {
    path:'/search',
    component: SuspenseComponent(Search),
    exact:true
  },
  {
    path:'/',
    component: SuspenseComponent(Header),
    routes: [
      {
        path: "/singerDetail/:id",
        component: SuspenseComponent(SingerDetail),
      }
    ]
  },
]
export {routes}