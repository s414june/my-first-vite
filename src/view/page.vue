<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Button from "../components/Button.vue";
import { reactive, defineAsyncComponent } from "vue";
import { HtmlAttributes } from "csstype";
const store = useStore();
const router = useRouter();
const route = useRoute();
const pages = store.state.pages;
const getFormComponent = (componentName) => {
  return defineAsyncComponent(() => import(`../components/${componentName}.vue`));
};
function toggleHide(event) {
  let dataset = event.target.dataset;
  if (dataset.children) {
    let children = document.querySelector(
      "#question_" + dataset.children
    ) as HTMLBodyElement;
    dataset.childrenhide == true
      ? children.classList.add("form-hide")
      : children.classList.remove("form-hide");
  }
}
</script>
<template>
  <div v-for="(page, index) in pages" v-show="store.state.id == index + 1">
    <div class="mb-5">
      <h2
        class="text-3xl font-bold before:block before:absolute before:w-2 before:h-10 before:left-0 before:bg-cyan-500"
      >
        {{ page.title }}
      </h2>
      <div
        v-for="block in page.blocks"
        class="my-4 question"
        :id="'question_' + block.id"
        @change="toggleHide($event)"
        :class="{'form-hide' : block.hide}"
      >
        <h5 class="text-xl font-bold mb-3">
          {{ block.text }}
        </h5>
        <component
          :is="getFormComponent(block.component)"
          :block="block"
          :index="index"
        ></component>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-center">
    <Button
      msg="下一頁"
      class=""
      @click="store.commit('pushPage', { router: router, num: 1 })"
      v-show="store.state.id < store.state.pages.length"
    ></Button>
    <Button
      msg="送出"
      class="w-60"
      @click="store.commit('pushPage', { router: router, num: 1 })"
      v-show="store.state.id >= store.state.pages.length"
    ></Button>
  </div>
</template>
<style scope>
.form-hide {
  display: none;
}
</style>
