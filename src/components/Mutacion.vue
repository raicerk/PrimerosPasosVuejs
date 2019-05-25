<template>
  <button @click="ActivarEstado(`${nombre}`)">Cambiar estado</button>
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
    ...mapMutations(["ActivarEstado"])
  }
};
</script>