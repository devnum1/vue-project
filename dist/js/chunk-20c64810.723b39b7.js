(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20c64810"],{"00ac":function(e,t,n){"use strict";var r=n("faf0");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]})),n.o(r,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]}))},ab3f:function(e,t,n){"use strict";n("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{colOne:["Its is too amezing component try it !","You can move these elements between these two containers",'Moving them anywhere else isn"t quite possible','There"s also the possibility of moving elements around in the same container, changing their position'],colTwo:["This is the use case. You only need to specify the containers you want to use","More interactive use cases lie ahead","Another message","Move on upper"]}}};t.default=r},bc98:function(e,t,n){"use strict";n.r(t);var r=n("ab3f"),a=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=a.a},e862:function(e,t,n){"use strict";n.r(t);var r=n("00ac"),a=n("bc98");for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);var i=n("2877"),o=Object(i["a"])(a["default"],r["render"],r["staticRenderFns"],!1,null,null,null);t["default"]=o.exports},faf0:function(e,t,n){"use strict";n("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var r=function(){var e=this,t=e._self._c;return t("div",[t("page-title-bar"),t("v-container",{attrs:{fluid:"","grid-list-xl":"","py-0":""}},[t("app-card",[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:"",sm6:""}},[t("h3",{staticClass:"mb-4"},[e._v("List 1")]),t("div",{directives:[{name:"dragula",rawName:"v-dragula",value:e.colOne,expression:"colOne"}],staticClass:"vue2-dragula-container",attrs:{drake:"first"}},e._l(e.colOne,(function(n){return t("div",{key:n},[e._v(e._s(n)+" [click me]")])})),0)]),t("v-flex",{attrs:{xs12:"",sm6:""}},[t("h3",{staticClass:"mb-4"},[e._v("List 2")]),t("div",{directives:[{name:"dragula",rawName:"v-dragula",value:e.colTwo,expression:"colTwo"}],staticClass:"vue2-dragula-container",attrs:{drake:"first"}},e._l(e.colTwo,(function(n){return t("div",{key:n},[e._v(e._s(n)+" [click me]")])})),0)])],1)],1)],1)],1)};t.render=r;var a=[];t.staticRenderFns=a}}]);