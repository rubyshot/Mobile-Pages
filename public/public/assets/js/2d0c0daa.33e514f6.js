(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0c0daa"],{"440d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr fff"}},[n("q-header",{staticClass:"bg-blue-grey-1 text-blue-grey-10",attrs:{bordered:"","height-hint":"57"}},[n("q-toolbar",{staticStyle:{height:"57px"}},[t.$auth.check()?n("q-btn",{staticClass:"q-mx-md",attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}):t._e(),t.$auth.check()?t._e():n("q-toolbar-title",{staticClass:"row items-center no-wrap",attrs:{shrink:""}},[n("span",{staticClass:"q-ml-sm"},[t._v(t._s(t.window.config.app_name))])]),t.$auth.check()&&!t.leftDrawerOpen?n("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[n("q-btn",{attrs:{flat:"",label:t.$t("sites"),exact:"",to:{name:"sites.overview"},icon:"apps"}}),n("q-btn",{attrs:{flat:"",label:t.$t("new_site"),exact:"",to:{name:"site.new"},icon:"add"}})],1):t._e(),n("q-space"),t.$auth.check()?t._e():n("div",{staticClass:"q-gutter-sm row items-center no-wrap q-mr-sm"},[n("q-btn",{attrs:{flat:"",label:t.$t("home"),to:{name:"home"}}}),n("q-btn",{attrs:{flat:"",label:t.$t("login"),to:{name:"login"},icon:"mdi-login-variant"}})],1),n("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[t.$auth.check()?n("q-btn",{attrs:{round:"",flat:""}},[n("q-avatar",{attrs:{size:"26px"}},[n("img",{attrs:{src:t.$auth.user().avatar}})]),n("q-menu",[n("q-list",{staticStyle:{"min-width":"100px"}},[n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",exact:"",to:{name:"user.profile"}}},[n("q-item-section",[t._v(t._s(t.$t("profile")))])],1),n("q-separator"),n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){return t.$auth.logout()}}},[n("q-item-section",[t._v(t._s(t.$t("logout")))])],1)],1)],1)],1):t._e()],1)],1)],1),t.$auth.check()?n("q-drawer",{attrs:{width:250,breakpoint:1023,"content-class":"bg-black text-grey-1","content-style":"pointer-events:all"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-scroll-area",{staticClass:"fit"},[n("q-toolbar",{staticStyle:{height:"57px"}},[n("q-toolbar-title",{staticClass:"row items-center text-grey-5"},[n("span",{staticClass:"q-ml-sm"},[t._v(t._s(t.window.config.app_name)+" "),n("span",{staticClass:"text-caption"},[t._v("v"+t._s(t.window.config.version))])])])],1),n("q-list",{staticClass:"text-blue-grey-3"},[t._l(t.links1,function(e){return n("q-item",{key:e.text,attrs:{clickable:"",exact:"",to:{name:e.to},"active-class":"bg-blue-grey-9"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(e.text))])],1)],1)}),n("q-separator",{staticClass:"q-my-md",staticStyle:{background:"#222"}}),n("q-item",{attrs:{clickable:"",to:{name:"user.profile"},"active-class":"bg-blue-grey-10"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"person"}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$t("profile")))])],1)],1),n("q-separator",{staticClass:"q-my-md",staticStyle:{background:"#222"}}),n("q-item",{attrs:{clickable:"","active-class":"bg-blue-grey-10"},on:{click:function(e){return t.$auth.logout()}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"logout"}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$t("logout")))])],1)],1)],2)],1)],1):t._e(),n("q-page-container",[n("router-view")],1),n("confirm",{ref:"confirm"}),n("prompt",{ref:"prompt"})],1)},i=[],s=(n("6b54"),n("06db"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-dialog",{style:{zIndex:t.options.zIndex},attrs:{persistent:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel(e)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("q-card",{style:{"max-width":t.options.width+"px"}},[n("q-card-section",{staticClass:"row"},[n("div",{staticClass:"col-2 text-center"},[n("q-avatar",{attrs:{icon:t.options.icon,color:"grey-9","text-color":"white"}})],1),n("div",{staticClass:"col-10"},[n("div",{staticClass:"q-ml-md text-body1"},[t._v(t._s(t.message))])])]),n("q-card-actions",{attrs:{align:"right"}},[t.options.showCancel?n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.options.cancelLabel,color:"grey-9"},nativeOn:{click:function(e){return t.cancel(e)}}}):t._e(),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.options.agreeLabel,color:t.options.agreeColor},nativeOn:{click:function(e){return t.agree(e)}}})],1)],1)],1)}),o=[],r=(n("551c"),n("f751"),{data:function(){return{dialog:!1,resolve:null,reject:null,message:null,options:{color:"primary",icon:"warning",width:320,zIndex:200,agreeLabel:"Yes",agreeColor:"red",cancelLabel:"Cancel",showCancel:!0},originalOptions:{}}},created:function(){this.originalOptions=Object.assign({},this.options)},methods:{open:function(t,e){var n=this;return this.dialog=!0,this.message=t,this.options=Object.assign({},this.originalOptions),this.options=Object.assign(this.options,e),new Promise(function(t,e){n.resolve=t,n.reject=e})},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}}),l=r,c=n("2877"),p=Object(c["a"])(l,s,o,!1,null,null,null),u=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-dialog",{style:{zIndex:t.options.zIndex},attrs:{persistent:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel(e)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("q-card",{style:{width:t.options.width+"px"}},[n("q-card-section",{staticClass:"row items-center"},[n("div",{staticClass:"col-2 text-center"},[n("q-avatar",{attrs:{icon:t.options.icon,color:"grey-9","text-color":"white"}})],1),n("div",{staticClass:"col-10"},[n("div",{staticClass:"q-ml-md text-body1"},[t._v(t._s(t.message))])])]),n("q-card-section",[n("q-input",{attrs:{dense:"",autofocus:"",rules:[function(t){return!!t}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.agree(e)}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),n("q-card-actions",{attrs:{align:"right"}},[t.options.showCancel?n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.options.cancelLabel,color:t.options.cancelColor},nativeOn:{click:function(e){return t.cancel(e)}}}):t._e(),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.options.agreeLabel,color:t.options.agreeColor},nativeOn:{click:function(e){return t.agree(e)}}})],1)],1)],1)},m=[],g={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,input:null,options:{color:"primary",icon:"warning",width:360,zIndex:200,agreeLabel:"OK",agreeColor:"grey-9",cancelLabel:"Cancel",cancelColor:"grey-9",showCancel:!0},originalOptions:{}}},created:function(){this.originalOptions=Object.assign({},this.options)},methods:{open:function(t,e){var n=this;return this.dialog=!0,this.message=t,this.input=null,this.options=Object.assign({},this.originalOptions),this.options=Object.assign(this.options,e),new Promise(function(t,e){n.resolve=t,n.reject=e})},agree:function(){null!==this.input&&""!==this.input&&(this.resolve({submit:!0,input:this.input}),this.dialog=!1)},cancel:function(){this.resolve({submit:!1}),this.dialog=!1}}},h=g,f=Object(c["a"])(h,d,m,!1,null,null,null),b=f.exports,v={name:"MasterLayout",components:{Confirm:u,Prompt:b},mounted:function(){this.$root.$confirm=this.$refs.confirm.open,this.$root.$prompt=this.$refs.prompt.open},created:function(){this.leftDrawerOpen=!this.$q.screen.lt.md},data:function(){return{leftDrawerOpen:!1,links1:[{icon:"apps",text:this.$t("sites"),to:"sites.overview"},{icon:"add",text:this.$t("new_site"),to:"site.new"}]}},computed:{window:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){return window})}},q=v,w=Object(c["a"])(q,a,i,!1,null,null,null);e["default"]=w.exports}}]);