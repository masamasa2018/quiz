<template>
<QuizSummury :categoryId="categoryId" :id="id"/>
  <div class="common_box_body">
      <div class="block_number">第{{id}}問 </div>
      <div class="box_info_answer">
        <div v-if="isCorrectFlag">
          <p class="block_correct_right"> ● 正解</p>
        </div>
        <div v-else>
          <p class="block_correct_left"> ☓ 不正解</p>
        </div>
        <p class="info_text">{{info}}</p>
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

const props = defineProps({
  categoryId: {
    type: Number,
    default: 1
  },
  id: {
    type: Number,
    default: 1,
  },
  answerId: {
    type: Number,
    default: 1,
  },
});

const nextId : number = props.id + 1;

const data  = await quizData.getQuizData(props.categoryId,props.id);
const answers = data["answers"];
const question: string = data["question"];;
const correct_code : number = data["correct_code"];

const info:String = data["info"];

const route = useRoute()
const router = useRouter();

const isCorrectFlag = isCorrect(props.answerId , correct_code);

addEventListener("popstate", () => {
    const uri = route.path;
    router.push("/answer/"+ props.id + "/" + nextId);
  })

//クイズの結果を書き込み
quizResultLS.saveQuizResult(props.categoryId , props.id ,isCorrectFlag)

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

</style>