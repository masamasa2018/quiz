<template>
    <!-- <h2>初めてのコンポーネントaaa</h2> -->

    <p class="title_h_5">{{quizTitle}}</p>

    <categoryImageList :isMoblie = isMoblie />
    
    <div class="box">
      <p class="block_question">さあ、クイズに挑戦しよう。何問答えられるかな？</p>
      <!-- <button @click="goHome">GO GO</button> -->
    
    <RouterLink :to="`/quiz/`+ categoryId + `/1`"><button class="quizStart">やってみる</button></RouterLink>



    </div>

</template>

<script lang="ts" setup>

import { defineComponent } from 'vue'

import {CONFIG} from "../components/config"
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import categoryImageList from "../components/common/categoryImageList.vue";

const route = useRoute();
const router = useRouter();

var isMoblie = true;
if(window.innerWidth > 500){
    isMoblie = false;
}

const quizTitle :String = CONFIG.quizTitle;


const categoryId: Number = Number(route.params.category_id);

</script>