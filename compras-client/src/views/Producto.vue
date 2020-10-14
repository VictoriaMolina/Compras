<template>
  <div>
      <h1>Productos</h1>
    <!--<div class="Cart">
          <p>
            Cart({{cart}})
          </p>
    </div>-->
    <div class="row" v-if="getProducto.length > 0">
      <div class="col-sm mt-5">
        <b-card-group deck>
          <b-card
            v-for="producto in getProducto"
            :title="producto.nombre"
            :img-src="producto.imagen"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            :key="producto._id"
          >
            <b-card-text>{{ producto.descripcion }}</b-card-text>
            <!--<router-link :to="getRoute(producto.id)">Info</router-link>-->
            <b-button variant="primary" v-on:click= "addCart()" >Agregar a carrito</b-button>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>
<script>
//import Axios from "axios";
//import productComponent from '@/components/producto';
//import EventBus from '@/pluggins/eventBus'
import { mapGetters } from "vuex";
export default {
  name: "Producto",
  data() {
    return {
      //cart: 0
    };
  },
  computed: {
    ...mapGetters("negocios", ["getProductos"]),
  },
  methods: {
    async getProducto() {
      const x = await this.$store.dispatch("negocios/getProductosAction");
      console.log(x)
    },
    addCart: function(){
      this.cart += 1;
    },
    removeFromCart: function(){
      this.cart -= 1;
    }
  }
};
</script>
<style scoped></style>
