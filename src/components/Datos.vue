<template>
  <span>{{Texto}} {{ IP }} La suma es {{Resultado}}</span>
</template>

<script>
import axios from "axios";
import Matematicas from "./Matematicas.vue";


export default {
  name: "Datos",
  data: () => {
    return {
      IP: "",
      Resultado: 0
    };
  },
  props: {
    Texto: String
  },
  mounted() {
    axios({
      method: "GET",
      url: "https://httpbin.org/ip"
    }).then(
      result => {
        this.IP = result.data.origin;
        this.Resultado = Matematicas.Suma(1,2)
      },
      error => {
        console.error(error);
      }
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
