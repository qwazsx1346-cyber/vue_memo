import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, //() => import('../views/Home.vue')
    },                // 11번라인 좌측은 정적 임포트, 우측은 동적임포트.
    {                 // 첫 화면에 임포트할 내용이 많으면 우측사용, 그렇지 않을경우 좌측으로 해결
      path: '/memos/add',
      component: Form
    },
    {
      path: '/memos/:id', // 콜론(:)사용 이유는 path variable(경로 변수)을 사용하려 하기때문
      component: Form
    }
  ],
})

export default router
