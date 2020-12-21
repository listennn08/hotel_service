<!-- eslint-disable max-len -->
<template>
  <div class="home">
    <header class="h-320 banner">
      <div class="container h-100 mx-auto row no-gutters align-items-center">
        <div class="col-lg-10 col offset-lg-1">
          <h2
            class=
              "fz-6 fz-sm-4 text-white row justify-content-between"
          >
            <a href="#" class="text-white text-decoration-none d-flex align-items-center">
              <i class="material-icons fz-6 font-weight-bolder font-weight-sm-normal">chevron_left</i>
            </a>
            <span class="font-weight-bolder font-weight-sm-bold col-lg-10 col-md-6 col text-center">
              {{ $t('message.slogan') }}
            </span>
            <a href="#" class="text-white text-decoration-none d-flex align-items-center">
              <i class="material-icons fz-6 font-weight-bolder font-weight-sm-normal">chevron_right</i>
            </a>
          </h2>
        </div>
      </div>
    </header>
    <div class="container mx-auto">
      <div
        class="row no-gutters t-n50 wow slideInDown position-relative"
        data-wow-duration="1s"
      >
        <form
          action="#"
          method="post"
          class=
          "bg-light offset-md-1 col-md-10 col row no-gutters flex-lg-row flex-column p-4 rounded font-opensans"
        >
          <div class="col mr-lg-3 mr-md-2">
            <div class="form-group mb-lg-0" v-click-away="closeDestinaionSelector">
              <div class="input-group position-relative">
                <div class="input-group-prepend">
                  <span
                    id="basic-addon-location_on"
                    class="input-group-text bg-white border-right-0"
                  >
                    <i class="material-icons">location_on</i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control px-1 py-3 h-auto border-left-0 text-dark"
                  :placeholder="$t('message.destination')"
                  data-ref="destination"
                  aria-label="Destination"
                  aria-describedby="basic-addon-location_on"
                  v-model="destination"
                  readonly
                  @focus="showDestination = true"
                >
                <div
                  id="destination-selector"
                  class="position-absolute col card p-0 shadow input-selector"
                  :class="{'show': showDestination}"
                >
                  <div
                    v-for="(destination, index) in popularDestinations"
                    :key="destination.city"
                    class="px-3 pt-2 d-flex input-selector-item"
                    @click="changeDestination(index)"
                  >
                    <i class="material-icons mr-2">star</i>
                    <p class="mb-1">
                      {{ $t(`message.${destination.city}`) }}<br>
                      <small class="text-secondary">
                        {{ $t(`message.${destination.country}`) }}
                        </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mr-lg-3 mr-md-2">
            <div class="form-group mb-lg-0">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span
                    id="basic-addon-date_range"
                    class="input-group-text bg-white border-right-0"
                  >
                    <i class="material-icons">date_range</i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control px-1 py-3 h-auto border-left-0"
                  :placeholder="`${this.$t('message.checkIn')} / ${this.$t('message.checkOut')}`"
                  aria-label="date_range"
                  aria-describedby="basic-addon-date_range"
                >
              </div>
            </div>
          </div>
          <div class="col mr-lg-3 mr-md-2" v-click-away="closeGuestSelector">
            <div class="form-group mb-lg-0">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white border-right-0"
                    id="basic-addon-person"
                  >
                    <i class="material-icons">person</i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control px-1 py-3 h-auto border-left-0"
                  :placeholder="$t('message.guests')"
                  aria-label="guest"
                  aria-describedby="basic-addon-person"
                  @focus="showGuest = true"
                >
                <div
                  id="destination-selector"
                  class="position-absolute col card p-0 shadow input-selector h-170"
                  :class="{'show': showGuest}"
                >
                  <div class="row no-gutters px-3 py-3 align-items-center text-capitalize">
                    <div class="col-4">{{ $t('message.adult') }}</div>
                    <div class="col row no-gutters align-items-center">
                      <a
                        href="#"
                        class="text-decoration-none text-dark d-flex align-items-center"
                        @click.prevent="count('adult', 'm')"
                      >
                        <i class="material-icons">remove</i>
                      </a>
                      <div class="col text-center">{{ adult }}</div>
                      <a
                        href="#"
                        class="text-decoration-none text-dark d-flex align-items-center"
                        @click.prevent="count('adult', 'p')"
                      >
                        <i class="material-icons">add</i>
                      </a>
                    </div>
                  </div>
                  <div class="row no-gutters px-3 py-3 align-items-center text-capitalize">
                    <div class="col-4">{{ $t('message.child') }}</div>
                    <div class="col row no-gutters align-items-center">
                      <a
                        href="#"
                        class="text-decoration-none text-dark d-flex align-items-center"
                        @click.prevent="count('child', 'm')"
                      >
                        <i class="material-icons">remove</i>
                      </a>
                      <div class="col text-center">{{ child }}</div>
                      <a
                        href="#"
                        class="text-decoration-none text-dark d-flex align-items-center"
                        @click.prevent="count('child', 'p')"
                      >
                        <i class="material-icons">add</i>
                      </a>
                    </div>
                  </div>
                  <div class="row no-gutters px-3 py-3 align-items-center text-capitalize">
                    <div class="col-4">{{ $t('message.room') }}</div>
                    <div class="col row no-gutters align-items-center">
                      <a
                        href="#"
                        class="text-decoration-none text-dark d-flex align-items-center"
                        @click.prevent="count('room', 'm')"
                      >
                        <i class="material-icons">remove</i>
                      </a>
                      <div class="col text-center">{{ room }}</div>
                      <a
                        href="#"
                        class="text-decoration-none text-dark d-flex align-items-center"
                        @click.prevent="count('room', 'p')"
                      >
                        <i class="material-icons">add</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col">
            <button
              class="col btn btn-primary text-uppercase py-3 px-lg-4 px-md-3"
              @click.prevent="$router.push('/products')"
            >
              <span class="px-lg-2 font-weight-bold">{{ $t('message.search') }}</span>
            </button>
          </div>
        </form>
      </div>
      <!-- main -->
      <main class="font-weight-bold py-lg-4 mb-5">
        <section class="mb-md-2" ref="destinationContainer">
          <h2 class="fz-4 text-gray-750 mb-3">{{ $t('message["Top Choices"]') }}</h2>
          <ul class="tabs">
            <li
              v-for="item in tabItems"
              :key="item.title"
            >
              <a
                href="#"
                class="tabs-item"
                :class="{'active': item.title === currentTab}"
                @click.prevent="currentTab = item.title"
              >
                {{ $t(`message.${item.title}`) }}
                <sup
                  :class="{'z-1': showDestination}"
                >
                  {{ item.number }}
                </sup>
              </a>
            </li>
          </ul>
          <Swiper
            id="topChoicesSwiper"
            :options="topChoicesSwiperOption"
            :class="{'z-1': showDestination}"
          >
            <SwiperComponent
              v-for="(choice, i) in topChoices"
              :key="choice.title"
              :font-class="'font-opensans'"
              class="wow fadeInLeft"
              data-wow-duration="1s"
              :data-wow-delay="`${i * .5}s`"
            >
              <template #img>
                <img :src="choice.img" class="card-img-top rounded" alt="" srcset="">
              </template>
              <template #title>
                <h4 class="fz-2 m-0 font-weight-bold">{{ $t(`message["${choice.title}"]`) }}</h4>
              </template>
              <template #rate>
                <div class="d-flex align-items-center">
                  <i
                    v-for="rate in choice.star"
                    :key="rate"
                    class="material-icons fz-18"
                  >star_rate</i>
                  <span class="ml-1 text-sedondary fz-14 lh-18">{{ choice.star.toFixed(1) }}</span>
                  <span class="fz-12 text-gray-700">
                    ・{{ choice.review | numberConverter }} {{ $t('message.reviews') }}
                  </span>
                </div>
              </template>
              <template #text>
                <p class="mt-2 mb-md-2 mb-0">
                  <span
                    v-if="choice.salePrice"
                    class="text-secondary fz-14"
                  >
                    {{ currency }} {{ choice.salePrice | price }}
                  </span>
                  <span
                    class="text-secondary align-middle"
                    :class="priceFont(choice.salePrice)"
                    :is="choice.salePrice ? 'del' : 'span'"
                  >
                    {{ currency }} {{ choice.originPrice | price }}
                  </span>
                </p>
              </template>
            </SwiperComponent>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </Swiper>
        </section>
        <section class="pt-5 mb-md-2">
          <h2 class="fz-4 text-gray-750 mb-3">{{ $t('message["Popular Destinations"]') }}</h2>
          <ul class="list-unstyled row flex-md-row flex-column">
            <li
              class="col-md-4 col wow flipInY"
              v-for="(destination, i) in popularDestinations"
              :key="destination.city"
              data-wow-duration="1s"
              :data-wow-delay="`${i * .5}s`"
            >
              <div
                class="py-3 px-4 mb-4 rounded img-background img-background-hover-pos"
                :style="`background-image: linear-gradient(90deg, #000, transparent), url('${destination.img}')`"
              >
                <a
                  href="#"
                  class="d-flex text-white align-items-center justify-content-between text-decoration-none"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                <div>
                  <div class="fz-12 text-gray-50 font-weight-bold text-uppercase">
                    {{ $t(`message.${destination.country}`) }}
                  </div>
                  <div class="fz-3 text-white font-weight-bold">
                    {{ $t(`message.${destination.city}`) }}
                  </div>
                </div>
                <i class="material-icons">keyboard_arrow_down</i>
                </a>
              </div>
            </li>
          </ul>
        </section>
        <section class="pt-5">
          <h2 class="d-flex justify-content-between mb-3">
            <span class="fz-4 text-gray-750">{{ $t('message["Get Inspiration"]') }}</span>
            <a href="#" class="btn btn-outline-primary py-2 px-3">
              {{ $t('message["see more"]') }}
            </a>
          </h2>
          <Swiper
            :options="getInspirationSwiperOption"
          >
            <SwiperComponent
              v-for="inspiration in getInspirations"
              :key="inspiration.title"
            >
              <template #img>
                <div
                  class="mw-350 mh-263 img-background rounded mb-md-3 mb-1 img-background-hover-pos-top"
                  :style="`background-image: url('${inspiration.img}');`"
                />
              </template>
              <template #title>
                <h3 class="fz-3 fz-sm-20 lh-30 text-gray-750 pt-md-0 pt-2 m-0 font-weight-bold">
                  {{ $t(`message["${inspiration.title}"]`) }}
                </h3>
              </template>
              <template #text>
                <p class="mt-2 mb-md-2 mb-0 text-secondary font-opensans font-weight-normal">
                  {{ $t(`message["${inspiration.context}"]`) }}
                </p>
              </template>
            </SwiperComponent>
          </Swiper>
        </section>
      </main>
    </div>
    <Footer />
    <FooterNavbar />
  </div>
