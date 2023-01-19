<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Fivestar from "../components/Fivestar.vue";
import Button from "../components/Button.vue";
import { reactive, watch } from "vue";
const store = useStore();
const router = useRouter();
const route = useRoute();
const pages = store.state.pages;
const data = reactive({
  select:
    "w-full border border-cyan-500 p-2 px-3 pr-8 rounded focus:outline-none focus:shadow-no-offset focus:shadow-cyan-500/50 select",
  div: "w-full",
  nowNeedId: -1,
});
const changeNeed = (e) => {
  let id = parseInt(e.target.value);
  data.nowNeedId = id;
  // data.choosedIds.filter((id) => block.parent.indexOf(id) >= 0).length > 0
};
// onBeforeRouteUpdate(() => {
//   let nowUrlArr = location.hash.split("/");
//   let componentType = nowUrlArr[1];
//   if (componentType == "page") {
//     let pageNum = nowUrlArr[2];
//     store.state.id = pageNum;
//   }
// });
</script>
<template>
  <div v-for="(page, index) in pages" v-show="store.state.id == index + 1">
    <div class="mb-5">
      <h2 class="text-3xl font-bold">
        {{ page.title }}
      </h2>
      <div
        v-for="block in page.blocks"
        class="my-4"
        v-show="!block.parent || block.parent.includes(data.nowNeedId)"
      >
        <h5 class="text-xl font-bold mb-3">
          {{ block.text }}
        </h5>
        <div v-if="block.element === 'select' || block.element === 'div'">
          <component :is="block.element" :class="data[block.element]" class="text-lg text-gray-500">
            <slot>
              <component
                v-for="option in block.options"
                :is="option.element"
                :value="option.id"
              >
                <slot>
                  {{ option.text }}
                </slot>
              </component>
            </slot>
          </component>
        </div>
        <div
          v-else-if="block.type === ('radio' || 'checkbox')"
          class="grid grid-cols-2 gap-4"
        >
          <div v-for="option in block.options" class="rounded border border-cyan-500 p-2 px-3 flex">
            <component
              :is="block.element"
              :type="block.type"
              :name="'id' + index"
              :value="option.id"
              :id="'id' + index + option.id"
              @change="changeNeed"
            ></component>
            <component
              v-if="block.options.length > 0"
              :is="option.element"
              :for="'id' + index + option.id"
              class="w-full block px-2 text-lg text-gray-500"
            >
              <slot>
                {{ option.text }}
              </slot>
            </component>
          </div>
        </div>
        <div v-else-if="block.type === 'Fivestar'">
          <Fivestar></Fivestar>
        </div>
        <div v-else>
          <component
            :is="block.element"
            :type="block.type"
            class="w-full border border-cyan-500 rounded p-2 px-3"
          >
          </component>
        </div>
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

<style scoped>
.select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
  background-position: right 0.75rem center;
}
</style>
