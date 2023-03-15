<template>
    
    <ul class="images_box">
        <li><img src="@/assets/category/1/1.jpg" class="waku01"></li>
        <li><img src="@/assets/category/1/2.jpg" class="waku01"></li>
        <li v-if="isMoblie==false"><img src="@/assets/category/1/3.jpg" class="waku01"></li>
    </ul>

</template>

<script lang="ts" setup>
defineProps(['isMoblie']);
</script>