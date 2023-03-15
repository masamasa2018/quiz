<template>
    <!-- <h2>初めてのコンポーネントaaa</h2> -->
<div class="top_caption">
  れとろクイズの世界へようこそ！<br>
  本サイトは70年から80年代のレトロで昭和なカルチャーを愛する方々へ捧げる少しマニアックなクイズサイトです。<br>
  ぜひお楽しみいただければと思います。
</div>
    <p class="title_h_5">クイズ一覧</p>


    
    <!-- <div class="quizList">
      <p class="quizListText">        
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </p>
        <p class="waku02">
    <img src="@/assets/category/1.jpg" class="quizListImage">
    </p> -->
    <!-- <h2>画像に対してテキストを回り込ませる</h2>
<p>コンテンツの途中に画像を挿入して表示する方法。</p> -->

<!-- <div class="quizList"> -->
    <!-- <figure><img src="@/assets/category/1.jpg" alt="NEWS"></figure>
    <p class="aaaa">画像に対してfloatプロパティを使い、続くテキストが画像を回り込むような形で表示することができます。できます。できます。できます。できます。できます。できます。できます。できます。できます。できます。できます。できます。できます。できます。できます。できます。できます。できます。できます。
    </p>
    <p>画像を配置する位置は左、右のいずれかを指定します。</p> -->
<!-- </div> -->

<!-- <div class="box">
  <div class="box-img">
    <img src="@/assets/category/1.jpg" alt="">
  </div>
    <div class="box-text">
    テキスト<br>
    テキスト<br>
    テキスト
  </div>
</div> -->
<RouterLink v-bind:to="{ path: '/start/1'}">
  <div class="quizListBox">
  <img src="@/assets/category/1/1.jpg" alt="拡張子前文字列" width="100" height="100" style="float: left;  max-width: 300px; margin: 0 15px 5px 0;">
      <p class="quizListTitle">
          ティンパン・アレイ&はっぴんえんど
      </p>
      <p class="quizListInfo">
      すべてのティンパンマニア、はっぴいエンドマニアに捧げるクイズです。
      </p>
  </div>
</RouterLink>
<hr class="lineList">


  <div class="quizListBox">
    <RouterLink v-bind:to="{ path: '/start/2'}">
    <img src="@/assets/category/2/1.jpg" alt="拡張子前文字列" width="100" height="100" style="float: left;  max-width: 300px; margin: 0 15px 5px 0;">
      <p class="quizListTitle">
        太陽にほえろ!
      </p>
    </RouterLink>
      <p class="quizListInfo">
      昭和の刑事ドラマの金字塔、太陽にほえろ（今では絶対放送できない）のクイズです。
      </p>
  </div>



<hr class="lineList">

<div class="quizListBox">
  <RouterLink v-bind:to="{ path: '/start/2'}">
  <img src="@/assets/category/3/1.jpg" alt="拡張子前文字列" width="100" height="100" style="float: left;  max-width: 300px; margin: 0 15px 5px 0;">
    <p class="quizListTitle">
        キングクリムゾン
    </p>
  </RouterLink>
    <p class="quizListInfo">
    キングクリムゾンのマニアに簡単すぎて物足りないかもしれませんが、初期（1974まで）のクイズです。
    </p>
  
</div>

<hr class="lineList">



</template>

<script lang="ts" setup>

import { defineComponent } from 'vue'

import {CONFIG} from "../components/config"
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const quizTitle :String = CONFIG.quizTitle;


const categoryId: Number = Number(route.params.category_id);

</script>