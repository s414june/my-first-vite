import { createStore } from 'vuex'
import { useRouter } from "vue-router";
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
/**
 * 创建仓库和导出
 */
export default createStore({
    state: {
        num: 111,
        id: 0,
        pages: pages
    },
    mutations: {
        pushPage(state, payload) {
            let router = payload.router;
            if (!router) return;
            let num = payload.num;
            let id = 0;
            if (num) {
                id = state.id + num;
                state.id = id;
            } else id = ++state.id;

            let url = ""
            if (id < 1)
                url = "/start"
            else if (id > state.pages.length)
                url = "/end"
            else
                url = "/page/" + id;

            router.push(url);
        }
    }
})