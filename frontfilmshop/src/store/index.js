import Vue from 'vue'
import Vuex from 'vuex'
import {getAllFilms, getAllOpinions} from "../api/api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        films: [],
        opinions: [],
        cart: [],
    },
    mutations: {
        setFilms(state, films) {
            state.films = films
        },
        setOpinions(state, opinions) {
            state.opinions = opinions
        },
        addToCard(state, film) {
            for (const f of state.cart) {
                if (f.title === film.title &&
                    f.price === film.price &&
                    f.description === film.description &&
                    f.directorName === film.directorName) {
                    return null;
                }
            }
            state.cart.push(film)
        },
        removeFromCard(state,film){
            state.cart = state.cart.filter(f => f.title !== film.title &&
                f.price !== film.price &&
                f.description !== film.description &&
                f.directorName !== film.directorName)
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
        },
    },
    getters: {
        getFilms(state) {
            return state.films
        },
        getOpinions(state) {
            return state.opinions
        },
        getCardElements(state) {
            return state.cart
        },
    }
})
