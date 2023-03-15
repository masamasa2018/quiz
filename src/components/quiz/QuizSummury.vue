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

import type { Dictionary } from "@firebase/component/dist/src/types";
import util from "../../components/util";
import quizData from "../../model/quiz/quizData"; 
import categoryImageList from "../../components/common/categoryImageList.vue";

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

var categoryData: Dictionary = quizData.getCategoryData(props.categoryId)
var quizNum :number  =  Number(categoryData["num"]) 

console.log(quizNum);
var summury = util.getResultSummary(props.categoryId , props.id , quizNum )

//値の比較
function comparison(a: any, b: any) {
  return a == b;
}

</script>