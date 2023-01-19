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
                element: "Fivestar",
                type: "Fivestar",
                text: "整體舒適性?",
                order: 0,
                required: true,
                options: [],
            },
            {
                id: 2,
                element: "Fivestar",
                type: "Fivestar",
                text: "你覺得?",
                order: 0,
                required: true,
                options: [],
            },
            {
                id: 3,
                element: "Fivestar",
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
                element: "div",
                type: "",
                order: 0,
                // required: true,
                options: [
                    {
                        element: "p",
                        text: "歡迎留下您的建議！您的意見是我們進步的動力。",
                    }
                ],
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
        pages: pages,
        disable: {
            left: false,
            right: false,
        },
    },
    mutations: {
        pushPage(state, payload) {
            let router = payload.router;
            let num = payload.num;
            let force = payload.force;
            if (!router || !num) return;
            let id = parseInt(state.id);
            if (num > 0 && id >= state.pages.length && !force)
                return;
            else if (num < 0 && id <= 0 && !force)
                return;
            id += parseInt(num);
            state.id = id;

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