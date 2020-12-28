<template>
  <nav
    class="p-3 bg-light mb-md-4 pb-3 font-opensans rounded-lg mx-md-0 mx-3"
    aria-label="Page navigation example"
  >
    <ul class="pagination align-items-center justify-content-between mb-0">
      <li class="page-item">
        <a
          class=
          "btn btn-outline-primary font-weight-bold py-2 px-3 exlude d-lg-block d-none"
          href="#"
        >
          {{ $t('message.PREVIOUS') }}
        </a>
        <a
          class=
          "btn btn-outline-primary font-weight-bold p-2 exlude d-lg-none d-block material-icons"
          href="#"
        >
          keyboard_arrow_left
        </a>
      </li>
      <li
        class="page-item"
        :class="{'ml-auto': val === 1, 'mr-auto': val === 8}"
        v-for="val in 8"
        :key="val"
      >
        <template v-if="val === 7">
          <div class="btn disabled">
            ...
          </div>
        </template>
        <template v-else-if="val > 7">
          <a
            class="btn btn-text font-weight-bold"
            href="#"
          >
            {{ val + 1 }}
          </a>
        </template>
        <template v-else>
          <a
            class="btn btn-text font-weight-bold"
            :class="{
              'bg-white': val === 1,
              'd-md-none': val > 3 && val < 8,
              'd-none': val > 2,
              'd-md-block': val === 3,
              'd-lg-block': val > 1
            }"
            href="#"
          >
            {{ val }}
          </a>
        </template>
      </li>
      <li class="page-item">
        <a
          class="btn btn-primary font-weight-bold py-2 px-3 exlude d-lg-block d-none"
          href="#"
        >
          {{ $t('message.NEXT') }}
        </a>
        <a
          class=
          "btn btn-primary font-weight-bold p-2 exlude d-lg-none d-block material-icons"
          href="#"
        >
          keyboard_arrow_right
        </a>
      </li>
    </ul>
</nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Pagination',
})
export default class BasePagination extends Vue { }
</script>
