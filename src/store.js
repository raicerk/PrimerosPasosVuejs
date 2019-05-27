import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const contactosModule = {
  namespaced: true,
  state() {
    return {
      contactos: [
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
    }
  },
  mutations: {
    ActivarEstado: (state, nombre) => {
      state.contactos.find(item => item.nombre === nombre).activo = true
      console.log(JSON.stringify(state.contactos))
    },
    AgregaContacto: (state, objeto) => {
      state.contactos.push(objeto);
      console.log(JSON.stringify(state.contactos))
    }
  },  
  actions: {
  }
}

const fisicosModule = {
  namespaced: true,
  state() {
    return {
      fisicos: [
        {
          nombre: "Albert Einstein",
          estado : false
        },
        {
          nombre: "Javier Santaolalla",
          estado : false
        }
      ]
    }
  },
  mutations: {
    FisicoActivarEstado: (state, nombre) => {
      state.fisicos.find(item => item.nombre === nombre).estado = true
      console.log(JSON.stringify(state.fisicos))
    },
    FisicoAgregaFisico: (state, objeto) => {
      state.fisicos.push(objeto);
      console.log(JSON.stringify(state.fisicos))
    }
  },  
  actions: {
  }
}

export default new Vuex.Store({
  strict: true,
  modules: {
    contactosNamespace: contactosModule,
    fisicosNamespace: fisicosModule
  }
})
