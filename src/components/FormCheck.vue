<script setup lang="ts">
import { useStore } from "vuex";
const store = useStore();
defineProps<{
  block: {
    id: "";
    element: "";
    type: "";
    options: [
      {
        id: "";
        element: "";
        text: "";
        value: "";
        children: 0;
        childrenhide:false
      }
    ];
    value: "";
  };
  index: number;
}>();
</script>
<template>
  <div class="grid grid-cols-2 gap-4">
    <div
      v-for="option in block.options"
      class="rounded border border-cyan-500 p-2 px-3 flex"
    >
      <input
        :is="block.element"
        :type="block.type"
        :name="'id' + index"
        :value="option.value"
        :id="'id' + index + option.value"
        :data-children="option.children"
        :data-childrenhide="option.childrenhide"
      />
      <label
        v-if="block.options.length > 0"
        :is="option.element"
        :for="'id' + index + option.value"
        class="w-full block px-2 text-lg text-gray-500"
      >
        <slot>
          {{ option.text }}
        </slot>
      </label>
    </div>
  </div>
</template>
