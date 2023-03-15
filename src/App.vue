
<script>
import { CONFIG } from './components/config'

import { ref } from 'vue';
export default {
//   el: '#app',
  setup() {
    const open = ref(false);
    return { open };
  }
};

</script>

<template>
  <header>
    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
<RouterLink v-bind:to="{ path: '/top'}">
    <img class="logo" src="@/assets/logo.png" alt="Logo" width="200" height="45">
</RouterLink>
    <button type="button" class="menu-btn" v-on:click="open=!open">
      <!-- <i class="fa fa-bars" aria-hidden="true"></i> -->
 
      <span class="line line_01"></span>
      <span class="line line_02"></span>
      <span class="line line_03"></span>
    </button>
<div class="menu" v-bind:class="{'is-active' : open }">


 <RouterLink v-bind:to="{ path: '/concept'}">
  <div class="menu__item" v-on:click="open=!open" >サイトコンセプト</div>   
</RouterLink>
  
 <RouterLink v-bind:to="{ path: '/inquiry' }">
    <div class="menu__item"  v-on:click="open=!open" >お問合せ</div>
 </RouterLink>

</div>


  </header>


  <!-- <h1>Hello World</h1> -->
  <RouterView />
</template>
<style lang="scss">




.menu-btn{
//   border: red;
border: 0px solid #333;
  // position: fixed;
  position: absolute;
  top: 10px;
  right: 6px;
  // left: 20px;
  z-index: 3;
  width: 40px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e4b867;
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
  // justify-content: center;
  background: white;
}

.menu__item{
  
  width: 100%;
  height: auto;
  padding: .1em 1em;
  text-align: center;
  color: black;
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
  margin-left: 1em;
  
}



.top_caption {
  margin-left: 0.7em;
  color: #1e1eff;/* フォント色 */
  // font-weight: bold;/* フォント太さ */
  font-size: 1em;/* フォントサイズ */
}


.box_body {
  position: relative;
  // padding: 0.1em;
  margin: 0.1em;
}

.box_answer {
  position: relative;
      // border-top-left-radius: 2px;
      // border-top-right-radius: 2px;
      // border-bottom-left-radius: 2px;
      // border-bottom-right-radius: 2px;

      // border: 1px solid ;
      
      padding: 0.1em;
      margin-top: 1em;
      // margin-bottom: 1em;
      // margin: 2em;
      background: whitesmoke;

}

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




.title_h_5{
  font-size: 1.5em;/* フォントサイズ */
  font-weight: bold;/* フォント太さ */
  padding-top: .2em;
  padding-bottom: .2em;
  padding-left: .2em;
  margin-top: 0em;
  margin-left: 0.2em;
  margin-right: 0.2em;
  margin-bottom: 0.5em;
  background-color: #e4b867;/* 背景色 */
  color: #ffffff;/* フォント色 */
}

/* button.btn_01 {
  display: block;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  width: 400px;
  margin: auto;
  padding: 1rem 4rem;
  font-weight: bold;
  border: 2px solid #27acd9;
  color: #27acd9;
  transition: 0.5s;
}
button.btn_01:hover {
  color: #fff;
  background: #27acd9;
} */

.block_number {
  font-weight: bold;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  margin-left: 0em;
  font-size: 1.2em;
}

.correct_text {
  color: #007bff;
  margin-top: 1em;
  margin-left: 0.1em;
  margin-bottom: 0em;
  font-size: 1.2em;
  font-weight: bold;
}

.info_text {
  margin-top: 0em;
  margin-left: 0.2em;
  margin-right: 0.2em;
  margin-bottom: 0em;
  font-size: 1em;
}

.block_correct_right {
  color: #007bff;
  margin-top: 0em;
  margin-left: 0.5em;
  font-weight: bold;
}


.block_correct_left {
  color: red;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
  margin-left: 0.7em;
  font-weight: bold;
}

.block_question {
  font-size: 1em;
  overflow-wrap: break-word;
  margin-top: 0;
  margin-bottom: 0.5em;
  margin-left: 0.4em;
  margin-right: 1em;
  white-space: pre-line;
}



