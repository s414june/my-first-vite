<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer.vue";
import { onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const route = useRoute();
// const router = useRouter();
window.onchange = function () {
  let questions = document.querySelectorAll(".question:not(.form-hide)");
};
</script>

<template>
  <div class="bg-zinc-100 min-h-screen vh-for-mobile">
    <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <div class="grow pb-20">
      <div class="flex justify-center">
        <div
          class="block p-6 rounded-lg shadow-lg bg-white max-w-full w-192 m-4 relative"
        >
          <!-- <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
            Card title
          </h5>
          <p class="text-gray-700 text-base mb-4"> -->
          <!-- </p> -->
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component"/>
            </keep-alive>
          </router-view>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
