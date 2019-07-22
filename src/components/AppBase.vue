<template>
  <ion-page>
    <app-header />

    <ion-content
      v-animate:scrollEvent="'ionScroll'"
      :scroll-events="true"
    >
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: { AppHeader },
};
</script>

<style>

</style>
