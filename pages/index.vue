<template>
  <v-container>
    <div>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  </v-container>
</template>

<script setup>
import PostCard from '../components/PostCard.vue';

useHead({
  title: '메인 페이지',
});
</script>

<style></style>

<!-- 2025/03/15:
 - 중복을 최소화 해라. 
 - 폴더명은 항상 정해져 있는 형태를 따르자 pages, layouts 등등 그러한 이유는 nuxt는 폴더명을 보고 판단하기 때문.-->
