<template>
    <ul class="images_box">
        <li><img :src="'/img/category/' +  props.categoryId + '/1.jpg'" class="image_frame"></li>
        <li><img :src="'/img/category/' +  props.categoryId + '/2.jpg'" class="image_frame"></li>
        <li v-if="props.isMoblie==false && props.categoryId ==1 ">
            <img :src="'/img/category/' +  props.categoryId + '/3.jpg'" class="image_frame">
        </li>
    </ul>
</template>

<script lang="ts" setup>

const props = defineProps({
  categoryId: {
    type: Number,
    default: 1,
  },
  isMoblie: {
    type: Boolean ,
    default: false ,
  },
});
</script>

<style lang="scss">
.images_box{
  text-align: center;
  margin-right: 2em;
  color: black;
	display: flex; /* flexbox */
}
.image_frame{
      margin: 0.2em;
      text-align: center;
      border:1px solid #ccc;
      background:#fff;
      width: 150px;
      height:150px; 
}
</style>