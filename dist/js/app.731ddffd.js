(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)r=o[u],i[r]&&d.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);m&&m(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dasos/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var m=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"001e":function(t,e,s){t.exports=s.p+"img/phone.a8f7f8cd.svg"},"01bc":function(t,e,s){t.exports=s.p+"img/compass.3f44a78a.svg"},"034f":function(t,e,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},"09d8":function(t,e,s){"use strict";var a=s("f433"),i=s.n(a);i.a},"0c4e":function(t,e,s){t.exports=s.p+"img/tent.4f8d54e3.svg"},"0c7a":function(t,e,s){t.exports=s.p+"img/play-button.b93c6d8d.svg"},"0d36":function(t,e,s){t.exports=s.p+"img/up-arrow.1febbb02.svg"},1457:function(t,e,s){t.exports=s.p+"img/google-play.b775eda8.svg"},1752:function(t,e,s){t.exports=s.p+"img/mail.d0f4ff4e.svg"},1853:function(t,e,s){t.exports=s.p+"img/picnic.7476be12.svg"},"199c":function(t,e){},"23be":function(t,e,s){"use strict";var a=s("199c"),i=s.n(a);e["default"]=i.a},"2f96":function(t,e,s){t.exports=s.p+"img/mountain.976d7294.svg"},"3b6f":function(t,e,s){"use strict";var a=s("b2b2"),i=s.n(a);i.a},"3dfd":function(t,e,s){"use strict";var a=s("830d"),i=s("23be"),n=(s("034f"),s("2877")),r=Object(n["a"])(i["default"],a["a"],a["b"],!1,null,null,null);r.options.__file="App.vue",e["default"]=r.exports},4493:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),i=s("3dfd"),n=s("f13c"),r=s.n(n),o=s("bc3a"),l=s.n(o),c=s("0a63"),m=s.n(c),u=s("5f30"),d=s.n(u),p=s("8aa5"),f=Object(p["initializeApp"])({apiKey:"AIzaSyDEtVyIs2ZuoStj0NqGnGNCpRYZW0cQcUw",authDomain:"dasos-3f925.firebaseapp.com",databaseURL:"https://dasos-3f925.firebaseio.com",projectId:"dasos-3f925",storageBucket:"",messagingSenderId:Object({NODE_ENV:"production",VUE_APP_CONTACT_TYPE:"firebase",VUE_APP_FIREBASE_API_KEY:"AIzaSyDEtVyIs2ZuoStj0NqGnGNCpRYZW0cQcUw",VUE_APP_FIREBASE_AUTH_DOMAIN:"dasos-3f925.firebaseapp.com",VUE_APP_FIREBASE_DATABASE_URL:"https://dasos-3f925.firebaseio.com",VUE_APP_FIREBASE_PROJECT_ID:"dasos-3f925",VUE_APP_FIREBASE_STORAGE_BUCKET:"",VUE_APP_IREBASE_MESSAGING_SENDER_ID:"829642768612",BASE_URL:"/dasos/"}).VUE_APP_FIREBASE_MESSAGING_SENDER_ID}),g=f.database(),v=g.ref("messages"),x=s("8c4f"),b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"font-sans antialiased leading-tight p-0 xs:-mr-5 w-full overflow"},[s("app-header"),s("app-features"),s("app-download"),s("app-testimonials"),s("app-contact"),s("app-footer")],1)},h=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-main-black"},[s("header",{staticClass:"container mx-auto"},[s("navigation-menu"),s("div",{staticClass:"pt-16 lg:flex items-center"},[t._m(0),s("div",{staticClass:"w-auto xs:m-0 md:m-1 md:pl-24 md:pr-24"},[s("h2",{staticClass:"text-white font-black lg:text-4xl md:text-3xl sm:text-xl xs:text-lg mb-4 lg:w-4/5 text-center"},[t._v("\n                    The best app in the world!\n                ")]),s("div",{staticClass:"text-grey-light opacity-50 mb-4 text-justify lg:w-4/5 md:text-md sm:text-sm xs:text-sm"},[t._v("\n                    This app helps you discover all the forests arround in order to reconnect with the nature. Download the app and escape from the urban chaos!\n                ")]),s("div",{staticClass:"flex text-center lg:w-auto mb-4 lg:mb-0 justify-center lg:w-4/5"},[s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#download",expression:"'#download'"}],staticClass:"flex-1 text-center verical-center justify-center text-sm px-6 py-3 leading-none no-underline border rounded-xl bg-main-green text-grey-lightest border-black hover:border-grey-lightest hover:text-grey-lightest hover:bg-transparent mt-4 mt-0 mr-10",attrs:{href:"#"}},[t._v("\n                        Download\n                    ")]),t._m(1)])])])],1),s("svg",{staticClass:"svg-separator sep12",staticStyle:{display:"block"},attrs:{preserveAspectRatio:"xMidYMax meet",viewBox:"0 0 1600 200","data-height":"200"}},[s("polygon",{staticStyle:{fill:"#f8fafc"},attrs:{points:"-4,24 800,198 1604,24 1604,204 -4,204 "}}),s("polygon",{staticStyle:{opacity:"1",fill:"#95a5a6"},attrs:{points:"-4,0 800,198 1604,0 1604,11.833 800,198 -4,12 "}}),s("polygon",{staticStyle:{opacity:"1",fill:"#dae1e7"},attrs:{points:"-4,12 -4,24 800,198 1604,24 1604,11.833 800,198 "}})])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lg:w-1/2 text-center"},[a("img",{staticClass:"xl:h-iphones lg:h-100 md:h-100 sm:h-100 xs:h-100",attrs:{src:s("9a93"),alt:"iphones image"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"flex-2 inline-flex items-center justify-center text-center mt-4"},[a("img",{staticClass:"h-8 mr-2",attrs:{src:s("0c7a"),alt:"play button"}}),a("a",{staticClass:"no-underline text-semibold text-grey-lightest text-lg opacity-50 hover:opacity-100",attrs:{href:"#"}},[a("span",{staticClass:"md:text-lg sm:text-md md:block xs:hidden"},[t._v("Watch How it Works")])])])}],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"flex items-center justify-between flex-wrap p-8"},[s("app-logo"),s("div",{staticClass:"block lg:hidden"},[s("button",{staticClass:"flex items-center px-3 py-2 border rounded text-grey-lightest border-grey-lightest hover:text-main-green hover:border-main-green"},[s("svg",{staticClass:"fill-current h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("title",[t._v("Menu")]),s("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),s("div",{staticClass:"w-full block lg:flex items-center lg:w-auto"},[s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#features",expression:"'#features'"}],staticClass:"block mt-4 lg:inline-block lg:mt-0 font-medium no-underline text-grey-lightest hover:text-main-green mr-4",attrs:{href:"#"}},[t._v("\n        features\n      ")]),s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#testimonials",expression:"'#testimonials'"}],staticClass:"block mt-4 lg:inline-block lg:mt-0 font-medium no-underline text-grey-lightest hover:text-main-green mr-4",attrs:{href:"#"}},[t._v("\n        testimonials\n      ")]),s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],staticClass:"block mt-4 lg:inline-block lg:mt-0 font-medium no-underline text-grey-lightest hover:text-main-green mr-4",attrs:{href:"#"}},[t._v("\n        contact\n      ")])])],1)},w=[],E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center flex-no-shrink text-white mr-6"},[a("img",{staticClass:"block h-8 mr-2",attrs:{src:s("9ac1"),alt:"Dasos Logo"}}),a("span",{staticClass:"font-bold text-3xl font-sans -mb-2"},[t._v("dasos")])])}],A={},S=A,P=(s("c280"),s("2877")),j=Object(P["a"])(S,E,k,!1,null,"8c81f5ba",null);j.options.__file="AppLogo.vue";var B=j.exports,N={components:{AppLogo:B},data:function(){return{}}},O=N,M=Object(P["a"])(O,C,w,!1,null,null,null);M.options.__file="NavigationMenu.vue";var D=M.exports,$={components:{NavigationMenu:D},data:function(){return{}}},L=$,I=Object(P["a"])(L,y,_,!1,null,null,null);I.options.__file="AppHeader.vue";var F=I.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-6",attrs:{id:"features"}},[t._m(0),s("svg",{attrs:{id:"curveDownColor",xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[s("path",{staticStyle:{fill:"#f8fafc"},attrs:{d:"M0 0 C 50 100 80 100 100 0 Z"}})])])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-grey-lightest"},[a("div",{staticClass:"container mx-auto px-6 pt-32"},[a("h1",{staticClass:"text-center text-black font-semibold text-2xl"},[t._v("\n                App Features\n            ")]),a("div",{staticClass:"flex md:flex-no-wrap xs:flex-wrap items-center justify-center mt-24"},[a("div",{staticClass:"px-6 py-6 m-2 text-center"},[a("img",{staticClass:"h-16 mb-4",attrs:{src:s("2f96"),alt:"mountain image"}}),a("h3",{staticClass:"mb-4"},[t._v("Mountain")]),a("p",{staticClass:"text-black font-base text-sm opacity-50"},[t._v("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.\n                    ")])]),a("div",{staticClass:"px-6 py-6 m-2 text-center"},[a("img",{staticClass:"h-16 mb-4",attrs:{src:s("0c4e"),alt:"tent image"}}),a("h3",{staticClass:"mb-4"},[t._v("Tent")]),a("p",{staticClass:"text-black font-base text-sm opacity-50"},[t._v("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.\n                    ")])]),a("div",{staticClass:"px-6 py-6 m-2 text-center"},[a("img",{staticClass:"h-16 mb-4",attrs:{src:s("1853"),alt:"picnic image"}}),a("h3",{staticClass:"mb-4"},[t._v("Picnic")]),a("p",{staticClass:"text-black font-base text-sm opacity-50"},[t._v("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.\n                    ")])])]),a("div",{staticClass:"flex md:flex-no-wrap xs:flex-wrap items-center justify-center lg:mt-64 xs:mt-0"},[a("div",{staticClass:"flex-1"},[a("div",{staticClass:"px-12 py-12 m-4 text-center"},[a("img",{staticClass:"h-16 mb-4",attrs:{src:s("01bc"),alt:"compass image"}}),a("h3",{staticClass:"mb-4"},[t._v("Compass")]),a("p",{staticClass:"text-black font-thin text-xs opacity-50"},[t._v("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.\n                        ")])]),a("div",{staticClass:"px-12 py-12 m-4 text-center"},[a("img",{staticClass:"h-16 mb-4",attrs:{src:s("c73b"),alt:"canteen image"}}),a("h3",{staticClass:"mb-4"},[t._v("Canteen")]),a("p",{staticClass:"text-black font-thin text-xs opacity-50"},[t._v("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.\n                        ")])])]),a("div",{staticClass:"xs:hidden lg:block md:flex-2 lg:flex-2"},[a("img",{staticClass:"h-iphone",attrs:{src:s("c4cb"),alt:"iphone image"}})]),a("div",{staticClass:"flex-1"},[a("div",{staticClass:"px-12 py-12 m-4 text-center"},[a("img",{staticClass:"h-16 mb-4",attrs:{src:s("bb03"),alt:"forest image"}}),a("h3",{staticClass:"mb-4"},[t._v("Forest")]),a("p",{staticClass:"text-black font-thin text-xs opacity-50"},[t._v("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.\n                        ")])]),a("div",{staticClass:"px-12 py-12 m-4 text-center"},[a("img",{staticClass:"h-16 mb-4",attrs:{src:s("e07c"),alt:"pines image"}}),a("h3",{staticClass:"mb-4"},[t._v("Pines")]),a("p",{staticClass:"text-black font-thin text-xs opacity-50"},[t._v("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.\n                        ")])])])])])])}],Y={data:function(){return{}}},T=Y,V=Object(P["a"])(T,R,U,!1,null,null,null);V.options.__file="AppFeatures.vue";var q=V.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-grey-lightest pt-12 pb-12",attrs:{id:"testimonials"}},[s("carousel",{staticClass:"text-black",attrs:{"per-page":1,autoplay:"",loop:"",paginationColor:"#000000",paginationActiveColor:"#1f8a65"}},t._l(t.testimonials,function(e){return s("slide",{key:e.id},[s("div",{staticClass:"text-center"},[s("div",{staticClass:"text-2xl italic"},[t._v("\n        "+t._s(e.title)+"\n      ")]),s("p",{staticClass:"text-black font-base text-md opacity-50 m-10"},[t._v("\n        "+t._s(e.message)+"\n      ")]),s("div",{staticClass:"inline-flex"},[s("img",{staticClass:"h-16",attrs:{src:"/avatars/"+e.icon,alt:"male avatar"}}),s("div",{staticClass:"text-black mt-3 ml-6"},[s("div",{staticClass:"font-medium text-lg"},[t._v("\n            "+t._s(e.name)+"\n          ")]),s("div",{staticClass:"font-thin text-md opacity-75"},[t._v("\n            "+t._s(e.job)+"\n          ")])])])])])}))],1)},z=[],G={data:function(){return{testimonials:null}},mounted:function(){var t=this;axios.get("testimonials.json").then(function(e){return t.testimonials=e.data})}},H=G,Z=Object(P["a"])(H,W,z,!1,null,null,null);Z.options.__file="AppTestimonials.vue";var J=Z.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-24"},[a("div",{staticClass:"bg-main-black"},[a("div",{staticClass:"w-full text-center pt-8 opacity-25"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#app",expression:"'#app'"}],attrs:{href:"#"}},[a("img",{staticClass:"h-6",attrs:{src:s("0d36"),alt:""}})])]),t._m(0),t._m(1),t._m(2)])])},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full text-center"},[a("div",[a("img",{staticClass:"h-16 mt-8",attrs:{src:s("9ac1"),alt:"Dasos Logo"}})]),a("div",{staticClass:"text-grey-lightest fond-bold text-2xl"},[t._v("\n                dasos\n            ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex items-start justify-center text-center text-grey-lightest mt-24"},[s("div",{staticClass:"md:w-1/5 xs:w-1/3"},[s("div",{staticClass:"font-bold text-lg"},[t._v("Features")]),s("div",{staticClass:"flex flex-col items-center font-thin text-sm opacity-50 mt-4"},[s("a",{staticClass:"no-underline text-grey-lightest",attrs:{href:"#"}},[t._v("Mountain")]),s("a",{staticClass:"no-underline text-grey-lightest mt-2",attrs:{href:"#"}},[t._v("Tent")]),s("a",{staticClass:"no-underline text-grey-lightest mt-2",attrs:{href:"#"}},[t._v("Picnic")]),s("a",{staticClass:"no-underline text-grey-lightest mt-2",attrs:{href:"#"}},[t._v("Compass")]),s("a",{staticClass:"no-underline text-grey-lightest mt-2",attrs:{href:"#"}},[t._v("Forest")])])]),s("div",{staticClass:"md:w-1/5 xs:w-1/3"},[s("div",{staticClass:"font-bold text-lg"},[t._v("Downloads")]),s("div",{staticClass:"flex flex-col items-center font-thin text-sm opacity-50 mt-4"},[s("a",{staticClass:"no-underline text-grey-lightest",attrs:{href:"#"}},[t._v("Apple App Store "),s("span",{staticClass:"md:inline-block xs:hidden"},[t._v("(iOS)")])]),s("a",{staticClass:"no-underline text-grey-lightest mt-2",attrs:{href:"#"}},[t._v("Google Play Store "),s("span",{staticClass:"md:inline-block xs:hidden"},[t._v("(Android)")])])])]),s("div",{staticClass:"md:w-1/5 xs:w-1/3"},[s("div",{staticClass:"font-bold text-lg"},[t._v("Company")]),s("div",{staticClass:"flex flex-col items-center font-thin text-sm opacity-50 mt-4"},[s("a",{staticClass:"no-underline text-grey-lightest",attrs:{href:"#"}},[t._v("About Us")]),s("a",{staticClass:"no-underline text-grey-lightest mt-2",attrs:{href:"#"}},[t._v("Jobs")]),s("a",{staticClass:"no-underline text-grey-lightest mt-2",attrs:{href:"#"}},[t._v("Sitemap")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-wrap mt-12 items-center justify-between p-3"},[a("div",{staticClass:"text-grey-lightest text-sm opacity-75"},[t._v("\n                designed and developed by \n                "),a("a",{staticClass:"no-underline text-blue",attrs:{href:"https://github.com/siokas"}},[t._v("siokas")])]),a("div",{},[a("img",{staticClass:"h-6 mr-6",attrs:{src:s("aaa3"),alt:"facebook icon"}}),a("img",{staticClass:"h-6 mr-6",attrs:{src:s("a3df"),alt:"twitter icon"}}),a("img",{staticClass:"h-6",attrs:{src:s("73dd"),alt:"youtube icon"}})])])}],X={},tt=X,et=Object(P["a"])(tt,K,Q,!1,null,null,null);et.options.__file="AppFooter.vue";var st=et.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-24 bg-white",attrs:{id:"contact"}},[s("div",{staticClass:"flex flex-wrap items-start justify-center md:p-0 xs:p-4"},[t._m(0),s("div",{staticClass:"md:w-1/3 xs:w-full md:mt-0 xs:mt-6"},[s("form",{attrs:{action:"#",method:"post"},on:{submit:function(t){t.preventDefault()}}},[s("div",{staticClass:"md:hidden xs:block text-extrabold mt-6 mb-4"},[t._v("\n                    Send us a message\n                ")]),s("div",{staticClass:"mb-6"},[t.error.nameEmpty?s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none mr-2",attrs:{type:"text",placeholder:"Your name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),s("span",{staticClass:"text-main-black font-semibold text-xs opacity-75"},[t._v("\n                            You should enter your name before sumbiting your message\n                        ")])]):s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"w-full bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none mr-2",attrs:{type:"text",placeholder:"Your name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),s("div",{staticClass:"mb-6"},[t.error.emailEmpty?s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none",attrs:{type:"text",placeholder:"Your email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("span",{staticClass:"text-main-black font-semibold text-xs opacity-75"},[t._v("\n                            You should enter your email before sumbiting your message\n                        ")])]):s("span",[t.error.emailWrong?s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none",attrs:{type:"text",placeholder:"Your email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("span",{staticClass:"text-main-black font-semibold text-xs opacity-75"},[t._v("\n                                You should enter a valid email address\n                            ")])]):s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"w-full bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none",attrs:{type:"text",placeholder:"Your email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])])]),s("div",{staticClass:"mb-6"},[t.error.messageBodyEmpty?s("span",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.messageBody,expression:"messageBody"}],staticClass:"w-full border border-red-light bg-grey-lightest py-16 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none",attrs:{placeholder:"Your Message"},domProps:{value:t.messageBody},on:{input:function(e){e.target.composing||(t.messageBody=e.target.value)}}}),s("span",{staticClass:"text-main-black font-semibold text-xs opacity-75"},[t._v("\n                            You should enter a something before sumbiting your message\n                        ")])]):s("span",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.messageBody,expression:"messageBody"}],staticClass:"w-full bg-grey-lightest py-16 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none",attrs:{placeholder:"Your Message"},domProps:{value:t.messageBody},on:{input:function(e){e.target.composing||(t.messageBody=e.target.value)}}})])]),s("div",{staticClass:"w-full md:text-right xs:text-center"},[s("button",{staticClass:"bg-main-green px-4 py-4 rounded font-medium text-center xs:w-full lg:w-auto text-grey-lightest",on:{click:t.checkForm}},[t._v("Send Message")])])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.alert,expression:"alert"}],staticClass:"flex items-center justify-center"},[s("div",{staticClass:"bg-green-lightest border border-green-light text-green-dark px-12 py-3 rounded relative",attrs:{role:"alert"}},[s("strong",{staticClass:"font-bold"},[t._v("Your message has been sent successfully.")]),s("span",{staticClass:"absolute pin-t pin-b pin-r px-4 py-3"},[s("svg",{staticClass:"fill-current h-6 w-6 text-red-light opacity-75",attrs:{role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},on:{click:function(e){t.alert=!1}}},[s("title",[t._v("Close")]),s("path",{attrs:{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}})])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.error.database,expression:"error.database"}],staticClass:"flex items-center justify-center"},[s("div",{staticClass:"bg-red-lightest border border-red-light text-red-dark px-12 py-3 rounded relative",attrs:{role:"alert"}},[s("strong",{staticClass:"font-bold"},[t._v("An unexpected error occurred in database.")]),s("span",{staticClass:"absolute pin-t pin-b pin-r px-4 py-3"},[s("svg",{staticClass:"fill-current h-6 w-6 text-red-light opacity-75",attrs:{role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},on:{click:function(e){t.alert=!1}}},[s("title",[t._v("Close")]),s("path",{attrs:{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}})])])])])])},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md:w-1/3 xs:w-full text-main-black"},[a("h1",{staticClass:"text-main-black font-semibold text-2xl"},[t._v("\n                Contact with us\n            ")]),a("div",{staticClass:"mt-8 opacity-50 lg:text-base xs:text-sm md:w-3/4 xs:w-full"},[t._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            ")]),a("div",{staticClass:"mt-12 font-bold"},[t._v("\n                Head Office\n            ")]),a("div",{staticClass:"mt-2 md:text-base xs:text-sm opacity-50"},[a("div",[t._v("\n                    1600 Pennsylvania Avenue NW\n                ")]),a("div",[t._v("\n                    Washington DC 20500\n                ")]),a("div",[t._v("\n                    United States of America\n                ")])]),a("div",{staticClass:"flex mt-12 opacity-50 items-center"},[a("img",{staticClass:"h-4 mr-2",attrs:{src:s("001e"),alt:""}}),a("span",{staticClass:"text-base"},[t._v("+1 01 2345 6789")])]),a("div",{staticClass:"flex items-center mt-2 opacity-50"},[a("img",{staticClass:"h-4 mr-2",attrs:{src:s("1752"),alt:""}}),a("a",{staticClass:"no-underline text-base text-main-green",attrs:{href:"mailto:info@dasos.com"}},[t._v("info@dasos.com")])])])}],nt=(s("7f7f"),{data:function(){return{error:{nameEmpty:!1,emailEmpty:!1,emailWrong:!1,messageBodyEmpty:!1,database:!1},name:null,email:null,messageBody:null,alert:!1}},computed:{hasNoErrors:function(){return!this.error.nameEmpty&&!this.error.emailEmpty&&!this.error.emailWrong&&!this.error.messageBodyEmpty}},methods:{emailValidation:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(String(t).toLowerCase())},checkForm:function(){this.name?this.error.nameEmpty=!1:this.error.nameEmpty=!0,this.email?(this.emailValidation(this.email)?this.error.emailWrong=!1:this.error.emailWrong=!0,this.error.emailEmpty=!1):this.error.emailEmpty=!0,this.messageBody?this.error.messageBodyEmpty=!1:this.error.messageBodyEmpty=!0,this.hasNoErrors&&this.submitMessage()},submitMessage:function(){this.firebase()},customEmail:function(){window.open("mailto:test@example.com?subject=".concat(this.name,"&body=").concat(this.messageBody))},resetForm:function(){this.name=null,this.email=null,this.messageBody=null},firebase:function(){var t=this;g.ref("messages").push({name:this.name,email:this.email,body:this.messageBody},function(e){e?t.error.database=!0:(t.alert=!0,t.error.database=!1,t.resetForm())})}},mounted:function(){}}),rt=nt,ot=(s("3b6f"),Object(P["a"])(rt,at,it,!1,null,"17fa25dc",null));ot.options.__file="AppContact.vue";var lt=ot.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-12 pb-12 w-full text-center",attrs:{id:"download"}},[a("h1",{staticClass:"text-main-black font-semibold text-2xl"},[t._v("Download Our App")]),a("div",{staticClass:"mt-4 opacity-50 text-sm md:block xs:hidden"},[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    ")]),a("div",[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"h-32 mr-6",attrs:{src:s("b15d"),alt:""}})]),a("a",{attrs:{href:"#"}},[a("img",{staticClass:"h-32",attrs:{src:s("1457"),alt:""}})])])])}],ut={},dt=ut,pt=(s("e9c3"),Object(P["a"])(dt,ct,mt,!1,null,"76c32ed0",null));pt.options.__file="AppDownload.vue";var ft=pt.exports,gt={components:{AppHeader:F,AppFeatures:q,AppTestimonials:J,AppFooter:st,AppContact:lt,AppDownload:ft}},vt=gt,xt=(s("6228"),Object(P["a"])(vt,b,h,!1,null,null,null));xt.options.__file="Home.vue";var bt=xt.exports,ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"font-sans antialiased leading-tight p-0 xs:-mr-5 w-full overflow"},[s("div",{staticClass:"container bg-main-black mx-auto text-grey-lightest p-12 text-center font-semibold text-3xl"},[t._v("\n        Messages\n    ")]),s("div",{staticClass:"flex flex-wrap p-24"},t._l(t.messages,function(e){return s("div",{key:e.id,staticClass:"text-center w-1/4 p-12 border border-grey-light m-12"},[s("div",{staticClass:"font-bold text-2xl"},[t._v(t._s(e.name))]),s("div",[s("a",{staticClass:"font-bold text-sm no-underline text-main-black opacity-50",attrs:{href:"mailto:"+e.email}},[t._v(t._s(e.email))])]),s("div",{staticClass:"mt-12"},[t._v(t._s(e.body))])])}))])},yt=[],_t={data:function(){return{messages:null}},firebase:{messages:v}},Ct=_t,wt=(s("09d8"),Object(P["a"])(Ct,ht,yt,!1,null,null,null));wt.options.__file="Messages.vue";var Et=wt.exports,kt=[{path:"/",component:bt},{path:"/messages",component:Et}];a["a"].use(x["a"]),a["a"].use(m.a),a["a"].use(d.a),window.axios=l.a,a["a"].use(r.a,{container:"body",duration:1e3,easing:"ease-in-out",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0});var At=new x["a"]({routes:kt,mode:"history"});new a["a"]({router:At,render:function(t){return t(i["default"])}}).$mount("#app")},6228:function(t,e,s){"use strict";var a=s("b079"),i=s.n(a);i.a},"64a9":function(t,e,s){},"73dd":function(t,e,s){t.exports=s.p+"img/youtube.1831a653.svg"},"830d":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},"9a93":function(t,e,s){t.exports=s.p+"img/iphones.2e586052.png"},"9ac1":function(t,e,s){t.exports=s.p+"img/pine.f19e36d5.svg"},a3df:function(t,e,s){t.exports=s.p+"img/twitter.ffb76ce5.svg"},aaa3:function(t,e,s){t.exports=s.p+"img/facebook.61f23eb5.svg"},b079:function(t,e,s){},b15d:function(t,e,s){t.exports=s.p+"img/app-store.189e324b.svg"},b2b2:function(t,e,s){},bb03:function(t,e,s){t.exports=s.p+"img/forest.7896c60b.svg"},c280:function(t,e,s){"use strict";var a=s("eab5"),i=s.n(a);i.a},c4cb:function(t,e,s){t.exports=s.p+"img/iphone.16ea7812.png"},c73b:function(t,e,s){t.exports=s.p+"img/canteen.ea21a5db.svg"},e07c:function(t,e,s){t.exports=s.p+"img/pines.c42a9993.svg"},e9c3:function(t,e,s){"use strict";var a=s("4493"),i=s.n(a);i.a},eab5:function(t,e,s){},f433:function(t,e,s){}});
//# sourceMappingURL=app.731ddffd.js.map