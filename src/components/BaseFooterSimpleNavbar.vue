<template>
  <nav class="font-opensans py-4 row pt-5">
    <section
      :class="`row flex-md-row flex-column-reverse no-gutters align-items-center border-top
      pt-4 justify-content-between offset-lg-2 col-lg-8 col`"
    >
      <div class="col">
        <div class="text-md-left text-center text-secondary fz-14">
          © 2020 ALOHA, Inc. All rights reserved.
        </div>
      </div>
      <ul
        class="col nav justify-content-md-end justify-content-center  mb-md-0 mb-3"
      >
        <li class="nav-item">
          <a href="#" class="d-block text-secondary fz-sm-14">
          {{ $t('message.faqs') }}
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="d-block text-secondary fz-sm-14 ml-4">
          {{ $t('message.termsOfUse') }}
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="d-block text-secondary fz-sm-14 ml-4">
          {{ $t('message.privacyPolicy') }}
          </a>
        </li>
      </ul>
    </section>
  </nav>
</template>
<script>
export default {
  name: 'FooterSimpleNavbar',
};
</script>
