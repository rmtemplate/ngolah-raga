<template>
  <div class="p-relative mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <Carousel
          :settings="settings"
          :breakpoints="breakpoints"
          :wrapAround="true"
        >
          <Slide v-for="slide in 10" :key="slide">
            <router-link :to="{ name: 'ngolahraga.events.index' }">
              <div class="__card-acara">
                <img
                  src="../../assets/image/card-acara.png"
                  class="img-fluid"
                />
                <div class="card-body">
                  <h6>Futsal</h6>
                  <h6>FUN FUTSAL CUP 2022</h6>
                  <small>30 Januari 2022</small>
                </div>
              </div></router-link
            >
          </Slide>
        </Carousel>
      </div>
    </div>
    <section class="__bg-ngolahraga-dark"></section>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "CardAcara",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    breakpoints: {
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    },
  }),
};
</script>

<style  scoped>
.carousel__slide {
  padding: 10px;
}
.carousel__slide a {
  text-decoration: none;
}
.p-relative {
  position: relative;
}

.__bg-ngolahraga-dark {
  height: 200px;
  border-radius: 10px;
  margin-top: -40%;
  background-color: #00142a;
}
.__card-acara {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  text-align: left !important;
}

.__card-acara img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.__card-acara .card-body h6:first-child {
  color: #a88030;
  font-weight: 900;
}

.__card-acara .card-body h6:nth-child(2) {
  color: #00142a;
  font-weight: 900;
  margin: 0;
  padding: 0;
}

.__card-acara .card-body small {
  color: #a7a7a7;
  font-weight: lighter;
}

@media (min-width: 992px) {
  .__bg-ngolahraga-dark {
    height: 200px;
    border-radius: 10px;
    margin-top: -13%;
    background-color: #00142a;
  }
}
</style>