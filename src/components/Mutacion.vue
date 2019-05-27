<template>
  <div>
    <button class="btn btn-primary" @click="ActivarEstado(`${nombre}`)">Cambiar estado</button>
    <button class="btn btn-primary" @click="FisicoActivarEstado(`${nombre}`)">Cambiar estado fisico</button>
  </div>
</template>

<script>
import { /*mapState,*/ mapMutations } from "vuex";

export default {
  name: "mutacion",
  components: {},
  props: {
    nombre: String
  },
  methods: {
    //...mapMutations(["ActivarEstado"])
    ...mapMutations("contactosNamespace", ["ActivarEstado"]),
    ...mapMutations("fisicosNamespace", ["FisicoActivarEstado"])
  }
};
</script>