<template>
  <div class="home">
    <img src="https://template.canva.com/EADkKY0HyYs/2/0/400w-aDK9ZmlTpl8.jpg">
    <div class="row">
      <div class="mx-auto row">
        <!--v-model-->
        <b-form-input 
        class="mr-sm-2" 
        placeholder="Search" 
        style="width: 400px"
        :value="negocioCiudad"
        @input="updateCiudad">
        </b-form-input>

        <b-button 
        variant="outline-warning"
        class="my-2 my-sm-0" 
        type="submit" 
        v-on:click="getNegocios()"
        :to="getRoute()"
        >Buscar</b-button>
      </div>
    </div>
    

  </div>
</template>

<script>
//const axios = require("axios");

import {mapGetters} from "vuex";
export default {
  name: 'Home',
  data() {
    return{
      negocios: [],
      negocioCiudad: ""
    }
  },
  computed: {
    ...mapGetters('negocios', [
      "getCiudad"
    ])
  },
  methods: {
    async getNegocios() {
      await this.$store.dispatch('negocios/getNegociosAction');
    },
    getRoute(){
      console.log(`/negocio/ciudad/${this.getCiudad}`)
      return `/negocio/ciudad/${this.getCiudad}`;
      
    },
    updateCiudad(value){
      this.$store.commit('negocios/SET_CIUDAD', value);
    },
},
  mounted() {
  }
}
</script>
