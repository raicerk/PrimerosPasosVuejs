<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Saludo nombre="Juan" />
    <Datos Texto="TU IP es:"/> 
  </div>
</template>

<script>
// @ is an alias to /src
import Saludo from '@/components/saludo.vue'
import Datos from '@/components/Datos.vue'


export default {
  name: 'about',
  components: {
    Saludo,
    Datos
  }
}
</script>