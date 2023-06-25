import { createRouter, createWebHistory } from "vue-router";
// import VueAnalytics from 'vue-analytics'




// import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/test',
      name: 'test',
      component: () => import("../views/TestView.vue"),
    },
  
    {
      path: '/',
      name: 'home',
      component: () => import("../views/quiz/QuizTop.vue"),
    },
    {
      path: '/inquiry',
      name: 'inquiry',
      component: () => import("..//views/other/InquiryView.vue"),
    },
    {
      path: '/concept',
      name: 'concept',
      component: () => import("../views/other/SiteConcept.vue"),
    },
    {
      path: "/top",
      name: "top",
      component: () => import("../views/quiz/QuizTop.vue"),
    },
    {
      path: "/start/:category",
      name: "start",
      component: () => import("../views/quiz/QuizStart.vue"),
    },
    {
      path: "/result/:category/",
      name: "result",
      component: () => import("../views/quiz/QuizResult.vue"),
    },
    {
      path: "/quiz/:category/:code",
      name: "quiz",
      component: () => import("../views/quiz/QuizContent.vue"),
    },
    {
      path: "/answer/:category/:code/:answer_id",
      name: "answer",
      component: () => import("../views/quiz/QuizAnswer.vue"),
    },
  ]
})

export default router
