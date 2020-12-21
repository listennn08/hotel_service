<!-- eslint-disable max-len -->
<template>
  <form
    action="#"
    method="post"
    class="bg-light rounded font-opensans py-md-4 py-2"
  >
    <div class="container">
      <div class="row no-gutters align-items-center flex-nowrap">
        <div class="col-md col-4 mr-lg-3 mr-md-2">
          <div
            class="h-100 material-input-group position-relative bg-white rounded"
            v-click-away="closeDestinaionSelector"
          >
            <div
              class="input-group-prepend d-md-flex d-none align-items-center"
              :class="{'not-empty': hasValue('destination')}"
            >
              <span
                id="basic-addon-location_on"
                class="input-group-text bg-white border-0"
              >
                <i class="material-icons">location_on</i>
              </span>
            </div>
            <input
              type="text"
              id="destination"
              class="material-input col"
              :class="{'not-empty': hasValue('city')}"
              data-ref="destination"
              aria-label="Destination"
              aria-describedby="basic-addon-location_on"
              v-model="destination"
              readonly
              @focus="showDestination = true"
            >
            <label
              for="destination"
              class="position-absolute material-label d-md-block d-none"
            >
              {{ $t('message.destination') }}
            </label>
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
        <div class="col-md col-4 mr-lg-3 mr-md-2">
          <div class="h-100 material-input-group bg-white rounded d-flex">
            <div
              class="input-group-prepend d-md-flex d-none align-items-center"
              :class="{'not-empty': hasValue('checkIn')}"
            >
              <span
                id="basic-addon-date_range"
                class="input-group-text bg-white border-0"
              >
                <i class="material-icons">date_range</i>
              </span>
            </div>
            <div class="d-lg-none d-block border-x-sm-1">
              <input
                type="text"
                id="date_range"
                class="material-input col"
                :class="{'not-empty': hasValue('checkIn') || hasValue('checkOut')}"
                aria-label="date_range"
                aria-describedby="basic-addon-date_range"
                readonly
                v-model="date"
              >
              <label
                for="date_range_end"
                class="material-label position-absolute d-md-block d-none text-uppercase"
              >
                {{ $t('message["Check-innout"]') }}
              </label>
            </div>
            <div class="col-4 p-0 position-relative d-lg-block d-none">
              <input
                type="text"
                id="date_range_start"
                class="material-input col"
                :class="{'not-empty': hasValue('checkIn')}"
                aria-label="date_range"
                aria-describedby="basic-addon-date_range"
                readonly
                v-model="checkIn"
              >
              <label
                for="date_range_start"
                class="material-label material-label-left position-absolute d-block"
              >
                {{ $t('message["Check-in"]') }}
              </label>
            </div>
            <div class="col-md col-4 p-0 py-lg-2 position-relative d-lg-block d-none">
              <input
                type="text"
                id="date_range_end"
                class="col material-input material-input-right  border-left-md-1"
                :class="{'not-empty': hasValue('checkIn') || hasValue('checkOut')}"
                aria-label="date_range"
                aria-describedby="basic-addon-date_range"
                readonly
                v-model="checkOut"
              ><!-- px-md-2 pl-3 -->
              <label
                for="date_range_end"
                class="material-label material-label-right position-absolute"
              >
                {{ $t('message["Check-out"]') }}
              </label>
            </div>
          </div>
        </div>
        <div class="col-md col-4 mr-lg-3 mr-md-2" v-click-away="closeGuestSelector">
          <div class="h-100 material-input-group position-relative bg-white rounded d-md-flex">
            <div
              class="input-group-prepend d-md-flex d-none align-items-center"
              :class="{'not-empty': hasValue('guest')}"
            >
              <span
                class="input-group-text bg-white border-0"
                id="basic-addon-person"
              >
                <i class="material-icons">person</i>
              </span>
            </div>
            <input
              type="text"
              class="material-input col"
              :class="{'not-empty': hasValue('guest')}"
              v-model="guest"
              aria-label="guest"
              aria-describedby="basic-addon-person"
              @focus="showGuest = true"
              readonly
            >
            <label
              class="position-absolute material-label d-md-block d-none"
            >
              {{ $t('message.guests') }}
            </label>
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
                  <div class="col text-center">{{ guestObj.adult }}</div>
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
                  <div class="col text-center">{{ guestObj.child }}</div>
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
                  <div class="col text-center">{{ guestObj.room }}</div>
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
        <div class="col-md-2 col d-md-block d-none">
          <button
            class="w-100 btn btn-primary text-uppercase py-3 px-lg-4 px-md-3"
            @click.prevent="gotoProducts"
          >
            <span class="px-lg-2 font-weight-bold">{{ $t('message.search') }}</span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import dataMixin from '@/mixins/homeDataMixin';
import mixinFn from '@/mixins/mixinFn';

export default {
  mixins: [mixinFn, dataMixin],
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
  data: () => ({
    city: 'Bangkok',
    country: 'Thailand',
    guest: '2 adults・1 room',
    checkIn: '17 June',
    checkOut: '19 June',
    showDestination: false,
    showGuest: false,
    windowSize: document.body.clientWidth,
    guestObj: {
      adult: 2,
      child: 0,
      room: 1,
    },
  }),
  watch: {
    locale: {
      handler() {
        const replace = this.guest;
        this.guest = replace;
      },
    },
    guestObj: {
      deep: true,
      handler() {
        const { adult, child, room } = this.guestObj;
        const message = [];
        this.guest = '';
        if (adult) {
          if (adult > 1) {
            message.push(`${adult} ${this.$t('message.peopleUnit')}${this.$t('message.adults')}`);
          } else {
            message.push(`${adult} ${this.$t('message.peopleUnit')}${this.$t('message.adult')}`);
          }
        }
        if (child) {
          if (child > 1) {
            message.push(`${child} ${this.$t('message.peopleUnit')}${this.$t('message.children')}`);
          } else {
            message.push(`${child} ${this.$t('message.peopleUnit')}${this.$t('message.child')}`);
          }
        }
        if (room) {
          if (room > 1) {
            message.push(`${room} ${this.$t('message.roomUnit')}${this.$t('message.rooms')}`);
          } else {
            message.push(`${room} ${this.$t('message.roomUnit')}${this.$t('message.room')}`);
          }
        }
        this.guest += message.join('・');
        if (this.guest === '') {
          this.guest = null;
        }
      },
    },
  },
  computed: {
    hasValue() {
      return (v) => this[v];
    },
    date() {
      return `${this.checkIn} - ${this.checkOut}`;
    },
    destination() {
      if (this.windowSize <= 414) {
        return `${this.city}`;
      }
      return `${this.city}, ${this.country}`;
    },
  },
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
          this.guestObj[item] += 1;
          break;
        case 'm':
          this.guestObj[item] -= 1;
          break;
        default:
      }
    },
    changeDestination(index) {
      const { country, city } = this.popularDestinations[index];
      this.city = this.$t(`message.${city}`);
      this.country = this.$t(`message.${country}`);
      this.showDestination = false;
    },
    gotoProducts() {
      if (!this.$route.path.includes('products')) {
        this.$router.push('/products');
      }
    },
  },
};
</script>
