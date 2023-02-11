 
  import {createStore} from "vuex"

const store = createStore({
    state: {
        user: {
            data: { name: 'MyName'},
            token: null
        }
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {}
})

export default store;