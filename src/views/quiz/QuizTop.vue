<style lang="scss">
.top_caption {
  margin-left: 0.3em;
  color: #1e1eff;/* フォント色 */
  font-size: 0.85em;/* フォントサイズ */
}

.quizListBox {
  white-space: pre-line;
  position: relative;
  border: none ;
  margin-left: 0.3em;
  margin-bottom: 1em;

}

.quizListTitle {
  font-weight: bold;
  margin-top: 0.1em;
  margin-bottom: 0.2em;
  margin-right: 0.2em;
  font-size:0.9em;
}
.quizListInfo {
  height: 80px;
  margin-top: 0.1em;
  margin-bottom: -0.5em;
  margin-right: 0.2em;
  font-size:0.8em;
}

</style>

<template>
<div class="top_caption">
  れとろクイズの世界へようこそ！<br>
  本サイトは70年から80年代のレトロで昭和なカルチャーを愛する方々へ捧げる少しマニアックなクイズサイトです。<br>
  ぜひお楽しみいただければと思います。
</div>
    <p class="common_title">クイズ一覧</p>

<div class="quizListBox">
    <RouterLink v-bind:to="{ path: '/start/1'}">
    <img src="@/assets/category/1/1.jpg"  width="100" height="100" style="float: left;  max-width: 300px; margin: 0 15px 5px 0;">
      <p class="quizListTitle">
          ティンパン・アレイ&はっぴんえんど
      </p>
</RouterLink>
<p class="quizListInfo">
      すべてのティンパンマニア、はっぴいエンドマニアに捧げるクイズです。
  </p>
</div>

<hr class="lineList">

<div class="quizListBox">
  <RouterLink v-bind:to="{ path: '/start/3'}">
  <img src="@/assets/category/3/1.jpg" width="100" height="100" style="float: left;  max-width: 300px; margin: 0 15px 5px 0;">
    <p class="quizListTitle">
        キングクリムゾン
    </p>
  </RouterLink>
    <p class="quizListInfo">
    キングクリムゾンのマニアに簡単すぎて物足りないかもしれませんお願いします。初期（1974まで）のクイズです。
    </p>
</div>

<hr class="lineList">
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'

import {CONFIG} from "../../components/config"
import { useRoute } from "vue-router";

const route = useRoute();

const category: number = Number(route.params.category);

</script>