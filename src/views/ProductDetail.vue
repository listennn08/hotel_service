<template>
  <section>
    <BaseSearchForm class="d-md-block d-none" />
    <div class="bg-light d-flex align-items-center">
      <div class="d-flex align-items-center my-1 p-3">
        <i class="material-icons">arrow_back</i>
      </div>
      <span class="text-secondary fz-12 font-opensans">
        Bangkok・17 June - 19 June・2 adults・1 room
      </span>
    </div>

    <div class="d-md-none d-block mb-3">
      <div
        style="background-image: url('//hotel_service/images/shopItems/items1-1.jpg')"
        class="ratio ratio-4x3 img-background d-flex align-items-center"
      >
        <a
          href="#"
          class="d-flex align-tiems-center text-decoration-none"
        >
          <i class="material-icons text-white">keyboard_arrow_left</i>
        </a>
        <a
          href="#"
          class="ml-auto d-flex align-tiems-center text-decoration-none"
        >
          <i class="material-icons text-white">keyboard_arrow_right</i>
        </a>
      </div>
    </div>
    <div class="container pt-lg-4 pb-lg-5 mb-md-4 pb-3">
      <div class="row no-gutters flex-nowrap mb-lg-3 d-md-flex d-none">
        <div class="col-7 rounded">
          <div
            style="background-image: url('//hotel_service/images/shopItems/items1-1.jpg')"
            class="ratio ratio-4x3 img-background rounded"
          ></div>
        </div>
        <div class="pl-lg-2 pl-1 col-5 row no-gutters">
          <div class="col-12 mb-lg-2 mb-1">
            <div
              style="background-image: url('//hotel_service/images/shopItems/items1-2.jpg')"
              class="ratio ratio-16x9 img-background rounded"
            >
            </div>
          </div>
          <div class="col row no-gutters flex-nowrap">
            <div class="col-5 mr-lg-2 mr-1">
              <div
                style="background-image: url('//hotel_service/images/shopItems/items1-3.jpg')"
                class="ratio ratio-1x1 img-background rounded"
              >
              </div>
            </div>
            <div class="col row no-gutters">
              <div class="col-12 mb-lg-2 mb-1">
                <div
                style="background-image: url('//hotel_service/images/shopItems/items1-4.jpg')"
                class="ratio ratio-4x3 img-background rounded"
              >
              </div>
            </div>
            <button class="col btn btn-dark py-lg-3 py-2">
              {{ $t('message["See All 10 photos"]') }}
            </button>
            </div>
          </div>
        </div>
      </div> <!-- top photo -->
      <div class="d-flex align-items-md-center flex-md-row flex-column">
        <h3 class="fz-4 font-weight-bold mr-3 mb-0">
          {{ $t('message["Rachada Hotel"]') }}
        </h3>
        <div class="d-flex align-items-center">
          <i
            v-for="val in 4"
            :key="val"
            class="material-icons"
          >star_rate</i>
          <span class="text-secondary font-opensans ml-1">4.0(283)</span>
        </div>
      </div><!-- title -->
      <div class="mb-md-4 mb-3">
        <a
          href="#"
          class="font-opensans fz-sm-12"
        >
          {{ $t('message["318 Phaya Thai Road, Ratchathewi,'+
          ' Phaya Thai, 10400 Bangkok, Thailand"]') }}
        </a>
      </div><!-- addr -->
      <div class="row mb-5">
        <p class="col-lg-7 col-md-9 col text-secondary fz-14">
          {{ $t('message["The Rachada Hotel is an establishment that provides paid lodging' +
          ' on a short-term basis. Facilities provided may range from a modest-quality mattress' +
          ' in a small room to large suites with bigger, higher-quality beds, a dresser,' +
          ' a refrigerator and other kitchen facilities, upholstered chairs, a flat screen' +
          ' television,  and en-suite bathrooms."]') }}
        </p>
      </div><!-- p -->
      <h4 class="font-weight-bold mb-md-4 mb-3">
        {{ $t('message["Select your room"]') }}
      </h4>
      <div class="d-md-flex d-none mb-lg-5 mb-md-4 align-items-center font-opensans">
        <div class="bg-light rounded text-secondary px-3 py-2 fz-md-14">
          {{ $t('message.Bangkok') }}, {{ $t('message.Thailand') }}
        </div>
        <div class="bg-light rounded text-secondary px-3 py-2 ml-2 fz-md-14">
          {{ dateLocale(startDate) }} - {{ dateLocale(endDate) }}・2 {{ $t('message.nights') }}
        </div>
        <div class="bg-light rounded text-secondary px-3 py-2 ml-2 fz-md-14">
          2 {{ $t('message.peopleUnit') }}{{ $t('message.adults') }}・1 {{ $t('message.room') }}
        </div>
        <a href="#" class="uppercase font-weight-bold font-opensans ml-4">
          {{ $t('message["edit detail"]') }}
        </a>
      </div>
      <ul class=list-unstyled>
        <li class="row no-gutters font-weight-bold border-bottom pb-2 d-md-flex d-none">
          <div class="col-8 form-row m-0">
            <div class="mr-auto">
              {{ $t('message["ROOM TYPE"]') }}
            </div>
            <div class="col-2 text-center">
              {{ $t('message.SLEEPS') }}
            </div>
          </div>
          <div class="col-4 form-row no-gutters">
            <div class="col-6 text-center">
              {{ $t('message.PRICE') }}
            </div>
            <div class="col-6 text-center">
              {{ $t('message.ROOMS') }}
            </div>
          </div>
        </li>
        <li
          v-for="(roomItem, index) in roomItems"
          :key="index"
          class="py-md-4 py-0 mb-md-0 mb-2"
          :class="{'border-bottom': index !== roomItems.length - 1}"
        >
          <div
            class="row no-gutters rounded justify-content-md-start justify-content-center"
          >
            <div class="col-md-8 col-12 form-row mx-0">
              <div class="col-lg-5 col-md-4 col-6 p-0">
                <div
                  class="img-background rounded-lg-left rounded-sm-left-top"
                  :style="`background-image: url('//hotel_service/images/shopItems/${roomItem.img}');`"
                >
                  <div class="ratio ratio-4x3-p"></div>
                </div>
              </div>
              <div
                class="col-lg-5 col-md-6 col-6 d-flex flex-column justify-content-lg-start
                justify-content-md-center border-right-top-1 rounded-sm-right-top
                pt-2 pl-lg-3 pl-md-1 pl-2"
              >
                <h5 class="font-opensans font-weight-bold mb-lg-1 mb-0 fz-md-2 fz-sm-2">
                  {{ $t(`message["${roomItem.roomType}"]`) }}
                </h5>
                <p class="fz-12 text-secondary mb-lg-3 mb-0">
                  {{ roomItem.bed }} {{ $t('message.bed') }}
                  ({{ $t(`message["${roomItem.bedType}"]`) }})
                </p>
                <div class="h-50 row no-gutters">
                  <ul
                    class="h-md-100 list-unstyled form-row flex-lg-column flex-row col-lg col-md-8
                    col-12 justify-content-start font-opensans mx-0"
                  >
                    <li
                      v-if="roomItem.wifi"
                      class="order-1 col-lg-3 col-2 align-content-start text-secondary fz-14 d-flex
                            align-items-center"
                    >
                      <i class="material-icons fz-2">wifi</i>
                      <span class="ml-1 d-lg-block d-none text-nowrap">Wi-Fi</span>
                    </li>
                    <li
                      v-if="roomItem.breakfast"
                      class="order-md-2 order-3 col-lg-3 col-2 text-secondary
                      fz-14 d-flex align-items-center"
                    >
                      <i class="material-icons fz-2">restaurant</i>
                      <span class="ml-1 d-lg-block d-none">
                        {{ $t('message.Breakfast') }}
                      </span>
                    </li>
                    <li
                      v-if="roomItem.television"
                      class="order-md-3 order-2 col-lg-3 col-2 text-secondary
                      fz-14 d-flex align-items-center"
                    >
                      <i class="material-icons fz-2">personal_video</i>
                      <span class="ml-1 d-lg-block d-none">
                        {{ $t('message.Television') }}
                      </span>
                    </li>
                    <li
                      v-if="roomItem.airConditioner"
                      class="order-4 col-lg-3 col-2 text-secondary fz-14 d-flex align-items-center"
                    >
                      <i class="material-icons fz-2">ac_unit</i>
                      <span class="ml-1 d-lg-block d-none text-nowrap">
                        {{ $t('message["Air Conditioner"]') }}
                        </span>
                    </li>
                    <li
                      v-if="roomItem.refrigerator"
                      class="order-5 col-lg-3 col-2 text-secondary fz-14 d-flex align-items-center"
                    >
                      <i class="material-icons fz-2">kitchen</i>
                      <span class="ml-1 d-lg-block d-none">
                        {{ $t('message.Refrigerator') }}
                      </span>
                    </li>
                    <li
                      v-if="roomItem.roomService"
                      class="order-6 col-lg-3 col-2 text-secondary fz-14 d-flex align-items-center"
                    >
                      <i class="material-icons fz-2">room_service</i>
                      <span class="ml-1 d-lg-block d-none text-nowrap">
                        {{ $t('message["Room Service"]') }}
                      </span>
                    </li>
                    <li
                      v-if="roomItem.miniBar"
                      class="order-7 col-lg-3 col-2 text-secondary fz-14 d-flex align-items-center"
                    >
                      <i class="material-icons fz-2">local_bar</i>
                      <span class="ml-1 d-lg-block d-none text-nowrap">
                        {{ $t('message["Mini Bar"]') }}
                      </span>
                    </li>
                    <li
                      v-if="roomItem.smokeFree"
                      class="order-8 col-lg-3 col-2 text-secondary fz-14 d-flex align-items-center"
                    >
                      <i class="material-icons fz-2">smoke_free</i>
                      <span class="ml-1 d-lg-block d-none text-nowrap">
                        {{ $t('message["Smoke Free"]') }}
                      </span>
                    </li>
                  </ul>
                  <div class="d-flex align-items-center justify-content-center d-md-none">
                    <span
                      v-for="val in roomItem.people"
                      :key="val"
                      class="material-icons"
                    >person</span>
                  </div><!-- col-2 sleeps -->
                </div>
              </div>
              <div class="col-2 d-md-flex align-items-center justify-content-center d-none">
                <span
                  v-for="val in roomItem.people"
                  :key="val"
                  class="material-icons"
                >person</span>
              </div>
            </div><!-- col-6 room type -->
            <div class="col-md-4 col-12 form-row justify-content-between">
              <div
                class="col d-flex flex-column align-items-end bg-sm-light rounded-sm-right-bottom
                align-items-md-center justify-content-center order-md-1 order-2"
              >
                <template>
                  <div
                    v-if="roomItem.salePirce"
                    class="font-opensans text-secondary fz-14"
                  >
                    <del>TWD {{ roomItem.originPrice | price }}</del>
                  </div>
                  <div
                    v-else
                    class="font-opensans font-weight-bold fz-2"
                  >
                    TWD {{ roomItem.originPrice | price }}
                  </div>
                </template>
                <div
                  v-if="roomItem.salePirce"
                  class="font-opensans font-weight-bold fz-2"
                >
                  TWD <span class="text-primary">{{ roomItem.salePirce | price }}</span>
                </div>
                <div class="text-secondary fz-12 d-md-block d-none">
                  {{ $t('message.perNight') }}
                </div>
              </div> <!-- col-2 price -->
              <div
                class="col d-flex align-items-center py-3 bg-sm-light rounded-sm-left-bottom
                justify-content-md-center justify-content-between order-md-2 order-1"
              >
                <a
                  href="#"
                  class="d-flex align-items-center text-dark text-decoration-none"
                  @click.prevent="decrease(index)"
                >
                  <i class="material-icons">remove</i>
                </a>
                <span class="fz-2 font-opensans mx-lg-4 mx-md-2 mx-3">{{ roomItem.num }}</span>
                <a
                  href="#"
                  class="d-flex align-items-center text-dark text-decoration-none"
                  @click.prevent="increase(index)"
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <Footer />
    <FooterNavbar />
  </section>
