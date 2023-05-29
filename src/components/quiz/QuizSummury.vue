<template>
   <div class="box_info_summury">
      <ul class="result_box">
        <li v-for="(item, index) in summury" :key="item"
        
        v-bind:class="{'pattern_correct': comparison(item,'correct'),'pattern_incorrect': comparison(item,'incorrect'), 'pattern_none': comparison(item,'none'),'pattern_now': comparison(item,'now') }" 
        > 
          <div v-if="index > 0">{{index}}</div>
        </li>
      </ul>
   </div>
</template>

<script lang="ts" setup>

import util from "../../components/util";
import quizData from "../../model/quiz/quizData"; 

const props = defineProps({
  categoryId: {
    type: Number,
    default: 1
  },
  id: {
    type: Number,
    default: 1
  },
  
});

var categoryData = quizData.getCategoryData(props.categoryId);
var quizNum :number  =  Number(categoryData["num"]);

var summury = util.getQuizResultSummary(props.categoryId , props.id , quizNum );

//値の比較
function comparison(a: any, b: any) {
  return a == b;
}
</script>

<style lang="scss">

.box_info_summury {
      position: relative;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;

      border: none ;
      background-color: whitesmoke;/* 背景色 */  
      padding: 0.1em;
      
      margin-bottom: 1em;
}

.pattern_now {
  border: 1.5px solid #27acd9;
	width: 15%;
  /* margin-top: 0.2em; */
  margin-bottom: 0.1em;
  margin-right: 0.1em;
  margin-left: 0.1em;
  border-radius: 50%;
  background: white;
  color:black;
  
}

.pattern_correct {
  border: 1.5px solid #27acd9;
  background: #27acd9;
  color: white;
	width: 15%;
  /* margin-top: 0.2em; */
  margin-bottom: 0.1em;
  margin-right: 0.1em;
  margin-left: 0.1em;
  border-radius: 50%;
}

.pattern_incorrect {
  border: 1.5px solid orangered;
  background: orangered;
  color: white;
	width: 15%;
  /* margin-top: 0.2em; */
  margin-bottom: 0.1em;
  margin-right: 0.1em;
  margin-left: 0.1em;
  border-radius: 50%;
}

.result_box {
  margin-left: 0.2em;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  // margin: auto;
  // border: 1.5px solid #27acd9;
  width: 300px;
  /* height: 3em; */
  text-align:center;
  color: black;
  /* background: #27acd9; */
	display: flex; /* flexbox */
	
  /* margin-top: 0.2em; */
}

 .pattern_none {
  border: 0.1px solid #27acd9;
	width: 15%;
  /* margin-top: 0.2em; */
  margin-bottom: 0.1em;
  margin-right: 0.1em;
  margin-left: 0.1em;
  border-radius: 50%;
  background: white;
  color:darkgray;
}

</style>