import { mapGetters } from 'vuex';
import { Component } from 'vue-property-decorator';
import HomDataMixn from './homeDataMixin';

@Component({
  computed: {
    ...mapGetters(['locale', 'currency']),
  },
})
export default class MixinFn extends HomDataMixn {
  locale!: string

  currency!: string

  get currentLanguage() {
    return this.$t(`message.${this.locale}`);
  }

  changeLocale(locale: string) {
    this.$store.commit('CHANGE_LOCALE', locale);
  }

  changeCurrency(currency: string) {
    this.$store.commit('CHANGE_CURRENCY', currency);
  }
}
