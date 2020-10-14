<template>
  <div>
    <h1>productoInfo</h1>
    <div class="Cart">
          <p>
            Cart({{cart}})
          </p>
    </div>
    <div class="row" v-if="productos.length > 0">
      <div class="col-sm mt-5">
        <b-card-group deck>
          <b-card
            v-for="producto in productos"
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
import Axios from "axios";
//import productComponent from '@/components/producto';
//import EventBus from '@/pluggins/eventBus'
export default {
  name: "productoInfo",
  data() {
    return {
      productos: [],
      cart: 0
    };
  },
  methods: {
    getProductoInfo() {
      const productoId = this.$route.params.id;
      Axios.get("http:///localhost:3000/producto/info", {
          params: {
                pid: productoId,
            },
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    },
    async getProducto(negocio) {
      try {
        const response = await Axios.get(
          "http:///localhost:3000/producto/list", {
            negocio: negocio
          });

        if (
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          this.productos = response.data.data;
        }
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    addCart: function(){
      this.cart += 1;
    },
    removeFromCart: function(){
      this.cart -= 1;
    }
  },
  mounted() {
    this.getProductoInfo();
    this.getProducto();
  },
};
</script>
<style scoped></style>