</template>
<script>
import { mapGetters } from 'vuex';
import BaseSearchForm from '@/components/BaseSearchForm.vue';
import Footer from '@/components/BaseProductsFooter.vue';
import FooterNavbar from '@/components/BaseFooterNavbar.vue';
import { format } from 'date-fns';
import { enUS, zhTW } from 'date-fns/locale';

export default {
  name: 'ProductDetail',
  components: {
    BaseSearchForm,
    Footer,
    FooterNavbar,
  },
  computed: {
    ...mapGetters(['locale']),
    dateLocale() {
      return (date) => (this.locale === 'en'
        ? format(date, 'dd MMMM', { locale: enUS })
        : format(date, 'MMMdo', { locale: zhTW })
      );
    },
  },
  data: () => ({
    startDate: new Date(2020, 5, 17),
    endDate: new Date(2020, 5, 19),
    roomItems: [
      {
        img: 'items12-1.jpg',
        roomType: 'Deluxe Double Room A',
        bed: 1,
        bedType: 'Queen size',
        wifi: true,
        breakfast: true,
        television: true,
        refrigerator: false,
        airConditioner: true,
        roomService: true,
        miniBar: false,
        smokeFree: true,
        people: 2,
        originPrice: 1600,
        salePirce: 1490,
        num: 0,
      },
      {
        img: 'items11-1.jpg',
        roomType: 'Deluxe Double Room B',
        bed: 1,
        bedType: 'Queen size',
        wifi: true,
        breakfast: true,
        television: true,
        airConditioner: true,
        refrigerator: false,
        roomService: true,
        miniBar: false,
        smokeFree: true,
        people: 2,
        originPrice: 1600,
        salePirce: null,
        num: 0,
      },
      {
        img: 'items1-1.jpg',
        roomType: 'Deluxe Suite with Pool',
        bed: 1,
        bedType: 'Queen size',
        wifi: true,
        breakfast: true,
        television: true,
        airConditioner: true,
        refrigerator: true,
        roomService: true,
        miniBar: true,
        smokeFree: true,
        people: 2,
        originPrice: 1980,
        salePirce: null,
        num: 1,
      },
    ],
  }),
  methods: {
    increase(i) {
      this.roomItems[i].num += 1;
    },
    decrease(i) {
      this.roomItems[i].num -= 1;
    },
  },
};
</script>
