<template>
  <app-base>
    <header
      class="hero fadeIn"
      data-animation
    >
      <h1>
        <div
          class="title"
          data-animation="slideInDown"
          data-animation-delay="600ms"
        >
          <b>Animate</b>
        </div>
        <div
          class="subtitle"
          data-animation="slideInUp"
          data-animation-delay="600ms"
        >
          On Scroll
        </div>
      </h1>
    </header>

    <section>
      <h1>
        <b>Slide</b> Animation
      </h1>
      <div
        class="box"
        data-animation="slideInRight"
      />
      <div
        class="box"
        data-animation="slideInUp"
        data-animation-delay="300ms"
      />
      <div
        class="box"
        data-animation="slideInDown"
        data-animation-delay="600ms"
      />
      <div
        class="box"
        data-animation="slideInLeft"
        data-animation-delay="900ms"
      />
    </section>

    <section>
      <h1><b>Zoom</b> Animation</h1>
      <div
        class="box"
        data-animation="zoomIn"
      />
      <div
        class="box"
        data-animation="zoomIn"
        data-animation-delay="300ms"
      />
      <div
        class="box"
        data-animation="zoomIn"
        data-animation-delay="600ms"
      />
    </section>

    <section>
      <h1><b>Reverse Zoom</b> Animation</h1>
      <div
        class="box"
        data-animation="zoomReverseIn"
      />
      <div
        class="box"
        data-animation="zoomReverseIn"
        data-animation-delay="300ms"
      />
      <div
        class="box"
        data-animation="zoomReverseIn"
        data-animation-delay="600ms"
      />
    </section>

    <section>
      <h1><b>Fade</b> Animation</h1>
      <div
        class="box"
        data-animation="fadeIn"
      />
      <div
        class="box"
        data-animation="fadeIn"
        data-animation-delay="300ms"
      />
      <div
        class="box"
        data-animation="fadeIn"
        data-animation-delay="600ms"
      />
    </section>

    <section>
      <h1><b>Flip</b> Animation</h1>
      <div
        class="box"
        data-animation="flipInY"
      />
      <div
        class="box"
        data-animation="flipInY"
        data-animation-delay="300ms"
      />
      <div
        class="box"
        data-animation="flipInY"
        data-animation-delay="600ms"
      />
    </section>
  </app-base>
</template>

<script>
import AppBase from '@/components/AppBase.vue';

export default {
  name: 'Home',
  components: { AppBase },
};
</script>

<style lang="scss" scoped>
h1 {
  width: 100%;
  font-weight: 300;
  text-align: center;
  margin: 0 0 3rem;
  font-size: 2.5rem;
}
b {
  font-weight: 700;
}
header,
section {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  min-height: calc(100vh - 56px);
  justify-content: space-around;
  align-items: center;
  align-content: center;
  padding: 3rem 1rem;
  color: rgba(0, 0, 0, 0.5);
}
header {
  background: linear-gradient(45deg, hsl(340, 80%, 50%), hsl(270, 80%, 50%));
  color: #fff;
}
header h1 {
  margin: 0;
  color: #fff;
}
header .title {
  font-size: 4rem;
}
header .subtitle {
  font-size: 3rem;
}
section:nth-child(odd) {
  background: hsl(210, 10%, 97.5%);
}
.box {
  width: 7rem;
  height: 7rem;
  margin: 1rem;
  background: linear-gradient(45deg, hsl(340, 80%, 50%), hsl(270, 80%, 50%));
  border-radius: 2rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}
</style>
