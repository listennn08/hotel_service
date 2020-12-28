import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './locale/en';
import tw from './locale/tw';

Vue.use(VueI18n);

const messages = {
  en,
  tw,
};

export default new VueI18n({
  locale: 'en',
  messages,
});
