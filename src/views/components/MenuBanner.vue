<template>
  <div class="row justify-content-center">
    <div class="col-lg-10" style="position: relative">
      <div class="abs-c">
        <div class="__card p-3">
          <div class="_card-body">
            <div class="row">
              <div class="col-lg-2 col-3">
                <router-link
                  class="_card-link"
                  :to="{ name: 'ngolahraga.events.index' }"
                >
                  <div class="_card">
                    <img src="../../assets/image/acara.svg" alt="" />
                  </div>
                  <h6>Acara</h6>
                </router-link>
              </div>

              <div class="col-lg-2 col-3">
                <router-link
                  class="_card-link"
                  :to="{ name: 'ngolahraga.events.index' }"
                >
                  <div class="_card">
                    <img src="../../assets/image/berita.svg" alt="" />
                  </div>
                  <h6>Berita</h6>
                </router-link>
              </div>

              <div class="col-lg-2 col-3">
                <router-link
                  class="_card-link"
                  :to="{ name: 'ngolahraga.events.index' }"
                >
                  <div class="_card">
                    <img src="../../assets/image/komunitas.svg" alt="" />
                  </div>
                  <h6>Komunitas</h6>
                </router-link>
              </div>

              <div class="col-lg-2 col-3">
                <router-link
                  class="_card-link"
                  :to="{ name: 'ngolahraga.events.index' }"
                >
                  <div class="_card">
                    <img src="../../assets/image/ssb.svg" alt="" />
                  </div>
                  <h6>SSB</h6>
                </router-link>
              </div>

              <div class="col-lg-2 col-3">
                <router-link
                  class="_card-link"
                  :to="{ name: 'ngolahraga.events.index' }"
                >
                  <div class="_card">
                    <img src="../../assets/image/venue.svg" alt="" />
                  </div>
                  <h6>Venue</h6>
                </router-link>
              </div>

              <div class="col-lg-2 col-3">
                <router-link
                  class="_card-link"
                  :to="{ name: 'ngolahraga.events.index' }"
                >
                  <div class="_card">
                    <img src="../../assets/image/toko.svg" alt="" />
                  </div>

                  <h6>Toko</h6>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBanner",
};
</script>


<style scoped>
._card img {
  padding: 20px;
}

._card {
  margin-bottom: 10px;
}
.__card h6 {
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  color: #00142a;
  font-size: 12px;
}
._card-link {
  text-decoration: none;
  padding-bottom: 15px;
}

@media (min-width: 992px) {
  .abs-c {
    position: absolute;
    margin-top: -92px;
    margin-bottom: 100px;
  }
  ._card-link {
    margin-bottom: 0;
  }
  ._card-body {
    padding: 0.5rem 5rem;
  }
  .__card h6 {
    font-size: 1rem;
  }
}
</style>