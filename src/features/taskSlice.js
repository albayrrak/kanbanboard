import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    backlog: {
        name: "backlog",
        cards: []
    },
    todo: {
        name: "todo",
        cards: []
    },
    inprogress: {
        name: "inprogress",
        cards: []
    },
    done: {
        name: "done",
        cards: []
    },

};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        // Backlog Cards Ekle 
        addBacklog: (state, action) => {
            const newBacklog = {
                id: Math.floor(Math.random() * 1000),
                title: action.payload.title,
                desc: action.payload.desc,
                status: action.payload.status
            };
            state.backlog.cards.push(newBacklog);
            localStorage.setItem("Backlog", JSON.stringify(state.backlog.cards))
        },

        // To do Cards Ekle
        addTodo: (state, action) => {
            const newBacklog = {
                id: Math.floor(Math.random() * 1000),
                title: action.payload.title,
                desc: action.payload.desc,
                status: action.payload.status
            };
            state.todo.cards.push(newBacklog);
            localStorage.setItem("Todos", JSON.stringify(state.todo.cards))

        },

        // Inprogress Cards Ekle
        addInp: (state, action) => {
            const newBacklog = {
                id: Math.floor(Math.random() * 1000),
                title: action.payload.title,
                desc: action.payload.desc,
                status: action.payload.status
            };
            state.inprogress.cards.push(newBacklog);
            localStorage.setItem("Inprogress", JSON.stringify(state.inprogress.cards))

        },

        // Done Cards Ekle
        addDone: (state, action) => {
            const newBacklog = {
                id: Math.floor(Math.random() * 1000),
                title: action.payload.title,
                desc: action.payload.desc,
                status: action.payload.status
            };
            state.done.cards.push(newBacklog);
            localStorage.setItem("Done", JSON.stringify(state.done.cards))

        },
    }
});

export const { addBacklog, addTodo, addInp, addDone, remove } = taskSlice.actions;
export default taskSlice.reducer;
