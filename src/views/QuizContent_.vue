

<template>


    <p class="title_h_5">{{quizTitle}}</p>

  
  <ul class="images_box">
    <li><img src="@/assets/category/1/1.jpg" class="waku01"></li>
    <li><img src="@/assets/category/1/2.jpg" class="waku01"></li>
    <li v-if="isMoblie==false"><img src="@/assets/category/1/3.jpg" class="waku01"></li>
    
  </ul>

  

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

      

      <RouterLink v-bind:to="{ path: '/start/' + categoryId}">
         <button class="restart">最初からやり直す</button>
      </RouterLink>

    </div>



</template>


<script lang="ts" setup>



import { defineComponent } from "vue"
import quizData from "../model/quiz/quizData"
import accessData from "../model/access/accessData"

import {CONFIG} from "../components/config"
import util from "../components/util"
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import {ref } from 'vue';



const mobileView = ref(false)
    // windowのwidth

var isMoblie = true;
if(window.innerWidth > 500){
    isMoblie = false;
}
console.log(isMoblie)

const route = useRoute();
const router = useRouter();
const id : any = Number(route.params.id);
const categoryId : number = Number(route.params.category_id);
const nextId : Number = id + 1;


  const data = await quizData.getQuizData(categoryId,id)
  
  const answers = data["answers"];
  const question = data["question"];


const quizTitle :String = CONFIG.quizTitle

const uri = route.path
if(location.host === CONFIG.realDomain){
  accessData.insert(uri);
}
// console.log("1"+uri)
// console.log("2"+location.host)

console.log("qqq")
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



  // util.invalidateBack();
  addEventListener("popstate", () => {
    const uri = route.path;
    router.push("/answer/" + categoryId  + "/" + id + "/" + nextId);
  })



</script>