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
    <select 
      class="text-lg text-gray-500 w-full border border-cyan-500 p-2 px-3 pr-8 rounded focus:outline-none focus:shadow-no-offset focus:shadow-cyan-500/50 select"
    >
      <slot>
        <option
          v-for="option in block.options"
          :value="option.id"
        >
          <slot>
            {{ option.text }}
          </slot>
        </option>
      </slot>
    </select>
  </div>
</template>
<style scope>
.select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
  background-position: right 0.75rem center;
}
</style>
