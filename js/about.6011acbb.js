(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{5340:function(t,e,i){"use strict";i("84f1")},"84f1":function(t,e,i){},b406:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"middle"},[i("div",{staticClass:"multi-range-slider"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.LeftValue,expression:"LeftValue"}],staticClass:"range-input left",attrs:{type:"range",min:t.min,max:t.max,step:"50"},domProps:{value:t.LeftValue},on:{mouseover:function(e){return t.toggleHover("left")},mouseout:function(e){return t.toggleHover("left")},mousedown:function(e){return t.toggleActive("left")},mouseup:function(e){return t.toggleActive("left")},__r:function(e){t.LeftValue=e.target.value}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.RightValue,expression:"RightValue"}],staticClass:"range-input right",attrs:{type:"range",min:t.min,max:t.max,step:"50"},domProps:{value:t.RightValue},on:{mouseover:function(e){return t.toggleHover("right")},mouseout:function(e){return t.toggleHover("right")},mousedown:function(e){return t.toggleActive("right")},mouseup:function(e){return t.toggleActive("right")},__r:function(e){t.RightValue=e.target.value}}}),i("div",{staticClass:"slider"},[i("div",{staticClass:"track"}),i("div",{staticClass:"range",style:"left: "+t.left.position+"; right: "+t.right.position}),i("div",{staticClass:"thumb left",class:{active:t.left.active,hover:t.left.hover},style:"left: "+t.left.position+"; transform: "+t.left.transform}),i("div",{staticClass:"thumb right",class:{active:t.right.active,hover:t.right.hover},style:"right: "+t.right.position+"; transform: "+t.right.transform})])])])},s=[],a={props:{budget:{type:Object}},data:function(){return{min:800,max:4e3,left:{value:800,hover:!1,active:!1,position:"0%",transform:"translate(0px, -7px)"},right:{value:4e3,hover:!1,active:!1,position:"0%",transform:"translate(0px, -7px)"}}},watch:{"budget.min":{handler:function(){this.left.position="".concat((this.budget.min-this.min)/(this.max-this.min)*100,"%"),this.left.transform="translate(".concat(-(this.budget.min-this.min)/(this.max-this.min)*100,"%, -7px);")}},"budget.max":{handler:function(){this.right.position="".concat(100-(this.budget.max-this.min)/(this.max-this.min)*100,"%"),this.right.transform="translate(".concat(100-(this.budget.max-this.min)/(this.max-this.min)*100,"%, -7px);")}}},computed:{LeftValue:{get:function(){return Math.min(this.budget.min,this.budget.max-1)},set:function(t){this.budget.min=Math.min(t,this.budget.max-1),this.$emit("budget:update",this.budget.min)}},RightValue:{get:function(){return Math.max(this.budget.max,this.budget.min+1)},set:function(t){this.budget.max=Math.max(t,this.budget.min+1),this.$emit("budget:update",this.budget.max)}}},methods:{toggleHover:function(t){this[t].hover=!this[t].hover},toggleActive:function(t){this[t].active=!this[t].active}}},o=a,r=(i("5340"),i("2877")),u=Object(r["a"])(o,n,s,!1,null,"5e143d2e",null);e["a"]=u.exports},f820:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")]),i("MultiSlider",{staticClass:"col-3"})],1)},s=[],a=i("b406"),o={components:{MultiSlider:a["a"]}},r=o,u=i("2877"),l=Object(u["a"])(r,n,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=about.6011acbb.js.map