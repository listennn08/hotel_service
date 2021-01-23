<template>
  <div
    style="height: 90%;"
    class="position-relative"
  >
    <div
      class="bg-light d-md-none"
    >
      <div
        class="container"
      >
        <div class="d-flex p-3 py-2">
          <div
            class="d-flex total"
            :class="{hide}"
          >
            <p class="text-secondary mb-0">
              {{ $t('message.Total') }}</p>
            <span
              class="font-opensans font-weight-bold ml-2"
            >TWD 4,633</span>
          </div>
          <div class="ml-auto">
            <a
              href="#reservationCollapse"
              class="d-flex align-items-center text-decoration-none"
              @click.prevent="toggleHide"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <span class="font-weight-bold fz-14 text-uppercase">
                {{ $t('message.Detail') }}
              </span>
              <i
                class="material-icons"
                :class="{'rotate': hide}"
              >keyboard_arrow_down</i>
            </a>
          </div>
        </div>
        <div
          class="collapse bg-light px-4  pb-3 font-opensans"
          aria-labelledby="dropdownMenuButton"
          :class="{'show position-absolute rounded-bottom shadow': hide}"
        >
          <p
            class="font-weight-bold pt-3"
            :class="{'border-top border-white': hide}"
          >
            {{ $t('message["Booking details"]') }}
          </p>
          <ul class="list-unstyled pb-3 border-bottom border-white">
            <li class="text-secondary my-1 fz-14">
              {{ `${dateLocale(stayStartDate)} - ${dateLocale(stayEndDate)}` }}
              ・{{ `2 ${$t('message.nights')}` }}
            </li>
            <li class="text-secondary my-1 fz-14">
              {{ `2 ${$t('message.adults')}・1 ${$t('message.room')}` }}
            </li>
            <li class="text-secondary my-1 fz-14">
              {{ $t('message["Rachada Hotel"]') }}
            </li>
          </ul>
          <p class="font-weight-bold">
            {{ $t('message["Price summary"]') }}
          </p>
          <ul class="list-unstyled pb-3 border-bottom border-white">
            <li class="d-flex text-secondary my-1 fz-14">
              {{ $t('message["Deluxe Suite with Pool"]') }}
              <div class="ml-auto">
                TWD 3,960
              </div>
            </li>
            <li class="d-flex text-secondary my-1 fz-14">
              {{ $t('message.VAT') }} (7%)
              <div class="ml-auto">
                TWD 277
              </div>
            </li>
            <li class="d-flex text-secondary my-1 fz-14">
              {{ $t('message["Property service charge"]') }}
              <div class="ml-auto">
                TWD 396
              </div>
            </li>
          </ul>
          <div class="d-flex">
            <div class="text-secondary">
              {{ $t('message.Total') }}
            </div>
            <div class="font-weight-bold ml-auto">TWD 4,633</div>
          </div>
        </div>
      </div>
    </div>
    <section class="mt-4 container h-100 position-md-relative">
      <div class="row no-gutters h-75 mb-5">
        <div class="col-lg-8 col row mx-md-auto mx-0 h-100">
          <div class="col-md-6 col pl-md-0">
            <h3 class="font-weight-bold mb-4">
              {{ $t('message["Reservation details"]') }}
            </h3>
            <form action="">
              <div class="form-group">
                <label
                  for="name"
                  class="text-secondary mb-0"
                >
                  {{ $t('message.name') }}
                </label>
                <input
                  id="name"
                  type="text"
                  class="form-control h-auto py-3"
                >
              </div>
              <div class="form-group">
                <label
                  for="email"
                  class="text-secondary mb-0"
                >
                  {{ $t('message.email') }}
                </label>
                <input
                  id="email"
                  type="email"
                  class="form-control h-auto py-3"
                >
              </div>
              <div class="form-group">
                <label
                  for="phone"
                  class="text-secondary mb-0"
                >
                  {{ `${$t('message.phone')} (${$t('message.optional')})` }}
                </label>
                <input
                  id="phone"
                  type="tel"
                  class="form-control h-auto py-3"
                >
              </div>
              <button
                class="col btn btn-primary py-3 text-uppercase font-weight-bold"
                @click="goToNext()"
              >
                {{ $t('message.reserve') }}
              </button>
            </form>
            <div class="text-center">
              <a
                href="#"
                class="text-decoration-none fz-14"
              >
                {{ $t('message["Reserve now, pay at stay"]') }}
              </a>
            </div>
          </div>
          <div class="col-6 pr-0 d-md-block d-none">
            <div class="rounded bg-light p-4 font-opensans">
              <p class="font-weight-bold">
                {{ $t('message["Booking details"]') }}
              </p>
              <ul class="list-unstyled pb-4 mb-4 border-bottom border-white">
                <li class="text-secondary my-1 fz-14">
                  {{ `${dateLocale(stayStartDate)} - ${dateLocale(stayEndDate)}` }}
                  ・{{ `2 ${$t('message.nights')}` }}
                </li>
                <li class="text-secondary my-1 fz-14">
                  {{ `2 ${$t('message.adults')}・1 ${$t('message.room')}` }}
                </li>
                <li class="text-secondary my-1 fz-14">
                  {{ $t('message["Rachada Hotel"]') }}
                </li>
              </ul>
              <p class="font-weight-bold">
                {{ $t('message["Price summary"]') }}
              </p>
              <ul class="list-unstyled pb-md-4 pb-2 mb-4 border-bottom border-white">
                <li class="d-flex text-secondary my-1 fz-14">
                  {{ $t('message["Deluxe Suite with Pool"]') }}
                  <div class="ml-auto">
                    TWD 3,960
                  </div>
                </li>
                <li class="d-flex text-secondary my-1 fz-14">
                  {{ $t('message.VAT') }} (7%)
                  <div class="ml-auto">
                    TWD 277
                  </div>
                </li>
                <li class="d-flex text-secondary my-1 fz-14">
                  {{ $t('message["Property service charge"]') }}
                  <div class="ml-auto">
                    TWD 396
                  </div>
                </li>
              </ul>
              <div class="d-flex">
                <div class="text-secondary">
                  {{ $t('message.Total') }}
                </div>
                <div class="font-weight-bold ml-auto">TWD 4,633</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSimpleNavbar class="position-absolute in-bottom" />
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { format } from 'date-fns';
import { enUS, zhTW } from 'date-fns/locale';
import FooterSimpleNavbar from '@/components/BaseFooterSimpleNavbar.vue';

