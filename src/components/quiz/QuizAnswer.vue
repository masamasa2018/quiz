<template>


  <!-- <div class="box_info_contents">
      <ul class="result_box">
        <li v-for="(item, index) in summury" :key="item"
        
        v-bind:class="{'pattern_correct': comparison(item,'correct'),'pattern_incorrect': comparison(item,'incorrect'), 'pattern_none': comparison(item,'none'),'pattern_now': comparison(item,'now') }" 
        > 
          <div v-if="index > 0">{{index}}</div>
        </li>
      </ul>
    </div> -->

  <div class="box_body">
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


const props = defineProps({
  categoryId: {
    type: Number,
    default: 1
  },
  id: {
    type: Number,
    default: 1
  },
  answerId: {
    type: Number,
    default: 1
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

// util.invalidateBack();
addEventListener("popstate", () => {
    const uri = route.path;
    router.push("/answer/"+ props.id + "/" + nextId);
  })

//const saveKey : string = props.categoryId + "-" + props.id;
const saveKey: number = props.id;
const saveValue : boolean = isCorrectFlag;
// console.log("0000");
// console.log(saveKey);
// console.log(saveValue);

quizResultLS.saveQuizResult(props.categoryId , saveKey,saveValue)

// var summury = getResultSummary();
// var summury = util.getResultSummary(props.categoryId,props.id)
  
//2次元配列の生成時に値をセットする_その1
// let corrctResult = {}
// corrctResult["1-1"] = aaa



// var aaa: string[] = [];
// aaa["2-1"] = true
// aaa["2-2"] = true// Your code here!

// const corrctResult: { [key: string]: boolean } = {};

// corrctResult["1-1"] = true;
// corrctResult["1-2"] = true;
// corrctResult["1-3"] = false;

// util.saveDictionaryBooleanLS("1-1",true);

// const aaaa = util.getDictionaryLS("1-1");

// // console.log("nnnn="+ aaaa);

// util.saveDictionaryBooleanLS("1-2",false);

// const bbbb = util.getDictionaryLS("1-2");
// console.log("nnnn2="+ bbbb);

// util.saveQuizResult("1-1",true)


// const ii:number = 1
// console.log("sssss")
// console.log(corrctResultArray["1-3"])


// let array0 = [1, 1, true];
// let array1 = [1, 2, false];
// let array2 = [1, 3, true];
// let array3 = [1, 4, false];

// corrctResult.push(array0);
// corrctResult.push(array1);
// corrctResult.push(array2);
// corrctResult.push(array3);




// let corrctResultLS  = localStorage.getItem("corrctResult");
// if (corrctResultLS){
//   var arrTmp = JSON.parse(corrctResultLS)
//   var corrctResultByCategory = arrTmp.filter( function( value: number[] ) {
//    //console.log(value[0])
//       return  value[0] == props.categoryId 
//     })
// }





// summury[1] = "correct";
// summury[2] = "incorrect";
// summury[3] = "correct";
// summury[4] = "now";
// summury[5] = "now";
// summury.push({ 1: "correct" });

// const summury = 
//     {
//       1: "correct",
//       2: "incorrect",
//       3: "correct",
//       4: "now",
//       5: "none",
//       6: "none",
//       7: "none",
//     }
// summury.splice(0)

// for (const elem of summury) {
//   console.log(elem);
// }


//値の比較
// function comparison(a: any, b: any) {
//     return a == b
    
// }

//正解かどうかフラグ
function isCorrect(answerCode: number, correctCode: number){
  let flag: boolean = false;
  if (answerCode == correctCode) {
    flag = true;
  }
  return flag;
}

// function getResultSummary(){

//   const corrctResult = quizResultLS.getQuizResult();
//   const allCount:number = 7;
//   var summury: string[] = [];
//   for (var i: number = 1; i <= allCount; i++) {
//     summury[i] = "none";

//     if(i == props.id ){
//       summury[i] = "now";
//     }
//     if(corrctResult[props.categoryId + "-"+ i] != undefined){

//       if(corrctResult[props.categoryId + "-" + i] == true){
//         summury[i] = "correct";
//       } else {
//         summury[i] = "incorrect";
//       }
//     }
//   }
//   return summury;

// }


</script>