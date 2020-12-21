<template>
  <div class="mb-md-4 media row no-gutters position-relative rounded-lg">
    <div
      class="col-md-4 col-5 img-background mr-lg-3 mr-2 rounded-lg-left"
      :style="`background-image: url('/images/shopItems/${item.img}');`"
    >
      <div class="ratio ratio-4x3 d-flex align-items-center">
        <i class="ml-1 bg-white rounded-circle p-2 material-icons hover-show">
          keyboard_arrow_left
        </i>
        <i class="ml-auto mr-1 bg-white rounded-circle p-2 material-icons hover-show">
          keyboard_arrow_right
        </i>
      </div>
    </div>
    <div class="media-body h-100 pt-lg-3 pt-md-2 pr-lg-3 pr-2">
      <div class="row no-gutters justify-content-between">
        <div class="col-lg-7 col-md-6 position-static">
          <div class="fz-12 font-opensans">
            <a href="#" class="text-decoration-none">
              {{ $t(`message.${item.village}`) }}, {{ $t(`message.${item.city}`) }}
            </a>
            <span class="d-lg-inline-block d-none">
            ・{{ fromCenterText(item.fromCenter) }}
            </span>
          </div>
          <router-link to="/product-detail" class="text-dark stretched-link">
            <h3 class="font-weight-bold mt-0 mb-lg-3 mb-md-2 mb-1 fz-md-2 fz-sm-2">
              {{ $t(`message["${item.hotelName}"]`) }}
            </h3>
          </router-link>
        </div>
        <div
          :class="`col-lg-5 col-md-6 col d-flex flex-lg-row flex-md-column
          align-items-lg-start align-items-end justify-content-lg-end justify-content-start`"
        >
          <div class="d-flex">
            <i
              v-for="rate in item.rate"
              :key="rate"
              class="material-icons fz-18"
            >
              star_rate
            </i>
          </div>
          <span class="ml-1 text-secondary font-opensans fz-14">
            {{ item.rate.toFixed(1) }} ({{ item.comment }})
          </span>
        </div>
      </div>
      <div class="row no-gutters justify-content-between">
        <div class="col-md-7 col-12">
          <p class="fz-14 text-secondary font-weight-bold mb-lg-1 mb-0 font-opensans">
            {{ $t(`message["${item.roomType}"]`) }}
          </p>
          <p class="fz-12 text-secondary mb-lg-3 mb-md-2 mb-0 font-opensans">
            <span class="text-lowercase">
              {{ detactPlural(item.guest, 'pguest') }}・{{ detactPlural(item.bed, 'bed') }}
            </span>
            ({{ $t(`message.${item.bedSize }`) }})
          </p>
          <div class="d-md-flex font-opensans flex-lg-row flex-md-column align-items-start d-none">
            <div
              v-if="item.freeCancellation"
              :class="`fz-12 py-1 px-2 mr-1 bg-light rounded-pill
              mb-lg-0 mb-md-1 fz-md-10 fz-sm-10`"
            >
              {{ $t('message.freeCancellation') }}
            </div>
            <div
              v-if="item.noPrepayment"
              class="fz-12 py-1 px-2 bg-light rounded-pill fz-md-10 fz-sm-10"
            >
              {{ $t('message.noPrepayment') }}
            </div>
          </div>
        </div>
        <div class="col-md-5 col-12 d-flex flex-column align-items-end justify-content-end">
          <template>
            <div class="d-md-block d-none text-secondary font-opensans fz-12">
              {{ $t('message.perNight') }}
            </div>
            <del
              v-if="item.salePrice"
              class="fz-2 fz-md-14 text-secondary"
            >
              {{ $t(`message.${currency}`) }} {{ item.originPrice | price }}
            </del>
            <span
              v-else
              class="fz-3 fz-md-2 fz-sm-2 font-weight-bold"
            >
              {{ $t(`message.${currency}`) }} {{ item.originPrice | price }}
            </span>
          </template>
          <div
            v-if="item.salePrice"
            class="fz-3 fz-md-2 fz-sm-2 font-weight-bold"
          >
            {{ $t(`message.${currency}`) }}
            <span class="text-primary">
              {{ item.salePrice | price }}
            </span>
          </div>
        </div>
      </div>
    </div> <!-- media body -->
  </div> <!-- media -->
</template>
<script>
import { mapGetters } from 'vuex';
// import StarRating from 'vue-star-rating';

export default {
  name: 'ShopCard',
  components: {
    // StarRating,
  },
  computed: {
    ...mapGetters(['locale', 'currency']),
    fromCenterText() {
      return (distance) => {
        const km = this.$t('message.km');
        const fromCenter = this.$t('message["from center"]');
        if (this.locale === 'en') {
          return `${distance} ${km} ${fromCenter}`;
        }
        return `${fromCenter} ${distance} ${km}`;
      };
    },
    detactPlural() {
      return (number, text) => {
        if (number) {
          if (number > 1) {
            return `${number} ${this.$t(`message["${text}s"]`)}`;
          }
          return `${number} ${this.$t(`message["${text}"]`)}`;
        }
        return '';
      };
    },
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

};
</script>
