import Vue from 'vue'
import Vuex from 'vuex'
import {getAllFilms} from "../api/api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        films: []
    },
    mutations: {
        setFilms(state, films) {
            state.films = films
        }
    },
    actions: {
        fetchFilms(context) {
            console.log("Prawda")
            return getAllFilms()
                .then(response => {
                    console.log("111")
                    context.commit("setFilms", response.data)
                })
        }

    },
    getters: {
        getFilms(state) {
            return state.films
        }
    }
})
