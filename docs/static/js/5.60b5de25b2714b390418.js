webpackJsonp([5],{"5O3v":function(t,n,a){(t.exports=a("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Send.vue",sourceRoot:""}])},AVTv:function(t,n,a){var e=a("5O3v");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("42d665fc",e,!0)},DRH5:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("zBK0"),s=a("wgAu"),i=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n.default=t,n}(a("Yt4M")),o=function(t){return t&&t.__esModule?t:{default:t}}(a("gsOm")),r={to:null,amount:0,message:null};n.default={name:"send",data:function(){return{sending:!1,passphrase:"",transaction:r}},watch:{qrScanner:function(t){"SignTransaction"===t.action&&(this.passphrase=t.payload),"FillRecipientAddress"===t.action&&(this.transaction.to=t.payload),this.$store.dispatch("clearCodeScanned")}},computed:{wallet:function(){return this.$store.getters.wallet},addressValid:function(){return i.arkjs.crypto.validateAddress(this.transaction.to)},transactionSending:function(){return this.$store.getters.app.transactionSending},qrScanner:function(){return this.$store.getters.qrScanner}},methods:{openCodeScanner:function(t){this.$modal.show("scanCodeModal",{action:t})},send:function(){var t=this,n={transaction:this.transaction,passphrase:this.passphrase};i.getBalance(this.wallet.address).then(function(a){if(n.transaction.amount>a)return(0,s.errorNotification)("Not enough ARK"),!1;if((0,e.validateTransaction)(n)){var o=i.createTransaction({to:t.transaction.to,amount:t.transaction.amount,message:t.transaction.message,passphrase:t.passphrase});t.$modal.show("confirmSendModal",{transaction:o})}})},sendMaxAmount:function(){var t=this;i.getBlockchainFee().then(function(n){i.getBalance(t.wallet.address).then(function(a){var e=n/Math.pow(10,8);t.transaction.amount=a-e<0?0:a-e})})},sendLedger:function(){var t=new o.default(this.$store.getters.app.ledgerComm),n=1*Math.pow(10,8),a=i.arkjs.transaction.createTransaction("D5GcwQbPasZPmZvbPUc3bgDcvhpFT5Q36q",n,null,"",null);delete a.signature,a.senderId=this.$store.getters.wallet.address,a.senderPublicKey=this.$store.getters.wallet.publicKey,console.log("tx",a);var e=i.arkjs.crypto.getBytes(a,!0,!0).toString("hex"),s=this.$store.getters.networkType.slip44;t.signTransaction_async("44'/"+s+"'/0'/0/0",e).then(function(t){console.log(t)}).fail(function(t){console.log("Ledger error : ",t)})},validateForm:function(){},closeSendForm:function(){this.$store.dispatch("toggleSendForm")}},mounted:function(){this.transaction={to:null,amount:0,message:null},this.passphrase=""}}},RuoX:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("DRH5"),s=a.n(e),i=a("Vdmn"),o=function(t){a("AVTv")},r=a("VU/8")(s.a,i.a,!1,o,"data-v-2b93e5d2",null);n.default=r.exports},Vdmn:function(t,n,a){"use strict";var e={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"ui container"},[t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"ui segment"},[a("form",{staticClass:"ui form"},[a("div",{staticClass:"field",class:{success:t.addressValid}},[a("label",[t._v("Address")]),t._v(" "),a("div",{staticClass:"ui action input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.to,expression:"transaction.to"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter recipient address",disabled:t.transactionSending},domProps:{value:t.transaction.to},on:{input:function(n){n.target.composing||t.$set(t.transaction,"to",n.target.value)}}}),t._v(" "),a("button",{staticClass:"ui basic button",on:{click:function(n){n.preventDefault(),t.openCodeScanner("FillRecipientAddress")}}},[a("i",{staticClass:"fa fa-qrcode"})])])]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Amount")]),t._v(" "),a("div",{staticClass:"ui right action input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.amount,expression:"transaction.amount"}],attrs:{type:"number",min:"0",disabled:t.transactionSending},domProps:{value:t.transaction.amount},on:{input:function(n){n.target.composing||t.$set(t.transaction,"amount",n.target.value)}}}),t._v(" "),a("div",{staticClass:"ui basic button",on:{click:function(n){n.preventDefault(),t.sendMaxAmount()}}},[t._v("\n            MAX\n          ")])])]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Message")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.message,expression:"transaction.message"}],attrs:{type:"text",placeholder:"Type message (Optionnal)",disabled:t.transactionSending},domProps:{value:t.transaction.message},on:{input:function(n){n.target.composing||t.$set(t.transaction,"message",n.target.value)}}})]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Passphrase")]),t._v(" "),a("div",{staticClass:"ui action input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.passphrase,expression:"passphrase"}],staticClass:"input",attrs:{type:"password",placeholder:"Enter passphrase",disabled:t.transactionSending},domProps:{value:t.passphrase},on:{input:function(n){n.target.composing||(t.passphrase=n.target.value)}}}),t._v(" "),a("button",{staticClass:"ui basic button",on:{click:function(n){n.preventDefault(),t.openCodeScanner("SignTransaction")}}},[a("i",{staticClass:"fa fa-qrcode"})])])]),t._v(" "),a("button",{staticClass:"ui button green",class:{disabled:t.transactionSending},on:{click:function(n){n.preventDefault(),t.send()}}},[t.transactionSending?t._e():a("i",{staticClass:"fa fa-send-o"}),t._v(" "),t.transactionSending?a("i",{staticClass:"fa fa-spinner fa-spin"}):t._e(),t._v(" "),t.transactionSending?t._e():a("span",[t._v("Send")]),t._v(" "),t.transactionSending?a("span",[t._v("Sending")]):t._e()]),t._v(" "),t.transactionSending?t._e():a("button",{staticClass:"ui button basic",on:{click:function(n){n.preventDefault(),t.closeSendForm()}}},[a("i",{staticClass:"fa fa-remove"}),t._v("\n        Close\n      ")])])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"ui header left aligned"},[n("i",{staticClass:"fa fa-send-o"}),this._v(" "),n("div",{staticClass:"content"},[this._v("\n      Send\n    ")])])}]};n.a=e},zBK0:function(t,n,a){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.sendTransaction=n.validateTransaction=void 0;var s=e(a("mvHQ")),i=a("wgAu"),o=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n.default=t,n}(a("Yt4M")),r=e(a("mtWM")),c=e(a("IcnI"));n.validateTransaction=function(t){var n=!0;return null!=t.passphrase&&""!==t.passphrase||((0,i.errorNotification)("Passphrase is not valid"),n=!1),o.arkjs.crypto.validateAddress(t.transaction.to)||((0,i.errorNotification)("Address is not valid"),n=!1),n},n.sendTransaction=function(t){return o.getNetHash().then(function(n){var a=(0,s.default)({transactions:[t]});return r.default.post(o.getEndpoint()+"/peer/transactions",a,{headers:{"Content-Type":"application/json",version:"0.3.0",port:1,nethash:n}}).then(function(t){return c.default.dispatch("setTransactionSending",!1),c.default.dispatch("toggleSendForm",!1),c.default.dispatch("toggleVoteForm",!1),(0,i.addNotification)({message:"Transaction sent",color:"green"}),t}).catch(function(t){if(c.default.dispatch("setTransactionSending",!1),(0,i.errorNotification)({message:t}),t)return t})})}}});