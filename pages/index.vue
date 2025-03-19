<!-- index.vue -->
<template>
  <div class="container mt-5">
    <PostForm v-if="me" />
    <div class="row">
      <div class="col-12 mb-4" v-for="p in mainPosts" :key="p.id">
        <PostCard
          :post="p"
          :activeCommentPostId="activeCommentPostId"
          @toggle-comment="toggleComment"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

import PostCard from '@/components/PostCard.vue';
import PostForm from '@/components/PostForm.vue';
import { usePostsStore } from '~/store/posts';
import { useUsersStore } from '~/store/users';

const userStore = useUsersStore();
const { me } = storeToRefs(userStore);
const postStore = usePostsStore();
const { mainPosts } = storeToRefs(postStore);

const activeCommentPostId = ref(null);

const toggleComment = (postId) => {
  activeCommentPostId.value = activeCommentPostId.value === postId ? null : postId;
};
</script>

<style></style>

<!-- 2025/03/15:
 - 중복을 최소화 해라. 
 - 폴더명은 항상 정해져 있는 형태를 따르자 pages, layouts 등등 그러한 이유는 nuxt는 폴더명을 보고 판단하기 때문.-->
