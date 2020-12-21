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
        @mouseover="toggleHover('left')"
        @mouseout="toggleHover('left')"
        @mousedown="toggleActive('left')"
        @mouseup="toggleActive('left')"
      >
      <input
        type="range"
        v-model="RightValue"
        class="range-input right"
        :min="min"
        :max="max"
        step="50"
        @mouseover="toggleHover('right')"
        @mouseout="toggleHover('right')"
        @mousedown="toggleActive('right')"
        @mouseup="toggleActive('right')"
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
<script>
export default {
  props: {
    budget: {
      type: Object,
    },
  },
  data: () => ({
    min: 800,
    max: 4000,
    left: {
      value: 800,
      hover: false,
      active: false,
      position: '0%',
      transform: 'translate(0px, -7px)',
    },
    right: {
      value: 4000,
      hover: false,
      active: false,
      position: '0%',
      transform: 'translate(0px, -7px)',
    },
  }),
  watch: {
    'budget.min': {
      handler() {
        this.left.position = `${((this.budget.min - this.min) / (this.max - this.min)) * 100}%`;
        this.left.transform = `translate(${-((this.budget.min - this.min) / (this.max - this.min)) * 100}%, -7px);`;
      },
    },
    'budget.max': {
      handler() {
        this.right.position = `${100 - (((this.budget.max - this.min) / (this.max - this.min)) * 100)}%`;
        this.right.transform = `translate(${100 - ((this.budget.max - this.min) / (this.max - this.min)) * 100}%, -7px);`;
      },
    },
  },
  computed: {
    LeftValue: {
      get() { return Math.min(this.budget.min, this.budget.max - 1); },
      set(val) {
        this.budget.min = Math.min(val, this.budget.max - 1);
        this.$emit('budget:update', this.budget.min);
      },
    },
    RightValue: {
      get() { return Math.max(this.budget.max, this.budget.min + 1); },
      set(val) {
        this.budget.max = Math.max(val, this.budget.min + 1);
        this.$emit('budget:update', this.budget.max);
      },
    },
  },
  methods: {
    toggleHover(site) {
      this[site].hover = !this[site].hover;
    },
    toggleActive(site) {
      this[site].active = !this[site].active;
    },
  },

};
</script>
<style lang="scss" scoped>
@import '../assets/components/multiSlider';
</style>
