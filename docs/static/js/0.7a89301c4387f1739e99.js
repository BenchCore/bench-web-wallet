webpackJsonp([0,4,5,6,8,9],{"+Bu3":function(t,e,a){var n=a("Sxne");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("16844620",n,!0)},"+ZTq":function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,".ui.fluid.card[data-v-44043fda]{margin-top:.35rem;margin-bottom:.15rem;color:rgba(0,0,0,.87)}.is-address[data-v-44043fda]{font-style:italic;font-weight:700}.tx-message[data-v-44043fda]{font-style:italic}.withdrawal-bg[data-v-44043fda]{color:#db2828}.deposit-bg[data-v-44043fda]{color:#21ba45}.vote-bg[data-v-44043fda]{color:#2185d0}","",{version:3,sources:["E:/dev/arkwebwallet/src/components/Transaction.vue"],names:[],mappings:"AACA,gCACE,kBAAoB,AACpB,qBAAuB,AACvB,qBAAuB,CACxB,AACD,6BACE,kBAAmB,AACnB,eAAkB,CACnB,AACD,6BACE,iBAAmB,CACpB,AACD,gCACE,aAA4B,CAC7B,AACD,6BACE,aAA4B,CAC7B,AACD,0BACE,aAA6B,CAC9B",file:"Transaction.vue",sourcesContent:["\n.ui.fluid.card[data-v-44043fda] {\r\n  margin-top: 0.35rem;\r\n  margin-bottom: 0.15rem;\r\n  color: rgba(0,0,0,.87);\n}\n.is-address[data-v-44043fda] {\r\n  font-style: italic;\r\n  font-weight: bold;\n}\n.tx-message[data-v-44043fda] {\r\n  font-style: italic;\n}\n.withdrawal-bg[data-v-44043fda] {\r\n  color: rgba(219, 40, 40, 1);\n}\n.deposit-bg[data-v-44043fda] {\r\n  color: rgba(33, 186, 69, 1);\n}\n.vote-bg[data-v-44043fda] {\r\n  color: rgba(33, 133, 208, 1);\n}\r\n"],sourceRoot:""}])},"/IiG":function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container"},[t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"ui segment"},[t.currentDelegate?a("div",{staticClass:"ui warning message"},[t._v("\n      You are already voting for "),a("b",[t._v(t._s(t.currentDelegate.username))]),t._v(" as delegate\n    ")]):t._e(),t._v(" "),a("form",{staticClass:"ui form"},[t.delegates.length>0?a("div",{staticClass:"field"},[a("label",[t._v("Forging delegates")]),t._v(" "),a("div",{staticClass:"ui input"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDelegate,expression:"selectedDelegate"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedDelegate=e.target.multiple?a:a[0]}}},t._l(t.delegates,function(e){return a("option",{key:e.username,domProps:{value:e.username}},[t._v("\n              "+t._s(e.username)+" (Approval : "+t._s(e.approval)+") - Productivity : ("+t._s(e.productivity)+")\n            ")])}))]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Delegate name")]),t._v(" "),a("div",{staticClass:"ui input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.delegateName,expression:"delegateName"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter delegate name"},domProps:{value:t.delegateName},on:{input:function(e){e.target.composing||(t.delegateName=e.target.value)}}})])])]):t._e(),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Passphrase")]),t._v(" "),a("div",{staticClass:"ui action input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.passphrase,expression:"passphrase"}],staticClass:"input",attrs:{type:"password",placeholder:"Enter passphrase"},domProps:{value:t.passphrase},on:{input:function(e){e.target.composing||(t.passphrase=e.target.value)}}}),t._v(" "),a("button",{staticClass:"ui basic button",on:{click:function(e){e.preventDefault(),t.openCodeScanner()}}},[a("i",{staticClass:"fa fa-qrcode"})])])]),t._v(" "),a("button",{staticClass:"ui button green",on:{click:function(e){e.preventDefault(),t.vote()}}},[a("i",{staticClass:"fa fa-thumbs-up"}),t._v("\n        Vote\n      ")]),t._v(" "),a("button",{staticClass:"ui button basic",on:{click:function(e){e.preventDefault(),t.closeVoteForm()}}},[a("i",{staticClass:"fa fa-remove"}),t._v("\n        Close\n      ")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui header left aligned"},[e("i",{staticClass:"fa fa-thumbs-up"}),this._v(" "),e("div",{staticClass:"content"},[this._v("\n      Vote\n    ")])])}]};e.a=n},"1vxa":function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Wallet.vue",sourceRoot:""}])},"5O3v":function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Send.vue",sourceRoot:""}])},AEBh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(a("1w5v"));e.default={name:"currencyModal",data:function(){return{currencies:n.default}},methods:{setCurrency:function(t){this.$store.dispatch("setFiatCurrency",t),this.$modal.hide("currencyModal")},closeModal:function(){this.$modal.hide("currencyModal")}},mounted:function(){}}},AVTv:function(t,e,a){var n=a("5O3v");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("42d665fc",n,!0)},DRH5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("zBK0"),s=a("wgAu"),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(a("Yt4M")),r=function(t){return t&&t.__esModule?t:{default:t}}(a("gsOm")),o={to:null,amount:0,message:null};e.default={name:"send",data:function(){return{sending:!1,passphrase:"",transaction:o}},watch:{qrScanner:function(t){"SignTransaction"===t.action&&(this.passphrase=t.payload),"FillRecipientAddress"===t.action&&(this.transaction.to=t.payload),this.$store.dispatch("clearCodeScanned")}},computed:{wallet:function(){return this.$store.getters.wallet},addressValid:function(){return i.arkjs.crypto.validateAddress(this.transaction.to)},transactionSending:function(){return this.$store.getters.app.transactionSending},qrScanner:function(){return this.$store.getters.qrScanner}},methods:{openCodeScanner:function(t){this.$modal.show("scanCodeModal",{action:t})},send:function(){var t=this,e={transaction:this.transaction,passphrase:this.passphrase};i.getBalance(this.wallet.address).then(function(a){if(e.transaction.amount>a)return(0,s.errorNotification)("Not enough ARK"),!1;if((0,n.validateTransaction)(e)){var r=i.createTransaction({to:t.transaction.to,amount:t.transaction.amount,message:t.transaction.message,passphrase:t.passphrase});t.$modal.show("confirmSendModal",{transaction:r})}})},sendMaxAmount:function(){var t=this;i.getBlockchainFee().then(function(e){i.getBalance(t.wallet.address).then(function(a){var n=e/Math.pow(10,8);t.transaction.amount=a-n<0?0:a-n})})},sendLedger:function(){var t=new r.default(this.$store.getters.app.ledgerComm),e=1*Math.pow(10,8),a=i.arkjs.transaction.createTransaction("D5GcwQbPasZPmZvbPUc3bgDcvhpFT5Q36q",e,null,"",null);delete a.signature,a.senderId=this.$store.getters.wallet.address,a.senderPublicKey=this.$store.getters.wallet.publicKey,console.log("tx",a);var n=i.arkjs.crypto.getBytes(a,!0,!0).toString("hex"),s=this.$store.getters.networkType.slip44;t.signTransaction_async("44'/"+s+"'/0'/0/0",n).then(function(t){console.log(t)}).fail(function(t){console.log("Ledger error : ",t)})},validateForm:function(){},closeSendForm:function(){this.$store.dispatch("toggleSendForm")}},mounted:function(){this.transaction={to:null,amount:0,message:null},this.passphrase=""}}},FZkX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(a("Yt4M")),s=a("wgAu");e.default={name:"delegateVote",data:function(){return{selectedDelegate:null,delegateName:"",passphrase:"",delegates:[]}},watch:{selectedDelegate:function(t){this.delegateName=t},qrScanner:function(t){"SignTransaction"===t.action&&(this.passphrase=t.payload),this.$store.dispatch("clearCodeScanned")}},computed:{wallet:function(){return this.$store.getters.wallet},qrScanner:function(){return this.$store.getters.qrScanner},currentDelegate:function(){return this.wallet.delegate}},methods:{vote:function(){var t=this;return""===this.delegateName?(0,s.errorNotification)("Delegate not selected"):""===this.passphrase?(0,s.errorNotification)("Passphrase is not valid"):void n.getDelegateByUsername(this.delegateName).then(function(e){if(!e)return(0,s.errorNotification)("Delegate not found");t.createVoteTransaction(e.publicKey)})},createVoteTransaction:function(t){var e=n.createVoteTransaction({passphrase:this.passphrase,delegates:["+"+t],secondPassphrase:null});console.log(e),this.$modal.show("confirmSendModal",{transaction:e})},openCodeScanner:function(t){this.$modal.show("scanCodeModal",{action:"SignTransaction"})},closeVoteForm:function(){this.$store.dispatch("toggleVoteForm",!1)}},mounted:function(){var t=this;n.getDelegates({limit:51,orderBy:"rate:asc"}).then(function(e){t.delegates=e})}}},Gu9D:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{name:"currencyModal",height:"auto",adaptive:!0}},[a("div",{staticClass:"ui container center aligned currency-modal"},[a("div",{staticClass:"ui cards"},t._l(t.currencies,function(e){return a("a",{key:e.id,staticClass:"ui card fluid",on:{click:function(a){a.preventDefault(),t.setCurrency(e)}}},[a("div",{staticClass:"content"},[a("b",[t._v(t._s(e.label)+" "+t._s(e.id))])])])})),t._v(" "),a("div",{staticClass:"ui segment basic"},[a("button",{staticClass:"ui button compact basic",on:{click:function(e){e.preventDefault(),t.closeModal()}}},[a("i",{staticClass:"fa fa-remove"}),t._v("\n          Close\n        ")])])])])},staticRenderFns:[]};e.a=n},LhbS:function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,".confirm-send-modal[data-v-320a17f2]{padding:1.5em}","",{version:3,sources:["E:/dev/arkwebwallet/src/components/modals/ConfirmSendModal.vue"],names:[],mappings:"AACA,qCACE,aAAe,CAChB",file:"ConfirmSendModal.vue",sourcesContent:["\n.confirm-send-modal[data-v-320a17f2] {\r\n  padding: 1.5em;\n}\r\n"],sourceRoot:""}])},MTP8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Urns"),s=a.n(n),i=a("i8td"),r=function(t){a("ZIxM")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-320a17f2",null);e.default=o.exports},P8ll:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("sG4c"),s=a.n(n),i=a("hhi8"),r=function(t){a("epTs")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-44043fda",null);e.default=o.exports},RuoX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("DRH5"),s=a.n(n),i=a("Vdmn"),r=function(t){a("AVTv")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-2b93e5d2",null);e.default=o.exports},Sxne:function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,".currency-modal[data-v-4254e0a4]{padding:1.5em}.ui.fluid.card[data-v-4254e0a4]{margin-top:.35rem;margin-bottom:.15rem;color:rgba(0,0,0,.87)}","",{version:3,sources:["E:/dev/arkwebwallet/src/components/modals/CurrencyModal.vue"],names:[],mappings:"AACA,iCACE,aAAe,CAChB,AACD,gCACE,kBAAoB,AACpB,qBAAuB,AACvB,qBAAuB,CACxB",file:"CurrencyModal.vue",sourcesContent:["\n.currency-modal[data-v-4254e0a4] {\r\n  padding: 1.5em;\n}\n.ui.fluid.card[data-v-4254e0a4] {\r\n  margin-top: 0.35rem;\r\n  margin-bottom: 0.15rem;\r\n  color: rgba(0,0,0,.87);\n}\r\n"],sourceRoot:""}])},Urns:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("zBK0");e.default={name:"confirmSendModal",data:function(){return{transaction:null}},computed:{amount:function(){return this.transaction.amount/Math.pow(10,8)},fee:function(){return this.transaction.fee/Math.pow(10,8)},networkType:function(){return this.$store.getters.networkType}},mounted:function(){},methods:{confirm:function(){this.$modal.hide("confirmSendModal"),this.$store.dispatch("setTransactionSending",!0),(0,n.sendTransaction)(this.transaction)},cancel:function(){this.$modal.hide("confirmSendModal")},beforeOpen:function(t){this.transaction=t.params.transaction},closed:function(t){}}}},Vdmn:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container"},[t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"ui segment"},[a("form",{staticClass:"ui form"},[a("div",{staticClass:"field",class:{success:t.addressValid}},[a("label",[t._v("Address")]),t._v(" "),a("div",{staticClass:"ui action input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.to,expression:"transaction.to"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter recipient address",disabled:t.transactionSending},domProps:{value:t.transaction.to},on:{input:function(e){e.target.composing||t.$set(t.transaction,"to",e.target.value)}}}),t._v(" "),a("button",{staticClass:"ui basic button",on:{click:function(e){e.preventDefault(),t.openCodeScanner("FillRecipientAddress")}}},[a("i",{staticClass:"fa fa-qrcode"})])])]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Amount")]),t._v(" "),a("div",{staticClass:"ui right action input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.amount,expression:"transaction.amount"}],attrs:{type:"number",min:"0",disabled:t.transactionSending},domProps:{value:t.transaction.amount},on:{input:function(e){e.target.composing||t.$set(t.transaction,"amount",e.target.value)}}}),t._v(" "),a("div",{staticClass:"ui basic button",on:{click:function(e){e.preventDefault(),t.sendMaxAmount()}}},[t._v("\n            MAX\n          ")])])]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Message")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.message,expression:"transaction.message"}],attrs:{type:"text",placeholder:"Type message (Optionnal)",disabled:t.transactionSending},domProps:{value:t.transaction.message},on:{input:function(e){e.target.composing||t.$set(t.transaction,"message",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Passphrase")]),t._v(" "),a("div",{staticClass:"ui action input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.passphrase,expression:"passphrase"}],staticClass:"input",attrs:{type:"password",placeholder:"Enter passphrase",disabled:t.transactionSending},domProps:{value:t.passphrase},on:{input:function(e){e.target.composing||(t.passphrase=e.target.value)}}}),t._v(" "),a("button",{staticClass:"ui basic button",on:{click:function(e){e.preventDefault(),t.openCodeScanner("SignTransaction")}}},[a("i",{staticClass:"fa fa-qrcode"})])])]),t._v(" "),a("button",{staticClass:"ui button green",class:{disabled:t.transactionSending},on:{click:function(e){e.preventDefault(),t.send()}}},[t.transactionSending?t._e():a("i",{staticClass:"fa fa-send-o"}),t._v(" "),t.transactionSending?a("i",{staticClass:"fa fa-spinner fa-spin"}):t._e(),t._v(" "),t.transactionSending?t._e():a("span",[t._v("Send")]),t._v(" "),t.transactionSending?a("span",[t._v("Sending")]):t._e()]),t._v(" "),t.transactionSending?t._e():a("button",{staticClass:"ui button basic",on:{click:function(e){e.preventDefault(),t.closeSendForm()}}},[a("i",{staticClass:"fa fa-remove"}),t._v("\n        Close\n      ")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui header left aligned"},[e("i",{staticClass:"fa fa-send-o"}),this._v(" "),e("div",{staticClass:"content"},[this._v("\n      Send\n    ")])])}]};e.a=n},VovI:function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"DelegateVote.vue",sourceRoot:""}])},WS9P:function(t,e,a){var n=a("1vxa");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("3cd78e52",n,!0)},WtHv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("FZkX"),s=a.n(n),i=a("/IiG"),r=function(t){a("xpPn")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-f5d64cf0",null);e.default=o.exports},ZIxM:function(t,e,a){var n=a("LhbS");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("3db323ca",n,!0)},b5Yn:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var i=a("wgAu"),r=s(a("gyMJ")),o=n(a("71e1")),c=s(a("Yt4M")),l=n(a("iOEt")),d=n(a("MTP8")),u=n(a("P8ll")),f=n(a("RuoX")),v=n(a("WtHv"));e.default={name:"wallet",components:{CurrencyModal:l.default,ConfirmSendModal:d.default,Transaction:u.default,Send:f.default,DelegateVote:v.default},data:function(){return{timer:null,transactions:null,arkFiatValue:0,balance:null,claimAmounts:null,QRAddress:null}},computed:{wallet:function(){return this.$store.getters.wallet},app:function(){return this.$store.getters.app},fiatCurrency:function(){return this.$store.getters.app.fiatCurrency},balanceFiat:function(){return r.isDevNetwork()?0:this.arkFiatValue*this.balance},currentDelegate:function(){return this.wallet.delegate},networkType:function(){return this.$store.getters.networkType}},watch:{fiatCurrency:function(){this.getARKMarket()}},methods:{toggleSendForm:function(){this.$store.dispatch("toggleSendForm"),this.$store.dispatch("toggleVoteForm",!1)},toggleDelegateVote:function(){this.$store.dispatch("toggleVoteForm"),this.$store.dispatch("toggleSendForm",!1)},getBalance:function(){var t=this;c.getBalance(this.wallet.address).then(function(e){t.balance=e})},getTransactions:function(){var t=this;c.getTransactionsFromAddress(this.wallet.address,{orderBy:"timestamp:desc"}).then(function(e){t.transactions=e})},refresh:function(){this.transactions=null,this.balance=null,this.getTransactions(),this.getBalance()},copySuccess:function(){(0,i.clipboardNotification)()},currencyModal:function(){this.$modal.show("currencyModal")},getARKMarket:function(){var t=this;r.getARKMarket(this.fiatCurrency.id).then(function(e){t.arkFiatValue=e.data[t.fiatCurrency.id]})}},beforeDestroy:function(){clearInterval(this.timer),this.$store.dispatch("closeWallet")},mounted:function(){var t=this;if(!this.$store.getters.wallet.open)return this.$router.push({name:"OpenWallet"}),null;c.getDelegatesFromAddress(this.$store.getters.wallet.address).then(function(e){e&&e.length>0&&t.$store.dispatch("setDelegate",e[0])}),this.getBalance(),this.getTransactions(),this.getARKMarket(),this.timer=setInterval(function(){t.getBalance(),t.getTransactions()},1e4),this.$nextTick(function(){o.default.toDataURL(t.$store.getters.wallet.address,function(e,a){e&&console.log(e),t.QRAddress=a})})}}},epTs:function(t,e,a){var n=a("+ZTq");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("c6cd1884",n,!0)},fFsM:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container center aligned"},[t.wallet?a("div",{staticClass:"ui segment raised center aligned"},[a("div",{staticClass:"ui equal width stackable grid"},[a("div",{staticClass:"ui column center aligned"},[a("img",{staticClass:"ui centered image",attrs:{src:t.QRAddress}}),t._v("\n        "+t._s(t.wallet.address)),a("br"),t._v(" "),t.currentDelegate?a("span",[a("b",[t._v(t._s(t.currentDelegate.username))]),t._v(" (#"+t._s(t.currentDelegate.rate)+")\n        ")]):t._e(),t._v(" "),a("a",{directives:[{name:"clipboard",rawName:"v-clipboard",value:this.wallet.address,expression:"this.wallet.address"}],on:{success:function(e){t.copySuccess()}}},[a("i",{staticClass:"fa fa-copy"})])]),t._v(" "),a("div",{staticClass:"ui column middle aligned"},[a("div",{staticClass:"ui equal width grid center aligned"},[a("div",{staticClass:"ui button compact basic",on:{click:function(e){e.preventDefault(),t.currencyModal()}}},[a("i",{staticClass:"fa fa-money"})]),t._v(" "),a("div",{staticClass:"ui button compact basic",class:{disabled:null==t.balance||!t.transactions},on:{click:function(e){e.preventDefault(),t.refresh()}}},[a("i",{staticClass:"fa fa-refresh",class:{"fa-spin":null==t.balance||!t.transactions}})])]),t._v(" "),a("div",{staticClass:"ui equal width grid center aligned"},[a("div",{staticClass:"ui column"},[a("div",{staticClass:"ui medium header"},[null==t.balance?a("span",[a("i",{staticClass:"fa fa-spinner fa-spin"})]):t._e(),t._v(" "),t.balance||0===t.balance?a("span",[t._v(t._s(t.balance.toLocaleString()))]):t._e(),t._v(" "),a("div",{staticClass:"ui sub header"},[t._v(t._s(t.networkType.symbol))])])]),t._v(" "),a("div",{staticClass:"ui column"},[a("div",{staticClass:"ui medium header"},[null==t.balance?a("span",[a("i",{staticClass:"fa fa-spinner fa-spin"})]):t._e(),t._v(" "),t.balance||0===t.balance?a("span",[t._v(t._s(t.balanceFiat.toLocaleString()))]):t._e(),t._v(" "),a("div",{staticClass:"ui sub header"},[t._v(t._s(t.fiatCurrency.label))])])])])])])]):t._e(),t._v(" "),a("div",{staticClass:"ui two item menu"},[a("a",{staticClass:"item",class:{"active teal":t.app.sendFormVisible},on:{click:function(e){e.preventDefault(),t.toggleSendForm()}}},[a("i",{staticClass:"fa fa-send-o"}),t._v("\n      Send\n    ")]),t._v(" "),a("a",{staticClass:"item",class:{"active teal":t.app.voteFormVisible},on:{click:function(e){e.preventDefault(),t.toggleDelegateVote()}}},[a("i",{staticClass:"fa fa-thumbs-up"}),t._v("\n      Vote\n    ")])]),t._v(" "),t.app.sendFormVisible?a("send"):t._e(),t._v(" "),t.app.voteFormVisible?a("delegate-vote"):t._e(),t._v(" "),t._m(0,!1,!1),t._v(" "),t.transactions?t._e():a("div",{staticClass:"ui segment center aligned"},[a("i",{staticClass:"fa fa-spinner fa-spin"}),t._v("\n    Loading transactions\n  ")]),t._v(" "),t.transactions?a("div",{staticClass:"ui cards"},t._l(t.transactions,function(t){return a("transaction",{key:t.id,attrs:{tx:t}})})):t._e(),t._v(" "),t.transactions&&0===t.transactions.length?a("div",{staticClass:"ui segment center aligned"},[t._v("\n    No transactions\n  ")]):t._e(),t._v(" "),a("currency-modal"),t._v(" "),a("confirm-send-modal")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui header left aligned"},[e("i",{staticClass:"fa fa-exchange"}),this._v(" "),e("div",{staticClass:"content"},[this._v("\n      Transactions\n    ")])])}]};e.a=n},hhi8:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"ui fluid card",class:{raised:t.tx.id===t.selectedTx},on:{click:function(e){e.preventDefault(),t.selectTx(t.tx.id)}}},[a("div",{staticClass:"content"},[a("div",{staticClass:"ui equal width grid stackable"},[a("div",{staticClass:"ui column left aligned"},[a("i",{staticClass:"fa fa-calendar"}),t._v("\n        "+t._s(t.date)+"\n      ")]),t._v(" "),a("div",{staticClass:"ui column left aligned",class:{"is-address":t.tx.senderId===t.address}},[a("i",{staticClass:"fa fa-chevron-left"}),t._v("\n        "+t._s(t.truncateTxId(t.tx.senderId))+"\n      ")]),t._v(" "),a("div",{staticClass:"ui column left aligned",class:{"is-address":t.tx.recipientId===t.address}},[a("i",{staticClass:"fa fa-chevron-right"}),t._v("\n        "+t._s(t.truncateTxId(t.tx.recipientId))+"\n      ")]),t._v(" "),a("div",{staticClass:"ui column right aligned",class:{"deposit-bg":"deposit"===t.txWay,"withdrawal-bg":"withdrawal"===t.txWay,"vote-bg":"vote"===t.txType}},[t._v("\n        "+t._s((t.tx.amount/1e8).toLocaleString())+" "+t._s(t.networkType.symbol)+"\n      ")])])]),t._v(" "),t.tx.id===t.selectedTx?a("div",{staticClass:"ui content"},[t.tx.vendorField?a("div",{staticClass:"ui segment basic center aligned tx-message"},[t._v("\n      "+t._s(t.tx.vendorField)+"\n    ")]):t._e(),t._v(" "),a("div",{staticClass:"ui equal width grid stackable"},[a("div",{staticClass:"ui column"},[a("div",{staticClass:"ui small header"},[t._v("From")]),t._v(" "),a("div",{staticClass:"text",class:{"is-address":t.tx.senderId===t.address}},[t._v("\n          "+t._s(t.tx.senderId)+"\n        ")])]),t._v(" "),t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"ui column"},[a("div",{staticClass:"ui small header"},[t._v("To")]),t._v(" "),a("div",{staticClass:"text",class:{"is-address":t.tx.recipientId===t.address}},[t._v("\n          "+t._s(t.tx.recipientId)+"\n        ")])])])]):t._e(),t._v(" "),t.tx.id===t.selectedTx?a("div",{staticClass:"content"},[a("div",{staticClass:"ui equal width grid"},[a("div",{staticClass:"ui column left aligned"},[a("i",{staticClass:"fa fa-hashtag"}),t._v("\n        "+t._s(t.truncateTxId(t.tx.id))+"\n        "),a("a",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.tx.id,expression:"tx.id"}],on:{success:function(e){t.copySuccess()}}},[a("i",{staticClass:"fa fa-copy"})])]),t._v(" "),a("div",{staticClass:"ui column center aligned"},[a("i",{staticClass:"fa fa-money"}),t._v("\n        "+t._s((t.tx.fee/1e8).toLocaleString())+" "+t._s(t.networkType.symbol)+"\n      ")]),t._v(" "),a("div",{staticClass:"ui column right aligned"},[a("i",{staticClass:"fa fa-cube"}),t._v("\n        "+t._s(t.tx.confirmations.toLocaleString())+"\n      ")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui column middle aligned"},[e("i",{staticClass:"fa fa-arrow-right"})])}]};e.a=n},i8td:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{name:"confirmSendModal",height:"auto",adaptive:!0},on:{"before-open":t.beforeOpen,closed:t.closed}},[t.transaction?a("div",{staticClass:"ui container center aligned confirm-send-modal"},[a("div",{staticClass:"ui header"},[t._v("\n        Confirm transaction ?\n        "),3===t.transaction.type?a("div",{staticClass:"sub header"},[t._v("\n          Vote transaction\n        ")]):t._e()]),t._v(" "),a("div",{staticClass:"ui column grid container left aligned"},[a("div",{staticClass:"two column row"},[a("div",{staticClass:"column six wide"},[t._v("To")]),t._v(" "),a("div",{staticClass:"column ten wide"},[a("div",{staticClass:"ui small header"},[t._v(t._s(t.transaction.recipientId))])])]),t._v(" "),a("div",{staticClass:"two column row"},[a("div",{staticClass:"column six wide"},[t._v("Amount")]),t._v(" "),a("div",{staticClass:"column ten wide"},[a("div",{staticClass:"ui small header"},[t._v(t._s(t.amount)+" "+t._s(t.networkType.symbol))])])]),t._v(" "),a("div",{staticClass:"two column row"},[a("div",{staticClass:"column six wide"},[t._v("Fee")]),t._v(" "),a("div",{staticClass:"column ten wide"},[a("div",{staticClass:"ui small header"},[t._v(t._s(t.fee)+" "+t._s(t.networkType.symbol))])])])]),t._v(" "),a("div",{staticClass:"ui segment basic"},[a("button",{staticClass:"ui button green compact",on:{click:function(e){e.preventDefault(),t.confirm()}}},[a("i",{staticClass:"fa fa-check"}),t._v("\n          Yes\n        ")]),t._v(" "),a("button",{staticClass:"ui button red compact basic",on:{click:function(e){e.preventDefault(),t.cancel()}}},[a("i",{staticClass:"fa fa-remove"}),t._v("\n          No\n        ")])])]):t._e()])},staticRenderFns:[]};e.a=n},iOEt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("AEBh"),s=a.n(n),i=a("Gu9D"),r=function(t){a("+Bu3")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-4254e0a4",null);e.default=o.exports},sG4c:function(t,e,a){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var s=a("wgAu"),i=n(a("Q5rI")),r=n(a("gyMJ"));e.default={name:"transaction",props:["tx"],data:function(){return{selectedTx:null}},computed:{address:function(){return this.$store.getters.wallet.address},networkType:function(){return this.$store.getters.networkType},date:function(){return r.dateFromNow(this.tx.timestamp)},txWay:function(){return this.tx.senderId===this.address?"withdrawal":this.tx.recipientId===this.address?"deposit":void 0},txType:function(){switch(this.tx.type){case 0:return"transaction";case 3:return"vote"}}},methods:{selectTx:function(t){t!==this.selectedTx?this.selectedTx=t:this.selectedTx=null},truncateTxId:function(t){return i.truncateHash(t,4)},getTransactionDetails:function(){},copySuccess:function(){(0,s.clipboardNotification)()}},mounted:function(){}}},uBEm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("b5Yn"),s=a.n(n),i=a("fFsM"),r=function(t){a("WS9P")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-5f4c3d7b",null);e.default=o.exports},xpPn:function(t,e,a){var n=a("VovI");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("35355c7a",n,!0)},zBK0:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.sendTransaction=e.validateTransaction=void 0;var s=n(a("mvHQ")),i=a("wgAu"),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(a("Yt4M")),o=n(a("mtWM")),c=n(a("IcnI"));e.validateTransaction=function(t){var e=!0;return null!=t.passphrase&&""!==t.passphrase||((0,i.errorNotification)("Passphrase is not valid"),e=!1),r.arkjs.crypto.validateAddress(t.transaction.to)||((0,i.errorNotification)("Address is not valid"),e=!1),e},e.sendTransaction=function(t){return r.getNetHash().then(function(e){var a=(0,s.default)({transactions:[t]});return o.default.post(r.getEndpoint()+"/peer/transactions",a,{headers:{"Content-Type":"application/json",version:"0.3.0",port:1,nethash:e}}).then(function(t){return c.default.dispatch("setTransactionSending",!1),c.default.dispatch("toggleSendForm",!1),c.default.dispatch("toggleVoteForm",!1),(0,i.addNotification)({message:"Transaction sent",color:"green"}),t}).catch(function(t){if(c.default.dispatch("setTransactionSending",!1),(0,i.errorNotification)({message:t}),t)return t})})}}});