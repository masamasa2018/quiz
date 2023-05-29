<template>

  <!-- <h2>初めてのコンポーネントaaa</h2> -->
  <p class="commong_title">{{quizTitle}}</p>

      <div class="common_box_body">
        <div class="box_result">

            <div class="result_body">
             <h2>全{{ categoryData.num }}問中 {{corrctNum}}問正解</h2>
                
             <h3>おめでとうございます。</h3>
             <h3>{{evaluationInfo}}</h3>
            
             <h4>{{ categoryData.result_info }}</h4>
            </div>
            
            

        </div>
    </div>

    <RouterLink v-bind:to="{ path: '/top'}">
     <button class="restart">もう一度やってみる
     </button>
    </RouterLink>

</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import quizData from '../../model/quiz/quizData';
import quizResultLS from '../../model/quiz/quizResultLS';
import {CONFIG} from "../../components/config";
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import util from "../../components/util";



const route = useRoute()
const router = useRouter();

const categoryId : number = Number(route.params.category_id);

const categoryData = quizData.getCategoryData(categoryId);

const quizTitle:string = categoryData.name;

const corrctNum = util.getQuizResultNum(categoryId,categoryData.num)


let evaluationInfo : string = "もう少しでした。なかなかのマニアです！"
if(corrctNum == categoryData.num){
    evaluationInfo =  "全問正解！完璧です！"
}


</script>