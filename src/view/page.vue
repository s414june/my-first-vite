<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Button from "../components/Button.vue";
const store = useStore();
const router = useRouter();
const pages = [
  {
    id: 1,
    title: "滿意度",
    blocks: [
      {
        id: 1,
        type: "fivestar",
        text: "你覺得?",
        order: 0,
        required: true,
      },
      {
        id: 2,
        type: "fivestar",
        text: "你覺得?",
        order: 0,
        required: true,
      },
      {
        id: 3,
        type: "fivestar",
        text: "你覺得?",
        order: 0,
        required: true,
      },
    ],
  },
  {
    id: 2,
    title: "報修",
    blocks: [
      {
        type: "select",
        text: "您現在所在位置：",
        order: 0,
        option: [
          {
            id: 1,
            text: "男廁",
            value: "1",
          },
          {
            id: 2,
            text: "女廁",
            value: "2",
          },
        ],
        required: true,
      },
      {
        type: "radio",
        text: "是否需要報修？",
        order: 0,
        option: [
          {
            id: 3,
            text: "不需要",
            value: "0",
          },
          {
            id: 4,
            text: "需要",
            value: "1",
          },
        ],
        required: true,
      },
      {
        type: "select",
        text: "故障物品",
        parent: [4],
        order: 0,
        option: [
          {
            id: 5,
            text: "衛生紙",
            value: "1",
          },
          {
            id: 6,
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
        type: "info",
        text: "歡迎留下您的建議！您的意見是我們進步的動力。",
        order: 0,
        // required: true,
      },
      {
        id: 2,
        type: "textarea",
        text: "意見回饋",
        order: 0,
        required: false,
      },
      {
        id: 3,
        type: "text",
        text: "姓名",
        order: 0,
        required: false,
      },
      {
        id: 4,
        type: "text",
        text: "聯絡電話",
        order: 0,
        required: false,
      },

      {
        id: 4,
        type: "email",
        text: "電子信箱",
        order: 0,
        required: false,
      },
    ],
  },
];
const pushPage = () => {
  let id = ++store.state.id;
  router.push(`/page/${id}`);
};
</script>
<template>
  <div>
    <h1 class="text-blue-600 text-2xl font-bold mb-2">遊客滿意度調查</h1>
    <div>
      歡迎蒞臨西拉雅國家風景區！<br />
      誠摯邀請您填寫滿意度問卷，<br />
      您的意見是我們進步的動力。
    </div>
    <div class="w-full flex justify-center"></div>
  </div>
</template>
