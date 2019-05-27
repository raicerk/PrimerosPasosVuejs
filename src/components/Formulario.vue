<template>
  <section class="form">

    <form style="width:80%; margin:0 auto;">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="txtnombre">Nombre:{{form.nombre}}</label>
        <div class="col-sm-6">
          <input id="txtnombre" class="input form-control" type="text" v-model="form.nombre">
        </div>
        <div class="col-sm-4">
          <mutacion :nombre="form.nombre"/>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="txtapellido">Apellido:{{form.apellido}}</label>
        <div class="col-sm-6">
          <input class="input form-control" id="txtapellido" type="text" v-model="form.apellido">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="txtedad">Edad:{{form.edad}}</label>
        <div class="col-sm-6">
          <input class="input form-control" id="txtedad" type="text" v-model.number="form.edad">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Estado:{{form.estado}}</label>
        <div class="col-sm-6">
          <input class="form-check-input" type="checkbox" id="checkbox" v-model="form.estado">
        </div>
      </div>
      <agrega :nombre="form.nombre" :apellido="form.apellido" :edad="form.edad" :estado="form.estado"/>
    </form>
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
        apellido: "",
        edad: 0,
        estado: false
      }
    };
  }
};
</script>