export default {
  name: 'Reservation',
  components: {
    FooterSimpleNavbar,
  },
  data: () => ({
    stayStartDate: new Date(2020, 5, 17), // '17 June 2020',
    stayEndDate: new Date(2020, 5, 19), // '19 June 2020',
    hide: false,
  }),
  computed: {
    ...mapGetters(['locale']),
    dateLocale() {
      return (date) => (this.locale === 'en'
        ? format(date, 'dd MMM yyyy', { locale: enUS })
        : format(date, 'Y年MMMdo', { locale: zhTW })
      );
    },
  },
  methods: {
    goToNext() {
      this.$router.push('/received');
    },
    toggleHide() {
      this.hide = !this.hide;
    },
  },
};
</script>
<style lang="scss" scoped>
  .dropdown-menu-right {
    left: 0;
    right: 0;
  }
  .in-bottom {
    left: 15px;
    right: 15px;
  }
  .total {
    transition: opacity .2s;
    opacity: 1;
    &.hide {
      opacity: 0;;
    }
  }
  .material-icons {
    transition: transform .2s;
    transform: rotate(0);

    &.rotate {
      transform: rotate(180deg);
    }
  }

  .collapse {
    transition: all .2s;
    &.position-absolute {
      left: 0;
      right: 0;
      z-index: 100;
    }
  }
</style>