button.next {
  margin-left:auto;
  font-size: 1em;
  text-align: center;
  justify-content: flex-end;
  background-color:mediumseagreen;
  color: white;
  width: 30%;
  height: 3em;
  display:block;
  margin-top: 0.5em;
  // margin-bottom: 7em;
  white-space: nowrap;
  border-radius:30px;
  font-weight: bold;
}

button.restart {
  display: block;
  text-align: center;
  text-decoration: none;
  width: 200px;
  margin: auto;
  margin-top: 1.5em;
  // padding: 1rem 2rem;
  font-weight: bold;
  border: 2px solid #27acd9;
  color: #27acd9;
  transition: 0.5s;
  height: 2.7em;

  &:hover {
  color: #fff;
  background: #27acd9;}
}


button.answer {
  font-size:1em;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 0.5em;
  width: 97%;
  height: 2.5em;
  display:block;
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-bottom: 0.2em;
  margin-top: 0.2em;
  white-space: nowrap;
  color:black;
  background-color:white;
  border-radius: 7px;
  border-width:thin;

  &:hover {

    font-weight: bold;
    
    
  }
}


button.answer_button_disabled {
  text-align: left;
  font-size:1em;
  color: black;
  padding-left: 0.5em;
  padding-right: 1em;
  width: 100%;
  height: 2.5em;
  display:block;
  margin-bottom: 0.1em;
  white-space: nowrap;
  /* border-radius:0.2px; */
}

 /* answer画面の回答テキスト正解  */
button.answer_button_correct_disable {
  font-size:1em;
  background-color:dodgerblue;
  color: white;
  text-align: left;
  padding-left: 0.5em;
  padding-right: 1em;
  width: 100%;
  height: 2.5em;
  display:block;
  margin-bottom: 0.2em;
  white-space: nowrap;
  /* border-radius: 0.2px; */
}
button.quizStart {
  display: block;
  text-align: center;
  text-decoration: none;
  width: 300px;
  margin: auto;
  margin-top: 3em;
  // padding: 1rem 2rem;
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

.bbb{
  
  position: relative;
  text-align: center;
}



.images_box{
  text-align: center;
  margin-left: 1.2em;
  margin-right: 2em;
  // border: 1.5px solid #27acd9;
  
  /* height: 3em; */
  
  
  color: black;
  /* background: #27acd9; */
	display: flex; /* flexbox */

}

.waku01{
      margin: 0.2em;
      // padding:7px;
      text-align: center;
      border:1px solid #ccc;
      background:#fff;
      width: 150px;
      height:150px; 
    }


hr.lineList {
	border-top: 1px solid #8c8b8b;
}



.quizListBody {
  margin-left: 1.5em; 
  margin-right: 1.5em; 
  height: 7rem;
  
  // border: 5px solid red;
}

.zzzz {
 margin-left: 1.5em;
 margin-right: 2em;
 
}

.quizListBox {
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

.quizListTitle {
  font-weight: bold;
  margin-top: 0.1em;
  margin-bottom: 0.2em;
  margin-left: 0.1em;
  margin-right: 0.2em;
  
 
}
.quizListInfo {
  height: 80px;
  // font-weight: bold;
  margin-top: 0.1em;
margin-bottom: -0.5em;
 margin-left: 0.1em;
 margin-right: 0.2em;
 font-size:0.7em;
 
}


.yyyy {
  margin-right: 1em;
  margin-left: 1em;
    // width:100%;
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
    


 .aaaa {
	margin-bottom: 15px;
	line-height: 1.6em;
  font-size: 0.6rem;
  margin-right: 1em;
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
  // position: relative;
  
  // padding: 0.1em;
  // margin: 1em;
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
  // margin: 1em;
text-align: right ;
  // width: 30%;
      // padding:7px;
      // text-align: center;
      // border:1px solid #ccc;
      background:#fff;
 
    }





.result_box {
  margin-left: 3.5em;
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
  border: 1.5px solid red;
  background: #fa514b;
  color: white;
	width: 15%;
  /* margin-top: 0.2em; */
  margin-bottom: 0.1em;
  margin-right: 0.1em;
  margin-left: 0.1em;
  border-radius: 50%;
}

.box_info_answer {
  position: relative;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border: 0.1px solid white;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  margin-top: 1em;
  margin-bottom: 2em;
  margin-left: 0.1em;
  margin-right: 0.2em;
  background: whitesmoke;
  white-space: pre-line;
}

</style>