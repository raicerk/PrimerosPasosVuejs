import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contactos : [
      {
        nombre: "Juan",
        apellido: "Mora",
        edad: 30,
        activo: false
      },
      {
        nombre: "Carolina",
        apellido: "Ramirez",
        edad: 33,
        activo: false
      }
    ]
  },
  mutations: {
    ActivarEstado: (state,nombre)=>{
      state.contactos.find(item => item.nombre === nombre).activo = true
    },
    AgregaContacto: (state, objeto)=>{
      state.contactos.push(objeto);
    }
  },
  actions: {

  }
})
