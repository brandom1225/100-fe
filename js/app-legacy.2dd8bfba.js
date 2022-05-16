(function(){var t={9359:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll-digit"},t._l(t.digitArray,(function(e,r){return n("div",{key:t.digits+"_"+r},[n("Digit",t._b({attrs:{digit:e,index:r}},"Digit",t.$props,!1))],1)})),0)},i=[],o=(n(9653),n(4916),n(3123),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"digit-item",style:t.digitItemStyle},[n("div",{staticClass:"scroll-area"},[n("div",{staticClass:"scroll-list",style:t.scrollListStyle},[n("div",{staticClass:"item"},[t._v("0")]),n("div",{staticClass:"item"},[t._v("1")]),n("div",{staticClass:"item"},[t._v("2")]),n("div",{staticClass:"item"},[t._v("3")]),n("div",{staticClass:"item"},[t._v("4")]),n("div",{staticClass:"item"},[t._v("5")]),n("div",{staticClass:"item"},[t._v("6")]),n("div",{staticClass:"item"},[t._v("7")]),n("div",{staticClass:"item"},[t._v("8")]),n("div",{staticClass:"item"},[t._v("9")])])]),n("div",{staticClass:"real-digit",style:t.realDigitStyle},[t._v(" "+t._s(t.digit)+" ")])])}),s=[],a=n(3019),u={props:{digit:{type:[Number,String],required:!0},index:{type:Number,required:!0},digits:[Number,String],fontSize:[Number,String],color:String,bgColor:String,duration:Number,reverse:Boolean},computed:{animationIterationCount:function(){return this.reverse?this.duration/.1*(this.index+1):("".concat(this.digits).length-this.index)*this.duration/.1},digitItemStyle:function(){return{backgroundColor:this.bgColor,color:this.color,fontSize:"".concat(this.fontSize,"px")}},scrollListStyle:function(){return{animationIterationCount:this.animationIterationCount}},realDigitStyle:function(){return(0,a.Z)((0,a.Z)({},this.digitStyle),{},{animationIterationCount:this.animationIterationCount})}}},l=u,c=n(3736),d=(0,c.Z)(l,o,s,!1,null,"61077244",null),f=d.exports,v={components:{Digit:f},props:{digits:{type:[Number,String],required:!0},fontSize:{type:Number,default:26},duration:{type:Number,default:.2},color:String,bgColor:String,reverse:Boolean},computed:{digitArray:function(){return"".concat(this.digits).split("")}}},m=v,h=(0,c.Z)(m,r,i,!1,null,"0d3613db",null),g=h.exports},1065:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"head"},[t._v("vue-scroll-digit")]),n("div",{staticClass:"demo-area"},[n("scroll-digit",{attrs:{digits:t.digits,fontSize:t.fontSize,reverse:"true"===t.reverse,duration:t.duration,color:t.color,bgColor:t.bgColor}})],1),n("div",{staticClass:"args-area"},[n("div",[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.digits,expression:"digits"}],attrs:{type:"text"},domProps:{value:t.digits},on:{input:function(e){e.target.composing||(t.digits=e.target.value)}}})]),n("div",[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],domProps:{value:t.fontSize},on:{blur:t.refresh,input:function(e){e.target.composing||(t.fontSize=e.target.value)}}})]),n("div",[t._m(2),n("div",{staticClass:"radio-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.reverse,expression:"reverse"}],attrs:{name:"reverse",type:"radio",value:"true"},domProps:{checked:t._q(t.reverse,"true")},on:{change:[function(e){t.reverse="true"},t.refresh]}}),t._v("从左往右 "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.reverse,expression:"reverse"}],attrs:{name:"reverse",type:"radio",value:"false"},domProps:{checked:t._q(t.reverse,"false")},on:{change:[function(e){t.reverse="false"},t.refresh]}}),t._v("从右往左 ")])]),n("div",[t._m(3),n("input",{directives:[{name:"model",rawName:"v-model",value:t.duration,expression:"duration"}],domProps:{value:t.duration},on:{blur:t.refresh,input:function(e){e.target.composing||(t.duration=e.target.value)}}})]),n("div",[t._m(4),n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],domProps:{value:t.color},on:{blur:t.refresh,input:function(e){e.target.composing||(t.color=e.target.value)}}})]),n("div",[t._m(5),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bgColor,expression:"bgColor"}],domProps:{value:t.bgColor},on:{blur:t.refresh,input:function(e){e.target.composing||(t.bgColor=e.target.value)}}})])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v("digits: String "),n("span",[t._v("【必填】动态展示字符，数字或字符串，支持中文")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v("fontSize: Number "),n("span",[t._v("字符大小，单位px。默认26")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v("reverse: Boolean "),n("span",[t._v("reverse为true则从左往右。默认false")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v("duration: Number "),n("span",[t._v("最开始滚动的字符滚动时长，用于调节滚动效果。默认0.2")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v("color: String "),n("span",[t._v("字符颜色，取值参考：#fff")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v("bgColor: String "),n("span",[t._v("字符背景色，取值参考：#0092ff")])])}],o=n(9359),s={components:{ScrollDigit:o["default"]},data:function(){return{digits:"1234ABCDefgh",fontSize:26,reverse:"false",duration:.2,color:"#fff",bgColor:"#0092ff"}},methods:{refresh:function(){var t=this,e=this.digits;this.digits="",setTimeout((function(){t.digits=e}))}}},a=s,u=n(3736),l=(0,u.Z)(a,r,i,!1,null,null,null),c=l.exports},7877:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"virtual-list"},[n("h2",[t._v("Virtual List")]),n("div",{staticClass:"scroll-container",style:t.containerStyle,on:{scroll:t.listScroll}},[n("div",{style:t.listStyle,attrs:{id:"list"}},[n("div",{staticClass:"render-area",style:t.renderStyle},t._l(t.scrollItems,(function(e,r){return n("div",{key:e.id,staticClass:"scroll-list-item",style:t.itemStyle,attrs:{id:r}},[t._v(" "+t._s(e.text)+" ")])})),0)])])])},i=[],o=(n(9653),n(7042),n(1249),n(1038),n(8783),n(3025)),s=n.n(o),a={props:{height:{type:Number,default:400},itemHeight:{type:Number,default:40},hold:{type:Number,default:0}},computed:{containerStyle:function(){return{maxHeight:"".concat(this.height,"px")}},listStyle:function(){return{height:"".concat(this.itemHeight*this.list.length,"px")}},renderStyle:function(){return{transform:"translateY(".concat(this.startIndex*this.itemHeight,"px)")}},itemStyle:function(){return{height:"".concat(this.itemHeight,"px"),lineHeight:"".concat(this.itemHeight,"px")}},scrollItems:function(){return this.list.slice(this.startIndex,this.endIndex)}},data:function(){return{list:[],startIndex:0,endIndex:0}},created:function(){this.init()},methods:{init:function(){var t=s().Random,e=s().mock;this.list=Array.from({length:1e4}).map((function(){return e({id:t.natural(),text:t.email()})})),this.render()},listScroll:function(t){this.render(t.target.scrollTop)},render:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.startIndex=Math.max(Math.floor(t/this.itemHeight)-this.hold,0),this.endIndex=Math.min(Math.ceil(this.height/this.itemHeight)+this.hold+this.startIndex,this.list.length),console.log("render",t,this.startIndex,this.endIndex)}}},u=a,l=n(3736),c=(0,l.Z)(u,r,i,!1,null,"7a7f9572",null),d=c.exports},1148:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Worker ")])},i=[],o=(n(4916),n(7601),{created:function(){this.init()},methods:{init:function(){this.runWorker(),this.createWorker()},runWorker:function(){var t=this.$worker.run(this.test.bind({}),[1,2]);t.then((function(t){console.log(222,t)})),t=null},test:function(t,e){return console.log(111,t,e),t+e},createWorker:function(){var t=[{message:"f1",func:function(t){return t++}},{message:"f2",func:function(t,e){return t+e}}],e=this.$worker.create(t);e.postMessage("f1",[99]).then((function(t){return console.log("f1",t)})),e.postMessage("f2",[99,101]).then((function(t){return console.log("f2",t)})),e=null}}}),s=o,a=n(3736),u=(0,a.Z)(s,r,i,!1,null,null,null),l=u.exports},2553:function(t,e,n){"use strict";n(6992),n(8674),n(9601),n(7727);var r=n(8935),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("a",{staticClass:"fork-me",attrs:{href:"https://github.com/brandom1225/100-classical-fe"}}),n("router-view")],1)},o=[],s={name:"App"},a=s,u=n(3736),l=(0,u.Z)(a,i,o,!1,null,"6012e635",null),c=l.exports,d=n(2809),f=n(17);r.Z.use(d.Z),console.info("Route Config",f.Z);var v=new d.Z({routes:f.Z}),m=v;r.Z.config.productionTip=!1,new r.Z({router:m,render:function(t){return t(c)}}).$mount("#app")},17:function(t,e,n){"use strict";n.d(e,{N:function(){return o}});var r=n(4479),i=(n(1539),n(3948),n(4916),n(3123),n(8783),n(2226)),o=i.keys().reduce((function(t,e){var r=e.split("/");if(3===r.length){var o=i(e).default,s=r[1],a={path:"/case/".concat(s),component:o,meta:{name:s,readme:function(){return n(205)("./".concat(s,"/readme.md"))}}};t.push(a)}return t}),[]),s=[{path:"*",redirect:"/index"},{path:"/index",component:function(){return n.e(720).then(n.bind(n,5720))}},{path:"/case",component:function(){return n.e(702).then(n.bind(n,8702))},children:(0,r.Z)(o)}];e["Z"]=s},205:function(t,e,n){var r={"./scroll-digit/readme.md":[7112,112],"./virtual-list/readme.md":[6706,706],"./worker/readme.md":[1139,139]};function i(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],i=e[0];return n.e(e[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=205,t.exports=i},2226:function(t,e,n){var r={"./scroll-digit/component/index.vue":9359,"./scroll-digit/index.vue":1065,"./virtual-list/index.vue":7877,"./worker/index.vue":1148};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=2226}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var a=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{112:"44ab3cb5",139:"992fa54d",702:"32df90a1",706:"e94e32f2",720:"e8781e5d"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{702:"6ed104c3",720:"12664991"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="fe100:";n.l=function(r,i,o,s){if(t[r])t[r].push(i);else{var a,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){a=d;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+o),a.src=r),t[r]=[i];var f=function(e,n){a.onerror=a.onload=null,clearTimeout(v);var i=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(o){if(i.onerror=i.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=a,i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=o,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){i=s[r],o=i.getAttribute("data-href");if(o===t||o===e)return i}},r=function(r){return new Promise((function(i,o){var s=n.miniCssF(r),a=n.p+s;if(e(s,a))return i();t(r,a,i,o)}))},i={143:0};n.f.miniCss=function(t,e){var n={702:1,720:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var s=n.p+n.u(e),a=new Error,u=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,i[1](a)}};n.l(s,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],a=r[1],u=r[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var c=u(n)}for(e&&e(r);l<s.length;l++)o=s[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunkfe100"]=self["webpackChunkfe100"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2553)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.2dd8bfba.js.map