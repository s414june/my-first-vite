<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Fivestar from "../components/Fivestar.vue";
import Button from "../components/Button.vue";
const store = useStore();
const router = useRouter();
const pages = store.state.pages;
</script>
<template>
  <div v-for="(page, index) in pages" v-show="store.state.id == index + 1">
    <div class="mb-5">
      <h2 class="text-3xl font-bold">
        {{ page.title }}
      </h2>
      <div v-for="block in page.blocks">
        <h5 class="text-xl font-bold">
          {{ block.text }}
        </h5>
        <div v-if="block.element === 'select'">
          <component :is="block.element" :type="block.type">
            <slot>
              <component
                v-for="option in block.options"
                :is="option.element"
                :value="option.id"
              >
                <slot>
                  {{ option.text }}
                </slot>
              </component>
            </slot>
          </component>
        </div>
        <div v-else-if="block.type === ('radio' || 'checkbox')">
          <div v-for="option in block.options">
            <component :is="block.element" :type="block.type"></component>
            <component
              v-if="block.options.length > 0 && block.element != 'select'"
              :is="option.element"
              :value="option.id"
            >
              <slot>
                {{ option.text }}
              </slot>
            </component>
          </div>
        </div>
        <div v-else>
          <component :is="block.element" :type="block.type"> </component>
        </div>
        <Fivestar v-if="block.type == 'Fivestar'"></Fivestar>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-center">
    <Button
      msg="下一頁"
      class=""
      @click="store.commit('pushPage', { router: router })"
    ></Button>
  </div>
</template>
