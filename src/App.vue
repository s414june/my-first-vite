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
    <div class="grow pb-20">
      <div class="flex justify-center">
        <div class="py-4 w-[calc(100%-2rem)]">
          <router-view v-slot="{ Component }">
            <keep-alive>
              <Transition>
                <component :is="Component" />
              </Transition>
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
