<template>
  <SwiperSlide
    class="card border-0"
    :class="cardClass"
  >
    <slot name="img"></slot>
    <div class="card-text pt-md-2 pb-mb-2 pb-0 px-0 font-weight-normal" :class="fontClass">
      <slot name="title"></slot>
      <slot name="rate"></slot>
      <p class="mt-2 mb-md-2 mb-0">
        <slot name="text"></slot>
      </p>
    </div>
  </SwiperSlide>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'SwiperComponent',
})
export default class BaseSwiperComponent extends Vue {
  @Prop() private fontClass!: {
    type: String,
    default: '',
  }
}
</script>
