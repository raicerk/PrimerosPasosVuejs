<template>
  <div>
    <button @click="AgregaNuevo()">Agrega contacto</button>
    <button @click="AgregaNuevoFisico()">Agrega fisico</button>
  </div>
</template>

<script>
import { /*mapState,*/ mapMutations } from "vuex";

export default {
  name: "agrega",
  components: {},
  props: {
    nombre: String,
    apellido: String,
    edad: Number,
    estado: Boolean
  },
  methods: {
    ...mapMutations('contactosNamespace', ["AgregaContacto"]),
    ...mapMutations('fisicosNamespace', ["FisicoAgregaFisico"]),
    AgregaNuevo () {
      this.AgregaContacto({
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        activo: this.estado
      })
    },
    AgregaNuevoFisico () {
      this.FisicoAgregaFisico({
        nombre: this.nombre,
        estado: this.estado
      })
    }
  }
};
</script>