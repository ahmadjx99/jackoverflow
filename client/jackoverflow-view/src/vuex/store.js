import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const state = {
  questions: [],
  questionbyid: {},
  userAnswer: '',
  userQuestion: '',
  signinData: '',
  signupData: {}
}

const mutations = {
  setQuestions (state, payload) {
    console.log('data di mutations', payload)
    state.questions = payload
  },
  setQuestionById (state, payload) {
    state.questionbyid = payload
  },
  setUserQuestion (state, payload) {
    state.userQuestion = payload
  },
  setUserAnswer (state, payload) {
    state.userAnswer = payload
  },
  saveQuestion (state, payload) {
    state.questions.push(payload)
  },
  signin (state, payload) {
    state.signinData = payload
  },
  signup (state, payload) {
    state.signupData = payload
  },
  removeQuestion (state, payload) {
    const idx = state.questions.findIndex((question) => question.id === payload)
    state.questions.splice(idx, 1)
  }
}

const actions = {
  getAllQuestions ({ commit }) {
    http.get('/questions')
    .then(response1 => {
      http.get('/users')
      .then(response2 => {
        console.log('data di actions', response1.data)
        console.log('data di actions 2', response2.data[0].id)
        for (let i = 0; i < response1.data.length; i++) {
          for (let j = 0; j < response2.data.length; j++) {
            if (response1.data[i].UserId === response2.data[j].id) {
              response1.data[i]['name'] = response2.data[j].fullname
              response1.data[i]['photo'] = response2.data[j].photo
            }
          }
        }
        commit('setQuestions', response1.data)
        console.log('xxxxxxxxxxxxxxxxxxxx', response1.data)
      })
    })
    .catch(err => {
      console.error(err)
    })
  },
  getQuestionsById ({ commit }, id) {
    http.get('/questions/' + id)
    .then(response1 => {
      console.log(response1.data)
      http.get('/users')
      .then(response2 => {
        commit('setQuestionById', response1.data)
        for (let i = 0; i < response2.data.length; i++) {
          if (response1.data.UserId === response2.data[i].id) {
            commit('setUserQuestion', {fullname: response2.data[i].fullname, photo: response2.data[i].photo})
            console.log('==========================', response2.data[i].fullname)
          }
        }
      })
      .catch(err => {
        console.error(err)
      })
    })
  },
  createQuestion ({ commit }, newQuestion) {
    http.post('/questions', newQuestion)
    .then(({ data }) => {
      console.log('data save to question', data)
      commit('saveQuestion', data)
    })
    .catch(err => {
      console.error(err)
    })
  },
  deleteQuestion ({commit}, questionId) {
    http.delete('/questions' + questionId)
    .then(({data}) => {
      console.log('data yang di delete', data)
      commit('removeQuestion', data)
    })
  },
  signin ({commit}, formSignin) {
    http.post('/users/signin', formSignin)
    .then(({data}) => {
      console.log('data sign in', data)
      if (typeof (data) === 'object') {
        let token = JSON.stringify(data)
        commit('signin', token)
        localStorage.setItem('token', token)
        router.push('/')
      } else {
        commit('signin', data)
      }
    })
    .catch(err => {
      console.error(err)
    })
  },
  signup ({commit}, formSignup) {
    http.post('/users/signup', formSignup)
    .then(({data}) => {
      console.log('data signup......', data)
      commit('signup', {data: data, notif: 'berhasil signup'})
      formSignup = {}
    })
    .catch(err => {
      console.error(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
