<template>
  <div class="container">
    <h1>Pedidos por Negocio</h1>
    <div class="row">
      <div class="col-md">
        <ul v-if="pedidos.length > 0" style="list-style-type:none;">
          <li class="mb-4">
            <cardComponent
              v-for="pedido in pedidos"
              :cardHeader="pedido.usuario.nombre"
              :cardItem="pedido.negocio.tipo"
              :cardDescription="pedido.negocio.nombre"
              :cardText="pedido.productos"
              :cardId="pedido._id"
              :key="pedido._id"
            >
            <b-button
                class="mr-3"
                variant="danger"
                v-on:click="deletePedido(pedido._id)"
                >Delete</b-button>
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
    async getPedidosNegocios() {
      console.log("this.getPedidosNegocios");
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
    deletePedido(pedidoId) {
      const vueInstance = this;
      axios.post("http://localhost:3000/pedido/delete", {
          pedidoId: pedidoId,
        })
        .then(function(response) {
          if (response.status === "200") {
            vueInstance.$bvToast.toast("Eliminado", {
              title: `Eliminado`,
              variant: "success",
              solid: true,
            });
          } else {
            vueInstance.$bvToast.toast(response.data.message, {
              title: "Error",
              variant: "danger",
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
    }
  },
  mounted() {
    this.getPedidosNegocios()
    this.deletePedido()
  },
};
</script>
