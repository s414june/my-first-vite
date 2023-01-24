<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Button from "../components/Button.vue";
import { ComponentPublicInstance, HTMLAttributes, onMounted, ref, watch } from "vue";
import { reactive, defineAsyncComponent } from "vue";
const store = useStore();
const router = useRouter();
const route = useRoute();
const pages = store.state.pages;
const getFormComponent = (componentName) => {
  return defineAsyncComponent(() => import(`../components/${componentName}.vue`));
};
let isMounted = false;
let blockRefs: Array<any> = [];
const setBlockRefs = (
  el: HTMLElement | ComponentPublicInstance | HTMLAttributes,
  index: number,
  thisId: number,
  err: string
) => {
  // let blockRef_pushed = blockRefs.filter((blockRef) => blockRef.id == id);
  // if (blockRef_pushed.length > 0) return;
  if (isMounted) return;
  if (el) {
    blockRefs.push({
      id: thisId,
      el,
      page: index + 1,
      err: false,
    });
  }
};
const _toggleChildren = (children, block) => {
  let childrenRef = blockRefs.find((itemRef) => itemRef.id == children.id);
  children.hide
    ? childrenRef.el.classList.add("form-hide")
    : childrenRef.el.classList.remove("form-hide");
};
const updateProgress = () => {
  console.log(blockRefs);
};
onMounted(() => {
  isMounted = true;
  let nowPath = router.currentRoute.value.params.id;
  store.state.pageNum = parseInt(nowPath.toString());
});
watch(
  () => route.path,
  (path) => {
    if (!router.currentRoute.value.params.id) return;
    let nowPath = router.currentRoute.value.params.id;
    store.state.pageNum = parseInt(nowPath.toString());
  }
);
function checkForm() {
  // let hasError = false;
  // blockRefs.forEach((pageData) => {
  //   if (pageData.page == store.state.page) {
  //   }
  // });
  // if (hasError) return;
  // store.commit("pushPage", { router: router, num: 1 });
  let nowBlocks = pages[store.state.pageNum - 1].blocks;
  let isOk = true;
  nowBlocks.forEach((nowBlock) => {
    nowBlock.verified = true;
    if (nowBlock.completed == false) isOk = false;
  });
  if (!isOk) return;
  pushPage(1);
}
function pushPage(num) {
  let nowId = parseInt(router.currentRoute.value.params.id.toString());
  nowId += num;
  router.push({
    params: {
      id: nowId,
    },
  });
}
function submit() {
  store.commit("pushPage", { router: router, num: 1, force: true });
}
</script>
<template>
  <div
    v-for="(page, index) in pages"
    v-show="store.state.pageNum == index + 1"
    @change="updateProgress"
  >
    <div class="mb-5">
      <h2
        class="text-3xl font-bold before:block before:absolute before:w-2 before:h-10 before:left-0 before:bg-cyan-500"
      >
        {{ page.title }}
      </h2>
      <div
        v-for="block in page.blocks"
        class="my-4 question"
        :ref="(el) => setBlockRefs(el as HTMLElement,index, block.id,'')"
        :class="{ 'form-hide need-toggle-hide': block.hide }"
      >
        <component
          :is="getFormComponent(block.component)"
          :block="block"
          @toggleChildren="_toggleChildren"
        >
        </component>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-center">
    <Button
      msg="下一頁"
      class=""
      @click="store.commit('pushPage', { router: router, num: 1 })"
      v-show="store.state.pageNum < store.state.pages.length"
    ></Button>
    <Button
      msg="送出"
      class="w-60"
      @click="submit()"
      v-show="store.state.pageNum >= store.state.pages.length"
    ></Button>
  </div>
</template>
<style scope>
.form-hide {
  display: none;
}
</style>
