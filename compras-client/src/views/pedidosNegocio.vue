<template>
  <div class="container">
    <h1>Pedidos por Negocio</h1>
    <div class="row">
      <div class="col-md">
        <ul v-if="pedidos.length > 0" style="list-style-type:none;">
          <li class="mb-4">
            <cardComponent
              v-for="pedido in pedidos"
              :cardHeader="pedido.negocio"
              :cardDescription="pedido.productos"
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
      try {
        const response = await axios.get("http://localhost:3000/pedido/negocioList", {
          params: {
            negocio: "5f8089fc5eb69db1a58be278"
          },
        });

        if (response.data && response.data.data) {
          this.pedidos = response.data.data;
        }
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getPedidos()
  },
};
</script>
