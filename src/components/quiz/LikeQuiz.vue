<template>
  <span class="tooltip">
    <button class="like" @click="toggleLike">
      <span v-if="liked" class="liked-container">
        <img src="@/assets/like_1.png" width="18" height="18" />
        <span class="like-count">{{ likeCount }}</span>
      </span>
      <span v-else class="not-liked-container">
        <img src="@/assets/like_0.png" width="18" height="18" />
        <span class="like-count">{{ likeCount }}</span>
        <span class="tooltiptext">この問題が気に入ったらいいねを押してね</span>
      </span>
    </button>
    <!-- <p>{{ liked ? 'いいねされました！' : 'いいねされていません' }}</p>
    <p>いいねカウント: {{ likeCount }}</p> -->
  </span>
</template>

<script lang="ts">
import { ref } from 'vue';
import quizLike from '../../components/api/quizLike'
import { defineProps } from 'vue';
import util from '../../components/util'
import { count } from 'console';



export default {

  props: {
    category: {
      type: Number,
      default: 0,
    },
    code: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {

    const liked = ref(false);
    const likeCount = ref(0);
    const uid: string | null = util.getUid();

    const toggleLike = async () => {
      liked.value = !liked.value;
      if (liked.value) {
        likeCount.value++;

        await quizLike.insertLike(props.category, props.code, uid);
      } else {
        likeCount.value--;
        await quizLike.deleteLike(props.category, props.code,  uid);
      }
    };

    if(props.code != 0 && props.category != 0){
      //DBからカウント取得
      getLikeExist().then((flag) => {
        liked.value = flag;
    });
      //LIKEがあるかどうか？DBから
      getDbCountLike().then((likeDBcount) => {
        likeCount.value = likeDBcount;
      });
    }

    async function getLikeExist(): Promise<boolean> {
      const flag = await quizLike.getLikeByUid(props.category, props.code,  uid);
      return flag;
    }
    async function getDbCountLike(): Promise<number> {

      const likeDBcount = await quizLike.getLike(props.category, props.code);
      return Number(likeDBcount);
    }

    return {
      liked,
      likeCount,
      toggleLike
    };
  }
};
</script>

<style>
button.like {
  padding-top: 0em;
  padding-bottom: 0em;
  padding-left: 1em;
  border:none;
  background-color: white;
}

.liked-container,
.not-liked-container {
  display: flex;
  justify-content: flex-end;
  padding-top:0.3em;
  padding-left:0em;
}
.like-count {
  margin-left: 0.2em;
  font-size: 0.8em;
}

.tooltip {
  position: relative;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 150px;
  font-size: 0.05em;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

</style>
