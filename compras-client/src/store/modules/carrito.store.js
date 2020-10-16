import axios from "axios";
//import EventBus from '@/pluggins/eventBus'

const state = {
    pedidos: []
};

const getters = {
    getPedidos: (state) => state.pedidos
};

const actions = {
    async getPedidos() {
        console.log("***");
        try {
          const response = await axios.get("http://localhost:3000/pedido/list", {
            params: {
              usuario: "5f6b65685bab211172ecd4a1",
            },
          });
  
          if (response.data && response.data.data) {
            commit('SET_PEDIDOS', response.data.data)
          }
        } catch (error) {
          console.error(error);
        }
      },
    }
        
    

const mutations = {
    SET_PEDIDOS(state, pedido){
        //console.log(pedido)
        state.pedidos = pedido
    }
}

export default {
    namespaced: true,
    state: {
        ...state
    },
    getters: {
        ...getters
    },
    actions: {
        ...actions
    },
    mutations: {
        ...mutations
    }
}