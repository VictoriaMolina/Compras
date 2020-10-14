<template>
  <div class="container">
    <div class="row">
      <div class="col-md">
        <ul v-if="pedidos.length > 0" style="list-style-type:none;">
          <li class="mb-4">
            <cardComponent
              v-for="pedido in pedidos"
              :cardHeader= "pedido.usuario"
              :cardDescription= "pedido.negocio"
              :cardId="pedido._id"
              :key="pedido._id">
            </cardComponent>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import cardComponent from '@/components/card';
export default {
    name:"Pedidos",
  components: {
    cardComponent
  },
  data() {
    return {
      pedidos: []
    };
  },
  methods: {
    async getPedidos(usuario) {
      try {
        const response = await Axios.get("http://localhost:3000/pedido/list",{
            usuario: usuario
        });
        if (
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          this.pedidos = response.data.data;
        }
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.getPedidos();
  },
};
</script>