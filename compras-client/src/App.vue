<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" class="navbar navbar-dark bg-dark">
      <b-navbar-brand href="#">
        <img src="https://placekitten.com/g/30/30" alt="Kitten" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/form" class="nav-link">ProductosForm</router-link>
          <router-link to="/pedidos" class="nav-link">Usuario</router-link>
          <router-link to="/negocioList" class="nav-link">Negocio</router-link>
          <!--<router-link to="/list/:ciudad" class="nav-link">Lista</router-link>-->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #343a40;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #404040;
}

</style>
