//import global API
import Api from '../../api/Api'

const auth = {

    //set namespace true
    namespaced: true,

    //state
    state: {

        //state untuk "token", pakai localStorage, untuk menyimpan informasi tentang token
        token: localStorage.getItem('token') || '',

        //state "user", pakai localStorage, untuk menyimpan data user yang sedang login
        user: JSON.parse(localStorage.getItem('user')) || {}, 

    },

    //mutations
    mutations: {

        //update state "token" dan state "user" dari hasil response
        AUTH_SUCCESS(state, token, user) {
            state.token   = token // <-- assign state "token" dengan response "token"
            state.user    = user // <-- assign state "user" dengan response data "user"
        },

        //update state user dari hasil response register / login
        GET_USER(state, user) {
            state.user = user // <-- assign state user dengan response data user
        },

    },

    //actions
    actions: {

        //action register
        register({ commit }, user) {

            //define callback promise
            return new Promise((resolve, reject) => {

                //send data ke server
                Api.post('/register', {

                        //data yang dikirim ke serve untuk proses register
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        password_confirmation: user.password_confirmation

                    })

                    .then(response => {

                        //define variable dengan isi hasil response dari server
                        const token = response.data.token
                        const user = response.data.data

                        //set localStorage untuk menyimpan token dan data user
                        localStorage.setItem('token', token)
                        localStorage.setItem('user', JSON.stringify(user))

                        //set default header axios dengan token
                        Api.defaults.headers.common['Authorization'] = `Bearer ${token}`

                        //commit auth success ke mutation
                        commit('AUTH_SUCCESS', token, user)

                        //commit get user ke mutation
                        commit('GET_USER', user)

                        //resolve ke component dengan hasil response
                        resolve(response)

                    }).catch(error => {

                        //jika gagal, remove localStorage dengan key token
                        localStorage.removeItem('token')

                        //reject ke component dengan hasil response
                        reject(error.response.data)

                    })

            })
        },

        //action getUser
        getUser({ commit }) {

            //ambil data token dari localStorage
            const token = localStorage.getItem('token')

            Api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            Api.get('/user')
            .then(response => {
                
                //commit ke mutatuin GET_USER dengan hasil response
                commit('GET_USER', response.data)

            })
        },

    },

    //getters
    getters: {

        //get current user
        currentUser(state) {
            return state.user // <-- return dengan data user
        },

        //loggedIn
        isLoggedIn(state) {
            return state.token // return dengan data token
        },

    }

}

export default auth