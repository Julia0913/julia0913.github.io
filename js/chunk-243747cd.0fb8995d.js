(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-243747cd"],{"27d9":function(t,o,s){},"47b2":function(t,o,s){"use strict";s.r(o);var a=function(){var t=this,o=t._self._c;return o("div",{staticClass:"stand-table-item lighter"},[o("div",{staticClass:"table-col pool-name"},[o("div",{staticClass:"val-item"},[o("TokenIcon",{attrs:{token:t.pool.name}}),o("p",[t._v(" "+t._s(t.pool.name)+" "),o("br"),t.pool.nameSubtitle?o("span",{staticClass:"pool-type"},[t._v(t._s(t.pool.nameSubtitle))]):t._e()])],1)]),o("div",{staticClass:"table-col"},[o("p",[t._v(t._s(t.pool.poolYield))]),o("p",{staticClass:"mini-text"},[t._v(t._s(t.pool.tokenName)+"/day")])]),o("div",{staticClass:"table-col"},[o("p",[t._v(t._s(t.pool.poolRoi)+"%")])]),o("div",{staticClass:"table-col"},[o("div",{staticClass:"val-item"},[o("p",[t._v("$ "+t._s(t.pool.poolTvl))])])]),o("div",{staticClass:"action-col"},[t.pool.allowance?[o("button",{staticClass:"btn mini",on:{click:t.stakeHandler}},[t._v("Stake")]),o("button",{staticClass:"btn mini",on:{click:t.unstakeHandler}},[t._v("unstake")])]:o("button",{staticClass:"btn mini",on:{click:t.approveHandler}},[t._v("APPROVE")])],2)])},e=[];const f=()=>s.e("chunk-6d58df67").then(s.bind(null,"eaf1"));var l={props:{pool:{type:Object,require:!0}},computed:{account(){return this.$store.getters.getAccount}},methods:{stakeHandler(){this.$store.commit("setPopupState",{type:"stake",isShow:!0,datas:{poolId:this.pool.id}})},unstakeHandler(){this.$store.commit("setPopupState",{type:"unstake",isShow:!0,datas:{poolId:this.pool.id}})},async approveHandler(){try{const t=await this.pool.erc20ContractInstance.approve(this.pool.contractAddress,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");await t.wait()}catch(t){}}},components:{TokenIcon:f}},n=l,i=(s("e3b7"),s("2877")),c=Object(i["a"])(n,a,e,!1,null,"b903edac",null);o["default"]=c.exports},e3b7:function(t,o,s){"use strict";s("27d9")}}]);