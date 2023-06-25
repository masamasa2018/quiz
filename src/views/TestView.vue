<template>
  <div>
    <button @click="toggleLike">
      <span v-if="liked" class="liked-container">
        <img src="@/assets/like_1.png" width="20" height="20" />
        <span class="like-count">{{ likeCount }}</span>
      </span>
      <span v-else class="not-liked-container">
        <img src="@/assets/like_0.png" width="20" height="20" class="aaaa" >
        <span class="like-count">{{ likeCount }}</span>
      </span>
    </button>
    <p>{{ liked ? 'いいねされました！' : 'いいねされていません' }}</p>
    <p>いいねカウント: {{ likeCount }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const liked = ref(false);

    const likeDBcount = 16;
    const likeCount = ref(likeDBcount);

    const toggleLike = () => {
      liked.value = !liked.value;
      if (liked.value) {
        likeCount.value++;
      } else {
        likeCount.value--;
      }
    };

    return {
      liked,
      likeCount,
      toggleLike
    };
  }
};
</script>

<style>
button {
  padding: 1em;
  border:none;
  background-color: white;
}

.liked-container,
.not-liked-container {
  display: flex;
  justify-content: flex-end;
}

.like-count {
  margin-left: 0.2em;
}

.aaaa {
  /* padding-left: 0em; */
}
</style>
