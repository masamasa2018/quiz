<template>



<button type="button" class="menu-btn" v-on:click="open=!open">
      <!-- <i class="fa fa-bars" aria-hidden="true"></i> -->
 
    <span class="line line_01"></span>
    <span class="line line_02"></span>
    <span class="line line_03"></span>
    </button>
<div class="menu" v-bind:class="{'is-active' : open }">
      <div class="menu__item">TOP</div>
      <div class="menu__item">ABOUT</div>
      <div class="menu__item">BLOG</div>
      <div class="menu__item">CONTACT</div>
</div>


</template>
  
<script lang="ts">

import { ref } from 'vue';
export default {
//   el: '#app',
  setup() {
    const open = ref(false);
    return { open };
  }
};


</script>
  

<style lang="scss">

.menu-btn{
//   border: red;
border: 0px solid #333;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 3;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: orange;
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
  padding-left: 10px;
  padding-right: 10px;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.5s ease-out;
}
.menu-btn .line_01 { top: 7px; left:5px }
.menu-btn .line_02 { top: 12px; left:5px}
.menu-btn .line_03 { top: 17px; ; left:5px }

/*----------------------------
* メニュー本体
*----------------------------*/
.menu{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #555;
}

.menu__item{
  width: 100%;
  height: auto;
  padding: .5em 1em;
  text-align: center;
  color: #fff;
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




</style>

