<template>
<QuizSummury :category="category" :code="code"/>
  <div class="common_box_body">

    <div class="block_number_container">
        第{{code}}問
        
        <LikeQuiz :category="props.category" :code="props.code" />
    </div>

      <div class="box_info_answer">
        <div v-if="isCorrectFlag">
          <p class="block_correct_right"> ● 正解</p>
        </div>
        <div v-else>
          <p class="block_correct_left"> ☓ 不正解</p>
        </div>
        <p class="info_text">{{info}}</p>
      </div>
  <div v-if="lastFlag">
    <RouterLink v-bind:to="{ path: '/result/'+ category }">
      <button class="result">結果をみる</button>
    </RouterLink>
  </div>
  <div v-else>
    <nextLink :category="category" :nextCode="nextCode"/>
  </div>

      <div class="correct_text">正解は{{correct_code}}</div>

      <div v-for="(answer, index) in answers" :key="answer">
        <div v-if="index == correct_code">
          <button class="answer_button_correct_disable" disabled>{{index}} . {{answer}}</button>
        </div>
        <div v-else>
          <button class="answer_button_disabled"  disabled>{{index}} . {{answer}}</button>
      </div>
     </div>

     
  </div>
</template>


<script lang="ts" setup>
import { defineComponent } from 'vue';
import quizData from '../../model/quiz/quizData';
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import util from "../../components/util";
import quizResultLS from "../../model/quiz/quizResultLS"; 
import QuizSummury from "../../components/quiz/QuizSummury.vue";

import nextLink from "../../components/common/nextLink.vue";

import LikeQuiz from "../../components/quiz/LikeQuiz.vue";

const props = defineProps({
  category: {
    type: Number,
    default: 1
  },
  code: {
    type: Number,
    default: 1,
  },
  answerId: {
    type: Number,
    default: 1,
  },
});

const nextCode : number = props.code + 1;

const data = await quizData.getQuizData(props.category, props.code);
const answers = data["answers"];
const question: string = data["question"];;
const correct_code : number = data["correct_code"];

const info: String = data["info"];

const route = useRoute()
const router = useRouter();

const isCorrectFlag: boolean = isCorrect(props.answerId , correct_code);
const categoryData = quizData.getCategoryData(props.category);

let lastFlag: boolean = false;
const quizNum:number = categoryData.num;

if (props.code == quizNum) {
  lastFlag = true;
}

addEventListener("popstate", () => {
    const uri = route.path;
    router.push("/answer/"+ props.code + "/" + nextCode);
  })

//クイズの結果を書き込み
quizResultLS.saveQuizResult(props.category , props.code ,isCorrectFlag)

//正解かどうかフラグ
function isCorrect(answerCode: number, correctCode: number){
  let flag: boolean = false;
  if (answerCode == correctCode) {
    flag = true;
  }
  return flag;
}
</script>

<style lang="scss">
button.answer_button_disabled {
  text-align: left;
  font-size:1em;
  color: black;
  padding-left: 0.5em;
  padding-right: 1em;
  width: 100%;
  height: 3em;
  display:block;
  margin-bottom: 0.1em;
  white-space: nowrap;
}

 /* answer画面の回答テキスト正解  */
button.answer_button_correct_disable {
  font-size:1em;
  background-color:dodgerblue;
  color: white;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 1em;
  width: 100%;
  height: 3em;
  display:block;
  margin-bottom: 0.2em;
  white-space: nowrap;
}

.block_correct_right {
  color: #007bff;
  margin-top: 0em;
  margin-left: 0.5em;
  font-weight: bold;
}

.block_correct_left {
  color: red;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
  margin-left: 0.7em;
  font-weight: bold;
}

.correct_text {
  color: #007bff;
  margin-top: 0.2em;
  margin-left: 0.1em;
  margin-bottom: 0em;
  font-size: 1.2em;
  font-weight: bold;
}

.box_info_answer {
  position: relative;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border: 0.1px solid white;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 0.1em;
  margin-right: 0.2em;
  background: whitesmoke;
  white-space: pre-line;
}


.block_number_container {
  display: flex;
  align-items: center;
  margin-bottom:0.5em ;
}




</style>