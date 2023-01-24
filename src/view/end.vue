<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
const store = useStore();

onMounted(() => {
  store.state.completed = true;
});

</script>
<template>
  <div class="mb-5">
    <h1 class="text-cyan-500 text-3xl font-bold mb-2">感謝您！我們收到您的回應囉！</h1>
    <div class="text-lg text-gray-500">
      您的回饋是我們成長的動力，<br />
      期待下次與您相見！
    </div>
  </div>
</template>
