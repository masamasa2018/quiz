<script lang="ts" setup>
//import QuizContent from "./QuizContent_.vue";
import QuizContent from "../components/quiz/QuizContent.vue";

import QuizSummury from "../components/quiz/QuizSummury.vue";

import categoryImageList from "../components/common/categoryImageList.vue";

import {CONFIG} from "../components/config"
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import util from "../components/util";

import quizResultLS from '../model/quiz/quizResultLS';

import accessData from "../model/access/accessData"
import {ref } from 'vue';

const quizTitle :String = CONFIG.quizTitle

const route = useRoute();
const router = useRouter();

const id : any = Number(route.params.id);
const categoryId : number = Number(route.params.category_id);
const nextId : Number = id + 1;

if(id == 1){
  quizResultLS.deleteQuizResult(categoryId);
}



// var summury = util.getResultSummary(categoryId,id)

// const mobileView = ref(false)

var isMoblie = true;
if(window.innerWidth > 500){
    isMoblie = false;
}
const uri = route.path
if(location.host === CONFIG.realDomain){
  accessData.insert(uri);
}
 // util.invalidateBack();
 addEventListener("popstate", () => {
    const uri = route.path;
    router.push("/answer/" + categoryId  + "/" + id + "/" + nextId);
  })

// //値の比較
// function comparison(a: any, b: any) {
//   return a == b;
// }

</script>

<template>
    <p class="title_h_5">{{quizTitle}}</p>

    <!-- <ul class="images_box">
    <li><img src="@/assets/category/1/1.jpg" class="waku01"></li>
    <li><img src="@/assets/category/1/2.jpg" class="waku01"></li>
    <li v-if="isMoblie==false"><img src="@/assets/category/1/3.jpg" class="waku01"></li>
    
   </ul> -->

   <!-- <div class="box_info_contents">
      <ul class="result_box">
        <li v-for="(item, index) in summury" :key="item"
        
        v-bind:class="{'pattern_correct': comparison(item,'correct'),'pattern_incorrect': comparison(item,'incorrect'), 'pattern_none': comparison(item,'none'),'pattern_now': comparison(item,'now') }" 
        > 
          <div v-if="index > 0">{{index}}</div>
        </li>
      </ul>
   </div> -->
   <QuizSummury :categoryId="categoryId" :id="id"/>

   <categoryImageList :isMoblie = isMoblie />

  <Suspense>
    <QuizContent />
  </Suspense>

  <RouterLink v-bind:to="{ path: '/start/' + categoryId}">
         <button class="restart">最初からやり直す</button>
      </RouterLink>

</template>