<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Fivestar from "../components/Fivestar.vue";
import Button from "../components/Button.vue";
import { reactive } from "vue";
const store = useStore();
const router = useRouter();
const pages = store.state.pages;
const data = reactive({
  select:
    "w-full border p-2 px-3 pr-8 rounded focus:outline-none focus:shadow-no-offset focus:shadow-cyan-500/50 select",
  div: "w-full",
});
</script>
<template>
  <div v-for="(page, index) in pages" v-show="store.state.id == index + 1">
    <div class="mb-5">
      <h2 class="text-3xl font-bold">
        {{ page.title }}
      </h2>
      <div v-for="block in page.blocks">
        <h5 class="text-xl font-bold mb-3">
          {{ block.text }}
        </h5>
        <div v-if="block.element === 'select' || block.element === 'div'">
          <component :is="block.element" :class="data[block.element]">
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
        <div
          v-else-if="block.type === ('radio' || 'checkbox')"
          class="grid grid-cols-2 gap-4"
        >
          <div v-for="option in block.options" class="rounded border p-2 px-3 flex">
            <component
              :is="block.element"
              :type="block.type"
              :name="'id' + index"
              :id="'id' + index + option.id"
            ></component>
            <component
              v-if="block.options.length > 0 && block.element != 'select'"
              :is="option.element"
              :value="option.id"
              :for="'id' + index + option.id"
              class="w-full block px-2"
            >
              <slot>
                {{ option.text }}
              </slot>
            </component>
          </div>
        </div>
        <div v-else-if="block.type === 'Fivestar'">
          <Fivestar></Fivestar>
        </div>
        <div v-else>
          <component
            :is="block.element"
            :type="block.type"
            class="w-full border rounded p-2 px-3"
          >
          </component>
        </div>
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

<style scoped>
.select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
  background-position: right 0.75rem center;
}
</style>
