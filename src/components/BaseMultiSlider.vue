<template>
  <div class="middle">
    <div class="multi-range-slider">
      <input
        type="range"
        v-model="LeftValue"
        class="range-input left"
        :min="min"
        :max="max"
        step="50"
        @mouseover="toggleHover(true)"
        @mouseout="toggleHover(true)"
        @mousedown="toggleActive(true)"
        @mouseup="toggleActive(true)"
      >
      <input
        type="range"
        v-model="RightValue"
        class="range-input right"
        :min="min"
        :max="max"
        step="50"
        @mouseover="toggleHover(false)"
        @mouseout="toggleHover(false)"
        @mousedown="toggleActive(false)"
        @mouseup="toggleActive(false)"
      >
      <div class="slider">
        <div class="track"></div>
        <div class="range"
        :style="`left: ${left.position}; right: ${right.position}`"
        ></div>
        <div
          class="thumb left"
          :class="{ 'active': left.active, 'hover': left.hover }"
          :style="`left: ${left.position}; transform: ${left.transform}`"
        ></div>
        <div
          class="thumb right"
          :class="{ 'active': right.active, 'hover': right.hover }"
          :style="`right: ${right.position}; transform: ${right.transform}`"
        ></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Watch, Prop, Vue,
} from 'vue-property-decorator';

type TSlider = {
  value: number;
  hover: boolean;
  active: boolean;
  position: string;
  transform: string;
}

type TBudget = {
  min: number,
  max: number
}

@Component
export default class BaseMultiSlider extends Vue {
  @Prop() private budget!: TBudget;

  private min: number = 800;

  private max: number = 4000;

  private left: TSlider = {
    value: 800,
    hover: false,
    active: false,
    position: '0%',
    transform: 'translate(0px, -7px)',
  };

  private right: TSlider = {
    value: 4000,
    hover: false,
    active: false,
    position: '0%',
    transform: 'translate(0px, -7px)',
  };

  @Watch('budget.min')
  onMinChange() {
    this.left.position = `${((this.budget.min - this.min) / (this.max - this.min)) * 100}%`;
    this.left.transform = `translate(${-((this.budget.min - this.min) / (this.max - this.min)) * 100}%, -7px);`;
  }

  @Watch('budget.max')
  onMaxChange() {
    this.right.position = `${100 - (((this.budget.max - this.min) / (this.max - this.min)) * 100)}%`;
    this.right.transform = `translate(${100 - ((this.budget.max - this.min) / (this.max - this.min)) * 100}%, -7px);`;
  }

  get LeftValue() {
    return Math.min(this.budget.min, this.budget.max - 1);
  }

  set LeftValue(val) {
    this.budget.min = Math.min(val, this.budget.max - 1);
    this.$emit('budget:update', this.budget.min);
  }

  get RightValue() {
    return Math.max(this.budget.max, this.budget.min + 1);
  }

  set RightValue(val) {
    this.budget.max = Math.max(val, this.budget.min + 1);
    this.$emit('budget:update', this.budget.max);
  }

  toggleHover(site: boolean) {
    if (site) {
      this.left.hover = !this.left.hover;
      return;
    }
    this.right.hover = !this.right.hover;
  }

  toggleActive(site: boolean) {
    if (site) {
      this.left.active = !this.left.active;
      return;
    }
    this.right.active = !this.right.active;
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/components/multiSlider';
</style>
