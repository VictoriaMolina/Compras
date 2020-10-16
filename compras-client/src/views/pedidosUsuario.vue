<template>
  <div class="container">
    <h1>Pedidos por Usuario</h1>
    <div class="row">
      <div class="col-md">
        <ul v-if="pedidos.length > 0" style="list-style-type:none;">
          <li class="mb-4">
            <cardComponent
              v-for="pedido in pedidos"
              :cardHeader="pedido.usuario.nombre"
              :cardDescription="pedido.negocio.nombre"
              :cardText="pedido.negocio.tipo"
              :cardItem="pedido.productos"
              :cardId="pedido._id"
              :key="pedido._id"
            >
            </cardComponent>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cardComponent from "@/components/card";
export default {
  name: "Pedidos",
  components: {
    cardComponent,
  },
  data() {
    return {
      pedidos: [],
    };
  },
  methods: {
    async getPedidos() {
      console.log("***");
      try {
        const response = await axios.get("http://localhost:3000/pedido/list", {
          params: {
            usuario: "5f6b65685bab211172ecd4a1",
          },
        });

        if (response.data && response.data.data) {
          this.pedidos = response.data.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getPedidos();
  },
};
</script>
