(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bd403f9"],{1546:function(t,e,r){"use strict";r("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"img-cropper-wrap"},[e("page-title-bar"),e("v-container",{attrs:{fluid:"","pt-0":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{colClasses:"xl6 lg6 md6 sm6 xs12",customClasses:"img-crop"}},[e("croppa",{attrs:{"canvas-color":"transparent",placeholder:"Choose an image",accept:"image/*","show-remove-button":!0,"remove-button-color":"red","initial-position":"center"},model:{value:t.croppaImg,callback:function(e){t.croppaImg=e},expression:"croppaImg"}},[e("img",{attrs:{slot:"placeholder",src:"public/static/img/bg-1.jpg"},slot:"placeholder"})]),e("div",{staticClass:"d-custom-flex justify-space-between py-3 format-btn-wrap"},[e("v-btn",{staticClass:"primary",on:{click:function(e){return t.rotate()}}},[t._v("Rotate")]),e("v-btn",{staticClass:"primary",on:{click:function(e){return t.flipX()}}},[t._v("Flip-X")]),e("v-btn",{staticClass:"primary",on:{click:function(e){return t.flipY()}}},[t._v("Flip-Y")])],1),e("v-btn",{staticClass:"v-btn success w-100 ma-0",on:{click:t.generateImage}},[t._v("Generate")])],1),t.imgUrl?e("app-card",{attrs:{colClasses:"xl6 lg6 md6 sm6 xs12",customClasses:"img-crop",contentCustomClass:"d-custom-flex justify-center align-center h-100"}},[e("img",{staticClass:"img-crop img-responsive",attrs:{height:"300",src:t.imgUrl}})]):t._e()],1)],1)],1)],1)],1)};e.render=a;var n=[];e.staticRenderFns=n},"4f70":function(t,e,r){"use strict";var a=r("1546");r.o(a,"render")&&r.d(e,"render",(function(){return a["render"]})),r.o(a,"staticRenderFns")&&r.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"8ef9":function(t,e,r){"use strict";r.r(e);var a=r("4f70"),n=r("d54e");for(var s in n)["default"].indexOf(s)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(s);var i=r("2877"),c=Object(i["a"])(n["default"],a["render"],a["staticRenderFns"],!1,null,null,null);e["default"]=c.exports},d253:function(t,e,r){"use strict";r("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{croppaImg:null,imgUrl:""}},methods:{generateImage:function(){var t=this.croppaImg.generateDataUrl();t?this.imgUrl=t:alert("no image")},rotate:function(){this.croppaImg.rotate()},flipX:function(){this.croppaImg.flipX()},flipY:function(){this.croppaImg.flipY()}}};e.default=a},d54e:function(t,e,r){"use strict";r.r(e);var a=r("d253"),n=r.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){r.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a}}]);