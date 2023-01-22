<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
const blockProps = defineProps<{
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
// const thisValue = ref(0);
const emit = defineEmits(["toggleChildren"]);
function toggleChildren(children) {
  emit("toggleChildren", children);
}
function changeVal(value) {
  blockProps.block.value = value;
}
</script>
<template>
  <div>
    <h5 class="text-xl font-bold mb-3">
      {{ block.text }}
      <span class="text-red-500" v-if="block.required">*</span>
    </h5>
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="option in block.options"
        class="rounded border border-cyan-500 p-2 px-3 flex"
        @change="toggleChildren(option.children)"
      >
        <input
          :type="block.type"
          :id="'check_id_' + block.id + option.value"
          :value="option.value"
          :name="'check_name_' + block.id"
          :checked="option.value == block.value"
          @change="changeVal(option.value)"
        />
        <label
          v-if="block.options.length > 0"
          :for="'check_id_' + block.id + option.value"
          class="w-full block px-2 text-lg text-gray-500"
        >
          {{ option.text }}
        </label>
      </div>
    </div>
  </div>
</template>
