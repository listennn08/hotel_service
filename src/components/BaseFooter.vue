<template>
  <footer class="bg-light  pt-md-20">
    <div class="container py-md-5 mx-auto row no-gutters align-items-center justify-content-center">
      <section class="col py-4">
        <h2 class="fz-6 fz-sm-3 mb-4 font-weight-bolder text-dark text-center">
          {{ $t('message.footerSlogan') }}
        </h2>
        <form action="#" method="post" class="row no-gutters">
          <div
            class="form-group font-opensans col-lg-6 col-md-10 offset-lg-3 offset-md-1"
          >
            <div class="input-group">
              <input
                type="email"
                class="form-control h-auto p-3"
                :placeholder="$t('message.yourEmailAddress')"
                v-model="email"
              >
              <div class="input-group-append">
                <button
                  class="btn btn-primary text-uppercase px-md-4 px-2"
                  @click.prevent="submit"
                >
                  <span class="px-md-2 font-weight-bold">
                    {{ $t('message.subscribe') }}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
    <slot name="nav"></slot>
  </footer>
</template>
<script>
export default {
  name: 'Footer',

  data: () => ({
    email: null,
  }),
  methods: {
    submit() {
      if (this.email) {
        this.$swal({});
      }
    },
  },
};
</script>
