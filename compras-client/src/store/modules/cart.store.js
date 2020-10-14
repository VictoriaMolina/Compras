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
      agregarProducto(context, producto) {
        if (producto) {
          context.commit("incrementarCantidad", producto);
        } else {
          context.commit("sumarProducto", producto);
        }
        context.commit("eliminarProducto", producto);
      }
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