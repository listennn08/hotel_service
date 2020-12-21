<template>
  <nav class="navbar navbar-expand-md">
    <div class="container">
      <button
        class="navbar-toggler d-md-none"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="material-icons">menu</i>
      </button>
      <h1 class="navbar-brand py-2 mb-sm-0">
        <router-link to="/">
          <Logo />
        </router-link>
      </h1>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse order-md-1 order-2"
      >
        <ul class="navbar-nav nav ml-auto">
          <li class="nav-item dropdown d-flex flex-column justify-content-center">
            <a
              href="#"
              id="dropdownMenuLink"
              class="nav-link btn d-flex align-items-center dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="material-icons fz-20">language</i>
              <span class="d-md-none d-block ml-1">{{ $t(`message.${locale}`) }}</span>
            </a>
              <div class="dropdown-menu font-opensans" aria-labelledby="dropdownMenuLink">
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="changeLocale('en')"
                >
                  {{ $t('message.en') }}
                </a>
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="changeLocale('tw')"
                >
                  {{ $t('message.tw') }}
                </a>
              </div>
          </li>
          <li class="nav-item ml-md-5">
            <router-link to="#" class="nav-link text-dark">
              {{ $t('message["Sign up"]') }}
            </router-link>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav nav order-md-2 order-1 ml-md-5">
        <li class="nav-item " v-if="$route.path.includes('my-booking')">
          <a
            class="nav-link text-dark dropdown-toggle d-flex align-items-center"
            hrer="#"
            @click.prevent
          >
            <img
              src="/images/user.jpg" alt=""
              class="rounded-circle border border-primary"
              style="width: 24px; height: 24px"
            >
            <span class="ml-2">
              David Lin
            </span>
          </a>
        </li>
        <li class="nav-item" v-else>
          <router-link to="/login" class="nav-link text-dark">
            {{ $t('message.login') }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import mixins from '@/mixins/mixinFn';
import Logo from '@/components/Logo.vue';

export default {
  name: 'Navbar',
  mixins: [mixins],
  components: {
    Logo,
  },
};
</script>
<style lang="scss" scoped>
.nav-link {
  font-family: 'Roboto', sans-serif;
}
</style>
