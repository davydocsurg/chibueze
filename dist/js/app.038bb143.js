(function(e){function t(t){for(var s,n,l=t[0],c=t[1],o=t[2],v=0,d=[];v<l.length;v++)n=l[v],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,l=1;l<a.length;l++){var c=a[l];0!==r[c]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},i=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/chibueze/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var m=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"02f4":function(e,t,a){"use strict";var s=a("eb16"),r=a.n(s);r.a},"034f":function(e,t,a){"use strict";var s=a("85ec"),r=a.n(s);r.a},"0696":function(e,t,a){"use strict";var s=a("aa63"),r=a.n(s);r.a},"0c7a":function(e,t,a){},"11db":function(e,t,a){e.exports=a.p+"img/project4.9fbcdfd7.png"},"18bc":function(e,t,a){"use strict";var s=a("a4ca"),r=a.n(s);r.a},"1a3b":function(e,t,a){},"2b36":function(e,t,a){"use strict";var s=a("a1d3"),r=a.n(s);r.a},"36e9":function(e,t,a){},4225:function(e,t,a){e.exports=a.p+"img/project5.c5025d7a.png"},"461a":function(e,t,a){"use strict";var s=a("5572"),r=a.n(s);r.a},"491d":function(e,t,a){},5438:function(e,t,a){"use strict";var s=a("d220"),r=a.n(s);r.a},5572:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container dark-theme",attrs:{id:"app"}},[a("Home"),a("hr",{staticClass:"bg-success"}),a("About"),a("hr",{staticClass:"bg-success"}),a("Proficiency"),a("hr",{staticClass:"bg-success"}),a("Skills"),a("hr",{staticClass:"bg-success"}),a("Experience"),a("hr",{staticClass:"bg-success"}),a("Projects"),a("hr",{staticClass:"bg-success"}),a("Socials"),a("hr",{staticClass:"bg-success"}),a("Footer")],1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header",[e._v(" dfhefhi "),a("div",{on:{toggle:e.toggleMenu}},[e._m(0)]),e._m(1)])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu-btn"},[a("div",{staticClass:"nav-line"}),a("div",{staticClass:"nav-line"}),a("div",{staticClass:"nav-line"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"menu"},[a("div",{staticClass:"menu-branding"},[a("div",{staticClass:"portrait"})]),a("ul",{staticClass:"menu-nav"},[a("li",{staticClass:"nav-item current"},[a("a",{staticClass:"nav-link",attrs:{href:"index.html"}},[e._v(" Home ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"about.html"}},[e._v(" About Me ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"work.html"}},[e._v(" My Work ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"contact.html"}},[e._v(" How To Reach Me ")])])])])}],c=(a("4160"),a("159b"),{methods:{toggleMenu:function(){this.showMenu=this.hideMenu},showMenu:function(){var e=document.querySelector(".menu-btn"),t=document.querySelector(".menu"),a=document.querySelector(".menu-nav"),s=document.querySelector(".menu-branding"),r=document.querySelectorAll(".nav-item");e.classList.add("close"),t.classList.add("show"),a.classList.add("show"),s.classList.add("show"),r.forEach((function(e){return e.classList.add("show")}))},hideMenu:function(){var e=document.querySelector(".menu-btn"),t=document.querySelector(".menu"),a=document.querySelector(".menu-nav"),s=document.querySelector(".menu-branding"),r=document.querySelectorAll(".nav-item");e.classList.remove("close"),t.classList.remove("show"),a.classList.remove("show"),s.classList.remove("show"),r.forEach((function(e){return e.classList.remove("show")}))}}}),o=c,m=a("2877"),v=Object(m["a"])(o,n,l,!1,null,null,null),d=v.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container home-mt",attrs:{id:"home"}},[a("div",{staticClass:"row jst-space"},[a("div",{staticClass:"col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pics container"},[a("Profile"),a("br")],1),a("div",{staticClass:"col-md-6 col-sm-12 col-xs-12"},[a("h1",{},[a("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"smaller"},[e._v("David")]),a("span",{staticClass:"large text-success"},[a("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[e._v("Chibueze")])])]),a("b",{},[a("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[e._v(" Software Developer "),a("i",{staticClass:"fas fa-laptop-code"})])]),a("div",{staticClass:"mt-4"},[a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card bg-card shadow-sm p-3"},[e._m(0)])])])])])},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row jst-space"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"mr-4"},[a("i",{staticClass:"fas fa-map-marker-alt"}),a("span",{staticClass:"ml-1"},[e._v("Location")]),a("br"),a("b",[e._v("Abia, Nigeria")])]),a("hr",{staticClass:"only-sm"}),a("div",{staticClass:"mr-4"},[a("i",{staticClass:"fas fa-phone"}),a("span",{staticClass:"ml-1"},[e._v("Phone")]),a("br"),a("b",[e._v("+234 901 358 2063")])]),a("hr",{staticClass:"only-sm"}),a("div",{},[a("i",{staticClass:"far fa-envelope"}),a("span",{staticClass:"ml-1"},[e._v("Mail")]),a("br"),a("a",{staticClass:"mail-to",attrs:{href:"mailto:davydocsurg@gmail.com"}},[a("b",[e._v("davydocsurg@gmail.com")])])])])])}],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"profile-pics "})},b=[],h=(a("fd10"),{}),g=Object(m["a"])(h,p,b,!1,null,"3a8c7c01",null),C=g.exports,_={components:{Profile:C}},w=_,A=(a("02f4"),Object(m["a"])(w,u,f,!1,null,"0204daad",null)),x=A.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container jst-abt p-4 mt-4",attrs:{id:"about"}},[a("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},[a("h1",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"text-bold"},[e._v(" About "),a("span",{staticClass:"text-success"},[e._v("Me")])]),a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card bg-card col-md-12 col-lg-4 shadow-sm"},[a("span",{staticClass:"p-1"},[e._v("A few things about me...")])]),a("br"),a("br"),a("div",{staticClass:"col-lg-8 col-md-12 col-sm-12 col-xs-12"},[a("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"lh-lg"},[e._v(" I'm a back/front-end web developer, database developer and an enthusiastic entrepreneur with years of experience in the tech industry. I'm based in Nigeria and self-tutored for most of my knowledge. Having a strong belief in being 100% efficient, I devote my best to every laid down goals. ")])])])])},y=[],S=(a("461a"),{}),N=Object(m["a"])(S,k,y,!1,null,"f1542b58",null),j=N.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container jst-prof p-4 mt-4",attrs:{id:"proficiency"}},[a("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},[a("h1",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"text-bold"},[e._v(" Profi"),a("br",{staticClass:"break"}),a("span",{staticClass:"text-success"},[e._v("ciency")])]),a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card bg-card col-md-12 col-lg-4 shadow-sm"},[a("span",{staticClass:"p-1"},[e._v("My areas of proficiency")])]),a("div",{staticClass:"col-lg-8 col-md-12 col-sm-12 col-xs-12 mt-4"},[a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[a("h5",{staticClass:"text-success"},[e._v("Front-end Design")]),a("p",{staticClass:"lh-lg"},[e._v(" I design responsive and stunning webpages/SPAs using various UI frameworks and libraries such as Bootstrap, Tailwind CSS, and VueJS/VuetifyJS. ")])]),a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[a("h5",{staticClass:"text-success"},[e._v("Back-end Development")]),a("p",{staticClass:"lh-lg"},[e._v(" I develop highly extensible web applications with fast, solid, and secure APIs. My stack includes PHP and Laravel. ")])]),a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[a("h5",{staticClass:"text-success"},[e._v("Database Development")]),a("p",{staticClass:"lh-lg font-monospace"},[e._v(" I design uniformed relational data models aptly accomplished with MySQL/SQL. ")])])])])])},E=[],O=(a("f78c"),{}),P=Object(m["a"])(O,M,E,!1,null,"0fb8d76e",null),L=P.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container jst-skl p-4 mt-4",attrs:{id:"skills"}},[a("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},[a("SkillText"),a("div",{staticClass:"mt-4"},e._l(e.progress_data,(function(t){return a("div",{key:t.id,staticClass:"each-s"},[a("b",{staticClass:"text"},[e._v(e._s(t.name))]),a("br"),a("div",{staticClass:"progress mb-3"},[a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"progress-bar bg-success",style:{width:t.width+"%"},attrs:{role:"progressbar","aria-valuenow":t.val,"aria-valuemin":"0","aria-valuemax":"100"}},[a("b",[e._v(e._s(t.level+"%"))])])])])})),0)],1)])},D=[],I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"text-bold"},[e._v(" My "),a("span",{staticClass:"text-success"},[e._v("Skills")])]),a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card bg-card col-md-12 col-lg-8 shadow-sm"},[a("span",{staticClass:"p-1"},[e._v(" A representation of my progress with each skill so far. ")])])])},T=[],z=(a("72fa"),{}),q=Object(m["a"])(z,I,T,!1,null,"cfee0e5a",null),J=q.exports,H={components:{SkillText:J},data:function(){return{progress_data:[{id:1,name:"HTML 5",width:"97",val:"97",level:97},{id:2,name:"CSS 3",width:"90",val:"90",level:90},{id:3,name:"Bootstrap 5",width:"87",val:"87",level:87},{id:4,name:"Tailwind CSS",width:"75",val:"75",level:75},{id:5,name:"JavaScript",width:"91",val:"91",level:91},{id:6,name:"PHP",width:"82",val:"82",level:82},{id:7,name:"VueJS/VuetifyJS",width:"89",val:"89",level:89},{id:8,name:"Laravel 7",width:"77",val:"77",level:77},{id:9,name:"SQL/MYSQL",width:"70",val:"70",level:70}]}},methods:{}},V=H,F=(a("fdff"),Object(m["a"])(V,$,D,!1,null,"2b31735c",null)),R=F.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container jst-prof",attrs:{id:"experience"}},[a("div",{staticClass:"mb-5"},[a("h1",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"text-bold"},[e._v(" Exper"),a("span",{staticClass:"text-success"},[e._v("ience")])]),a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card bg-card col-md-12 col-lg-4 shadow-sm jst-pro"},[a("span",{staticClass:"p-1 jst-prof"},[e._v("My experience so far.")])])]),a("ul",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"timeline"},[e._m(0),e._m(1)])])},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("div",{staticClass:"container row"},[a("div",{staticClass:"col-lg-4"},[a("small",{},[e._v("April 2020 - present")]),a("h5",{staticClass:"text-success",attrs:{href:""}},[e._v("Freelance Software Developer")]),a("small",{staticClass:"text-muted"},[e._v("Remote - Freelancer")]),a("br"),a("br")]),a("div",{staticClass:"col-lg-8"},[a("p",{staticClass:"lh-lg"},[e._v(" I currently work as a Freelance Software Developer. I work with teams of high skilled developers. I develop backend and database infrastructures and devise front-end components on both new and existing methods. ")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("div",{staticClass:"container row"},[a("div",{staticClass:"col-lg-4"},[a("small",{},[e._v("February, 2020 - April 2020")]),a("h5",{staticClass:"text-success",attrs:{href:""}},[e._v("Innovation Growth Hub")]),a("small",{staticClass:"text-success"},[e._v("Backend Developer - Intern")]),a("br"),a("small",{staticClass:"text-muted"},[e._v("Abia, Nigeria.")]),a("br"),a("br")]),a("div",{staticClass:"col-lg-8"},[a("p",{staticClass:"lh-lg"},[e._v(" I worked in a team of high skilled developers, developed efficient solutions, and built first class software. ")])])])])}],Q=(a("0696"),{}),K=Object(m["a"])(Q,G,B,!1,null,"5e5b9e57",null),W=K.exports,U=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container jst-pro",attrs:{id:"projects"}},[s("ProText",{staticClass:"mb-5"}),s("main",{attrs:{id:""}},[s("div",{staticClass:"projects"},[s("div",{staticClass:"item"},[s("a",{attrs:{href:"https://onevent.com.ng/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],attrs:{src:a("ccdd"),alt:"CMS"}})]),s("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-light"},[e._v(" Onevent is a creative event agency that is passionate about creating beautiful, unique, and organized experiences for a variety of clients throughout the world. ")]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-success text-decoration-none",attrs:{href:"https://onevent.com.ng/",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fas fa-eye"}),e._v(" Visit Site ")])]),s("div",{staticClass:"item"},[s("a",{attrs:{href:"http://frozen-temple-94354.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],attrs:{src:a("9fce"),alt:"CMS"}})]),s("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-light"},[e._v(" CMS is a blog site with a Content Management System, made with Laravel "),s("i",{staticClass:"fab fa-laravel"}),e._v(" and "),s("i",{staticClass:"fab fa-js-square"}),e._v(" JavaScript. ")]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-success text-decoration-none",attrs:{href:"http://frozen-temple-94354.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fas fa-eye"}),e._v(" Demo ")]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark text-decoration-none",attrs:{href:"https://github.com/davydocsurg/CMS",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-github"}),e._v(" Github Repo ")])]),s("div",{staticClass:"item"},[s("a",{attrs:{href:"https://davydocsurg.github.io/chibueze/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],attrs:{src:a("bf5a"),alt:"David Chibueze | Software Developer"}})]),s("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-light"},[e._v(" Portfolio Website of David Chibueze. Made with VueJs "),s("i",{staticClass:"fab fa-vuejs"})]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-success text-decoration-none",attrs:{href:"https://davydocsurg.github.io/chibueze/",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fas fa-eye"}),e._v(" Visit Site ")]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark text-decoration-none",attrs:{href:"https://github.com/davydocsurg/chibueze",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-github"}),e._v(" Github Repo ")])]),s("div",{staticClass:"item"},[s("a",{attrs:{href:"http://laravel-vue-starter.herokuapp.com/users",target:"_blank",rel:"noopener noreferrer"}},[s("img",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],attrs:{src:a("11db"),alt:"Starter"}})]),s("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-light"},[e._v(" Starter is a Content Management System made with Laravel "),s("i",{staticClass:"fab fa-laravel"}),e._v(" and VueJs "),s("i",{staticClass:"fab fa-vuejs"}),e._v(". ")]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark text-decoration-none bg-success",attrs:{href:"http://laravel-vue-starter.herokuapp.com/users",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fas fa-eye"}),e._v(" Demo ")]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark text-decoration-none",attrs:{href:"https://github.com/davydocsurg/laravel-multi-purpose",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-github"}),e._v(" Github Repo ")])]),s("div",{staticClass:"item"},[s("a",{attrs:{href:"http://ticketliteapp.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],attrs:{src:a("4225"),alt:"TicketLite"}})]),s("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-light"},[e._v(" Ticketlite is a ticket management system where users can create and manage their tickets. Made with Laravel "),s("i",{staticClass:"fab fa-laravel"})]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-success text-decoration-none",attrs:{href:"http://ticketliteapp.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fas fa-eye"}),e._v(" Demo ")]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark text-decoration-none",attrs:{href:"https://github.com/davydocsurg/Support-Ticket-System-with-Laravel-6-",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-github"}),e._v(" Github Repo ")])]),s("div",{staticClass:"item"},[s("a",{attrs:{href:"https://github.com/davydocsurg/kreeper",target:"_blank",rel:"noopener noreferrer"}},[s("img",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],attrs:{src:a("897f"),alt:"Kreeper"}})]),s("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-light"},[e._v(" Kreeper is a realtime chat application made with Laravel "),s("i",{staticClass:"fab fa-laravel"}),e._v(", VueJs "),s("i",{staticClass:"fab fa-vuejs"}),e._v(" and Pusher ")]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark text-decoration-none",attrs:{href:"https://github.com/davydocsurg/kreeper",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-github"}),e._v(" Github Repo ")])])])])],1)},Y=[],X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"text-bold"},[e._v(" Port"),a("span",{staticClass:"text-success"},[e._v("folio")])]),a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card bg-card col-md-12 col-lg-8 shadow-sm"},[a("span",{staticClass:"p-1"},[e._v("Some projects I've built/contributed to ")])])])},Z=[],ee=(a("2b36"),{}),te=Object(m["a"])(ee,X,Z,!1,null,"6e288ca2",null),ae=te.exports,se={components:{ProText:ae},data:function(){return{}}},re=se,ie=(a("18bc"),Object(m["a"])(re,U,Y,!1,null,"d04cebb4",null)),ne=ie.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container jst-soc",attrs:{id:"contacts"}},[a("SocText"),a("div",{staticClass:"boxes"},[a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[e._m(0),a("a",{attrs:{href:"https://github.com/davydocsurg",target:"_blank",rel:"noopener noreferrer"}},[e._v("@davydocsurg")])]),a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[e._m(1),a("a",{attrs:{href:"https://twitter.com/davydocsurg",target:"_blank",rel:"noopener noreferrer"}},[e._v("@davydocsurg")])]),a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[e._m(2),a("a",{attrs:{href:"https://www.linkedin.com/in/davidchibueze/",target:"_blank",rel:"noopener noreferrer"}},[e._v("David Chibueze")])])])],1)},ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"text"},[a("i",{staticClass:"fab fa-github"}),e._v(" : ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"text"},[a("i",{staticClass:"fab fa-twitter"}),e._v(" : ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"text"},[a("i",{staticClass:"fab fa-linkedin"}),e._v(" : ")])}],oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"text-bold"},[e._v(" Prof"),a("span",{staticClass:"text-success"},[e._v("iles")])])])},me=[],ve=(a("5438"),{}),de=Object(m["a"])(ve,oe,me,!1,null,"1b40a97a",null),ue=de.exports,fe={components:{SocText:ue}},pe=fe,be=(a("6fbd"),Object(m["a"])(pe,le,ce,!1,null,"0a9677e1",null)),he=be.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container footcont",attrs:{id:"footer"}},[a("footer",{staticClass:"row"},[a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},[e._v(" ©️ 2021 David Chibueze "),a("br"),a("br")]),a("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"jst"},[a("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"mr-3",attrs:{href:"https://github.com/davydocsurg",target:"_blank",rel:"noopener noreferrer"}},[a("i",{staticClass:"fab fa-github foot"})]),a("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"mr-3",attrs:{href:"https://www.linkedin.com/in/davidchibueze/",target:"_blank",rel:"noopener noreferrer"}},[a("i",{staticClass:"fab fa-linkedin foot"})]),a("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"mr-3",attrs:{href:"https://twitter.com/davydocsurg",target:"_blank",rel:"noopener noreferrer"}},[a("i",{staticClass:"fab fa-twitter foot"})]),a("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"mr-3",attrs:{href:"https://www.facebook.com/david.chibueze.1069",target:"_blank",rel:"noopener noreferrer"}},[a("i",{staticClass:"fab fa-facebook foot"})])])])])},Ce=[],_e=(a("695f"),{}),we=Object(m["a"])(_e,ge,Ce,!1,null,"2a6cf67e",null),Ae=we.exports,xe={components:{Header:d,Home:x,About:j,Proficiency:L,Skills:R,Experience:W,Projects:ne,Socials:he,Footer:Ae}},ke=xe,ye=(a("034f"),Object(m["a"])(ke,r,i,!1,null,null,null)),Se=ye.exports,Ne=a("2f62");s["a"].use(Ne["a"]);var je=new Ne["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Me=(a("5aea"),a("491d"),new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("enter"),Me.unobserve(e.target))}))}))),Ee={bind:function(e){e.classList.add("before-enter"),Me.observe(e)}};a("ab8b");s["a"].config.productionTip=!1,s["a"].directive("scrollAnime",Ee),new s["a"]({store:je,render:function(e){return e(Se)}}).$mount("#app")},"5aea":function(e,t,a){},"66e9":function(e,t,a){},"695f":function(e,t,a){"use strict";var s=a("66e9"),r=a.n(s);r.a},"6fbd":function(e,t,a){"use strict";var s=a("1a3b"),r=a.n(s);r.a},"72fa":function(e,t,a){"use strict";var s=a("0c7a"),r=a.n(s);r.a},"85ec":function(e,t,a){},"897f":function(e,t,a){e.exports=a.p+"img/project6.006ca436.png"},"90d8":function(e,t,a){},"9fce":function(e,t,a){e.exports=a.p+"img/project2.cfc104b2.png"},a1d3:function(e,t,a){},a4ca:function(e,t,a){},aa63:function(e,t,a){},bf5a:function(e,t,a){e.exports=a.p+"img/project3.8fb21162.png"},ccdd:function(e,t,a){e.exports=a.p+"img/project1.ebb584f3.png"},d220:function(e,t,a){},e7f2:function(e,t,a){},eb16:function(e,t,a){},f78c:function(e,t,a){"use strict";var s=a("36e9"),r=a.n(s);r.a},fd10:function(e,t,a){"use strict";var s=a("e7f2"),r=a.n(s);r.a},fdff:function(e,t,a){"use strict";var s=a("90d8"),r=a.n(s);r.a}});
//# sourceMappingURL=app.038bb143.js.map