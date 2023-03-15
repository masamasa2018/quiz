import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/test',
      name: 'test',
      component: () => import("../views/TestView.vue"),
    },

    {
      path: '/inquiry',
      name: 'inquiry',
      component: () => import("../views/InquiryView.vue"),
    },

    {
      path: '/concept',
      name: 'concept',
      component: () => import("../views/SiteConcept.vue"),
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/top",
      name: "top",
      component: () => import("../views/QuizTop.vue"),
    },
    {
      path: "/start/:category_id",
      name: "start",
      component: () => import("../views/QuizStart.vue"),
    },
    {
      path: "/result/:category_id/",
      name: "result",
      component: () => import("../views/QuizResult.vue"),
    },
    {
      path: "/quiz/:category_id/:id",
      name: "quiz",
      component: () => import("../views/QuizContent.vue"),
    },
    {
      path: "/answer/:category_id/:id/:answer_id",
      name: "answer",
      component: () => import("../views/QuizAnswer.vue"),
    },
  ]
})

export default router
