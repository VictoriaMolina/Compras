<template>
  <div class="mt-5 mr-5 ml-5">
    <b-form  @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.nom"
          required
          placeholder="Nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Descripción:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.desc"
          required
          placeholder="Descripcion"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Imagen:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.img"
          required
          placeholder="Imagen"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Costo:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.costo"
          required
          placeholder="Costo"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Negocio:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.negocio"
          required
          placeholder="Negocio"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Disponibilidad:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.disp"
          required
          placeholder="Disponibilidad"
        ></b-form-input>
      </b-form-group>

      <b-button  variant="primary" v-on:click="nuevoProducto()">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <!--<b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        nom: "",
        desc: "",
        img: "",
        costo: "",
        negocio: "",
        disp: ""
      },
      show: true,
    };
  },
  methods: {
    nuevoProducto() {
      const vueInstance = this;
      axios
        .post("http://localhost:3000/producto/new", {
          nom: this.form.nom,
          desc: this.form.desc,
          img: this.form.img,
          costo: this.form.costo,
          negocio: this.form.negocio,
          disp: this.form.disp
        })
        .then(function(response) {
          if (response.status === "200") {
            vueInstance.$bvToast.toast("Producto creado", {
              title: `Producto creado`,
              variant: "success",
              solid: true,
            });
          }
        })
        .catch(function(error) {
          vueInstance.$bvToast.toast(error.message, {
            title: "Error",
            variant: "danger",
            solid: true,
          });
        });
    },
    
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.nom = "";
      this.form.desc = "";
      this.form.img = "";
      this.form.costo = "";
      this.form.negocio = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
