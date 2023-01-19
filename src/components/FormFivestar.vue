<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";

let scoreNum: number = 2;
function hasScore(starNum: number) {
  let hasScore = false;
  if (scoreNum >= starNum) hasScore = true;
  return {
    "text-cyan-500": hasScore,
    "text-gray-200": !hasScore
  };
}
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
    <StarIcon
      class="w-12"
      :class="hasScore(1)"
    ></StarIcon>
    <StarIcon
      class="w-12"
      :class="hasScore(2)"
    ></StarIcon>
    <StarIcon
      class="w-12"
      :class="hasScore(3)"
    ></StarIcon>
    <StarIcon
      class="w-12"
      :class="hasScore(4)"
    ></StarIcon>
    <StarIcon
      class="w-12"
      :class="hasScore(5)"
    ></StarIcon>
  </div>
</template>
