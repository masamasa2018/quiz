<template>
    <!-- <h2>初めてのコンポーネントaaa</h2> -->

    <p class="common_title">{{categoryData.name}}</p>

    <categoryImageList :isMoblie = isMoblie :categoryId = categoryId />
    
    <div class="box">
      <p class="block_start">{{categoryData.start_info}}</p>
      <p>お楽しみいただければと思います。</p>
    
      <RouterLink :to="`/quiz/`+ categoryId + `/1`">
        <button class="quizStart">やってみる</button>
      </RouterLink>

    </div>

</template>

<script lang="ts" setup>

import { defineComponent } from 'vue'

import {CONFIG} from "../../components/config"
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import categoryImageList from "../../components/common/categoryImageList.vue";
import quizData from '../../model/quiz/quizData';

const route = useRoute();
const router = useRouter();

const categoryId:number = Number(route.params.category_id);

var isMoblie = true;
if(window.innerWidth > 500){
    isMoblie = false;
}

const categoryData = quizData.getCategoryData(categoryId);

// const quizTitle :String = CONFIG.quizTitle;


</script>