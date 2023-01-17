<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Fivestar from "../components/Fivestar.vue";
const store = useStore();
const router = useRouter();
const pages = [
  {
    id: 1,
    title: "滿意度調查",
    blocks: [
      {
        id: 1,
        element: "div",
        type: "Fivestar",
        text: "整體舒適性?",
        order: 0,
        required: true,
        options: [],
      },
      {
        id: 2,
        element: "div",
        type: "Fivestar",
        text: "你覺得?",
        order: 0,
        required: true,
        options: [],
      },
      {
        id: 3,
        element: "div",
        type: "Fivestar",
        text: "你覺得?",
        order: 0,
        required: true,
        options: [],
      },
    ],
  },
  {
    id: 2,
    title: "報修調查",
    blocks: [
      {
        element: "select",
        type: "",
        text: "您現在所在位置：",
        order: 0,
        options: [
          {
            id: 1,
            element: "option",
            text: "男廁",
            value: "1",
          },
          {
            id: 2,
            element: "option",
            text: "女廁",
            value: "2",
          },
        ],
        required: true,
      },
      {
        element: "input",
        type: "radio",
        text: "是否需要報修？",
        order: 0,
        options: [
          {
            id: 3,
            element: "label",
            text: "不需要",
            value: "0",
          },
          {
            id: 4,
            element: "label",
            text: "需要",
            value: "1",
          },
        ],
        required: true,
      },
      {
        element: "select",
        type: "",
        text: "故障物品",
        parent: [4],
        order: 0,
        options: [
          {
            id: 5,
            element: "option",
            text: "衛生紙",
            value: "1",
          },
          {
            id: 6,
            element: "option",
            text: "洗手乳",
            value: "2",
          },
        ],
        required: true,
      },
    ],
  },
  {
    id: 3,
    title: "意見回饋",
    blocks: [
      {
        id: 1,
        element: "p",
        type: "",
        text: "歡迎留下您的建議！您的意見是我們進步的動力。",
        order: 0,
        // required: true,
        options: [],
      },
      {
        id: 2,
        element: "textarea",
        type: "Textarea",
        text: "意見回饋",
        order: 0,
        required: false,
        options: [],
      },
      {
        id: 3,
        element: "input",
        type: "text",
        text: "姓名",
        order: 0,
        required: false,
        options: [],
      },
      {
        id: 4,
        element: "input",
        type: "text",
        text: "聯絡電話",
        order: 0,
        required: false,
        options: [],
      },

      {
        id: 4,
        element: "input",
        type: "email",
        text: "電子信箱",
        order: 0,
        required: false,
        options: [],
      },
    ],
  },
];
const pushPage = () => {
  let id = ++store.state.id;
  router.push(`/page/${id}`);
};

const data = reactive({
  type: "Fivestar",
});
</script>
<template>
  <div v-for="page in pages">
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
</template>
