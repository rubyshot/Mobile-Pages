(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4cfd74f4"],{"07ab":function(e,a,t){},"37c5":function(e,a,t){"use strict";var r=t("07ab"),l=t.n(r);l.a},9529:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("q-input",{ref:e.name+"FileName",staticClass:"q-mb-lg ellipsis",attrs:{label:e.label,readonly:""},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-btn",{attrs:{round:"",color:"white","text-color":"grey-9",flat:"",size:"sm",icon:"mdi-image-plus"},on:{click:e.uploadFile}},[t("q-tooltip",[e._v("\n          Upload image\n        ")])],1),t("q-btn",{attrs:{round:"",disabled:null===e.filename||""===e.filename,color:"white","text-color":"grey-9",flat:"",size:"sm",icon:"delete"},on:{click:e.removeUpload}},[t("q-tooltip",[e._v("\n          Delete image\n        ")])],1)]},proxy:!0}]),model:{value:e.filename,callback:function(a){e.filename=a},expression:"filename"}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showUploader,expression:"showUploader"}],staticClass:"row"},[t("div",{staticClass:"col"},[t("q-uploader",{ref:"uploader",staticClass:"q-mb-md",staticStyle:{width:"100%"},attrs:{name:e.name,id:e.name,label:"Upload new image",accept:".jpg, image/*",color:"grey-8",flat:"",bordered:"","hide-upload-btn":""},on:{added:e.uploadAdded,removed:e.uploadRemoved}})],1)])],1)},l=[],s=(t("7f7f"),t("28a5"),t("f559"),{name:"image-upload",model:{prop:"v-model",event:"input"},data:function(){return{pauseVModelWatch:!1,originalFilename:null,filename:null,showUploader:!1,uploadImgSrc:null,uploadImgSrcOld:null}},props:{label:{default:null,required:!1,type:String},vModel:{default:null,required:!1,type:String},name:{default:"file",required:!1,type:String},defaultValue:{default:"",required:!1,type:String},defaultToOriginal:{default:!1,required:!1,type:Boolean}},created:function(){this.uploadImgSrcOld=this.imgSrc,this.filename=null===this.vModel||""===this.vModel||this.vModel.startsWith("data:")?this.defaultValue:this.vModel.split("/").reverse()[0],this.originalFilename=JSON.parse(JSON.stringify(this.filename))},watch:{uploadImgSrc:function(e,a){this.imgSrc=e},vModel:function(e,a){this.pauseVModelWatch||(this.filename=this.originalFilename)}},methods:{uploadFile:function(){var e=this;this.$refs.uploader.removeQueuedFiles(),this.$nextTick(function(){e.$refs.uploader.pickFiles()})},removeUpload:function(){var e=this;this.pauseVModelWatch=!0,this.$refs.uploader.reset(),this.$refs.uploader.removeQueuedFiles(),this.filename=null,this.imgSrc=this.defaultToOriginal?this.uploadImgSrcOld:"",this.$nextTick(function(){e.pauseVModelWatch=!1})},uploadAdded:function(e){var a=this;this.pauseVModelWatch=!0,this.imgSrc=e[0].__img.src,this.filename=e[0].name,this.$emit("filename",this.filename),this.$nextTick(function(){a.pauseVModelWatch=!1})},uploadRemoved:function(e){this.imgSrc=this.uploadImgSrcOld,this.filename=null}},computed:{imgSrc:{get:function(){return this.vModel},set:function(e){this.uploadImgSrc=e,this.$emit("input",e)}}}}),n=s,o=(t("37c5"),t("2877")),i=Object(o["a"])(n,r,l,!1,null,null,null);a["a"]=i.exports},dd67:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"fit row justify-center q-pa-lg bg-light-blue-8"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"fit self-center"},[t("q-card",{staticClass:"no-border-radius bg-blue-grey-1 text-grey-10 full-width",attrs:{flat:""}},[t("q-card-section",{staticClass:"text-light-blue-1 bg-light-blue-10"},[t("div",{staticClass:"row items-center no-wrap"},[t("div",{staticClass:"col"},[t("div",{staticClass:"text-h5"},[e._v(e._s(e.$t("profile")))])])]),e.errorMsg?t("q-banner",{staticClass:"bg-red text-white q-mt-lg",scopedSlots:e._u([{key:"avatar",fn:function(){return[t("q-icon",{attrs:{name:"warning",color:"white"}})]},proxy:!0}],null,!1,894313219)},[e._v("\n            "+e._s(e.errorMsg)+"\n          ")]):e._e(),e.successMsg?t("q-banner",{staticClass:"bg-blue text-white q-mt-lg",scopedSlots:e._u([{key:"avatar",fn:function(){return[t("q-icon",{attrs:{name:"check",color:"white"}})]},proxy:!0}],null,!1,1726514831)},[e._v("\n            "+e._s(e.successMsg)+"\n          ")]):e._e()],1),t("q-tabs",{staticClass:"text-light-blue-3 bg-light-blue-10",attrs:{"active-color":"light-blue-1","indicator-color":"light-blue-1",align:"left","narrow-indicator":""},model:{value:e.tabs,callback:function(a){e.tabs=a},expression:"tabs"}},[t("q-tab",{attrs:{name:"general",label:"General"}}),t("q-tab",{attrs:{name:"localization",label:"Localization"}}),t("q-tab",{attrs:{name:"password",label:"Change password"}})],1),t("q-separator"),t("q-form",{ref:"frm1",attrs:{id:"frm1",autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false","accept-charset":"UTF-8",enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),a.stopPropagation(),e.onSubmit(a)}}},[t("q-tab-panels",{staticClass:"text-blue-grey-9 bg-blue-grey-1",attrs:{animated:"","keep-alive":""},model:{value:e.tabs,callback:function(a){e.tabs=a},expression:"tabs"}},[t("q-tab-panel",{attrs:{name:"general"}},[t("q-avatar",{staticClass:"q-mb-xs",attrs:{size:"128px"}},[t("q-img",{attrs:{src:e.form.avatar.value,"spinner-color":"black"}})],1),t("ImageUpload",{attrs:{label:"Avatar",name:"avatar_upload","default-value":e.form.avatar_name,"default-to-original":""===e.form.avatar_name},model:{value:e.form.avatar.value,callback:function(a){e.$set(e.form.avatar,"value",a)},expression:"form.avatar.value"}}),t("q-input",{staticClass:"q-mb-sm",attrs:{name:"name",error:e.form.name.error,"error-message":e.form.name.errorMsg,label:e.$t("name")},on:{keyup:function(a){return e.resetValidation(a)}},model:{value:e.form.name.value,callback:function(a){e.$set(e.form.name,"value",a)},expression:"form.name.value"}}),t("q-input",{staticClass:"q-mb-sm",attrs:{name:"email",error:e.form.email.error,"error-message":e.form.email.errorMsg,type:"email",label:e.$t("email_address")},on:{keyup:function(a){return e.resetValidation(a)}},model:{value:e.form.email.value,callback:function(a){e.$set(e.form.email,"value",a)},expression:"form.email.value"}})],1),t("q-tab-panel",{attrs:{name:"localization"}},[t("q-select",{staticClass:"q-mb-lg",attrs:{autocomplete:"",name:"locale",label:"Locale",options:e.locales,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0"},on:{filter:e.filterLocales},scopedSlots:e._u([{key:"no-option",fn:function(){return[t("q-item",[t("q-item-section",{staticClass:"text-grey"},[e._v("\n                      No results\n                    ")])],1)]},proxy:!0}]),model:{value:e.form.locale.value,callback:function(a){e.$set(e.form.locale,"value",a)},expression:"form.locale.value"}}),t("q-select",{staticClass:"q-mb-lg",attrs:{autocomplete:"",name:"timezone",label:"Timezone",options:e.timezones,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0"},on:{filter:e.filterTimezones},scopedSlots:e._u([{key:"no-option",fn:function(){return[t("q-item",[t("q-item-section",{staticClass:"text-grey"},[e._v("\n                      No results\n                    ")])],1)]},proxy:!0}]),model:{value:e.form.timezone.value,callback:function(a){e.$set(e.form.timezone,"value",a)},expression:"form.timezone.value"}}),t("q-select",{staticClass:"q-mb-lg",attrs:{autocomplete:"",name:"currency",label:"Currency",options:e.currencies,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0"},on:{filter:e.filterCurrencies},scopedSlots:e._u([{key:"no-option",fn:function(){return[t("q-item",[t("q-item-section",{staticClass:"text-grey"},[e._v("\n                      No results\n                    ")])],1)]},proxy:!0}]),model:{value:e.form.currency.value,callback:function(a){e.$set(e.form.currency,"value",a)},expression:"form.currency.value"}})],1),t("q-tab-panel",{attrs:{name:"password"}},[t("q-input",{staticClass:"q-mb-sm",attrs:{type:e.isPwd?"password":"text",name:"new_password",error:e.form.new_password.error,"error-message":e.form.new_password.errorMsg,label:e.$t("change_password"),hint:e.$t("change_password_hint")},on:{keyup:function(a){return e.resetValidation(a)}},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(a){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.form.new_password.value,callback:function(a){e.$set(e.form.new_password,"value",a)},expression:"form.new_password.value"}})],1)],1),t("q-card-section",[t("q-input",{staticClass:"q-mb-sm",attrs:{filled:"",type:e.isPwd?"password":"text",name:"current_password",error:e.form.current_password.error,"error-message":e.form.current_password.errorMsg,label:e.$t("current_password")},on:{keyup:function(a){return e.resetValidation(a)}},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"mdi-key-variant"}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(a){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.form.current_password.value,callback:function(a){e.$set(e.form.current_password,"value",a)},expression:"form.current_password.value"}})],1),t("q-card-actions",{staticClass:"q-pa-md"},[t("q-btn",{staticClass:"no-border-radius shadow-0",staticStyle:{"min-width":"200px"},attrs:{type:"submit",loading:e.loading,color:"green",size:"lg"}},[e._v("Update")])],1)],1)],1)],1)])])},l=[],s=(t("ac6a"),t("cadf"),t("456d"),t("551c"),t("06db"),t("097d"),t("7514"),t("7f7f"),t("9529")),n={name:"Page",components:{ImageUpload:s["a"]},data:function(){return{tabs:"general",loading:!1,successMsg:null,errorMsg:null,isPwd:!0,locales:[],localesFilter:[],timezones:[],timezonesFilter:[],currencies:[],currenciesFilter:[],form:{avatar_name:this.$auth.user().avatar_name,avatar_media_changed:!1,avatar:{value:this.$auth.user().avatar,error:!1,errorMsg:null},name:{value:this.$auth.user().name,error:!1,errorMsg:null},email:{value:this.$auth.user().email,error:!1,errorMsg:null},locale:{value:{},error:!1,errorMsg:null},timezone:{value:{},error:!1,errorMsg:null},currency:{value:{},error:!1,errorMsg:null},new_password:{value:null,error:!1,errorMsg:null},current_password:{value:null,error:!1,errorMsg:null}}}},mounted:function(){var e=this;this.$axios.get("/localization/locales",{params:{locale:this.$i18n.locale}}).then(function(a){e.localesFilter=a.data,e.locales=a.data,e.form.locale.value={label:e.$_.find(e.locales,["value",e.$auth.user().locale])["label"],value:e.$auth.user().locale}}),this.$axios.get("/localization/timezones",{params:{locale:this.$i18n.locale}}).then(function(a){e.timezonesFilter=a.data,e.timezones=a.data,e.form.timezone.value={label:e.$_.find(e.timezones,["value",e.$auth.user().timezone])["label"],value:e.$auth.user().timezone}}),this.$axios.get("/localization/currencies",{params:{locale:this.$i18n.locale}}).then(function(a){e.currenciesFilter=a.data,e.currencies=a.data,e.form.currency.value={label:e.$_.find(e.currencies,["value",e.$auth.user().currency])["label"],value:e.$auth.user().currency}})},watch:{"form.avatar.value":function(e){this.form.avatar_media_changed=!0}},methods:{onSubmit:function(){var e=this;this.loading=!0;var a=new FormData;a.append("locale",this.$i18n.locale),a.append("avatar_media_changed",this.form.avatar_media_changed),a.append("avatar",this.form.avatar.value),a.append("name",this.form.name.value),a.append("email",this.form.email.value),a.append("locale",this.form.locale.value.value),a.append("timezone",this.form.timezone.value.value),a.append("currency",this.form.currency.value.value),a.append("new_password",this.form.new_password.value),a.append("current_password",this.form.current_password.value),this.$axios.post("auth/profile",a,{headers:{"content-type":"multipart/form-data"}}).then(function(a){"success"===a.data.status&&(e.form.success=!0,e.form.new_password.value=null,e.form.current_password.value=null,e.$auth.user(a.data.user),e.form.avatar.value=e.$auth.user().avatar,"undefined"!==typeof a.data.msg&&e.$q.notify({icon:"success"===a.data.status?"done":"error",position:"bottom-left",message:a.data.msg}))}).catch(function(a){var t=a.response.data;if("undefined"!==typeof t.msg&&(e.errorMsg=t.msg),"undefined"!==typeof t.errors){var r=Object.keys(t.errors)[0],l="undefined"!==typeof e.$refs[r]?e.$refs[r]:null,s=null!==l?l.$parent.name:null;for(var n in e.pageTab=s,t.errors)e.form[n].error=!0,e.form[n].errorMsg=t.errors[n][0]}}).finally(function(){e.loading=!1})},resetValidation:function(e){"undefined"!==typeof e.target.name&&(this.form[e.target.name].error=!1)},filterLocales:function(e,a,t){var r=this;a(function(){r.locales=r.localesFilter.filter(function(a,t,r){return a.label.toLowerCase().indexOf(e)>-1})})},filterTimezones:function(e,a,t){var r=this;a(function(){r.timezones=r.timezonesFilter.filter(function(a,t,r){return a.label.toLowerCase().indexOf(e)>-1})})},filterCurrencies:function(e,a,t){var r=this;a(function(){r.currencies=r.currenciesFilter.filter(function(a,t,r){return a.label.toLowerCase().indexOf(e)>-1})})}},computed:{}},o=n,i=t("2877"),u=Object(i["a"])(o,r,l,!1,null,null,null);a["default"]=u.exports}}]);