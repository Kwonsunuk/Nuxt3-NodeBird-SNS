<!-- PostForm.vue -->
<template>
  <div class="card shadow-sm p-4 mb-4">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="textarea" class="form-label">어떤 신기한 일이 있었나요?</label>
          <textarea
            id="textarea"
            class="form-control"
            v-model="context"
            placeholder="내용을 입력하세요."
            rows="4"
            @input="onChangeTextArea"
            :class="{
              'is-valid': context.trim().length > 0 && success,
              'is-invalid': textTouched && context.trim().length === 0,
            }"
            @blur="textTouched = true"
          ></textarea>
          <div class="invalid-feedback">내용을 입력하세요.</div>
          <div v-if="successMessage" class="alert alert-success mt-2">
            {{ successMessage }}
          </div>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <b-button color="light">이미지 업로드</b-button>
          <b-button color="success" type="submit" text-color="white">짹짹</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted, ref } from 'vue';

import { usePostsStore } from '~/store/posts';
import { useUsersStore } from '~/store/users';

const context = ref('');
const success = ref(false);
const successMessage = ref('');
const textTouched = ref(false);
const Postsstore = usePostsStore();
const UsersStore = useUsersStore();
const successTimeout = ref(null);

onUnmounted(() => {
  if (successTimeout.value) {
    clearTimeout(successTimeout.value);
  }
});

const onChangeTextArea = () => {
  if (context.value.trim().length > 0) {
    success.value = true;
  } else {
    success.value = false;
  }
};
const onSubmit = async () => {
  if (context.value.trim().length > 0) {
    const result = await Postsstore.addMainPost({
      content: context.value,
      author: {
        nickname: UsersStore.me?.nickname ?? '익명',
        email: UsersStore.me?.email ?? '',
      },
      images: [],
      comments: [],
    });

    if (result.success) {
      successMessage.value = '게시글 등록 성공!';
      context.value = '';
      success.value = false;
      textTouched.value = false;

      successTimeout.value = setTimeout(() => {
        successMessage.value = '';
      }, 2000);
    } else {
      successMessage.value = `등록 실패: ${result.message}`;
    }
  } else {
    textTouched.value = true;
    successMessage.value = '';
  }
};
</script>
