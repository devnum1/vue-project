(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7160afe9"],{"5d2d":function(t,e,i){"use strict";var s=i("dbbfa");i.o(s,"render")&&i.d(e,"render",(function(){return s["render"]})),i.o(s,"staticRenderFns")&&i.d(e,"staticRenderFns",(function(){return s["staticRenderFns"]}))},9140:function(t,e,i){"use strict";var s=i("4ea4");i("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("3e34")),a=s(i("0d92")),r=2,d=6,o={components:{CountryProvider:a.default},beforeCreate:function(){this.$store.dispatch("getAdmins")},computed:{admins:function(){return this.$store.getters.admins},selectedAdmin:function(){return this.$store.getters.selectedAdmin},selectedAdminPermissions:function(){return this.$store.getters.selectedAdminPermissions},selectedCountry:function(){return this.$store.getters.selectedCountry}},data:function(){return{Permissions:n.default,VIEW:n.default.actions.view,CREATE:n.default.actions.create,UPDATE:n.default.actions.update,DELETE:n.default.actions.delete,search:"",loading:!1,dialog:!1,overlay:!1}},methods:{showAdmin:function(t){var e=this;this.loading=!0,this.$store.commit("setSelectedAdmin",t),this.$store.dispatch("fetchAdminPermissions",t).then((function(){e.loading=!1,e.dialog=!0}))},closeDialog:function(){this.$store.commit("setSelectedAdmin",{}),this.dialog=!1},updateAdminPermission:function(t,e,i){var s=this;this.loading=!0;var n={admin:this.selectedAdmin,admin_id:this.selectedAdmin.id,resource_id:e.id,action_id:i,flag:t};e===r&&e===d||(n.country_id=this.selectedCountry.id),this.$store.dispatch("updateAdminPermission",n).then((function(){s.loading=!1}))},toggleSuper:function(){var t=this;this.loading=!0,this.$store.dispatch("changeSuper",this.selectedAdmin).then((function(){t.loading=!1,t.$store.dispatch("getAdmins").then((function(){t.closeDialog()}))}))}}};e.default=o},"9a63":function(t,e,i){"use strict";i.r(e);var s=i("5d2d"),n=i("a441");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);var r=i("2877"),d=Object(r["a"])(n["default"],s["render"],s["staticRenderFns"],!1,null,null,null);e["default"]=d.exports},a441:function(t,e,i){"use strict";i.r(e);var s=i("9140"),n=i.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},dbbfa:function(t,e,i){"use strict";i("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,i("7f7f"),i("386d"),i("57e7");var s=function(){var t=this,e=t._self._c;return e("div",[e("page-title-bar"),e("v-card-title",[e("v-spacer"),e("v-text-field",{attrs:{label:"Search","single-line":""},on:{keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("v-btn",{attrs:{icon:""},on:{click:function(t){}}},[e("v-icon",[t._v("search")])],1),e("v-chip",[t._v(" Country:")]),e("div",{staticClass:"float-right"},[e("country-provider")],1)],1),e("v-container",{attrs:{"grid-list-xl":"","pt-0":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{customClasses:"mb-30",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("v-simple-table",[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("ID")]),e("th",{staticClass:"text-left"},[t._v("Name")]),e("th",{staticClass:"text-left"},[t._v("Email")]),e("th",{staticClass:"text-left"},[t._v("Mobile")]),e("th",{staticClass:"text-center"})])]),e("tbody",t._l(t.admins,(function(i){return 1!==i.id?e("tr",{key:i.id},[e("td",[t._v(t._s(i.id))]),e("td",[t._v(t._s(i.name))]),e("td",[t._v(t._s(i.email))]),e("td",[t._v(t._s(i.mobile))]),e("td",[e("v-btn",{staticClass:"ma-2",attrs:{color:"info",disabled:!t.$can(t.VIEW,t.Permissions.resources.permission)},on:{click:function(e){return e.stopPropagation(),t.showAdmin(i)}}},[t._v("\n                View\n              ")])],1)]):t._e()})),0)]),e("v-dialog",{attrs:{"max-width":"700px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-card-title",[t._v("\n              Admin\n              "),e("v-spacer"),e("v-overlay",{attrs:{value:t.loading}},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),e("v-chip",{staticClass:"mr-1"},[t._v(" Super:")]),e("v-switch",{attrs:{"input-value":t.selectedAdmin.is_super,disabled:t.loading||!t.$is_super()},on:{change:t.toggleSuper}}),e("v-spacer"),e("v-chip",[t._v(" Country:")]),e("div",{staticClass:"float-right"},[e("country-provider")],1)],1),e("v-card-text",[e("v-simple-table",[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Resource")]),e("th",{staticClass:"text-left"},[t._v("View")]),e("th",{staticClass:"text-left"},[t._v("Create")]),e("th",{staticClass:"text-left"},[t._v("Update")]),e("th",{staticClass:"text-left"},[t._v("Delete")])])]),e("tbody",t._l(t.Permissions.resources,(function(i){return e("tr",{key:i.id},[e("td",[t._v(t._s(i.name))]),e("td",[e("v-switch",{attrs:{"input-value":t.$can(t.VIEW,i,!1),disabled:t.loading||t.selectedAdmin.is_super},on:{change:function(e){t.updateAdminPermission(t.$can(t.VIEW,i,!1),i,t.VIEW)}}})],1),e("td",[e("v-switch",{attrs:{"input-value":t.$can(t.CREATE,i,!1),disabled:t.loading||t.selectedAdmin.is_super},on:{change:function(e){t.updateAdminPermission(t.$can(t.CREATE,i,!1),i,t.CREATE)}}})],1),e("td",[e("v-switch",{attrs:{"input-value":t.$can(t.UPDATE,i,!1),disabled:t.loading||t.selectedAdmin.is_super},on:{change:function(e){t.updateAdminPermission(t.$can(t.UPDATE,i,!1),i,t.UPDATE)}}})],1),e("td",[e("v-switch",{attrs:{"input-value":t.$can(t.DELETE,i,!1),disabled:t.loading||t.selectedAdmin.is_super},on:{change:function(e){t.updateAdminPermission(t.$can(t.DELETE,i,!1),i,t.DELETE)}}})],1)])})),0)])],1),e("v-card-actions",[e("v-btn",{attrs:{color:"error"},on:{click:function(e){return e.stopPropagation(),t.closeDialog.apply(null,arguments)}}},[t._v("Close")])],1)],1),e("v-overlay",{attrs:{value:t.loading}},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)],1)],1)],1)],1)};e.render=s;var n=[];e.staticRenderFns=n}}]);