<template>
  <section>
    <search-form />
    <div class="container pt-md-4 pt-3 pb-5">
      <div class="row flex-md-row flex-column">
        <div class="col-md-4 col">
          <h2 class="mb-md-4 mb-2 font-weight-bold text-md-left text-center">
            {{ $t('message.Bangkok') }}<sup class="text-primary">3,240</sup>
          </h2>
          <div class="d-sm-none d-flex mb-2 py-3 dropdown">
            <a
              href="#"
              class="col-6 text-dark d-flex justify-content-center
              border-right text-decoration-none"
              @click.prevent="toggleFilterShow"
            >
              <i class="material-icons mr-2">filter_list</i>
              <span class="font-opensans">
                {{ $t('message.filter') }}
              </span>
            </a>
            <a
              href="#"
              class="col-6 text-dark d-flex justify-content-center text-decoration-none"
              role="button"
              id="dropdownSort"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="material-icons mr-2">sort</i>
              <span class="font-opensans">
                {{ $t('message.sort') }}
              </span>
            </a>
            <div
              class="dropdown-menu bg-light rounded-lg border-0 shadow dropdown-menu-right"
              aria-labelledby="dropdownSort"
            >
              <ul
                class="list-unstyled font-weight-bold opensans"
              >
                <li
                  class="list-group-item-custom bg-light"
                >
                  <a
                    href="#"
                    @click.prevent="shortBy(0)"
                    :class="{'active': pageActive[0]}"
                  >
                    {{ $t('message.recommended') }}
                  </a>
                </li>
                <li
                  class="list-group-item-custom bg-light"
                >
                  <a
                    href="#"
                    @click.prevent="shortBy(1)"
                    :class="{'active': pageActive[1]}"
                  >
                    {{ $t('message.lowestPrice') }}
                  </a>
                </li>
                <li
                  class="list-group-item-custom bg-light"
                >
                  <a
                    href="#"
                    @click.prevent="shortBy(2)"
                    :class="{'active': pageActive[2]}"
                  >
                    {{ $t('message.bestValue') }}
                  </a>
                </li>
                <li
                  class="list-group-item-custom bg-light"
                >
                  <a
                    href="#"
                    @click.prevent="shortBy(3)"
                    :class="{'active': pageActive[3]}"
                  >
                    {{ $t('message.distanceToCityCenter') }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="card rounded-lg bg-light border-0 p-md-1 p-0 d-md-block position-sm-fixed"
            :class="{'active': filterShow}"
          >
            <h3
              class="bg-white font-weight-bold d-md-none d-flex
                align-items-center justify-content-between mb-0 p-2"
            >
              <div class="d-flex align-items-center">
                <i class="material-icons mr-2">filter_list</i>
                <span class="fz-3">FILTER</span>
              </div>
              <a
                href="#"
                class="d-flex align-items-center text-dark text-decoration-none"
                @click.prevent="toggleFilterShow"
              >
                <i class="material-icons">close</i>
              </a>
            </h3>
            <div class="card-body">
              <p class="font-weight-bold">{{ $t(`message.deals`) }}</p>
              <div
                class="custom-control custom-checkbox"
                v-for="(value, key) in deals"
                :key="key"
              >
                <input
                  type="checkbox"
                  :id="key"
                  class="w-auto h-auto custom-control-input"
                  v-model="deals[key]"
                >
                <label
                  class="custom-control-label fz-md-14"
                  :for="key"
                >
                  {{ $t(`message.${key}`) }}
                </label>
              </div>
              <hr class="my-4 border-1 border-white">
              <p class="font-weight-bold">{{ $t(`message.popularFilter`) }}</p>
              <div
                class="custom-control custom-checkbox"
                v-for="(value, key) in popularFilter"
                :key="key"
              >
                <input
                  type="checkbox"
                  :id="key"
                  class="w-auto h-auto custom-control-input"
                  v-model="popularFilter[key]"
                >
                <label
                  class="custom-control-label fz-md-14"
                  :for="key"
                >
                  {{ $t(`message.${key}`) }}
                </label>
              </div>
              <hr class="my-4 border-1 border-white">
              <p class="font-weight-bold">{{ $t(`message.budget`) }}</p>
              <div class="form-group font-opensans">
                <MultiSlider :budget.sync="budget" class="mb-4"/>
                <div class="form-row">
                  <div class="mw-49 col py-2 px-md-0 bg-white rounded">
                    <div class="px-2">
                      <div class="font-weight-bold fz-12 lh-12 text-uppercase">
                        {{ $t('message.minPrice') }}
                      </div>
                      <div class="fz-14 text-secondary fz-md-12">
                        {{ $t(`message.${currency}`)}} {{ budget.min | price }}
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-1 px-0 text-secondary text-center fz-14 py-14 d-lg-block d-md-none"
                  >
                    -
                  </div>
                  <div class="mw-49 col py-2 px-md-0 bg-white rounded">
                    <div class="px-2 border-left-md-1">
                      <div class="font-weight-bold fz-12 lh-12 text-uppercase">
                        {{ $t('message.maxPrice') }}
                      </div>
                      <div class="fz-14 text-secondary fz-md-12">
                        {{ $t(`message.${currency}`) }} {{ addPlus(budget.max) | price }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="my-4 border-1 border-white">
              <p class="font-weight-bold">{{ $t(`message.rating`) }}</p>
              <div
                class="custom-control custom-checkbox"
                v-for="(value, index) in rating"
                :key="index"
              >
                <input
                  type="checkbox"
                  :id="index"
                  class="w-auto h-auto custom-control-input"
                  v-model="rating[index]"
                >
                <label
                  class="custom-control-label"
                  :for="index"
                >
                  <span
                    class="d-flex align-items-center fz-md-14"
                    v-html="generateRate(5 - index)" />
                </label>
              </div>
              <hr class="my-4 border-1 border-white">
              <p class="font-weight-bold">{{ $t(`message.stayType`) }}</p>
              <div
                class="custom-control custom-checkbox"
                v-for="(value, key) in stayType"
                :key="key"
              >
                <input
                  type="checkbox"
                  :id="key"
                  class="w-auto h-auto custom-control-input"
                  v-model="stayType[key]"
                >
                <label
                  class="custom-control-label fz-md-14"
                  :for="key"
                >
                  {{ $t(`message.${key}`) }}
                </label>
              </div>
            </div>
            <div class="rounded-top bg-dark pt-3 px-2 text-center card-footer d-md-none">
              <p class="text-white fz-3 font-weight-bold">
                {{ $t('message["Find 1,245 results"]') }}
              </p>
              <div class="row">
                <div class="col-6">
                  <button class="col py-3 btn btn-outline-light">
                    {{ $t('message.clear') }}
                  </button>
                </div>
                <div class="col-6">
                  <button class="col py-3 btn btn-primary">
                    {{ $t('message.filter') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 col px-md-3 px-0">
          <ul
            class="list-group list-group-horizontal d-md-flex d-none mb-4 font-weight-bold
            font-opensans flex-nowrap overflow-auto"
          >
            <li
              class="list-group-item-custom"
            >
              <a
                href="#"
                @click.prevent="shortBy(0)"
                class="text-nowrap"
                :class="{'active': pageActive[0]}"
              >
                {{ $t('message.recommended') }}
              </a>
            </li>
            <li
              class="list-group-item-custom"
            >
              <a
                href="#"
                @click.prevent="shortBy(1)"
                class="text-nowrap"
                :class="{'active': pageActive[1]}"
              >
                {{ $t('message.lowestPrice') }}
              </a>
            </li>
            <li
              class="list-group-item-custom"
            >
              <a
                href="#"
                @click.prevent="shortBy(2)"
                class="text-nowrap"
                :class="{'active': pageActive[2]}"
              >
                {{ $t('message.bestValue') }}
              </a>
            </li>
            <li
              class="list-group-item-custom"
            >
              <a
                href="#"
                @click.prevent="shortBy(3)"
                class="text-nowrap"
                :class="{'active': pageActive[3]}"
              >
                {{ $t('message.distanceToCityCenter') }}
              </a>
            </li>
          </ul>
          <ul class="list-unstyled">
            <li
              class="border-bottom border-bottom-sm-2 mb-md-4 mb-1 wow flipInX"
              v-for="(roomItem, i) in showByFilter"
              :key="roomItem.img"
              data-wow-duration="1s"
              :data-wow-delay="`${i * .1}s`"
            >
            <ShopCard :item="roomItem"/>
            </li>
          </ul>
          <Pagination />
        </div>
      </div>
    </div>
    <Footer />
    <FooterNavber />
  </section>
</template>
<script>
import { mapGetters } from 'vuex';
import SearchForm from '@/components/BaseSearchForm.vue';
import MultiSlider from '@/components/BaseMultiSlider.vue';
import ShopCard from '@/components/BaseShopCard.vue';
import Footer from '@/components/BaseProductsFooter.vue';
import FooterNavber from '@/components/BaseFooterNavbar.vue';
import Pagination from '@/components/BasePagination.vue';

export default {
  name: 'Product',
  components: {
    SearchForm,
    MultiSlider,
    ShopCard,
    Footer,
    FooterNavber,
    Pagination,
  },
  computed: {
    ...mapGetters(['currency']),
    generateRate() {
      return (rating) => {
        if (rating) {
          return `${new Array(rating)
            .fill(null)
            .reduce((acc) => `${acc}<i class="material-icons text-dark">star_rate</i>`, '')}
            <span class="ml-2">${rating.toFixed(1)}</span>`;
        }
        return this.$t('message.unrated');
      };
    },
    addPlus() {
      return (number) => (+number >= 4000 ? `${number}+` : number);
    },
    active() {
      return (idx) => this.pageActive[idx];
    },
    showByFilter() {
      let res = this.roomItems;
      Object.keys(this.deals).forEach((key) => {
        if (this.deals[key]) {
          res = res.filter((el) => el[key]);
        }
      });
      Object.keys(this.popularFilter).forEach((key) => {
        if (this.popularFilter[key]) {
          res = res.filter((el) => el[key]);
        }
      });
      let shortCopy = JSON.parse(JSON.stringify(res));
      const firstIndex = this.rating.findIndex((_, index) => this.rating[index]);
      if (firstIndex > -1) {
        res = shortCopy.filter((el) => 5 - el.rate === firstIndex);
      }
      if (this.rating.filter((el) => el).length > 1) {
        this.rating.forEach((val, key) => {
          if (val && firstIndex !== key) {
            res = res.concat(shortCopy.filter((el) => 5 - el.rate === key));
          }
        });
      }
      res = res.filter((el) => {
        if (el.salePrice) {
          return el.salePrice >= this.budget.min && el.salePrice <= this.budget.max;
        }
        return el.originPrice >= this.budget.min && el.originPrice <= this.budget.max;
      });
      const typeArr = [];
      shortCopy = JSON.parse(JSON.stringify(res));
      Object.keys(this.stayType).forEach((key) => {
        typeArr.push(key);
        if (typeArr.length > 1) {
          if (this.stayType[key]) {
            res = res.concat(shortCopy.filter((el) => el.stayType === key));
          }
          return;
        }
        if (this.stayType[key]) {
          res = shortCopy.filter((el) => el.stayType === key);
        }
      });

      return res;
    },
  },
  data: () => ({
    roomItems: [
      {
        img: 'items1-1.jpg',
        village: 'Rachada',
        city: 'Bangkok',
        fromCenter: 2,
        hotelName: 'Rachada Hotel',
        roomType: 'Deluxe Double Room',
        guest: 2,
        bed: 1,
        bedSize: 'Queen size',
        rate: 4.0,
        comment: 283,
        recommand: 1,
        salePrice: null,
        originPrice: 1980,
        freeCancellation: true,
        noPrepayment: true,
        stayType: 'hotel',
      },
      {
        img: 'items2-1.jpg',
        village: 'Phaya Thai',
        city: 'Bangkok',
        fromCenter: 2.9,
        hotelName: 'Forever Place',
        roomType: 'Standard Double Room',
        guest: 2,
        bed: 1,
        bedSize: 'Queen size',
        rate: 5.0,
        comment: 121,
        recommand: 2,
        salePrice: 1680,
        originPrice: 1980,
        freeCancellation: true,
        noPrepayment: false,
        stayType: 'hotel',
      },
      {
        img: 'items3-1.jpg',
        village: 'Bangkapi',
        city: 'Bangkok',
        fromCenter: 14,
        hotelName: 'LUV Hotel',
        roomType: 'Standard Double Room',
        guest: 2,
        bed: 1,
        bedSize: 'Queen size',
        rate: 4.0,
        comment: 325,
        recommand: 3,
        salePrice: null,
        originPrice: 2460,
        freeCancellation: true,
        noPrepayment: false,
        stayType: 'hotel',
      },
      {
        img: 'items4-1.jpg',
        village: 'Chatuchack',
        city: 'Bangkok',
        fromCenter: 12,
        hotelName: 'WOW Life Hotel',
        roomType: 'Standard Double Room',
        guest: 2,
        bed: 1,
        bedSize: 'Queen size',
        rate: 4.0,
        comment: 204,
        recommand: 4,
        salePrice: 2240,
        originPrice: 2880,
        freeCancellation: false,
        noPrepayment: true,
        stayType: 'hotel',
      },
      {
        img: 'items5-1.jpg',
        village: 'Chatuchack',
        city: 'Bangkok',
        fromCenter: 8,
        hotelName: 'Celebrity Palace',
        roomType: 'Standard Double Room',
        guest: 2,
        bed: 1,
        bedSize: 'Queen size',
        rate: 5.0,
        comment: 189,
        recommand: 5,
        salePrice: 1890,
        originPrice: 2120,
        freeCancellation: false,
        noPrepayment: true,
        stayType: 'unique',
      },
      {
        img: 'items6-1.jpg',
        village: 'Rang Rak',
        city: 'Bangkok',
        fromCenter: 4.4,
        hotelName: 'RR Space',
        roomType: 'Deluxe Double Room',
        guest: 2,
        bed: 1,
        bedSize: 'King size',
        rate: 4.0,
        comment: 112,
        recommand: 6,
        salePrice: null,
        originPrice: 2090,
        freeCancellation: true,
        noPrepayment: false,
        stayType: 'apartment',
      },
      {
        img: 'items7-1.jpg',
        village: 'Watana',
        city: 'Bangkok',
        fromCenter: 6,
        hotelName: 'Bangkok Hostel',
        roomType: 'Twin Room',
        guest: 2,
        bed: 2,
        bedSize: '2 twins',
        rate: 5.0,
        comment: 102,
        recommand: 7,
        salePrice: null,
        originPrice: 880,
        freeCancellation: true,
        noPrepayment: true,
        stayType: 'hostel',
      },
      {
        img: 'items8-1.jpg',
        village: 'Watana',
        city: 'Bangkok',
        fromCenter: 6,
        hotelName: 'Watana First Hostel',
        roomType: 'Twin Room',
        guest: 2,
        bed: 2,
        bedSize: '2 twins',
        rate: 3.0,
        comment: 608,
        recommand: 8,
        salePrice: 790,
        originPrice: 1280,
        freeCancellation: true,
        noPrepayment: false,
        stayType: 'hostel',
      },
      {
        img: 'items9-1.jpg',
        village: 'Din Daeng',
        city: 'Bangkok',
        fromCenter: 7,
        hotelName: 'DD Space',
        roomType: 'Standard Double Room',
        guest: 2,
        bed: 1,
        bedSize: 'Queen size',
        rate: 4.0,
        comment: 138,
        recommand: 9,
        salePrice: 1240,
        originPrice: 1700,
        freeCancellation: false,
        noPrepayment: false,
        stayType: 'apartment',
      },
      {
        img: 'items10-1.jpg',
        village: 'Din Daeng',
        city: 'Bangkok',
        fromCenter: 7,
        hotelName: 'Dininn Hotel',
        roomType: 'Deluxe Twin Room',
        guest: 2,
        bed: 2,
        bedSize: '2 twins',
        rate: 3.0,
        comment: 446,
        recommand: 10,
        salePrice: null,
        originPrice: 3450,
        freeCancellation: false,
        noPrepayment: false,
        stayType: 'hotel',
      },
    ],
    deals: {
      freeCancellation: false,
      noPrepayment: false,
      specialOffers: false,
    },
    popularFilter: {
      breakfastIncluded: false,
      freeWiFi: false,
      swimmingPool: false,
    },
    rating: Array(6).fill(false),
    stayType: {
      hotel: false,
      apartment: false,
      unique: false,
      hostel: false,
    },
    budget: {
      max: 4000,
      min: 800,
    },
    pageActive: [true, false, false, false],
    filterShow: false,
  }),
  methods: {
    shortByPrice(a, b) {
      let minA = a.originPrice;
      let minB = b.originPrice;
      if (a.salePrice) {
        minA = Math.min(a.salePrice, a.originPrice);
      }
      if (b.salePrice) {
        minB = Math.min(b.salePrice, b.originPrice);
      }
      return minA - minB;
    },
    shortBy(idx) {
      switch (idx) {
        case 0:
          this.roomItems.sort((a, b) => (a.recommand - b.recommand));
          break;
        case 1:
          this.roomItems.sort((a, b) => this.shortByPrice(a, b));
          break;
        case 2:
          this.roomItems.sort((a, b) => (b.rate - a.rate));
          break;
        case 3:
          this.roomItems.sort((a, b) => (a.fromCenter - b.fromCenter));
          break;
        default:
      }
      this.pageActive = this.pageActive.map((_, index) => {
        if (index === idx) return true;
        return false;
      });
    },
    toggleFilterShow() {
      this.filterShow = !this.filterShow;
    },
  },
};
</script>
