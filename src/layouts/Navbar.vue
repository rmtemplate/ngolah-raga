<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">
        
      </a> -->
      <router-link :to="{ name: 'ngolahraga.index' }" class="navbar-brand">
        <img
          src="../assets/logo.png"
          class="img-fluid logo"
          alt="logo ngolahraga"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" >Beranda</a> -->
            <router-link :to="{ name: 'ngolahraga.index' }" class="nav-link"
              >Beranda</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'ngolahraga.events.index' }"
              class="nav-link"
              >Sport Categories</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              :to="{ name: 'ngolahraga.events.index' }"
              class="nav-link"
              >Download Our App</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              :to="{ name: 'ngolahraga.events.index' }"
              class="nav-link"
              >Contact Us</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              :to="{ name: 'ngolahraga.auth.login' }"
              class="btn _btn_ngolahraga btn-block pl-2 pr-2"
              >Login</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>


<style scoped>
.navbar {
  font-family: "Roboto", sans-serif;
}
/* 
.router-link-active.router-link-exact-active.nav-link {
  color: #a88030;
} */
</style>