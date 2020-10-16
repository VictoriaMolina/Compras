<template>
  <div>
    <h1>Productos</h1>
    <div class="nav-bar">
      <div class="Cart">
        <div class="h2 mb-0">
          <b-icon icon="cart3"></b-icon>
        </div>
        <span class="amount">{{ cartAmount }}</span>
        <span class="description">Cart</span>
      </div>
    </div>
    <div class="row" v-if="getProductos.length > 0">
      <div class="col-sm mt-5 ml-5">
        <b-card-group deck>
          <b-card
            v-for="producto in getProductos"
            :title="producto.nombre"
            :img-src="producto.imagen"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            :key="producto._id"
          >
            <b-card-text>{{ producto.descripcion }}</b-card-text>
            <b-card-text>{{ producto.costo }}</b-card-text>
            <b-button variant="outline-dark" v-on:click="addCart()"
              >Agregar a carrito</b-button
            >
            <b-button
              variant="outline-warning"
              class="my-2 my-sm-0 ml-2"
              type="submit"
              v-on:click="getProductoInfo()"
              :to="getRoute(producto._id)"
              >Info</b-button
            >
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
      cart: [],
    };
  },
  computed: {
    ...mapGetters("negocios", ["getProductos"]),
    cartAmount() {
      return this.cart.length;
    },
  },
  methods: {
    async getProductoInfo() {
      await this.$store.dispatch("negocios/getProductoInfoAction");
    },
    addCart() {
      this.cart.push(this.getProducto);
    },
    removeFromCart: function() {
      this.cart -= 1;
    },
    getRoute(producto) {
      console.log("PRODUCTO");
      console.log(producto);
      this.updateProducto(producto);
      return `/producto/info/${producto}`;
    },
    updateProducto(producto) {
      console.log(producto);
      this.$store.commit("negocios/SET_PRODUCTO", producto);
    },
  },
};
</script>
<style scoped></style>
