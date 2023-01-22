<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const blockProps = defineProps<{
  block: {
    id?: "";
    element?: "";
    type?: "";
    text?: "";
    hide?: boolean;
    options?: [
      {
        id?: "";
        element?: "";
        text?: "";
        value?: "";
        children?: {
          id?: number;
          hide?: boolean;
        };
      }
    ];
    value: "";
    required?: boolean;
  };
}>();
const scoreNum = ref(0);
onMounted(() => {
  scoreNum.value = parseInt(blockProps.block.value);
});
const error = ref("");
const changeScore = (num) => {
  blockProps.block.value = num;
  scoreNum.value = num;
};
</script>
<template>
  <div>
    <h5 class="text-xl font-bold mb-3">
      {{ block.text }}
      <span class="text-red-500" v-if="block.required">*</span>
    </h5>
    <div class="flex">
      <StarIcon
        class="w-12"
        @click="changeScore(1)"
        :class="{ 'text-cyan-500': scoreNum >= 1, 'text-gray-200': scoreNum < 1 }"
      ></StarIcon>
      <StarIcon
        class="w-12"
        @click="changeScore(2)"
        :class="{ 'text-cyan-500': scoreNum >= 2, 'text-gray-200': scoreNum < 2 }"
      ></StarIcon>
      <StarIcon
        class="w-12"
        @click="changeScore(3)"
        :class="{ 'text-cyan-500': scoreNum >= 3, 'text-gray-200': scoreNum < 3 }"
      ></StarIcon>
      <StarIcon
        class="w-12"
        @click="changeScore(4)"
        :class="{ 'text-cyan-500': scoreNum >= 4, 'text-gray-200': scoreNum < 4 }"
      ></StarIcon>
      <StarIcon
        class="w-12"
        @click="changeScore(5)"
        :class="{ 'text-cyan-500': scoreNum >= 5, 'text-gray-200': scoreNum < 5 }"
      ></StarIcon>
    </div>
    <div>{{ error }}</div>
  </div>
</template>
