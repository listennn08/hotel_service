<template>
  <nav class="navbar bg-white font-opensans py-4">
    <section class="container d-flex justify-content-center">
      <div class="text-secondary fz-14 order-md-1 order-2">
        © 2020 ALOHA, Inc. All rights reserved.
      </div>
      <ul class="nav ml-md-5 order-md-2 order-1 mb-md-0 mb-3">
        <li class="nav-item">
          <a href="#" class="nav-link text-secondary fz-sm-14">
          {{ $t('message.faqs') }}
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-secondary fz-sm-14">
          {{ $t('message.termsOfUse') }}
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-secondary fz-sm-14">
          {{ $t('message.privacyPolicy') }}
          </a>
        </li>
      </ul>
      <ul class="nav ml-auto font-opensans d-lg-flex d-none order-3">
        <li class="nav-item dropup">
          <a
            href="#"
            id="dropupLanguageLink"
            class="nav-link btn d-flex align-items-center dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="material-icons fz-20 mr-2">language</i>
            <span class="text-secondary">{{ currentLanguage }}</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropupLanguageLink">
            <a
              class="dropdown-item"
              href="#"
              @click.prevent="changeLocale('en')"
            >
              {{ $t('message.en') }}
            </a>
            <a
              class="dropdown-item"
              href="#"
              @click.prevent="changeLocale('tw')"
            >
              {{ $t('message.tw') }}
            </a>
          </div>
        </li>
        <li class="nav-item dropup">
          <a
            href="#"
            id="dropupCurrencyLink"
            class="nav-link btn d-flex align-items-center dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="material-icons">attach_money</i>
            <span class="text-secondary">{{ $t(`message.${currency}`) }}</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropupCurrencyLink">
            <a
              class="dropdown-item"
              href="#"
              @click.prevent="changeCurrency('USD')"
            >
              {{ $t('message.USD') }}
            </a>
            <a
              class="dropdown-item"
              href="#"
              @click.prevent="changeCurrency('TWD')"
            >
              {{ $t('message.TWD') }}
            </a>
          </div>
        </li>
      </ul>
    </section>
  </nav>
</template>
<script>
import mixins from '@/mixins/mixinFn';

export default {
  name: 'FooterNavbar',
  mixins: [mixins],
};
</script>
