<template>

    <div class="box_body">
        <div class="block_number">第{{id}}問</div>
        <div class="block_question">{{question}}</div>

        <div class="box_answer">
          <ul >
            <li>
              <div v-for="(answer, index) in answers" :key="answer">
                
                  <RouterLink v-bind:to="{ path: '/answer/' + categoryId + '/' + id + '/' + index   }">
                    <button class="answer" >{{index}} . {{answer}}</button>
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

// import {CONFIG} from "../../components/config"


const route = useRoute();

const id : any = Number(route.params.id);
const categoryId : number = Number(route.params.category_id);

const data = await quizData.getQuizData(categoryId as  number ,id as  number)  
const answers = data["answers"];
const question = data["question"];

const getUuid = util.getUuidLS();
// console.log(getUuid)
if (!getUuid) {
  const uuid = util.getUniqueStr()
  localStorage.setItem('uuid', uuid)
}


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