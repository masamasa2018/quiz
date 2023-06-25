<script lang="ts" setup>
import QuizAnswer from "../../components/quiz/QuizAnswer.vue";
import categoryImageList from "../../components/common/categoryImageList.vue";
import quizData from "../../model/quiz/quizData";
import { useRoute } from 'vue-router';
import { ref } from "vue";

var isMoblie = true;
if (window.innerWidth > 500) {
  isMoblie = false;
}
const route = useRoute()
const code : number = Number(route.params.code);
const category : number = Number(route.params.category);
const answerId : number = Number(route.params.answer_id);
// const nextId : number = id + 1;
const categoryData = quizData.getCategoryData(category);
let lastFlag: boolean = false;
const quizNum: number = categoryData.num;

if (code == quizNum) {
  lastFlag = true;
}
</script>

<template>
  <p class="common_title">{{ categoryData.name }}</p>
  <categoryImageList :isMoblie="isMoblie" :category="category" />
  <Suspense>
    <QuizAnswer :category="category" :code="code" :answerId="answerId" />
  </Suspense>

  <RouterLink v-bind:to="{ path: '/start/' + category }">
     <button class="restart">最初からやり直す</button>
   </RouterLink>
</template>

<style lang="scss">
.likeText {
  padding-left: 2em;
  padding-top: 0.5em;
  padding-bottom: 0em;

}
.likeBody {
  margin-top: 0em;
  margin-left: 0.2em;
  margin-right: 0.2em;
  margin-bottom: 0em;
  font-size: 1em;
  background-color: whitesmoke;
}
</style>