import { createStore } from 'vuex'

export default createStore({
  state: {
    books: [],
  },
  getters: {
  },
  mutations: {
    addBook(state, book) {
       state.books.push(book)
    },
  },
  actions: {
  },
  modules: {
  }
})
