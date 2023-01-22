<script setup lang="ts">
import { ref } from "vue";
defineProps<{
  block: {
    id: "";
    element: "";
    type: "";
    text: "";
    hide: boolean;
    options: [
      {
        id: "";
        element: "";
        text: "";
        value: "";
        children: {
          id: number;
          hide: boolean;
        };
      }
    ];
    value: "";
    required: boolean;
  };
}>();
const error = ref("");
</script>
<template>
  <div>
    <h5 class="text-xl font-bold mb-3">
      {{ block.text }}
      <span class="text-red-500" v-if="block.required">*</span>
    </h5>
    <div>
      <input
        :type="block.type"
        class="w-full border border-cyan-500 rounded p-2 px-3"
        v-model="block.value"
      />
    </div>
  </div>
</template>
