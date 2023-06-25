<template>
    <RouterLink v-bind:to="{ path: '/quiz/'+ category + '/' + nextCode }">
      <button class="next">次へ</button>
    </RouterLink>
</template>

<script lang="ts" setup>

const props = defineProps({
  category: {
    type: Number,
    default: 1,
  },
  nextCode: {
    type: Number ,
    default: 0,
  },
});
</script>

<style lang="scss">
button.next {
  box-shadow:none;
  margin-left:auto;
  font-size: 1em;
  text-align: center;
  justify-content: flex-end;
  background-color:mediumseagreen;
  color: white;
  width: 30%;
  height: 3em;
  display:block;
  margin-top: 0.1em;
  margin-bottom: 0em;
  white-space: nowrap;
  border-radius:20px;
  font-weight: bold;
  border: 1px solid #ccc;
}
</style>