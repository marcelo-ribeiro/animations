<template>
  <ion-app>
    <app-menu />
    <ion-vue-router main />
  </ion-app>
</template>

<script>
import AppMenu from '@/components/AppMenu.vue';

export default {
  components: { AppMenu },
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap');

:root {
  --ion-font-family: 'Nunito', sans-serif;
}

ion-app {
  font-weight: 300;
}
</style>
