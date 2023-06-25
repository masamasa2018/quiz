<script lang="ts" setup>
//import QuizContent from "./QuizContent_.vue";
import QuizContent from "../../components/quiz/QuizContent.vue";

import QuizSummury from "../../components/quiz/QuizSummury.vue";

import categoryImageList from "../../components/common/categoryImageList.vue";

import quizData from '../../model/quiz/quizData';

import { CONFIG } from "../../components/config";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import util from "../../components/util";

import quizResultLS from "../../model/quiz/quizResultLS";

import accessData from "../../model/access/accessData"
import { ref } from "vue";

// const quizTitle :String = CONFIG.quizTitle

const route = useRoute();
const router = useRouter();

const code : any = Number(route.params.code);
const category : number = Number(route.params.category);
const nextCode : Number = code + 1;

if(code == 1){
  quizResultLS.deleteQuizResult(category);
}

const categoryData = quizData.getCategoryData(category);

var isMoblie: boolean = true;
if (window.innerWidth > 500) {
    isMoblie = false;
}
const uri: string = route.path;

 addEventListener("popstate", () => {
    const uri = route.path;
  router.push("/answer/" + category + "/" + code + "/" + nextCode);
  })
</script>

<template>
  <p class="common_title">{{ categoryData.name }}</p>

  <QuizSummury :category="category" :code="code" />

  <categoryImageList :isMoblie="isMoblie" :category="category" />

  <Suspense>
    <QuizContent />
  </Suspense>

  <RouterLink v-bind:to="{ path: '/start/' + category }">
         <button class="restart">最初からやり直す</button>
  </RouterLink>

</template>

<style lang="scss"></style>
