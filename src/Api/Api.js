const initialState = {
    backlog: {
        name: "backlog",
        cards: [
            { title: "deneme", desc: "içerik", status: "success" },
            { title: "deneme", desc: "içerik", status: "success" },
        ],
    },
    todo: {
        name: "todo",
        cards: [
            { title: "deneme", desc: "içerik", status: "success" },
            { title: "deneme", desc: "içerik", status: "success" },
        ],
    },
    inprogress: {
        name: "inprogress",
        cards: [
            { title: "deneme2", desc: "içerik", status: "success" },

        ],
    },
    design: {
        name: "design",
        cards: [
            { title: "deneme", desc: "içerik", status: "success" },
            { title: "deneme", desc: "içerik", status: "success" },

        ],
    },
};

export { initialState }