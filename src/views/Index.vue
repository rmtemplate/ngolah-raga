<template>
  <Navbar />

  <div class="container">
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/image/banner.png"
            class="d-block w-100"
            alt="Banner"
          />

          <div class="caption">
            <div class="row">
              <div class="col-8">
                <h1>
                  Enjoy Your <br />
                  Sports Lifestyle
                </h1>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur.
                </h6>
                <div class="mt-3 d-lg-block d-none">
                  <button class="btn btn-_daftar">
                    Daftarkan Komunitas Anda
                  </button>
                  <button class="btn btn-_gabung ms-4">
                    Gabung Komunitas Kita
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MenuBanner />
    <section class="__section">
      <h6>Acara</h6>

      <CardAcara />
    </section>
  </div>
</template>

<script>
import Navbar from "../layouts/Navbar.vue";
import MenuBanner from "./components/MenuBanner.vue";
import CardAcara from "./components/CardAcara.vue";

export default {
  name: "App",
  components: {
    Navbar,
    MenuBanner,
    CardAcara,
  },
};
</script>

<style scoped>
.carousel.slide {
  text-align: left !important;
}
.carousel .carousel-item img {
  border-radius: 10px;
  position: relative;
}

.carousel .carousel-item .caption {
  position: absolute;
  top: 8px;
  left: 16px;
  padding: 20px;
}

.carousel .carousel-item .caption h1 {
  font-family: "Roboto", sans-serif;
  color: #a88030;
  font-weight: bold;
  font-size: 21px;
}

.carousel .carousel-item .caption h6 {
  font-family: "Roboto", sans-serif;
  color: #a88030;
  font-weight: bold;
  font-size: 10px;
}

.__section h6 {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: black;
  font-size: 30px;
  text-align: center;
}

@media (min-width: 992px) {
  .__section {
    margin-top: 130px;
  }
  .carousel .carousel-item img {
    border-radius: 10px;
    position: relative;
  }

  .carousel .carousel-item .caption {
    position: absolute;
    top: 8px;
    left: 16px;
    padding: 70px;
  }

  .carousel .carousel-item .caption h1 {
    font-family: "Roboto", sans-serif;
    color: #a88030;
    font-weight: bold;
    font-size: 3.2rem;
  }

  .carousel .carousel-item .caption h6 {
    font-family: "Roboto", sans-serif;
    color: #a88030;
    font-weight: bold;
    font-size: 1.2rem;
  }
}
</style>

