<script setup lang="ts">
import { useStore } from "vuex";
const store = useStore();
const blockProps = defineProps<{
  block: {
    id: "",
    element: "",
    type: "",
    text: "",
    hide: boolean,
    options: [
      {
        id: "",
        element: "",
        text: "",
        value: "",
        childrens: {
          id: number,
          hide: boolean
        }
      }
    ],
    value: "",
    required: boolean,
    completed: boolean,
    verified: boolean,
    childrens: []
  },
  index: number
}>();
const emit = defineEmits(["toggleChildren", "countProgress"]);
function toggleChildren(childrens, index) {
  emit("toggleChildren", childrens, index);
}
function countProgress() {
  emit("countProgress");
}
function changeForm(block, index) {
  store.commit('changeVal', { block: block, value: block.value })
  toggleChildren(block.childrens, index);
  countProgress();
}
const defaultChildren = [{
  childrens: {
  },
  value: "",
  text: ""
}];
let options = blockProps.block.options.length > 0 ? blockProps.block.options : defaultChildren;
</script>
<template>
  <div>
    <h5 class="text-xl font-bold mb-3">
      {{ block.text }}
      <span class="text-red-500" v-if="block.required">*</span>
    </h5>
    <div
    >
      <input
        :type="block.type"
        class="w-full border border-cyan-500 rounded p-2 px-3 focus:outline-none focus:shadow-no-offset focus:shadow-cyan-500/50"
        v-model="block.value"
        @change="changeForm(block, index)"
      />
      <div
        v-show="!block.completed && block.required && block.verified"
        class="m-1 text-red-500"
      >
        請輸入
      </div>
    </div>
  </div>
</template>
