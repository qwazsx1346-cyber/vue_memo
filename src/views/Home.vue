<script setup>
import { onMounted, reactive } from 'vue';
import storageService from '@/services/StorageService';

//StorageService 클래스 내에 있는 생성자 호출!!
//생성자 호출시에는 new 키워드가 앞에 있어야 한다.

const state = reactive ( {
    memo: {}
});

onMounted( ()=> state.memo = storageService.getItems() ); 

</script>

<template>
  <div class="memo-list">
      <router-link class="item" v-for="item in state.memo" :to="`/memos/${item.id}`">
          <!-- to앞에 :이 붙은건 자바스크립트와 관련이 있음. 태그를 준값의 속성을 포함한 값을 주고싶으면
          앞에 :을 주고, 36번 라인에 적은 코드처럼 뒤에 문자열 그대로를 내려면 :를 안줘도 됨 -->

          <!-- flex는 내 1차 자식을 컨트롤 하려고 씀 -->
          <div class="d-flex pt-3"> 
            <div class="pb-3 mb-0 w-100">
              <div class="d-flex justify-content-between">
                <b>{{ item.title }}</b>
                <div>
                  <span role="button">삭제</span>
                </div>
              </div>
              <div class="mt-2">{{ item.content }}</div>
            </div>
          </div>
      </router-link>
      <router-link to="/memos/add" class="add btn btn-primary">+ 추가하기</router-link>
  </div>
</template>
