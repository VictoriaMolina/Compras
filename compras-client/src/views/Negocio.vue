<template>
  <div>
    <div class="container">
      <div class="row" v-if="getNegocios.length > 0">
        <div class="col-sm mt-5 ml-5">
          <b-card-group deck>
            <b-card
              v-for="negocio in getNegocios"
              :title="negocio.nombre"
              :img-src="negocio.imagen"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
              :key="negocio._id"
            >
              <b-card-text>{{ negocio.tipo }} </b-card-text>
              <router-link :to="getRoute(negocio._id)">Productos</router-link>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "Negocio",
  data() {
    return {
      productos: [],
    };
  },
  computed: {
    ...mapGetters("negocios", ["getNegocios"]),
  },
  methods: {
    async getProducto() {
      await this.$store.dispatch("negocios/getProductosAction");
    },
    getRoute(negocio) {
      console.log(`/producto/negocio/${negocio}`)
      this.updateNegocio(negocio)
      return `/producto/negocio/${negocio}`;
    },
    updateNegocio(negocio){
      console.log(negocio)
      this.$store.commit('negocios/SET_NEGOCIO', negocio);
    }
  },
  mounted() {
    this.getProducto();
  }
};
</script>
<style scoped></style>