</template>
<script>
import dataMixin from '@/mixins/homeDataMixin';
import mixin from '@/mixins/mixinFn';
import SwiperComponent from '@/components/BaseSwiperComponent.vue';
import Footer from '@/components/BaseFooter.vue';
import FooterNavbar from '@/components/BaseFooterNavbar.vue';

export default {
  name: 'Home',
  mixins: [mixin, dataMixin],
  components: {
    SwiperComponent,
    Footer,
    FooterNavbar,
  },
  directives: {
    'click-away': {
      bind(el, binding, vnode) {
        const copyel = el;
        copyel.clickOutsideEvent = (event) => {
          // here I check that click was outside the el and his children
          if (!(el === event.target || el.contains(event.target))) {
            // and if it did, call method provided in attribute value
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
      },
      unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
      },
    },
  },
  computed: {
    priceFont() {
      return (num) => (num ? 'fz-12 text-strikthrogh' : 'fz-14');
    },
  },
  data: () => ({
    currentTab: 'Bali',
    destination: null,
    showDestination: false,
    showGuest: false,
    adult: 2,
    child: 0,
    room: 1,
    tabItems: [
      {
        title: 'Bali',
        number: 128,
      },
      {
        title: 'Okinawa',
        number: 67,
      },
      {
        title: 'Taipei',
        number: 53,
      },
    ],
    topChoicesSwiperOption: {
      initialSlide: 0,
      freeMode: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        769: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        414: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
      },
    },
    getInspirationSwiperOption: {
      initialSlide: 0,
      freeMode: true,
      loop: true,
      breakpoints: {
        769: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        414: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      },
    },
  }),
  methods: {
    closeDestinaionSelector() {
      this.showDestination = false;
    },
    closeGuestSelector() {
      this.showGuest = false;
    },
    count(item, action) {
      switch (action) {
        case 'p':
          this[item] += 1;
          break;
        case 'm':
          this[item] -= 1;
          break;
        default:
      }
    },
    changeDestination(index) {
      const { country, city } = this.popularDestinations[index];
      this.destination = `${this.$t(`message.${city}`)}, ${this.$t(`message.${country}`)}`;
      this.showDestination = false;
    },
  },
};
</script>
