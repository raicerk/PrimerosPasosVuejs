<template>
  <div>
    <button @click="AgregaNuevo()">Agrega contacto</button>
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
    ...mapMutations(["AgregaContacto"]),
    AgregaNuevo () {
      this.AgregaContacto({
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        activo: this.estado
      })
    }
  }
};
</script>