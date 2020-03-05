<template>
  <section class="parallax-container">
    <div id="parallax-layer-0" ref="layer0" class="parallax-layer" />
    <div id="parallax-layer-1" ref="layer1" class="parallax-layer" />
    <div id="parallax-layer-2" ref="layer2" class="parallax-layer" />
    <div id="parallax-layer-3" ref="layer3" class="parallax-layer" />
    <div id="parallax-layer-4" ref="layer4" class="parallax-layer" />
    <div id="parallax-layer-5" ref="layer5" class="parallax-layer" />
  </section>
</template>

<script>
export default {
  name: "Parallax",
  data() {
    return {
      speeds: [2, 6, 16, 26, 36, 0]
    }
  },
  mounted() {
    window.addEventListener("scroll", this.update)
    window.addEventListener("resize", this.update)
    this.update()
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.update)
    window.removeEventListener("resize", this.update)
  },
  methods: {
    update() {
      const top = window.pageYOffset
      for (let i = 0; i < this.speeds.length; i++) {
        const y = -((top * this.speeds[i]) / 100)
        this.$refs[
          "layer" + i
        ].style.transform = `translate3d(0px, ${y}px, 0px)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.parallax-container {
  min-height: 100vh;
  max-height: 100vh;
  margin-top: -$navbar-height;
  overflow-y: hidden;

  .parallax-layer {
    position: fixed;
    min-width: 100%;
    min-height: 100vh;

    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;
  }
}

@media screen and (max-width: $desktop - 1px) {
  #parallax-layer-1 {
    background-position-x: 35%;
  }

  #parallax-layer-4 {
    background-size: calc(3840px / 2.5);
    background-position-x: 55%;
    background-position-y: 90%;
  }
}

#parallax-layer-0 {
  background-image: url("~assets/img/landing/day/CelesteParallax-0.webp");
  z-index: -7;
}
#parallax-layer-1 {
  background-image: url("~assets/img/landing/day/CelesteParallax-1.webp");
  z-index: -6;
}
#parallax-layer-2 {
  background-image: url("~assets/img/landing/day/CelesteParallax-2.webp");
  z-index: -5;
}
#parallax-layer-3 {
  background-image: url("~assets/img/landing/day/CelesteParallax-3.webp");
  z-index: -4;
}
#parallax-layer-4 {
  background-image: url("~assets/img/landing/day/CelesteParallax-4.webp");
  z-index: -3;
}
#parallax-layer-5 {
  position: relative;
  background-image: url("~assets/img/landing/day/CelesteParallax-5.webp");
  z-index: -2;

  &:after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: -1;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(
      180deg,
      #1d1101 0%,
      $color--darker--opaque 100%
    );
  }
}
</style>
