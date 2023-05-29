<script lang="ts" setup>
//import QuizContent from "./QuizContent_.vue";
import QuizContent from "../../components/quiz/QuizContent.vue";

import QuizSummury from "../../components/quiz/QuizSummury.vue";

import categoryImageList from "../../components/common/categoryImageList.vue";

import quizData from '../../model/quiz/quizData';

import {CONFIG} from "../../components/config"
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import util from "../../components/util";

import quizResultLS from '../../model/quiz/quizResultLS';

import accessData from "../../model/access/accessData"
import {ref } from 'vue';

// const quizTitle :String = CONFIG.quizTitle

const route = useRoute();
const router = useRouter();

const id : any = Number(route.params.id);
const categoryId : number = Number(route.params.category_id);
const nextId : Number = id + 1;

if(id == 1){
  quizResultLS.deleteQuizResult(categoryId);
}

const categoryData = quizData.getCategoryData(categoryId);

var isMoblie = true;
if(window.innerWidth > 500){
    isMoblie = false;
}
const uri = route.path
// if(location.host === CONFIG.realDomain){
//   accessData.insert(uri);
// }
 // util.invalidateBack();
 addEventListener("popstate", () => {
    const uri = route.path;
    router.push("/answer/" + categoryId  + "/" + id + "/" + nextId);
  })


</script>

<template>
    <p class="common_title">{{categoryData.name}}</p>

   <QuizSummury :categoryId="categoryId" :id="id"/>

   <categoryImageList :isMoblie = isMoblie :categoryId = categoryId />

  <Suspense>
    <QuizContent />
  </Suspense>

  <RouterLink v-bind:to="{ path: '/start/' + categoryId}">
         <button class="restart">最初からやり直す</button>
  </RouterLink>

</template>

<style lang="scss">

</style>