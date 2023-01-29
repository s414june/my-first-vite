<script setup lang="ts">
defineProps<{
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
  },
  index: number
}>();
</script>
<template>
  <div
  >
    <h5 class="text-xl font-bold mb-3">
      {{ block.text }}
    </h5>
    <div class="flex">
      <div class="w-full text-lg text-gray-500">
        <p v-for="option in block.options">
          {{ option.text }}
        </p>
      </div>
    </div>
  </div>
</template>
