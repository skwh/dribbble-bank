(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dribbble-bank/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"002f":function(t,e,n){"use strict";var r=n("060f"),a=n.n(r);a.a},"060f":function(t,e,n){},"1d8b":function(t,e,n){},"25e9":function(t,e,n){"use strict";var r=n("57d7"),a=n.n(r);a.a},"3e45":function(t,e,n){"use strict";var r=n("f13f"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("div",{attrs:{id:"app"}},[n("router-view"),n("navigation")],1)])},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[t._l(t.elements,function(e){return[n("div",{key:e.name,class:{button:!0,selected:e.selected}},[n("icon",{attrs:{name:e.name}}),n("span",[t._v(t._s(e.text))])],1)]})],2)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"material-icons-outlined"},[t._v(t._s(t.name))])},l=[],u={name:"Icon",props:{name:String}},d=u,f=n("2877"),p=Object(f["a"])(d,c,l,!1,null,"77424860",null),m=p.exports,v=[{name:"home",text:"Home",selected:!0},{name:"credit_card",text:"Cards",selected:!1},{name:"compare_arrows",text:"Transactions",selected:!1},{name:"more_vert",text:"More",selected:!1}],_={name:"Navigation",data:function(){return{elements:v}},components:{Icon:m}},h=_,b=(n("cd12"),Object(f["a"])(h,o,i,!1,null,"d47cbeda",null)),x=b.exports,g={name:"app",components:{Navigation:x}},y=g,w=(n("5c0b"),Object(f["a"])(y,a,s,!1,null,null,null)),C=w.exports,T=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[n("div",{staticClass:"top-sheet"},[n("page-header",{scopedSlots:t._u([{key:"left",fn:function(){return[n("h1",[t._v("Balance")])]},proxy:!0},{key:"right",fn:function(){return[n("h1",[t._v("Profile")])]},proxy:!0}])})],1),n("card",{attrs:{color:t.card.color,currency:t.card.currency,balance:t.card.balance,lastFourDigits:t.card.lastFourDigits,expMonth:t.card.expMonth,expYear:t.card.expYear}}),n("bottom-sheet",[n("h1",{staticClass:"sheet-title"},[t._v("Transaction List")]),n("div",{staticClass:"filters"},t._l(t.options,function(e,r){return n("button",{key:r,class:{selected:e.selected}},[t._v("\n        "+t._s(e.title)+"\n      ")])}),0),n("div",{staticClass:"transaction-list"},t._l(t.transactions,function(t,e){return n("list-item",{key:e,attrs:{icon:t.status,headerText:t.timestamp,mainText:t.summary,spotlightText:t.netAmount,color:t.color}})}),1)])],1)},S=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"header"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},k=[],E={name:"pageHeader"},M=E,P=(n("002f"),Object(f["a"])(M,j,k,!1,null,"282fd668",null)),$=P.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bottom-sheet"},[n("div",{staticClass:"handle"}),t._t("default")],2)},D=[],F={name:"BottomSheet"},N=F,Y=(n("3e45"),Object(f["a"])(N,A,D,!1,null,"a61f4310",null)),I=Y.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-item"},[n("div",{staticClass:"icon-holder"},[n("icon",{style:{color:t.color},attrs:{name:t.icon}})],1),n("div",{staticClass:"list-item-body"},[n("div",{staticClass:"list-item-text"},[n("h5",[t._v(t._s(t.headerText))]),n("h2",[t._v(t._s(t.mainText))])]),n("div",{staticClass:"list-item-spotlight"},[n("h1",{style:{color:t.color}},[t._v(t._s(t.spotlightText))])])])])},H=[],L={name:"ListItem",components:{Icon:m},props:{icon:String,headerText:String,mainText:String,spotlightText:String,color:String}},J=L,R=(n("df48"),Object(f["a"])(J,B,H,!1,null,"2e509b16",null)),V=R.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",style:{backgroundColor:t.color,boxShadow:"0px 5px 10px "+t.color}},[n("h1",{staticClass:"balance"},[t._v("\n    "+t._s(t.currency)+"\n    "+t._s(t.balance)+"\n  ")]),n("div",{staticClass:"number"},[t._l(3,function(e){return n("div",{key:e,staticClass:"stars"},[t._v("\n         ****\n    ")])}),n("div",[t._v(t._s(t.lastFourDigits))])],2),n("div",{staticClass:"expiry"},[n("p",[t._v("Valid Thru")]),n("p",[t._v(t._s(t.expMonth)+" / "+t._s(t.expYear))])])])},z=[],G=(n("c5f6"),{name:"Card",props:{color:String,currency:String,balance:Number,lastFourDigits:Number,expMonth:Number,expYear:Number}}),K=G,Q=(n("25e9"),Object(f["a"])(K,q,z,!1,null,"22c16c2d",null)),U=Q.exports,W="#FF3258",X="#2A3990",Z=[{title:"All",selected:!0},{title:"Expenses",selected:!1},{title:"Deposits",selected:!1}],tt=[{status:"arrow_downward",timestamp:"Today 12:45",summary:"Yandex Taxi",netAmount:"- ₽ 180",color:W},{status:"arrow_upward",timestamp:"12.08.2019 12:45",summary:"Transfer",netAmount:"+ € 3000",color:X},{status:"arrow_downward",timestamp:"10.08.2019 23:18",summary:'Restaurant "Dubai"',netAmount:"- ₽ 12000",color:W},{status:"arrow_downward",timestamp:"15.07.2019 14:00",summary:"Aeroflot",netAmount:"- ₽ 25000",color:W}],et={balance:395e3,currency:"₽",lastFourDigits:3456,expMonth:12,expYear:23,color:"#6374ED"},nt={name:"BalancePage",data:function(){return{options:Z,transactions:tt,card:et}},components:{PageHeader:$,BottomSheet:I,ListItem:V,Card:U}},rt=nt,at=(n("86fc"),Object(f["a"])(rt,O,S,!1,null,"17b96794",null)),st=at.exports;r["a"].use(T["a"]);var ot=new T["a"]({routes:[{path:"/",component:st}]});r["a"].config.productionTip=!1,new r["a"]({router:ot,render:function(t){return t(C)}}).$mount("#app")},"57d7":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){},"86fc":function(t,e,n){"use strict";var r=n("b0d9"),a=n.n(r);a.a},a4f3:function(t,e,n){},b0d9:function(t,e,n){},cd12:function(t,e,n){"use strict";var r=n("1d8b"),a=n.n(r);a.a},df48:function(t,e,n){"use strict";var r=n("a4f3"),a=n.n(r);a.a},f13f:function(t,e,n){}});
//# sourceMappingURL=app.12d8bd07.js.map