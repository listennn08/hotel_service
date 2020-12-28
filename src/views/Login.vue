<template>
  <div
    class="h-100 img-background-multiple position-relative"
    :style="`background-image: url('${background}'), linear-gradient(90deg, #fff, #fff)`"
  >
    <nav class="navbar px-0 mb-lg-5 mb-md-4">
      <div class="container h-auto">
        <h1 class="navbar-brand py-2 mr-auto">
          <router-link to="/">
            <Logo />
          </router-link>
        </h1>
        <router-link to="/" class="d-sm-none text-dark">
            <i class="material-icons">close</i>
        </router-link>
      </div>
    </nav>
    <main
      class="pt-lg-5 container"
    >
      <section
        class="py-2"
      >
        <div
          class="row mt-md-auto my-sm-0 my-auto"
        >
          <div class="col-8 d-lg-flex d-none flex-column align-items-start">
            <h2
              class="fz-6 mb-3 font-weight-bolder"
            >
              {{ $t('message["An ideal hotel makes a wonderful Trip."]') }}
            </h2>
            <p
              class="text-secondary font-opensans mb-auto"
            >
              {{ $t('message["Discover your dream destination and hotel on ALOHA.com"]') }}
            </p>
          </div>
          <div
              class="tag position-absolute b-3"
            >
              <i class="material-icons mr-2">location_on</i>
              <span class="text-capitalize">
                {{ `${$t('message.Osaka')}${
                  enSpace}${$t('message.castel')}, ${$t('message.Japan')}` }}
              </span>
            </div>
          <div class="col-lg-4 col-md-6 col offset-lg-0 offset-md-3">
            <h3 class="h2 mb-3 font-weight-bold">
              {{ $t('message.login') }}
            </h3>
            <form action="" class="font-opensans">
              <div class="form-group">
                <label
                  class="mb-0 text-secondary"
                  for="email"
                >
                  {{ $t('message.email') }}
                </label>
                <input id="email" type="email" class="form-control h-auto py-3">
              </div>
              <div class="form-group">
                <label
                  class="mb-0 text-secondary"
                  for="password"
                >
                  {{ $t('message.passwords') }}
                </label>
                <input id="password" type="password" class="form-control h-auto py-3">
              </div>
              <p class="fz-12">
                {{ $t('message["By signing in or creating an account, you agree with our"]') }}
                <a href="#">
                  {{ $t('message["Terms & Conditions and Privacy Statement"]') }}
                </a>
              </p>
              <div class="form-group mb-5">
                <div class="custom-control custom-checkbox">
                  <input id="remember" type="checkbox" class="custom-control-input" checked>
                  <label
                    class="custom-control-label mb-0 text-secondary"
                    for="remember"
                  >
                    {{ $t('message["Remember me"]') }}
                  </label>
                </div>
              </div>
              <button
                class="w-100 py-3 mb-2 btn btn-primary text-uppercase font-weight-bold"
              >
                {{ $t('message.login') }}
              </button>
              <p class="fz-14 text-secondary text-center">
                {{ $t('message["haven\'t account"]') }}
                <a href="#" class="font-weight-bold">
                  {{ $t('message["Sign up"]') }}
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import Logo from '@/components/Logo.vue';

@Component({
  components: {
    Logo,
  },
  computed: {
    ...mapGetters(['locale']),
  },
})
export default class Login extends Vue {
  private background = '/hotel_service/images/login.jpg'

  locale!: string

  get enSpace() {
    return (this.locale === 'en' ? ' ' : '');
  }
}
</script>
