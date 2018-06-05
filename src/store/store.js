import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoItems: [],
    },
    getters: {
        getAllItems: state => {
            return state.todoItems.map(item => item)
        },
        getProcessingItems: state => {
            return state.todoItems.filter(item => {
                return item.isComplete === false
            })
        },
        getCompletedItems: state => {
            return state.todoItems.filter(item => {
                return item.isComplete === true
            })
        }

    },
    mutations: {
        addTodoItem: (state, item) => {
            state.todoItems.push(item)
        },
        updateTodoItem: (state, update) => {
            state.todoItems.splice(update.index, 1, update.item)
        }
    }
})