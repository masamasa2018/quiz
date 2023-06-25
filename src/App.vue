
<script lang="ts">
import { CONFIG } from './components/config';
import accessData from "./model/access/accessData";


import { ref } from 'vue';
export default {
  setup() {
    const open = ref(false);
    return { open };
  }
};
accessData.insert();
</script>

<template>
  <header>

<RouterLink v-bind:to="{ path: '/top'}">
      <img class="logo" src="@/assets/logo.png" alt="Logo" width="200" height="45">
</RouterLink>
  <button type="button" class="menu-btn" v-on:click="open=!open">
      <span class="line line_01"></span>
      <span class="line line_02"></span>
      <span class="line line_03"></span>
  </button>
<div class="menu" v-bind:class="{'is-active' : open }">

 <RouterLink v-bind:to="{ path: '/concept'}">
  <div class="menu_item" v-on:click="open=!open" >
    サイトコンセプト
  </div>   
</RouterLink>
  
 <RouterLink v-bind:to="{ path: '/inquiry' }">
    <div class="menu_item"  v-on:click="open=!open" >お問合せ</div>
 </RouterLink>
</div>


  </header>

  <RouterView />
</template>
<style lang="scss">


.menu-btn{
border: 0px solid #333;
  position: absolute;
  top: 10px;
  right: 6px;
  z-index: 3;
  width: 40px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: dimgray;
  color: #fff; 
}
.menu-btn .line {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 5px;
  height: 1px;
  background: white;
  padding-left: 15px;
  padding-right: 10px;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.5s ease-out;
}

.menu-btn .line_01 { top: 7px;  left:5px}
.menu-btn .line_02 { top: 12px; left:5px}
.menu-btn .line_03 { top: 17px; left:5px }

/*----------------------------
* メニュー本体
*----------------------------*/
.menu{
  position: fixed;
  top: 30;
  right: 0;
  z-index: 1;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
}

.menu_item{
  width: 100%;
  height: auto;
  padding: 0.4em;
  text-align: center;
  color: black;
  font-size: 1.4em;
  box-sizing: border-box;
}
/*----------------------------
* アニメーション部分
*----------------------------*/

/* アニメーション前のメニューの状態 */
.menu{
  transform: translateX(100vw);
  transition: all .3s linear;
}
/* アニメーション後のメニューの状態 */
.menu.is-active{
  transform: translateX(0);
}


.router-link-active {
  font-weight: bold;
}

a {
  text-decoration:none
}

ul{
  padding-left:0;
}

li{
  list-style:none;
}

.logo {
  margin-top: 0em;
  margin-bottom: 0.5em;
  margin-left: 0.1em;
  
}

.common_box_body {
  position: relative;
  margin: 0.1em;
}

.box_answer {
  position: relative;

  padding: 0.1em;
  margin-top: 1em;
  background: whitesmoke;

}


  .box_info_contents {
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


.common_title{
  font-size: 1em;/* フォントサイズ */
  padding-top: .2em;
  padding-bottom: .2em;
  padding-left: .2em;
  margin-top: 0em;
  margin-left: 0.1em;
  margin-right: 0.1em;
  margin-bottom: 0.5em;
  background-color: #ffaf2d;/* 背景色 */
  
  color: #ffffff;/* フォント色 */
}

.common_title2{
  font-size: 1em;/* フォントサイズ */

  padding-top: .2em;
  padding-bottom: .2em;
  padding-left: .2em;
  margin-top: 0em;
  margin-left: 0.1em;
  margin-right: 0.1em;
  margin-bottom: 0.5em;
  background-color: #66ccff;/* 背景色 */
  
  color: #ffffff;/* フォント色 */
}


.quiz_number {
  font-weight: bold;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  margin-left: 0em;
  font-size: 1.2em;
  color: #0000BB;
}
.quiz_question {
  
  font-size: 0.9em;
  overflow-wrap: break-word;
  margin-top: 0;
  margin-bottom: 0.5em;
  margin-left: 0.4em;
  margin-right: 1em;
  white-space: pre-line;
}



.info_text {
  margin-top: 0em;
  margin-left: 0.2em;
  margin-right: 0.2em;
  margin-bottom: 0em;
  font-size: 1em;
}



.block_start {
  overflow-wrap: break-word;
  margin-top: 0;
  margin-bottom: 0.5em;
  margin-left: 0.4em;
  margin-right: 1em;
  white-space: pre-line;
}



button.result {
  border: none;
  margin-left:auto;
  font-size: 1em;
  text-align: center;
  justify-content: flex-end;
  background-color:#C69CC5;
  color: white;
  width: 30%;
  height: 3em;
  display:block;
  margin-top: 0.5em;
  white-space: nowrap;
  border-radius:20px;
  font-weight: bold;
  border: 1px solid #ccc;
}


button.restart {
  display: block;
  text-align: center;
  text-decoration: none;
  width: 200px;
  margin: auto;
  margin-top: 1.5em;
  font-weight: bold;
  border: 2px solid #27acd9;
  color: #27acd9;
  transition: 0.5s;
  height: 2.7em;

  &:hover {
  color: #fff;
  background: #27acd9;}
}


button.quizStart {
  display: block;
  text-align: center;
  text-decoration: none;
  width: 300px;
  margin: auto;
  margin-top: 3em;
  font-weight: bold;
  border: 2px solid #27acd9;
  color: #27acd9;
  transition: 0.5s;
  height: 3em;

  &:hover {
    color: #fff;
    background: #27acd9;
  }
}

.box_result{
  white-space: pre-line;
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

.result_body{
  text-align: center;
  margin-top : 0.1em ;
}


hr.lineList {
	border-top: 1px solid #8c8b8b;
}


.quizListBody {
  margin-left: 1.5em; 
  margin-right: 1.5em; 
  height: 7rem;
}

.zzzz {
 margin-left: 1.5em;
 margin-right: 2em;
 
}


.yyyy {
  margin-right: 1em;
  margin-left: 1em;
    height:auto;
    border: 1.5px solid #27acd9;


}

img.quizListImage {
    width: 150px;
    height:150px;
}

.img_area {
   margin-top: 0  em;
    width:20%;
    float:right;
    padding-left:0.7em;
    padding-right:3em;
    width: 100px;
    height:100px;
}
.caption {
  margin-right: 3em;
    display:block;
    text-align:right;
    font-size:0.7em;
    white-space: nowrap
}
.quizListInfo {
    width:auto;
    margin-top: 0.1em;
    margin-left: 0;
}

figure {
	float: left;
	margin: 0 30px 30px 0px;
	width: 14%;
  border: 1px solid ;
}

figure img {
	max-width: 100%;
  width: 200px;
      height: 200px; 
}

.quizList {
  border: 1px solid ;
}

.quizListImage{
  float: left;
	margin: 0 60px 60px 0;
	width: 30%;
}

.quizListText{
  margin-bottom: 15px;
	line-height: 1.6em;
}

 .waku02{
  width: 100%;
  text-align: right ;
  background:#fff;
 }


</style>