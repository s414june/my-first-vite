import { createStore } from 'vuex'
const pages = [
    {
        title: "滿意度調查",
        blocks: [
            {
                id: 1,
                component: "FormFivestar",
                text: "整體舒適性?",
                order: 0,
                required: true,
                options: [],
                value: "0"
            },
            {
                id: 2,
                component: "FormFivestar",
                text: "你覺得?",
                order: 0,
                required: true,
                options: [],
                value: "0"
            },
            {
                id: 3,
                component: "FormFivestar",
                text: "你覺得?",
                order: 0,
                required: true,
                options: [],
                value: "0"
            },
        ],
    },
    {
        title: "報修調查",
        blocks: [
            {
                component: "FormSelect",
                text: "您現在所在位置：",
                id: 4,
                order: 0,
                options: [
                    {
                        element: "option",
                        text: "男廁",
                        value: "1",
                    },
                    {
                        element: "option",
                        text: "女廁",
                        value: "2",
                    },
                ],
                required: true,
                value: ""
            },
            {
                component: "FormCheck",
                type: "radio",
                text: "是否需要報修？",
                id: 5,
                order: 0,
                options: [
                    {
                        element: "label",
                        text: "不需要",
                        value: "0",
                        children: {
                            id: 6,
                            hide: true
                        }
                    },
                    {
                        element: "label",
                        text: "需要",
                        value: "1",
                        children: {
                            id: 6,
                            hide: false
                        }
                    },
                ],
                required: true,
                value: ""
            },
            {
                component: "FormSelect",
                type: "",
                text: "故障物品",
                hide: true,
                id: 6,
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
                value: ""
            },
        ],
    },
    {
        title: "意見回饋",
        blocks: [
            {
                id: 7,
                component: "FormInfo",
                element: "div",
                type: "",
                order: 0,
                // required: true,
                options: [
                    {
                        id: 1,
                        element: "p",
                        text: "歡迎留下您的建議！您的意見是我們進步的動力。",
                    }
                ],
                value: ""
            },
            {
                id: 8,
                component: "FormControl",
                element: "textarea",
                type: "",
                text: "意見回饋",
                order: 0,
                required: false,
                options: [],
                value: ""
            },
            {
                id: 9,
                component: "FormControl",
                element: "input",
                type: "text",
                text: "姓名",
                order: 0,
                required: false,
                options: [],
                value: ""
            },
            {
                id: 10,
                component: "FormControl",
                element: "input",
                type: "text",
                text: "聯絡電話",
                order: 0,
                required: false,
                options: [],
                value: ""
            },
            {
                id: 11,
                component: "FormControl",
                element: "input",
                type: "email",
                text: "電子信箱",
                order: 0,
                required: false,
                options: [],
                value: ""
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
        progress: 0,
        blockRefs: {}
    },
    mutations: {
        pushPage(state, payload) {
            let router = payload.router;
            let num = payload.num;
            let nowId = 0;
            let routerVal = router.currentRoute.value;
            if (routerVal.name == "page") {
                nowId = parseInt(router.currentRoute.value.params.id.toString());
            } else if (routerVal.name == "end") {
                nowId = state.pages.length + 1;
            }

            if (nowId <= 0 && num < 0) return;
            if (nowId >= state.pages.length && num > 0) return;
            nowId += num;

            let url = "";
            if (nowId > state.pages.length) return;

            if (nowId < 1) url = "/start";
            else url = "/page/" + nowId;
            router.push(url);
        }
    }
})