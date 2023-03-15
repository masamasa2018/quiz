<template>

  <!-- <h2>初めてのコンポーネントaaa</h2> -->
  <p class="title_h_5">{{quizTitle}}</p>

      <div class="box_body">
        <div class="box_result">

            <h2>
            全10問中 10問正解<br />おめでとうございます。<br />全問正解です！<br />
            </h2>
            
            はっぴいえんどやティン・パン・アレイが大好きなマニアなあなたぜひ他の問題もチェレンジしてくださいね<br />

        </div>
    </div>

    <RouterLink v-bind:to="{ path: '/start/'+ categoryId}">
     <button class="restart">もう一度チャレンジする
     </button>
    </RouterLink>

</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import quizData from '../model/quiz/quizData';
import {CONFIG} from "../components/config";
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter();

const categoryId : number = Number(route.params.category_id);

const quizTitle:String = CONFIG.quizTitle;

</script>