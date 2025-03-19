// /store/posts.js 게시글에 대한 정보들
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostsStore = defineStore('posts', () => {
  // 상태: 메인 게시글 목록을 저장하는 배열
  const mainPosts = ref([]);

  // actions: 게시글 추가 메서드
  async function addMainPost(payload) {
    /**
     * 배열 조작 관련 메서드 설명:
     * - push: 배열의 맨 끝에 새로운 요소를 추가한다.
     * - shift: 배열의 맨 앞 요소를 제거하고 반환한다.
     * - unshift: 배열의 맨 앞에 새로운 요소를 추가한다.
     *
     * 여기서는 최신 게시글이 가장 위에 보이도록
     * unshift를 사용해 배열 앞쪽에 게시글을 추가한다.
     *
     * 추가적으로 서버에 게시글 등록 요청도 작성
     */
    try {
      const newPost = {
        id: Date.now(), // 임시 고유 ID (나중에 DB에서 제공)
        content: payload.content,
        createdAt: new Date().toISOString(),
        author: payload.author || { name: '익명', email: '' },
        comments: payload.comments || [],
        images: payload.images || [],
      };

      mainPosts.value.unshift(newPost);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  // 게시글 삭제 메서드
  function removeMainPost(postId) {
    const index = mainPosts.value.findIndex((v) => v.id === postId);
    if (index > -1) {
      mainPosts.value.splice(index, 1);
    }
  }

  // 댓글 추가 메서드
  function addComment(payload) {
    const index = mainPosts.value.findIndex((v) => v.id === payload);
    if (index > -1) {
      mainPosts.value[index].comments.unshift(payload);
    }
  }

  return {
    mainPosts,
    addMainPost,
    removeMainPost,
    addComment,
  };
});
