import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  interface Element extends VNode {
    clickOutsideEvent: (event: Event) => void;
  }
}

declare module 'wow.js/dist/wow' {}
