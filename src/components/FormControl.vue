<script setup lang="ts">
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
      }
    ];
  };
  index:number
}>();
</script>
<template>
  <div>
    <component
      :is="block.element"
      :type="block.type"
      class="w-full border border-cyan-500 rounded p-2 px-3" 
    />
  </div>
</template>
