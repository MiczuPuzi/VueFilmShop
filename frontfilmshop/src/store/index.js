import Vue from 'vue'
import Vuex from 'vuex'
import {getAllFilms, getAllOpinions} from "../api/api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        films: [],
        opinions: []
    },
    mutations: {
        setFilms(state, films) {
            state.films = films
        },
        setOpinions(state,opinions){
            state.opinions = opinions
        }
    },
    actions: {
        fetchFilms(context) {
            return getAllFilms()
                .then(response => {
                    context.commit("setFilms", response.data)
                })
        },
        fetchOpinions(context) {
            return getAllOpinions()
                .then(response => {
                    context.commit("setOpinions", response.data)
                })
        }

    },
    getters: {
        getFilms(state) {
            return state.films
        },
        getOpinions(state){
            return state.opinions
        }
    }
})
