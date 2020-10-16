//import axios from "axios";
//import EventBus from '@/pluggins/eventBus'

export default {
    state: {
      pedido: []
    },
    mutations: {
      incrementarCantidad(state, pedido) {
        pedido.cantidad++;
      },
      sumarProducto(state, producto) {
        state.pedido.push({
          id: producto.id,
          cantidad: 1
        });
      },
      eliminarProducto(state, producto) {
        state.pedido.splice(producto, 1);
      },
      emptyCart(state) {
        state.cart = [];
      }
    },
    actions: {
      /*agregarPedido({state}){
        axios.post('http://localhost:3000/pedido/new', {
        usuario: state.currentTaskName,
        producto: state.currentTaskDesc,
        negocio: state.currentTaskDesc

    })
        .then(function (response) {
            if (response.status === "200") {
                EventBus.$emit("Success");
                
            } else {
                EventBus.$emit("Error", response.data.message);
            }
        })
        .catch(function (error) {
            EventBus.$emit("Error", error.message);
        });
    }*/
    },
    getters: {
      productsOnCart(state, getters, rootState) {
        return state.cart.map(item => {
          const producto = rootState.productos.productos.find(
            producto => producto.id === item.id
          );
          return {
            nombre: producto.nombre,
            costo: producto.costo,
            cantidad: item.cantidad
          };
        });
      },
      cartTotal(state, getters) {
        return getters.productsOnCart.reduce(
          (total, current) => total + current.costo * current.cantidad,
          0
        );
      }
    }
  };