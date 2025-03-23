<!-- pages/hashtag/[id].vue 
 해시테그를 이용한 검색 시 나오는 창-->
<template>
  <div class="container mt-5" v-if="post">
    <PostCard :post="post" />
  </div>
  <div v-else>
    <p>해당 게시글을 찾을 수 없습니다.</p>
    <NuxtLink to="/">메인으로 돌아가기</NuxtLink>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import PostCard from '~/components/PostCard.vue';
import { usePostsStore } from '~/store/posts';

const route = useRoute();
const postStore = usePostsStore();

const post = computed(() => {
  const postId = parseInt(route.params.id, 10);
  return postStore.mainPosts.find((v) => v.id === postId);
});
</script>
<style></style>
