<script setup lang="ts">
defineProps<{
  block: {
    id: "";
    element: "";
    options: [
      {
        id: "";
        element: "";
        text: "";
      }
    ];
  };
  index:number
}>();
</script>
<template>
  <div class="flex">
    <div
      class="w-full text-lg text-gray-500"
    >
      <slot>
        <p
          v-for="option in block.options"
        >
          <slot>
            {{ option.text }}
          </slot>
        </p>
      </slot>
    </div>
  </div>
</template>