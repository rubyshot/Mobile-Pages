(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,a,n){e.exports=n("2f39")},"2f39":function(e,a,n){"use strict";n.r(a);var t=n("967e"),r=n.n(t),o=(n("96cf"),n("fa84")),u=n.n(o),i=(n("5c7d"),n("1867"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),c=n("1f91"),d=n("b05d"),s=n("4d5a"),l=n("9898"),p=n("07d0"),h=n("d847"),f=n("f2cc"),b=n("c7a0"),m=n("2ea3"),g=n("5096"),Q=n("65c6"),w=n("6ac5"),v=n("9c40"),S=n("0016"),k=n("497d"),x=n("6ab5"),T=n("033f"),y=n("e208"),P=n("429b"),L=n("7460"),_=n("adad"),C=n("823b"),R=n("7867"),D=n("58a8"),I=n("d3ab"),E=n("2c91"),F=n("27f9"),V=n("d66b"),q=n("8572"),A=n("4e73"),B=n("05c0"),O=n("cb32"),U=n("eb85"),N=n("6b1d"),$=n("4983"),j=n("f09f"),H=n("a370"),G=n("4b7e"),J=n("b6d5"),M=n("74f7"),X=n("b498"),z=n("7cbe"),W=n("54b4"),K=n("7f41"),Y=n("ee89"),Z=n("068f"),ee=n("24e8"),ae=n("8f8e"),ne=n("54e1"),te=n("0378"),re=n("ddd8"),oe=n("9564"),ue=n("714f"),ie=n("7f67"),ce=n("2a19"),de=n("515f"),se=n("436b"),le=n("f508"),pe=n("18d6"),he=n("a639");i["a"].use(d["a"],{config:{},lang:c["a"],components:{QLayout:s["a"],QHeader:l["a"],QFooter:p["a"],QBar:h["a"],QDrawer:f["a"],QPageContainer:b["a"],QPage:m["a"],QPageScroller:g["a"],QToolbar:Q["a"],QToolbarTitle:w["a"],QBtn:v["a"],QIcon:S["a"],QList:k["a"],QItem:x["a"],QItemSection:T["a"],QItemLabel:y["a"],QTabs:P["a"],QTab:L["a"],QTabPanels:_["a"],QTabPanel:C["a"],QRouteTab:R["a"],QBadge:D["a"],QPageSticky:I["a"],QSpace:E["a"],QInput:F["a"],QEditor:V["a"],QField:q["a"],QMenu:A["a"],QTooltip:B["a"],QAvatar:O["a"],QSeparator:U["a"],QLinearProgress:N["a"],QScrollArea:$["a"],QCard:j["a"],QCardSection:H["a"],QCardActions:G["a"],QResizeObserver:J["a"],QInnerLoading:M["a"],QColor:X["a"],QPopupProxy:z["a"],QExpansionItem:W["a"],QTree:K["a"],QUploader:Y["a"],QImg:Z["a"],QDialog:ee["a"],QCheckbox:ae["a"],QBanner:ne["a"],QForm:te["a"],QSelect:re["a"],QToggle:oe["a"]},directives:{Ripple:ue["a"],ClosePopup:ie["a"]},plugins:{Notify:ce["a"],Cookies:de["a"],Dialog:se["a"],Loading:le["a"],LocalStorage:pe["a"],SessionStorage:he["a"]}});var fe=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},be=[],me={name:"App"},ge=me,Qe=n("2877"),we=Object(Qe["a"])(ge,fe,be,!1,null,null,null),ve=we.exports,Se=n("2f62");i["a"].use(Se["a"]);var ke=function(){var e=new Se["a"].Store({modules:{},strict:!1});return e},xe=n("8c4f"),Te=n("bc3a"),ye=n.n(Te),Pe=n("a7fe"),Le=n.n(Pe),_e=n("8a9b"),Ce=n.n(_e),Re=[{path:"/",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"home",component:function(){return n.e("2d0e8be2").then(n.bind(null,"8b24"))}}]},{path:"/auth/login",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"login",component:function(){return n.e("2d0dd60f").then(n.bind(null,"80ab"))}}],meta:{auth:!1}},{path:"/auth/password/reset",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"password.email",component:function(){return n.e("2d2380e5").then(n.bind(null,"fe6f"))}}],meta:{auth:!1}},{path:"/auth/password/reset/:token",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"password.reset",component:function(){return n.e("2d0df839").then(n.bind(null,"89df"))}}],meta:{auth:!1}},{path:"/user/profile",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"user.profile",component:function(){return n.e("4cfd74f4").then(n.bind(null,"dd67"))}}],meta:{auth:{roles:[1],redirect:{name:"login"},forbiddenRedirect:"/"}}},{path:"/-/:siteSlug",name:"site.home",component:function(){return n.e("3b1d2c18").then(n.bind(null,"6c20"))}},{path:"/-/:siteSlug/:pageSlug",name:"site.page",component:function(){return n.e("3b1d2c18").then(n.bind(null,"6c20"))}},{path:"/sites",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"sites.overview",component:function(){return n.e("1ea7edd7").then(n.bind(null,"d68a"))}}],meta:{auth:{roles:[1],redirect:{name:"login"},forbiddenRedirect:"/"}}},{path:"/site/new",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"site.new",component:function(){return n.e("2d238a0b").then(n.bind(null,"ffd9"))}}],meta:{auth:{roles:[1],redirect:{name:"login"},forbiddenRedirect:"/"}}},{path:"/site/edit/:uuid",component:function(){return n.e("2d0c0daa").then(n.bind(null,"440d"))},children:[{path:"",name:"site.edit",component:function(){return n.e("fbd4a9a0").then(n.bind(null,"523d"))}}],meta:{auth:{roles:[1],redirect:{name:"login"},forbiddenRedirect:"/"}}}];Re.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var De=Re;i["a"].use(xe["a"]);var Ie=function(){return i["a"].router=new xe["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:De,mode:"hash",base:"/assets/"}),i["a"].use(Le.a,ye.a),i["a"].axios.defaults.baseURL="//"+window.config.app_host+"/api/",i["a"].axios.defaults.headers.common={Accept:"application/json","Content-Type":"application/json;charset=UTF-8","X-Requested-With":"XMLHttpRequest"},i["a"].use(Ce.a,{auth:n("5a17"),http:n("680f"),router:n("4ae6"),rolesVar:"role",tokenDefaultName:"token",tokenStore:["localStorage"],registerData:{url:"auth/register",method:"POST",redirect:"/login"},loginData:{url:"auth/login",method:"POST",redirect:"/",fetchUser:!0},logoutData:{url:"auth/logout",method:"POST",redirect:"/",makeRequest:!0},fetchData:{url:"auth/user",method:"GET",enabled:!0},refreshData:{url:"auth/refresh",method:"GET",enabled:!0,interval:30},notFoundRedirect:{name:"sites.overview"}}),i["a"].router},Ee=function(){var e="function"===typeof ke?ke({Vue:i["a"]}):ke,a="function"===typeof Ie?Ie({Vue:i["a"],store:e}):Ie;e.$router=a;var n={el:"#q-app",router:a,store:e,render:function(e){return e(ve)}};return{app:n,store:e,router:a}},Fe=n("a925"),Ve={home:"Home",login:"Login",logout:"Logout",save_changes:"Save changes",undo_changes:"Undo changes",log_in:"Log in",email_address:"E-mail address",password:"Password",forgot_password:"Forgot password?",sites:"Sites",new_site:"New site",profile:"Profile",name:"Name",change_password:"Change password",change_password_hint:"Leave empty if you don't want to change the password.",current_password:"Current password"},qe={"en-us":Ve};i["a"].use(Fe["a"]);var Ae=new Fe["a"]({locale:"en-us",fallbackLocale:"en-us",messages:qe}),Be=function(e){var a=e.app;a.i18n=Ae},Oe=function(){var e=u()(r.a.mark(function e(a){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=a.Vue,n.prototype.$axios=ye.a;case 2:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),Ue=n("2ef0"),Ne=n.n(Ue),$e=function(e){var a=e.Vue;a.prototype.$_=Ne.a},je=Ee(),He=je.app,Ge=je.store,Je=je.router;function Me(){return Xe.apply(this,arguments)}function Xe(){return Xe=u()(r.a.mark(function e(){var a,n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=[Be,Oe,$e],n=0;case 2:if(!(n<a.length)){e.next=20;break}if("function"===typeof a[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,a[n]({app:He,router:Je,store:Ge,Vue:i["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new i["a"](He);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),Xe.apply(this,arguments)}Me()},"7e6d":function(e,a,n){}},[[0,"runtime","vendor"]]]);