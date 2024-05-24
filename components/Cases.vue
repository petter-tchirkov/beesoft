<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen relative flex flex-col justify-center page pt-0 lg:pt-10">
    <PageTitle title="CASES" />
    <main class="max-h-[400px] px-4 lg:px-0">
      <Swiper :effect="'coverflow'" :shadow="false" :initialSlide="3"
        :modules="[SwiperEffectCreative, SwiperEffectCoverflow]" :grab-cursor="true" :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }" :centered-slides="true" :breakpoints="{
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 5
          }
        }" :coverflow-effect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false
        }" :space-between="30" :loop="true">
        <SwiperSlide v-for="slide in 5">
          <div class="swiper-slide-container">
            <div class="swiper-slide-img relative">
              <img :src="`/images/cases/${slide}.png`" alt="">
              <div class="swiper-slide-content rotate-180">
                <h2 class="text-sequel text-xl">PROJECT 1</h2>
                <p>Mobile application for optimizing sales and fiscalizing operations in stores</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </main>
  </div>
</template>

<style scoped lang="scss">
.swiper {
  width: 100%;
  padding: 1.875rem 0;
}

.swiper-slide {
  height: 388px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: self-start;
  box-shadow: 0.063rem 0.5rem 1.25rem hsl(0deg 0% 0% / 12.16%);
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;

  &-img {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(180deg);
    line-height: 0;
    bottom: -0.063rem;
    border-radius: 2rem;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      object-fit: cover;
      z-index: -1;
      transition: 0.3s ease-in-out;
      transform: rotate(-180deg);
      scale: 1.2;
    }

    svg {
      position: relative;
      display: block;
      width: calc(300% + 1.3px);
      height: 5rem;
      transform: rotateY(180deg);
    }

    .shape-fill {
      fill: #ffffff;
    }
  }

  &-content {
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    padding: 0 1.65rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    width: 100%;
    padding-block: 40px;
    clip-path: polygon(50% 0%, 100% 28%, 100% 100%, 0 100%, 0% 28%);

    >div {
      transform: translateY(-1.25rem);
    }

    h2 {
      font-weight: 700;
      margin-bottom: 0.425rem;
      text-transform: capitalize;
      letter-spacing: 0.02rem;
      text-align: center;
    }

    p {
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-align: center;
      font-size: 10px;
    }

    .show-more {
      width: 3.125rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #24aad9;
      border-radius: 50%;
      box-shadow: 0px 0.125rem 0.875rem #24aad96b;
      margin-top: 1em;
      margin-bottom: 0.2em;
      height: 0;
      opacity: 0;
      transition: opacity 0.3s ease-in;
      margin-left: auto;

      &:hover {
        background: #1184ac;
      }

      svg {
        width: 1.75rem;
        color: #fff;
      }
    }
  }
}

.swiper-slide-container {
  height: 100%;
  border-radius: 2rem;
}

.swiper-slide-active .swiper-slide-container {
  box-shadow: 0px 0px 20px #ff2300;
}

.swiper-slide-active:hover img {
  transform: scale(1.2) rotate(-185deg);
}

.swiper-slide-active:hover .show-more {
  opacity: 1;
  height: 3.125rem;
}

.swiper-slide-active:hover p {
  display: block;
  overflow: visible;
}

.swiper-slide-shadow-right {
  border-radius: 2rem;
}

.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right {
  background-image: none;
}

@media screen and (min-width: 93.75rem) {
  .swiper {
    width: 85%;
  }
}
</style>
