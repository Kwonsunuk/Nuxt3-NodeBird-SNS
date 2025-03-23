<!-- pages/user/[id].vue 
 사용자 이름 눌렀을 때 그 사용자의 게시글들이 나오는 창-->
<template>
  <div class="container mt-5">
    <PostForm v-if="me" />
    <div class="row">
      <!--
            v-for 루프는 작은 규모에서는 괜찮지만,
            데이터 양이 많아질 경우 성능 저하나 느린 렌더링 문제가 발생할 수 있다.
            이런 상황에서는 인피니트 스크롤 또는 가상 스크롤을 사용하는 것이 좋다.
    
            인피니트 스크롤이란 사용자가 목록의 끝부분(예: 80% 지점)에 도달하기 전에
            미리 다음 데이터를 백그라운드에서 로드해 보여주는 방식이다.
            반면 페이지네이션은 UX 관점에서 흐름이 끊기므로 권장하지 않는다.
            그리고 처음에 페이지를 접속하면 게시글이 몇개 있어야하는데 그걸 fetch를 사용하여
            출력한다.
          -->
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
import { useInfiniteScroll } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import PostCard from '@/components/PostCard.vue';
import PostForm from '@/components/PostForm.vue';
import { usePostsStore } from '~/store/posts';
import { useUsersStore } from '~/store/users';

onMounted(() => {
  useInfiniteScroll(
    window, // window 기준 스크롤 감지
    () => {
      if (postStore.hasMorePost && !postStore.loading) {
        postStore.loadPosts();
      }
    },
    { distance: 300 } // 스크롤 바닥 300px 전부터 트리거
  );
});

const userStore = useUsersStore();
const { me } = storeToRefs(userStore);
const postStore = usePostsStore();
const { mainPosts } = storeToRefs(postStore);

const activeCommentPostId = ref(null);

const toggleComment = (postId) => {
  activeCommentPostId.value = activeCommentPostId.value === postId ? null : postId;
};
// fetch는 보통 컴포넌트가 마운트 되기 전에 store에서 비동기적으로 데이터를 넣을 때 사용한다.
const { data, status, error } = await useAsyncData('load-posts', async () => {
  await postStore.loadPosts();
  return postStore.mainPosts;
});
</script>

<style></style>

<!-- 2025/03/15:
     - 중복을 최소화 해라. 
     - 폴더명은 항상 정해져 있는 형태를 따르자 pages, layouts 등등 그러한 이유는 nuxt는 폴더명을 보고 판단하기 때문.-->
