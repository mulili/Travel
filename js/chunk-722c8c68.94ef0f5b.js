(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-722c8c68"],{1242:function(e,t,a){},1542:function(e,t,a){"use strict";a("3f1e")},"3f1e":function(e,t,a){},4199:function(e,t,a){},"6ab7":function(e,t,a){"use strict";a.r(t);var n=a("5c40"),c=Object(n["I"])("data-v-1d79cf7e");Object(n["x"])("data-v-1d79cf7e");var l={class:"wrapper"},i=Object(n["l"])("div",{class:"container"},null,-1);Object(n["v"])();var r=c((function(e,t){var a=Object(n["A"])("detail-header"),c=Object(n["A"])("detail-banner"),r=Object(n["A"])("detail-list");return Object(n["u"])(),Object(n["f"])("div",l,[Object(n["l"])(a),Object(n["l"])(c,{sightName:e.sightName,bannerImg:e.bannerImg,galleryImgS:e.galleryImgS},null,8,["sightName","bannerImg","galleryImgS"]),Object(n["l"])(r,{list:e.categoryList},null,8,["list"]),i])})),o=a("ed08"),s=a("9ff4"),b=Object(n["I"])("data-v-089184df");Object(n["x"])("data-v-089184df");var u={class:"img-wrapper"},d={class:"banner-info"},f={class:"banner-name"},O={class:"banner-number"},j=Object(n["l"])("i",{class:"iconfont icon-img banner-icon"},null,-1);Object(n["v"])();var g=b((function(e,t){var a=Object(n["A"])("common-gallery"),c=Object(n["A"])("fade-animation");return Object(n["u"])(),Object(n["f"])("div",null,[Object(n["l"])("div",{class:"banner",onClick:t[1]||(t[1]=function(){return e.toggleShowGallery.apply(e,arguments)})},[Object(n["l"])("div",u,[Object(n["l"])("img",{class:"banner-img",src:e.bannerImg,alt:"banner image"},null,8,["src"])]),Object(n["l"])("div",d,[Object(n["l"])("p",f,Object(s["G"])(e.sightName),1),Object(n["l"])("p",O,[j,Object(n["k"])(" "+Object(s["G"])(e.galleryImgS.length),1)])])]),Object(n["l"])(c,null,{default:b((function(){return[e.isShowGallery?Object(n["l"])(a,{key:0,onCloseGallery:e.toggleShowGallery,imgUrls:e.galleryImgS},null,8,["onCloseGallery","imgUrls"]):Object(n["g"])("",!0)]})),_:1})])})),m=a("830f"),v=Object(n["I"])("data-v-a3c38f9c"),p=v((function(e,t){return Object(n["u"])(),Object(n["f"])(m["a"],null,{default:v((function(){return[Object(n["z"])(e.$slots,"default")]})),_:3})})),h={name:"FadeAnimation"};a("e79e");h.render=p,h.__scopeId="data-v-a3c38f9c";var y=h,w=Object(n["I"])("data-v-a69490aa");Object(n["x"])("data-v-a69490aa");var S=Object(n["l"])("div",{class:"swiper-pagination",slot:"pagination"},null,-1);Object(n["v"])();var I=w((function(e,t){var a=Object(n["A"])("swiper-slide"),c=Object(n["A"])("swiper");return Object(n["u"])(),Object(n["f"])("div",{class:"wrapper",onClick:t[2]||(t[2]=function(){return e.handleCloseGallery.apply(e,arguments)})},[Object(n["l"])("div",{class:"container",onClick:t[1]||(t[1]=Object(m["e"])((function(){}),["stop"]))},[Object(n["l"])(c,{options:e.swiperOptions,ref:"mySwiper"},{default:w((function(){return[(Object(n["u"])(!0),Object(n["f"])(n["b"],null,Object(n["y"])(e.imgUrls,(function(e){var t=e.id,c=e.url;return Object(n["u"])(),Object(n["f"])(a,{key:t},{default:w((function(){return[Object(n["l"])("img",{src:c},null,8,["src"])]})),_:2},1024)})),128)),S]})),_:1},8,["options"])])])})),_={name:"CommonGallery",props:{imgUrls:{type:Array,required:!0}},data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination",type:"fraction"},loop:!0,observer:!0,observerParent:!0,autoplay:{delay:2500,disableOnInteraction:!1}}}},methods:{handleCloseGallery:function(){this.$emit("closeGallery")}}};a("e5c2");_.render=I,_.__scopeId="data-v-a69490aa";var k=_,A={name:"DetailBanner",components:{FadeAnimation:y,CommonGallery:k},props:{sightName:{type:String,required:!0},bannerImg:{type:String,required:!0},galleryImgS:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{isShowGallery:!1}},methods:{toggleShowGallery:function(){this.isShowGallery=!this.isShowGallery}}};a("1542");A.render=g,A.__scopeId="data-v-089184df";var G=A,D=Object(n["I"])("data-v-56821665");Object(n["x"])("data-v-56821665");var C={class:"header"},L=Object(n["l"])("i",{class:"iconfont icon-back-arrow back-icon"},null,-1),N=Object(n["l"])("i",{class:"iconfont icon-back-arrow back-icon"},null,-1),x=Object(n["l"])("span",null,"景点详情",-1);Object(n["v"])();var q=D((function(e,t){var a=Object(n["A"])("router-link");return Object(n["u"])(),Object(n["f"])("div",C,[Object(n["H"])(Object(n["l"])(a,{class:"back-btn",to:"/",tag:"div"},{default:D((function(){return[L]})),_:1},512),[[m["d"],e.isShowAbs]]),Object(n["H"])(Object(n["l"])("div",{class:"fixed",style:e.opacityStyle},[Object(n["l"])(a,{to:"/"},{default:D((function(){return[N]})),_:1}),x],4),[[m["d"],!e.isShowAbs]])])})),E={name:"DetailHeader",data:function(){return{isShowAbs:!0,opacityStyle:{}}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.watchScroll()},watchScroll:function(){var e,t=o["a"].getScrollTop();t>60?(this.isShowAbs=!1,t<140&&(e=t/140)):(this.isShowAbs=!0,e=0),this.opacityStyle={opacity:e}}}};a("cce7");E.render=q,E.__scopeId="data-v-56821665";var H=E,U=(a("99af"),Object(n["I"])("data-v-33b7f551"));Object(n["x"])("data-v-33b7f551");var $={class:"list"},B={class:"item-title border-bottom"},F=Object(n["l"])("i",{class:"item-title-icon"},null,-1),J={key:0,class:"children"};Object(n["v"])();var z=U((function(e,t){var a=Object(n["A"])("detail-list");return Object(n["u"])(),Object(n["f"])("ul",$,[(Object(n["u"])(!0),Object(n["f"])(n["b"],null,Object(n["y"])(e.list,(function(e,t){return Object(n["u"])(),Object(n["f"])("li",{class:"item",key:"".concat(e,"_").concat(t)},[Object(n["l"])("div",B,[F,Object(n["k"])(" "+Object(s["G"])(e.title),1)]),e.children?(Object(n["u"])(),Object(n["f"])("div",J,[Object(n["l"])(a,{list:e.children},null,8,["list"])])):Object(n["g"])("",!0)])})),128))])})),P={name:"DetailList",props:["list"]};a("b4a7");P.render=z,P.__scopeId="data-v-33b7f551";var T=P,K={name:"Detail",props:["id"],components:{DetailBanner:G,DetailHeader:H,DetailList:T},data:function(){return{sightName:"",bannerImg:"",galleryImgS:[],categoryList:[]}},methods:{getDetailSuccess:function(e){e.data&&(this.sightName=e.data.sightName,this.bannerImg=e.data.bannerImg,this.galleryImgS=e.data.galleryImgS,this.categoryList=e.data.categoryList)},getDetailError:function(e){console.error(e)},getDetailInfo:function(){var e=this.$route.params.id;return o["b"].get("/detail.json",{params:{id:e}})}},mounted:function(){this.getDetailInfo().then(this.getDetailSuccess).catch(this.getDetailError)}};a("f55f");K.render=r,K.__scopeId="data-v-1d79cf7e";t["default"]=K},"7a85":function(e,t,a){},8419:function(e,t,a){},b4a7:function(e,t,a){"use strict";a("4199")},cce7:function(e,t,a){"use strict";a("1242")},e5c2:function(e,t,a){"use strict";a("e804")},e79e:function(e,t,a){"use strict";a("8419")},e804:function(e,t,a){},f55f:function(e,t,a){"use strict";a("7a85")}}]);
//# sourceMappingURL=chunk-722c8c68.94ef0f5b.js.map