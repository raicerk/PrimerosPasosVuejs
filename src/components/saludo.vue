<template>
    <h1>Hola {{ nombre }}</h1>
</template>

<script>
export default {
  name: 'Saludo',
  props: {
    nombre: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
