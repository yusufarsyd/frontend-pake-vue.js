//import global API
import Api from '../../api/Api'

const galeri = {

    //set namespace true
    namespaced: true,

    //state
    state: {

        //index galeris
        galeris: [],
    
    },

    //mutations
    mutations: {

        //set state galeris dengan data dari response 
        SET_galeriS(state, data) {
            state.galeris = data
        },
    },

    //actions
    actions: {

        //action getgaleri
        getGaleri({ commit }) {

            //get data galeris ke server
            Api.get('/galeri')
            .then(response => {

                //commit ke mutation SET_GALERIS dengan response data
                commit('SET_galeriS', response.data.data)

            }).catch(error => {

                //show error log dari response
                console.log(error)

            })
        }
    },

    //getters
    getters: {

    }

}

export default galeri