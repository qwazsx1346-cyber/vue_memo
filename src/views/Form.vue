<script setup>
import { reactive, onMounted } from 'vue';
import storageService from '@/services/StorageService';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter(); //라우터 객체 주소값 얻기(주소값 이동)
const route = useRoute(); //라우트 객체 주소값 얻기(PathVariable 값 가져오기)


const state = reactive({
  memo: {
    title: '',
    content: ''
  }
});

const submit = () => {
    storageService.addItem(state.memo);
    alert('저장하였습니다.');
    //라우팅 처리 (path: '/')로 주소값 이동 (화면 전환)
    router.push({
        path: '/'
    });
}

const update = () => {
  storageService.setItem({...state.memo}); // ...은 전개연산자(Spread Operator)로 state.memo 객체를
                                          //복사해서 새로운 객체를 만들라는 뜻
                                          //그래야 내용 수정 중 데이터가 망가지지않고 안전하게 저장됨
    alert('수정되었습니다.');
    router.push({
        path: '/'
    });
}


onMounted(() => {
    if(route.params.id) { //index.js파일에 18번라인에 :id로 썻기때문에 .id로 받는것임
                          // 만약 :ggg로 받으면 .ggg로 받으면 됨
        const id = Number(route.params.id); //route와 params는 세트(약속)임. 파라미터를 뜻함
        state.memo = storageService.getItem(id);
    }
})
</script>

<template>
<form class="detail" @submit.prevent="submit">
  <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input for="text" id="title" class="form-control p-3" v-model="state.memo.title">
  </div>
  <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea id="content" v-model="state.memo.content"></textarea>
  </div>
  <button class="btn btn-primary w-30 py-3 me-2">저장</button>
  <button type="button" @click="update" class="btn btn-warning w-30 py-3">수정</button>
</form>


<!-- <form class="detail" @submit.prevent="modify">
    <button class="btn btn-danger w-30 py-3">삭제</button>
</form> -->

</template>

<style scoped>

</style>