<script lang="ts" setup>
import QuizAnswer from "../../components/quiz/QuizAnswer.vue";
// import QuizSummury from "../../components/quiz/QuizSummury.vue";
import categoryImageList from "../../components/common/categoryImageList.vue";
import quizData from "../../model/quiz/quizData";



import {CONFIG} from "../../components/config";
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import util from "../../components/util";
import {ref } from 'vue';

const mobileView = ref(false)
    // windowのwidth

var isMoblie = true;
if(window.innerWidth > 500){
    isMoblie = false;
}
const route = useRoute()
const router = useRouter();
const id : number = Number(route.params.id);
const categoryId : number = Number(route.params.category_id);

const answerId : number = Number(route.params.answer_id);
// const quizTitle :String = CONFIG.quizTitle;

const nextId : number = id + 1;

const categoryData = quizData.getCategoryData(categoryId);

let lastFlag : boolean = false;

const quizNum:number = categoryData.num;

if(id == quizNum){
  lastFlag = true;
}

//quizResultLS.saveQuizResult(saveKey,saveValue);

</script>

<template>

  <!-- <h2>初めてのコンポーネントaaa</h2> -->
  <p class="common_title">{{categoryData.name}}</p>

  <!-- <ul class="images_box">
    <li><img src="@/assets/category/1/1.jpg" class="waku01"></li>
    <li><img src="@/assets/category/1/2.jpg" class="waku01"></li>
    <li v-if="isMoblie==false"><img src="@/assets/category/1/3.jpg" class="waku01"></li>
    
  </ul> -->
  <categoryImageList :isMoblie = isMoblie :categoryId=categoryId />

  
  <!-- <QuizSummury :categoryId="categoryId" :id="id"/> -->

  <Suspense>
    <QuizAnswer :categoryId="categoryId" :id="id" :answerId="answerId" />
  </Suspense>


<div v-if="lastFlag">
  <RouterLink v-bind:to="{ path: '/result/'+ categoryId }">
     <button class="result">結果をみる</button>
  </RouterLink>
</div>
<div v-else>
  <RouterLink v-bind:to="{ path: '/quiz/'+ categoryId + '/' + nextId }">
     <button class="next">次へ</button>
  </RouterLink>
</div>




   <RouterLink v-bind:to="{ path: '/start/'+ categoryId}">
     <button class="restart">最初からやり直す</button>
   </RouterLink>


</template>