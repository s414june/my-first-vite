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
        },
      }
    ];
    value: "",
    required: boolean,
    completed: boolean,
    verified: false,
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
function changeForm(childrens, index) {
  toggleChildren(childrens, index);
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
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="option in options"
        class="rounded border border-cyan-500 p-2 px-3 flex"
        @change="changeForm(option.childrens, index)"
      >
        <input
          :type="block.type"
          :id="'check_id_' + block.id + option.value"
          :value="option.value"
          :name="'check_name_' + block.id"
          :checked="option.value == block.value"
          @change="store.commit('changeVal', { block: block, value: option.value })"
        />
        <label
          v-if="block.options.length > 0"
          :for="'check_id_' + block.id + option.value"
          class="w-full block px-2 text-lg text-gray-500"
        >
          {{ option.text }}
        </label>
      </div>
      <div
        v-show="!block.completed && block.required && block.verified"
        class="m-1 mt-0 text-red-500"
      >
        請選擇
      </div>
    </div>
  </div>
</template>
