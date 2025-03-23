<!-- components/PostCard.vue -->
<template>
  <div>
    <div class="card mb-4 shadow-sm">
      <!-- 이미지가 있는 경우 표시 -->
      <!-- <img
      src="https://kor.pngtree.com/freepng/beautiful-profile-glyph-vector-icon_5261832.html"
      class="card-img-top"
      alt="게시글 이미지"
    /> -->

      <div class="card-body">
        <h5 class="card-title">
          <NuxtLink :to="`/user/${post.id}`">{{ post.author.nickname }}</NuxtLink>
        </h5>
        <div class="card-text">{{ post.content }}</div>
      </div>

      <div class="card-footer d-flex justify-content-around bg-white border-top">
        <button class="btn btn-light">
          <i class="fas fa-retweet text-warning"></i>
        </button>
        <button class="btn btn-light">
          <i class="far fa-heart text-danger"></i>
        </button>
        <button class="btn btn-light" @click="onToggleComment">
          <i class="far fa-comment text-primary"></i>
        </button>
        <div class="dropdown">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-ellipsis-h text-secondary"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <button class="dropdown-item text-danger" @click.prevent="onRemovePost">삭제</button>
            </li>
            <li>
              <button class="dropdown-item text-warning" @click.prevent="onEditPost">수정</button>
            </li>
            <li>
              <button class="dropdown-item text-secondary">메뉴 3</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 템플릿은 ~~일 때 사용한다. -->
    <template v-if="activeCommentPostId === post.id">
      <ul class="list-group list-group-flush mt-3">
        <li v-for="c in post.comments" :key="c.id" class="list-group-item d-flex align-items-start">
          <div
            class="avatar bg-teal text-white rounded-circle d-flex justify-content-center align-items-center me-3"
            style="width: 40px; height: 40px"
          >
            {{ c.user.nickname[0] }}
          </div>
          <div>
            <strong>{{ c.user.nickname }}</strong>
            <p class="mb-0">{{ c.content }}</p>
          </div>
        </li>
      </ul>
      <CommentForm :post-id="post.id" />
    </template>
  </div>
</template>

<script setup>
import { usePostsStore } from '~/store/posts';

import CommentForm from './CommentForm.vue';

const Postsstore = usePostsStore();

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  activeCommentPostId: {
    type: Number,
    default: null,
  },
});
const emit = defineEmits(['toggle-comment']);

const onToggleComment = () => {
  emit('toggle-comment', props.post.id);
};

const onRemovePost = () => {
  Postsstore.removeMainPost(props.post.id);
};

const onEditPost = () => {
  alert('수정 기능은 아직 구현되지 않았습니다.');
};
</script>

<style scoped>
/* 추가적인 카드 스타일이 필요하면 여기에 작성 */
.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0; /* 메뉴가 버튼에 붙도록 */
}
.dropdown-menu {
  min-width: auto; /* 기본 min-width 제거 */
  width: max-content; /* 내용 크기에 맞게 자동 조정 */
  padding: 0.5rem; /* 메뉴 안쪽 여백 조절 */
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
