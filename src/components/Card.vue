<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const route = useRoute();
const props = defineProps(['component', 'cKey']);

</script>

<template>
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-full w-192 m-4 relative">
      <slot></slot>
    </div>
</template>

<style scoped></style>
