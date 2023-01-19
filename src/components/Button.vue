<script setup lang="ts">

defineProps<{ msg: string, class: string }>();

</script>
<template>
  <button
    type="button"
    class="
      inline-block
      px-6
      py-2.5
      bg-cyan-500
      text-white
      font-medium
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-cyan-500 hover:shadow-lg
      focus:bg-cyan-500 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-cyan-500 active:shadow-lg
      transition
      duration-150
      ease-in-out
      my-3"
      :class="class"
  >
    {{msg}}
  </button>
</template>