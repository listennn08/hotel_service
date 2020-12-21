import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['locale', 'currency']),
    currentLanguage() {
      return this.$t(`message.${this.locale}`);
    },
  },
  methods: {
    changeLocale(locale) {
      this.$store.commit('CHANGE_LOCALE', locale);
    },
    changeCurrency(currency) {
      this.$store.commit('CHANGE_CURRENCY', currency);
    },
  },
};
