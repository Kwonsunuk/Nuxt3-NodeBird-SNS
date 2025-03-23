// /store/posts.js 게시글에 대한 정보들
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostsStore = defineStore('posts', () => {
  /** 상태: 메인 게시글 목록을 저장하는 배열
   * 평균적으로 10개씩 끊어서 가지고 오며 10개씩 가져오다 5개만 가져오면
   * 이제 마지막 페이지라는 것을 알 수 있는데 이때 hasMorePost가 false로 바뀌며
   * 더 이상 서버에서 못 불러오게 막는다.
   */
  const mainPosts = ref([]);
  const hasMorePost = ref(true);

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

  // 게시글을 불러오는 메서드(현재는 가짜 데이터 삽입)
  const loading = ref(false);
  const limit = 10;
  const totalPosts = 51;

  async function loadPosts() {
    if (mainPosts.value.length === 0) {
      hasMorePost.value = true; // 초기화 시점에 다시 true로
    }
    if (!hasMorePost.value || loading.value) return;
    loading.value = true;

    const diff = totalPosts - mainPosts.value.length;
    const postCount = diff > limit ? limit : diff;

    if (postCount <= 0) {
      hasMorePost.value = false;
      loading.value = false;
      return;
    }

    const fakePost = Array(postCount)
      .fill()
      .map(() => ({
        id: Date.now() + Math.random(),
        author: { id: 1, nickname: '우기' },
        content: `Hello Infinite~${Math.random()}`,
        comments: [],
        images: [],
      }));

    mainPosts.value = mainPosts.value.concat(fakePost);
    hasMorePost.value = postCount === limit;
    loading.value = false;
  }

  // 댓글 추가 메서드
  function addComment(payload) {
    const index = mainPosts.value.findIndex((v) => v.id === payload.postId);
    if (index > -1) {
      const commentData = {
        id: payload.id,
        content: payload.content,
        user: payload.user,
      };
      mainPosts.value[index].comments.unshift(commentData);
      // console.log('추가된 댓글:', mainPosts.value[index].comments);
    }
  }

  return {
    mainPosts,
    addMainPost,
    removeMainPost,
    loadPosts,
    addComment,
    hasMorePost,
    loading,
  };
});
