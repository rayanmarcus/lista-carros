<template>
  <div id="app" class="container">
    <div class="row">
      <ListaCarros/>
    </div>
  </div>
</template>

<script>
import ListaCarros from './components/ListaCarros.vue';

export default {
  name: 'App',
  components: {
    ListaCarros,
  },
};
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
