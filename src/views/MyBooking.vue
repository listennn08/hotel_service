<template>
  <section class="h-lg-fill position-relative">
    <section class="container pt-4 position-relative pb-md-0 pb-5">
      <div class="row flex-lg-row flex-column">
        <div class="col-lg-8 col order-lg-1 order-2 mb-md-0 mb-5">
          <h2 class="h4 font-weight-bold mb-4">
            {{ $t('message["My Bookings"]') }}
          </h2>
          <ul
            class="list-group list-group-horizontal
            d-md-flex d-none mb-4 font-weight-bold opensans"
          >
            <li class="list-group-item-custom">
              <a
                href="#"
                class="font-weight-bold mr-4 active"
                @click.prevent
              >
                {{ $t('message.Upcoming') }}
              </a>
            </li>
            <li class="list-group-item-custom">
              <a
                href="#"
                class="font-weight-bold"
                @click.prevent
              >
                {{ $t('message.Completed') }}
              </a>
            </li>
          </ul>
          <ul class="list-unstyled mb-md-0 mb-5">
            <li
              v-for="(item, index) in roomItems"
              :key="item.img"
              class="mb-md-4 mb-1"
              :class="{'border-bottom border-bottom-sm-2': index !== roomItems.length - 1}"
            >
              <div
                class="mb-md-4 media row no-gutters position-relative rounded-lg
                flex-md-row flex-column align-items-center"
              >
                <div
                  class="col-lg-4 col-md-5 col img-background mr-lg-3 mr-2 rounded-lg-left
                  rounded-sm-top"
                  :style="`background-image: url('//hotel_service/images/shopItems/${item.img}');`"
                >
                  <div class="pt-100 d-flex align-items-center"></div>
                </div><!-- img -->
                <div
                  class="media-body h-100 pt-lg-3 pt-md-2 pr-lg-3 pr-md-2 px-md-0
                  px-4 pt-4 pb-md-0 pb-5  font-opensans col mb-md-0 mb-4 rounded-bottom
                  d-flex flex-column justify-content-center position-relative bg-sm-light
                ">
                  <div class="position-absolute in-right-top-3">
                    <a
                      href="#"
                      class="text-uppercase font-weight-bold font-opensans text-decoration-none
                      fz-sm-14"
                      @click.prevent
                    >
                      {{ $t('message["view details"]') }}
                    </a>
                  </div>
                  <div class="d-flex">
                  <i class="material-icons">hotel</i>
                  <div class="ml-3">
                    <h3 class="fz-2 font-weight-bold mb-0">
                      {{ $t(`message["${item.name}"]`) }}
                    </h3>
                    <p class="text-secondary mb-2">
                      {{ $t(`message["${item.type}"]`) }}
                    </p>
                  </div>
                  </div>
                  <div class="d-flex">
                    <i class="material-icons">date_range</i>
                    <div class="ml-3">
                      <h3 class="fz-2 font-weight-bold mb-0">
                        {{ dateLocale(item.stayStartDate) }} - {{ dateLocale(item.stayEndDate) }}
                      </h3>
                      <p class="text-secondary mb-2">
                        {{ item.stayCount }}
                        {{ $t('message.nights') }}・{{ item.adult }}
                        {{ $t('message.peopleUnit') }}
                        {{ $t('message.adults') }}
                      </p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <i class="material-icons">attach_money</i>
                    <div class="ml-3">
                      <h3 class="fz-2 font-weight-bold mb-0">
                        {{ $t(`message["${item.countCurrency}"]`) }} {{ item.count | price }}
                      </h3>
                      <p class="text-secondary mb-md-2 mb-4">
                        {{ $t(`message["${item.countDescription}"]`) }}
                      </p>
                    </div>
                  </div>
                </div> <!-- media-body -->
              </div> <!-- media -->
            </li>
          </ul>
        </div><!-- col-8 -->
        <div class="col-lg-4 col order-lg-2 order-1">
          <div
            class="mb-4 d-flex align-items-center justify-content-between"
          >
            <h2 class="h4 mb-0 d-flex align-items-center">
              <span class="font-weight-bold mr-2">
                {{ $t('message.Profile') }}
              </span>
              <div
                class="bg-primary text-white rounded-pill d-flex align-items-center py-1 px-2"
              >
                <i class="material-icons fz-14 mr-1">check</i>
                <span class="font-opensans fz-12">
                  {{ $t('message.VERIFIED') }}
                </span>
              </div>
            </h2>
            <div class="fz-14 font-weight-bold">
              <a href="#" class="text-uppercase" @click.prevent>
                {{ $t('message.edit') }}
              </a>
            </div>
          </div>
          <div
            class="bg-light rounded-lg p-4 d-flex flex-lg-column flex-md-row flex-column mb-5
            position-relative"
          >
            <div class="position-absolute in-right-top-4 d-lg-block d-md-none">
              <div
                class="img-background rounded"
                style="background-image: url('//hotel_service/images/user.jpg');
                width: 64px; height: 64px;
              ">
              </div>
            </div>
            <div class="col p-0">
              <p class="font-weight-bold">
                {{ $t('message["User details"]') }}
              </p>
              <div class="d-flex">
                <div class='mr-3 d-lg-none d-md-block d-none'>
                  <div
                    class="img-background rounded"
                    style="background-image: url('//hotel_service/images/user.jpg');
                    width: 64px; height: 64px;
                  ">
                  </div>
                </div>
                <ul class="list-unstyled font-opensans">
                  <li class="text-secondary fz-14 mb-2">David Lin</li>
                  <li class="text-secondary fz-14 mb-2">david0520@mail.com.tw</li>
                  <li class="text-secondary fz-14">+886 9 32 456 789</li>
                </ul>
              </div>
            </div>
            <div class="col p-0">
              <p class="font-weight-bold">
                {{ $t('message["Payment methods"]') }}
              </p>
              <div class="d-flex">
                <div class="bg-white rounded p-3 font-opensans w-50">
                  <div class="text-secondary fz-14">xxxx-xxxx-7890</div>
                  <div class="text-secondary fz-14">DAVID LIN</div>
                  <div
                    class="text-secondary fz-14 d-flex justify-content-between align-items-center"
                  >
                    08/2029
                    <FontAwesomeIcon
                      class="text-dark"
                      :icon="['fab', 'cc-visa']"
                    />
                  </div>
                </div>
                <div
                  class="bg-white rounded p-3 font-opensans d-flex align-items-center
                  justify-content-center ml-2 w-50"
                >
                  <a href="#" @click.prevent>
                    <i class="material-icons bg-primary rounded-circle text-white p-1">add</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="position-absolute in-bottom">
      <FooterNavbar />
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import FooterNavbar from '@/components/BaseFooterNavbar.vue';
import { format } from 'date-fns';
import { enUS, zhTW } from 'date-fns/locale';

