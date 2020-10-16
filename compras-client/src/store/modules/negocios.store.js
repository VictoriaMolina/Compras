import axios from "axios";
//import EventBus from '@/pluggins/eventBus'

const state = {
    negociosList: [],
    ciudad: "",
    /*tipo: "",*/
    productosList: [],
    negocio: "",
    producto: ""
};

const getters = {
    getNegocios: (state) => state.negociosList,
    getCiudad: (state) => state.ciudad,
    getNegocio: (state) => state.negocio,
    getProducto: (state) => state.producto,
    getProductos: (state) => state.productosList
};

const actions = {
    async getNegociosAction({commit, state}) {
        try {
            const response = await axios.post("http://localhost:3000/negocio/ciudad", {
              ciudad: state.ciudad,
              //tipo: state.tipo 
            });
    
            if (
              response.data &&
              response.data.data 
            ) {
              commit('SET_NEGOCIOS_LIST', response.data.data)
            }
            console.log(response);
          } catch (error) {
            console.error(error);
          }
    },
    async getProductosAction({commit, state}) {
        console.log("******");
        console.log(state.negocio);
        try {
          const response = await axios.get(
            "http:///localhost:3000/producto/list",{
                params: {negocio: state.negocio}
                
            });
            console.log(state)
  
          if (
            response.data &&
            response.data.data &&
            response.data.data.length > 0
          ) {
            commit('SET_PRODUCTOS', response.data.data)
          }
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },
      async getProductoInfoAction({commit, state}){
        try {
          const response = await axios.get(
            "http:///localhost:3000/producto/info",{
                params:{productoId: state.productoId}
                
            });
            console.log("STATE");
            console.log(state)
  
          if (
            response.data &&
            response.data.data &&
            response.data.data.length > 0
          ) {
            commit('SET_PRODUCTO', response.data.data)
          }
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
        }
    

const mutations = {
    SET_NEGOCIOS_LIST(state, negocios){
        //console.log(negocios)
        state.negociosList = negocios
    },
    SET_CIUDAD(state, ciudad){
        state.ciudad = ciudad
    },
    /*SET_TIPO(state, tipo){
        state.tipo = tipo
    },*/
    SET_PRODUCTOS(state, productos){
        //console.log("******");
        //console.log(productos)
        //console.log(state)
        state.productosList = productos
    },
    SET_NEGOCIO(state, negocio){
        //console.log(negocio)
        //console.log(state)
        state.negocio = negocio
        //console.log(state)
    },
    SET_PRODUCTO(state, producto){
      console.log("producto");
      console.log(producto)
      console.log("state");
      console.log(state)
      state.producto = producto
      console.log(state)
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