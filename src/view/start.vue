<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Button from "../components/Button.vue";
// mounted(){
//   console.log(this.$route.params.id);
// }
const store = useStore();
const router = useRouter();
// return {
//   methods,
// };
</script>
<template>
  <div>
    <h1 class="text-blue-600 text-2xl font-bold mb-2">遊客滿意度調查</h1>
    <div>
      歡迎蒞臨西拉雅國家風景區！<br />
      誠摯邀請您填寫滿意度問卷，<br />
      您的意見是我們進步的動力。
    </div>
    <div class="w-full flex justify-center">
      <Button msg="開始" class="w-60" @click="store.commit('pushPage', { router: router })"></Button>
    </div>
  </div>
</template>
