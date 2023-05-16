<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const route = useRoute();

// defineProps<{ msg: string }>()

// const count = ref(0)
let nowId = ref(0);
let isShow = ref(true);
function getPage() {
  let routerVal = router.currentRoute.value;
  if (routerVal.name == "start") {
    nowId.value = 0;
  } else if (routerVal.name == "page") {
    nowId.value = parseInt(router.currentRoute.value.params.id.toString());
  } else if (routerVal.name == "end") {
    nowId.value = store.state.pages.length + 1;
    isShow.value = false;
  }
}
function pushPage(num: number) {
  store.commit("pushPage", { router: router, num: num });
}

onMounted(() => {
  getPage();
  changeArrowDisable();
});
watch(
  () => route.path,
  (path) => {
    getPage();
    changeArrowDisable();
  }
);
function changeArrowDisable() {
  let isEnd = false;
  let nowPathName = router.currentRoute.value.name;
  if (nowPathName == "end") isEnd = true;
  store.state.disable.left = nowId.value <= 0 || isEnd ? true : false;
  store.state.disable.right = nowId.value >= store.state.pages.length ? true : false;
}
</script>

<template>
  <footer
    class="w-full bg-white h-30 px-5 shadow-2xl shadow-black flex justify-center bottom-0 fixed"
    v-show="isShow"
  >
    <div class="flex justify-between max-w-full w-192 m-3">
      <div class="flex w-3/4 items-center">
        <!-- <div class="bg-zinc-200 h-5 w-full rounded-md m-1"></div> -->
        <div class="w-full bg-gray-200 h-5 rounded-md overflow-hidden relative">
          <div
            class="bg-cyan-500 h-full duration-500"
            :style="'width: ' + store.state.progress + '%;'"
          ></div>
        </div>
        <div class="mx-2">{{ store.state.progress }}%</div>
      </div>
      <div class="flex">
        <div
          class="bg-zinc-200 w-10 h-10 rounded-md m-1 p-2 cursor-pointer"
          @click="pushPage(-1)"
          :class="{ 'opacity-40': store.state.disable.left }"
        >
          <ChevronLeftIcon class="text-cyan-500" />
        </div>
        <div
          class="bg-zinc-200 w-10 h-10 rounded-md m-1 p-2 cursor-pointer"
          @click="pushPage(1)"
          :class="{ 'opacity-40': store.state.disable.right }"
        >
          <ChevronRightIcon class="text-cyan-500" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
