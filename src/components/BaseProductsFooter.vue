<template>
  <footer class="bg-light">
    <div class="container py-4 mx-auto row no-gutters align-items-center justify-content-center">
      <div class="col-lg-5 col-md-4 col-12">
        <h2 class="fz-3 mb-md-0 mb-2 font-weight-bolder text-dark">
          {{ $t('message.footerSlogan') }}
        </h2>
      </div>
      <div class="col-lg-7 col-md-8 col-12">
        <form action="#" method="post" class="row no-gutters">
          <div
            class="form-group mb-0 font-opensans col"
          >
            <form class="input-group">
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
            </form>
          </div>
        </form>
      </div>
    </div>
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
