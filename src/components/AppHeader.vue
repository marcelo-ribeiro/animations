<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button />
      </ion-buttons>

      <ion-title>{{ $route.meta.title }}</ion-title>

      <ion-buttons slot="end">
        <ion-button>
          <ion-icon
            slot="icon-only"
            name="share"
          />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: {
      type: String,
      default: 'AnimationOnScroll',
    },
  },
};
</script>

<style>

</style>
