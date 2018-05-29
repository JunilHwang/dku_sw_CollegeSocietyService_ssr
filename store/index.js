import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

const restUrl = 'http://127.0.0.1:5000'
export const store = () => new Vuex.Store({
    state: {
        //isMember: true,
        isMember: false,
        isAdmin: false,
        isHeader: true,
        isFooter: true,
        //member: {idx: 1,id:"test", pw:"1234", name:"테스터"},
        member: null,
        categoryList: {},
        nowCategory: 'notice'
    },
    mutations: {
        login (state, data) {
            state.isMember = true
            state.member = data
        },
        logout (state) {
            state.isMember = false
            state.member = null
        },
        memberUpdate (state, changeData) {
            state.member.name = changeData.name
            state.member.nickname = changeData.nickname
            state.member.email = changeData.email
            sessionStorage.setItem('member', JSON.stringify(state.member))
        },
        memberPwUpdate (state, changeData) {
            state.member.pw = changeData.pw
            sessionStorage.setItem('member', JSON.stringify(state.member))
        },
        setCategory (state, changeData) {
            state.categoryList = changeData
        },
        activeCategory (state, changeData) {
            state.nowCategory = changeData
        }
    },
    actions: {
        // nuxtServerInit is called by Nuxt.js before server-rendering every page
        nuxtServerInit({ commit }, { req }) {
            if (req.session && req.session.member) {
                commit('login', req.session.member)
            }
        }
    }
})

export default store