library.add(faCcVisa);

export default {
  name: 'MyBooking',
  components: {
    FooterNavbar,
    FontAwesomeIcon,
  },
  computed: {
    ...mapGetters(['locale']),
    dateLocale() {
      return (date) => (this.locale === 'en'
        ? format(date, 'dd MMM yyyy', { locale: enUS })
        : format(date, 'Y年MMMdo', { locale: zhTW })
      );
    },
  },
  data: () => ({
    roomItems: [
      {
        img: 'items1-1.jpg',
        name: 'Rachada Hotel',
        type: 'Deluxe Suite with Pool',
        stayStartDate: new Date(2020, 5, 17), // '17 June 2020',
        stayEndDate: new Date(2020, 5, 19), // '19 June 2020',
        stayCount: 2,
        adult: 2,
        count: 4633,
        countCurrency: 'TWD',
        countDescription: 'includes taxes and charges',
      },
      {
        img: 'items4-1.jpg',
        name: 'WOW Life Hotel',
        type: 'Standard Double Room',
        stayStartDate: new Date(2020, 8, 8), // '8 Sep 2020',
        stayEndDate: new Date(2020, 8, 15), // '15 Sep 2020',
        stayCount: 7,
        adult: 2,
        count: 13084,
        countCurrency: 'TWD',
        countDescription: 'includes taxes and charges',
      },
    ],
  }),
};
</script>
