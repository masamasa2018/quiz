<template>
    <div class="common_box_body">
        <div class="quiz_number">第{{id}}問</div>
        <div class="quiz_question">{{question}}</div>
        <div class="box_answer">
          <ul >
            <li>
              <div v-for="(answer, index) in answers" :key="answer">
                
                  <RouterLink v-bind:to="{ path: '/answer/' + categoryId + '/' + id + '/' + index   }">
                    
                    <button class="answer" >
                      <div style="word-wrap: break-word;">
                      {{index}} . {{answer}}
                      </div>
                    </button>
                  
                  </RouterLink>
              </div>
            </li>
          </ul>
      </div>

    </div>
</template>


<script lang="ts" setup>

import { defineComponent } from "vue"
import quizData from "../../model/quiz/quizData"
import accessData from "../../model/access/accessData"
import util from "../../components/util"
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const route = useRoute();

const id : any = Number(route.params.id);
const categoryId : number = Number(route.params.category_id);

const data = await quizData.getQuizData(categoryId as number,id as number);
const answers = data["answers"];
const question = data["question"];


const result: any = [
    {
      category_id :1,
      1: true,
      2: false,
      3: true,
    }
  ]    

  const summury = 
    {
      1: "correct",
      2: "incorrect",
      3: "correct",
      4: "now",
      5: "none",
      6: "none",
      7: "none",
    }
  //値の比較
  function comparison (a: any,b: any){
    return a == b
    
  }

</script>

<style lang="scss">
.box_answer {
  position: relative;
  padding: 0.1em;
  margin-top: 0.2em;
  background: lightgray;
}

button.answer {
  overflow-wrap: break-word;
  font-size:0.9em;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 0.5em;
  width: 97%;
  height: 3.5em;
  display:block;
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-bottom: 0.2em;
  margin-top: 0.2em;
  white-space: nowrap;
  color:black;
  background-color:white;
  border-radius: 7px;
  border-width:thin;

  &:hover {
    font-weight: bold;
  }
}

</style>