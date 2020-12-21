<template>
  <div id="app" class="h-100">
    <Navbar v-if="showNavbar"/>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Navbar from '@/components/BaseNavbar.vue';

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(['locale']),
    showNavbar() {
      return !this.$route.path.includes('login');
    },
  },
  watch: {
    locale() {
      this.$i18n.locale = this.locale;
    },
  },
};
</script>
