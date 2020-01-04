
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Inicio.vue') },
      { path: '1', component: () => import('pages/Index.vue') },
      { path: '2', component: () => import('pages/Index1.vue') },
      { path: '3', component: () => import('pages/Index2.vue') },
      { path: '4', component: () => import('pages/Index3.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
