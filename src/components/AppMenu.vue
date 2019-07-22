<template>
  <ion-menu
    side="start"
    menu-id="first"
  >
    <ion-header>
      <ion-toolbar>
        <ion-title>AnimateOnScroll</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list
        class="ion-no-margin"
      >
        <ion-menu-toggle>
          <ion-item
            button
            @click="$router.push({path: '/'})"
          >
            <ion-icon
              slot="start"
              name="home"
            />
            <ion-label>
              Home
            </ion-label>
          </ion-item>
        </ion-menu-toggle>

        <ion-menu-toggle>
          <ion-item
            button
            router-direction="root"
            router-link="/about"
          >
            <ion-icon
              slot="start"
              name="list-box"
            />
            About
          </ion-item>
        </ion-menu-toggle>

        <ion-menu-toggle>
          <ion-item
            button
            router-direction="root"
            @click="$router.push({path: '/about'})"
          >
            <ion-icon
              slot="start"
              name="logo-github"
            />
            <ion-label>
              Github
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
export default {
  name: 'AppMenu',
};
</script>

<style lang="scss" scoped>
ion-content {
  --bacground: --ion-color-light;
}
</style>
