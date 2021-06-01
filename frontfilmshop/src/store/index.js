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
            return getAllFilms()
                .then(response => {
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
