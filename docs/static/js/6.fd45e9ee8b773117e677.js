webpackJsonp([6],{"+Bu3":function(e,t,a){var n=a("Sxne");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("16844620",n,!0)},AEBh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(a("1w5v"));t.default={name:"currencyModal",data:function(){return{currencies:n.default}},methods:{setCurrency:function(e){this.$store.dispatch("setFiatCurrency",e),this.$modal.hide("currencyModal")},closeModal:function(){this.$modal.hide("currencyModal")}},mounted:function(){}}},Gu9D:function(e,t,a){"use strict";var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{attrs:{name:"currencyModal",height:"auto",adaptive:!0}},[a("div",{staticClass:"ui container center aligned currency-modal"},[a("div",{staticClass:"ui cards"},e._l(e.currencies,function(t){return a("a",{key:t.id,staticClass:"ui card fluid",on:{click:function(a){a.preventDefault(),e.setCurrency(t)}}},[a("div",{staticClass:"content"},[a("b",[e._v(e._s(t.label)+" "+e._s(t.id))])])])})),e._v(" "),a("div",{staticClass:"ui segment basic"},[a("button",{staticClass:"ui button compact basic",on:{click:function(t){t.preventDefault(),e.closeModal()}}},[a("i",{staticClass:"fa fa-remove"}),e._v("\n          Close\n        ")])])])])},staticRenderFns:[]};t.a=n},Sxne:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,".currency-modal[data-v-4254e0a4]{padding:1.5em}.ui.fluid.card[data-v-4254e0a4]{margin-top:.35rem;margin-bottom:.15rem;color:rgba(0,0,0,.87)}","",{version:3,sources:["E:/dev/arkwebwallet/src/components/modals/CurrencyModal.vue"],names:[],mappings:"AACA,iCACE,aAAe,CAChB,AACD,gCACE,kBAAoB,AACpB,qBAAuB,AACvB,qBAAuB,CACxB",file:"CurrencyModal.vue",sourcesContent:["\n.currency-modal[data-v-4254e0a4] {\r\n  padding: 1.5em;\n}\n.ui.fluid.card[data-v-4254e0a4] {\r\n  margin-top: 0.35rem;\r\n  margin-bottom: 0.15rem;\r\n  color: rgba(0,0,0,.87);\n}\r\n"],sourceRoot:""}])},iOEt:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("AEBh"),r=a.n(n),c=a("Gu9D"),i=function(e){a("+Bu3")},o=a("VU/8")(r.a,c.a,!1,i,"data-v-4254e0a4",null);t.default=o.exports}});