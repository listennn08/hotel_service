<template>
  <section class="h-fill container position-md-relative">
    <div class="h-100 d-flex pt-4">
      <div class="col-lg-8 col mx-md-auto row px-0 m-0">
        <div class="col px-0">
          <h2
            class="font-weight-bold fz-sm-3 mb-4"
          >
            {{ $t('message["Reservation received!"]') }}
          </h2>
          <div class="form-row py-4 font-opensans border-top border-bottom">
            <div class="col-md-3 col-4 font-weight-bold mb-3 fz-sm-14">
              {{ $t('message.guest') }}
            </div>
            <div class="col-md-9 col-8 text-secondary fz-sm-14">David Lin</div>
            <div class="col-md-3 col-4 font-weight-bold mb-3 fz-sm-14">
              {{ $t('message.email') }}
            </div>
            <div class="col-md-9 col-8 text-secondary fz-sm-14 mb-md-0 mb-3">
              david0520@mail.com.tw
              <br class="d-md-none d-block">
              <a href="#" class="ml-md-3 fz-12">
                {{ $t('message["Confirmation email sent to this address"]') }}
              </a>
            </div>
            <div class="col-md-3 col-4 font-weight-bold fz-sm-14">
              {{ $t('message.phone') }}
            </div>
            <div class="col-md-9 col-8 text-secondary fz-sm-14">+886 9 32 456 789</div>
          </div>
          <div class="form-row py-4 font-opensans border-bottom">
            <div class="col-md-3 col-4 font-weight-bold fz-sm-14">
              {{ $t('message.room') }}
            </div>
            <div class="col-md-9 col-8 text-secondary fz-sm-14">
              {{ `${$t('message["Deluxe Suite with Pool"]')} / 2 ${$t('message.nights')}` }}
            </div>
          </div>
          <div class="form-row py-4 font-opensans border-bottom mb-4">
            <div class="col-md-3 col-4 font-weight-bold mb-3 fz-sm-14">
              {{ $t('message.checkIn') }}
            </div>
            <div class="col-md-9 col-8 text-secondary fz-sm-14">
              {{ dateLocale(stayStartDate) }}
            </div>
            <div class="col-md-3 col-4 font-weight-bold fz-sm-14">
              {{ $t('message.checkOut') }}
            </div>
            <div class="col-md-9 col-8 text-secondary fz-sm-14">
              {{ dateLocale(stayEndDate) }}
            </div>
          </div>
          <div class="form-row justify-content-md-end flex-md-row flex-column">
            <button
              class="col-lg-3 col-md-4 col btn btn-outline-primary py-3
              mb-2 mb-md-0 text-uppercase font-weight-bold"
            >
              {{ $t('message["edit reservation"]') }}
            </button>
            <button
              class="col-md-3 col btn btn-primary py-3 text-uppercase
              ml-md-2 font-weight-bold"
            >
              {{ $t('message.Homepage') }}
            </button>
          </div>
        </div>
      </div>
      <FooterSimpleNavbar class="position-absolute in-bottom" />
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';
import { format } from 'date-fns';
import { enUS, zhTW } from 'date-fns/locale';
import FooterSimpleNavbar from '@/components/BaseFooterSimpleNavbar.vue';

export default {
  name: 'Receive',
  data: () => ({
    stayStartDate: new Date(2020, 5, 17), // '17 June 2020',
    stayEndDate: new Date(2020, 5, 19), // '19 June 2020',
  }),
  computed: {
    ...mapGetters(['locale']),
    dateLocale() {
      return (date) => (this.locale === 'en'
        ? format(date, 'EEEE, dd MMM yyyy', { locale: enUS })
        : format(date, 'Y年MMMdo EEEE', { locale: zhTW })
      );
    },
  },
  components: {
    FooterSimpleNavbar,
  },
};
</script>
