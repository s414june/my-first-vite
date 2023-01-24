<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
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
          // id: number;
          // hide: boolean;
        };
      }
    ];
    value: "";
    required: boolean;
    completed: boolean;
    verified: boolean;
  };
}>();
let error = ref(false);
// @change="checkValidation($event)"
function checkValidation(event) {
  let value = event.target.value;
  error.value = value === "" ? true : false;
}
</script>
<template>
  <div>
    <h5 class="text-xl font-bold mb-3">
      {{ block.text }}
      <span class="text-red-500" v-if="block.required">*</span>
    </h5>
    <div class="flex">
      <select
        v-model="block.value"
        class="text-lg text-gray-500 w-full border border-cyan-500 p-2 px-3 pr-8 rounded focus:outline-none focus:shadow-no-offset focus:shadow-cyan-500/50 select"
        @change="store.commit('changeVal', { block: block, value: block.value })"
      >
        <option value="">請選擇</option>
        <option v-for="option in block.options" :value="option.id">
          {{ option.text }}
        </option>
      </select>
    </div>
    <div
      v-show="!block.completed && block.required && block.verified"
      class="m-1 text-red-500"
    >
      請選擇
    </div>
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
