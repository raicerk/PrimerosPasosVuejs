<template>
  <section class="form">
    <div class="field">
      <label class="label">Nombre:{{form.nombre}}</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" v-model="form.nombre">
        <mutacion :nombre="form.nombre"/>
      </div>
    </div>
    <div class="field">
      <label class="label">Apellido:{{form.apellido}}</label>
      <input class="input" type="text" placeholder="Text input" v-model="form.apellido">
    </div>
    <div class="field">
      <label class="label">Edad:{{form.edad}}</label>
      <input class="input" type="text" placeholder="Text input" v-model.number="form.edad">
    </div>
    <div class="field">
      <label class="label">Estado:{{form.estado}}</label>
      <input type="checkbox" id="checkbox" v-model="form.estado">
    </div>

    <div class="field">
      <agrega :nombre="form.nombre" :apellido="form.apellido" :edad="form.edad" :estado="form.estado"/>
    </div>
  </section>


  
</template>

<script>
import mutacion from "./Mutacion.vue";
import agrega from "./Agrega.vue";

export default {
  name: "Formulario",
  components: {
    mutacion,
    agrega
  },
  data: () => {
    return {
      form: {
        nombre: "",
        apellido:"",
        edad: 0,
        estado: false
      }
    };
  }
};
</script>