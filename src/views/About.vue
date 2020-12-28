<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MultiSlider class="col-3"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MultiSlider from '@/components/BaseMultiSlider.vue';

@Component({
  components: {
    MultiSlider,
  },
})
export default class About extends Vue { }
</script>
