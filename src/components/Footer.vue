<script setup lang="ts">
import { ref } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
  <footer class="w-full bg-white h-30 px-5 shadow-2xl shadow-black flex justify-center bottom-0 fixed">
    <div class="flex justify-between max-w-full w-192 m-3">
      <div class="flex w-3/4 items-center">
        <!-- <div class="bg-zinc-200 h-5 w-full rounded-lg m-1"></div> -->
        <div class="w-full bg-gray-200 h-5 rounded-lg overflow-hidden relative">
          <div class="bg-blue-600 h-full" style="width: 25%"></div>
        </div>
        <div class="mx-2">0%</div>
      </div>
      <div class="flex">
        <div
          class="bg-zinc-200 w-10 h-10 rounded-lg m-1 p-2 cursor-pointer"
          @click="store.commit('pushPage', { router: router, num: -1 })"
        >
          <ChevronLeftIcon class="text-blue-500" />
        </div>
        <div
          class="bg-zinc-200 w-10 h-10 rounded-lg m-1 p-2 cursor-pointer"
          @click="store.commit('pushPage', { router: router })"
        >
          <ChevronRightIcon class="text-blue-500" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
