import { createStore } from 'vuex'
const pages = [
    {
        title: "滿意度調查",
        blocks: [
            {
                id: 1,
                component: "FormFivestar",
                text: "您覺得環境整潔度如何?",
                order: 0,
                required: true,
                options: [],
                value: "0",
                hide: false,
                completed: false,
                verified: false,
                childrens: []
            },
            {
                id: 2,
                component: "FormFivestar",
                text: "您覺得設備是否齊全?",
                order: 0,
                required: true,
                options: [],
                value: "0",
                hide: false,
                completed: false,
                verified: false,
                childrens: []
            },
            {
                id: 3,
                component: "FormFivestar",
                text: "您覺得動線引導標示是否清晰?",
                order: 0,
                required: true,
                options: [],
                value: "0",
                hide: false,
                completed: false,
                verified: false,
                childrens: []
            },
            {
                id: 3,
                component: "FormFivestar",
                text: "您覺得此環境的安全性如何?",
                order: 0,
                required: true,
                options: [],
                value: "0",
                hide: false,
                completed: false,
                verified: false,
                childrens: []
            },
            {
                id: 3,
                component: "FormFivestar",
                text: "您覺得此環境的照明是否足夠?",
                order: 0,
                required: true,
                options: [],
                value: "0",
                hide: false,
                completed: false,
                verified: false,
                childrens: []
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
                value: "",
                hide: false,
                completed: false,
                verified: false,
                childrens: []
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
                        childrens: [{
                            id: 6,
                            hide: true
                        },
                        {
                            id: 7,
                            hide: true
                        }]
                    },
                    {
                        element: "label",
                        text: "需要",
                        value: "1",
                        childrens: [
                            {
                                id: 6,
                                hide: false
                            },
                            {
                                id: 7,
                                hide: false
                            }
                        ]
                    },
                ],
                required: true,
                value: "",
                hide: false,
                completed: false,
                verified: false,
                childrens: []
            },
            {
                component: "FormSelect",
                type: "",
                text: "故障物品",
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
                    {
                        id: 6,
                        element: "option",
                        text: "門鎖",
                        value: "3",
                    },
                    {
                        id: 6,
                        element: "option",
                        text: "地面",
                        value: "3",
                    },
                ],
                required: true,
                value: "",
                hide: true,
                completed: false,
                verified: false,
                childrens: []
            },
            {
                component: "FormSelect",
                type: "",
                text: "故障狀態描述",
                id: 7,
                order: 0,
                options: [
                    {
                        id: 5,
                        element: "option",
                        text: "備品不足",
                        value: "1",
                    },
                    {
                        id: 6,
                        element: "option",
                        text: "積水",
                        value: "2",
                    },
                    {
                        id: 6,
                        element: "option",
                        text: "損壞",
                        value: "3",
                    },
                ],
                required: true,
                value: "",
                hide: true,
                completed: false,
                verified: false,
                childrens: []
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
                value: "",
                hide: false,
                completed: false,
                verified: false
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
                value: "",
                hide: false,
                completed: false,
                verified: false,
                childrens: []
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
                value: "",
                hide: false,
                completed: false,
                verified: false,
                childrens: []
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
                value: "",
                hide: false,
                completed: false,
                verified: false,
                childrens: []
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
                value: "",
                hide: false,
                completed: false,
                verified: false,
                childrens: []
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
        blockRefs: {},
        pageNum: 0
    },
    mutations: {
        pushPage(state, payload) {
            let router = payload.router;
            let num = payload.num;
            let force = payload.force;
            if (state.pageNum <= 0) {
                router.push("/page/1");
                return;
            }
            if (!checkVerified(state) && num > 0) return;
            let nowId = 0;
            let routerVal = router.currentRoute.value;
            if (routerVal.name == "page") {
                nowId = parseInt(router.currentRoute.value.params.id.toString());
            } else if (routerVal.name == "end") {
                nowId = state.pages.length + 1;
            }

            if (nowId <= 0 && num < 0) return;
            if (nowId >= state.pages.length && num > 0) {
                if (!force) return;
            }
            nowId += num;

            let url = "";

            if (nowId < 1) url = "/start";
            else if (nowId <= state.pages.length) url = "/page/" + nowId;
            else url = "/end";
            router.push(url);

            function checkVerified(state) {
                let nowBlocks = state.pages[state.pageNum - 1].blocks;
                let isOk = true;
                nowBlocks.forEach((nowBlock) => {
                    nowBlock.verified = true;
                    if (nowBlock.required && !nowBlock.completed && !nowBlock.hide) isOk = false;
                });
                return isOk;
            }
        },
        changeVal(state, payload) {
            let block = payload.block;
            let value = payload.value;
            block.value = value;
            block.verified = true;
            block.completed = value === "" ? false : true;
        }
    }
})