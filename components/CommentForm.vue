<!-- CommentForm.vue -->
<template>
  <form @submit.prevent="onSubmit" class="position-relative mt-3">
    <div class="mb-3">
      <label for="comment" class="form-label">댓글 달기</label>
      <textarea
        id="comment"
        class="form-control"
        v-model="content"
        placeholder="댓글을 입력하세요."
        rows="3"
        :class="{
          'is-valid': content.trim().length > 0 && success,
          'is-invalid': touched && content.trim().length === 0,
        }"
        @input="onChangeTextarea"
        @blur="touched = true"
      ></textarea>
      <div v-if="success && content.trim().length > 0" class="valid-feedback">
        {{ successMessage }}
      </div>
      <div v-if="touched && content.trim().length === 0" class="invalid-feedback">
        내용을 입력하세요.
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-success mt-2">삐약</button>
    </div>
  </form>
</template>

<script setup>
import { computed, ref } from 'vue';

import { usePostsStore } from '~/store/posts';
import { useUsersStore } from '~/store/users';

const content = ref('');
const success = ref(false);
const successMessage = ref('');
const touched = ref(false);

const PostsStore = usePostsStore();
const UsersStore = useUsersStore();

const me = computed(() => UsersStore.me);

const props = defineProps({
  postId: {
    type: Number,
    required: true,
  },
});

const onChangeTextarea = () => {
  success.value = content.value.trim().length > 0;
};

const onSubmit = () => {
  if (content.value.trim().length > 0) {
    PostsStore.addComment({
      id: Date.now(),
      postId: props.postId,
      content: content.value,
      user: {
        nickname: me.value?.nickname ?? '익명',
      },
    });

    successMessage.value = '댓글이 등록되었습니다!';
    content.value = '';
    success.value = false;
    touched.value = false;

    setTimeout(() => {
      successMessage.value = '';
    }, 2000);
  } else {
    touched.value = true;
  }
};
</script>
