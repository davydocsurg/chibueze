(function(t){function e(e){for(var a,l,c=e[0],n=e[1],o=e[2],d=0,v=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&v.push(r[l][0]),r[l]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);m&&m(e);while(v.length)v.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,c=1;c<s.length;c++){var n=s[c];0!==r[n]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},r={app:0},i=[];function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/chibueze/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var m=n;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},"0696":function(t,e,s){"use strict";var a=s("aa63"),r=s.n(a);r.a},"11db":function(t,e,s){t.exports=s.p+"img/project4.9fbcdfd7.png"},"1a3b":function(t,e,s){},"1ad6":function(t,e){getCurrentYear=function(){var t=new Date;document.getElementById("currentYear").innerHTML=t.getFullYear()}},"2b36":function(t,e,s){"use strict";var a=s("a1d3"),r=s.n(a);r.a},"32a5":function(t,e,s){},"36e9":function(t,e,s){},"3dbe":function(t,e,s){"use strict";var a=s("32a5"),r=s.n(a);r.a},"3ed1":function(t,e,s){},4225:function(t,e,s){t.exports=s.p+"img/project5.c5025d7a.png"},"461a":function(t,e,s){"use strict";var a=s("5572"),r=s.n(a);r.a},"491d":function(t,e,s){},"51b3":function(t,e,s){},5438:function(t,e,s){"use strict";var a=s("d220"),r=s.n(a);r.a},5572:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("ac1f"),s("5319"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container dark-theme",attrs:{id:"app"}},[s("Home"),s("hr",{staticClass:"bg-success"}),s("About"),s("hr",{staticClass:"bg-success"}),s("Proficiency"),s("hr",{staticClass:"bg-success"}),s("Skills"),s("hr",{staticClass:"bg-success"}),s("Experience"),s("hr",{staticClass:"bg-success"}),s("Projects"),s("hr",{staticClass:"bg-success"}),s("Socials"),s("hr",{staticClass:"bg-success"}),s("Footer")],1)},i=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",[t._v(" dfhefhi "),s("div",{on:{toggle:t.toggleMenu}},[t._m(0)]),t._m(1)])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu-btn"},[s("div",{staticClass:"nav-line"}),s("div",{staticClass:"nav-line"}),s("div",{staticClass:"nav-line"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"menu"},[s("div",{staticClass:"menu-branding"},[s("div",{staticClass:"portrait"})]),s("ul",{staticClass:"menu-nav"},[s("li",{staticClass:"nav-item current"},[s("a",{staticClass:"nav-link",attrs:{href:"index.html"}},[t._v(" Home ")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"about.html"}},[t._v(" About Me ")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"work.html"}},[t._v(" My Work ")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"contact.html"}},[t._v(" How To Reach Me ")])])])])}],n=(s("4160"),s("159b"),{methods:{toggleMenu:function(){this.showMenu=this.hideMenu},showMenu:function(){var t=document.querySelector(".menu-btn"),e=document.querySelector(".menu"),s=document.querySelector(".menu-nav"),a=document.querySelector(".menu-branding"),r=document.querySelectorAll(".nav-item");t.classList.add("close"),e.classList.add("show"),s.classList.add("show"),a.classList.add("show"),r.forEach((function(t){return t.classList.add("show")}))},hideMenu:function(){var t=document.querySelector(".menu-btn"),e=document.querySelector(".menu"),s=document.querySelector(".menu-nav"),a=document.querySelector(".menu-branding"),r=document.querySelectorAll(".nav-item");t.classList.remove("close"),e.classList.remove("show"),s.classList.remove("show"),a.classList.remove("show"),r.forEach((function(t){return t.classList.remove("show")}))}}}),o=n,m=s("2877"),d=Object(m["a"])(o,l,c,!1,null,null,null),v=d.exports,u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container home-mt",attrs:{id:"home"}},[s("div",{staticClass:"row jst-space"},[s("div",{staticClass:"col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pics container"},[s("Profile"),s("br")],1),s("div",{staticClass:"col-md-6 col-sm-12 col-xs-12"},[s("h1",{},[s("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"smaller"},[t._v("David")]),s("span",{staticClass:"large text-success"},[s("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[t._v("Chibueze")])])]),s("b",{},[s("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[t._v(" Software Developer "),s("i",{staticClass:"fas fa-laptop-code"})])]),s("div",{staticClass:"mt-4"},[s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card bg-card shadow-sm p-3"},[t._m(0)])])])])])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row jst-space"},[s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"mr-4"},[s("i",{staticClass:"fas fa-map-marker-alt"}),s("span",{staticClass:"ml-1"},[t._v("Location")]),s("br"),s("b",[t._v("Abia, Nigeria")])]),s("hr",{staticClass:"only-sm"}),s("div",{staticClass:"mr-4"},[s("i",{staticClass:"fas fa-phone"}),s("span",{staticClass:"ml-1"},[t._v("Phone")]),s("br"),s("b",[t._v("+234 901 358 2063")])]),s("hr",{staticClass:"only-sm"}),s("div",{},[s("i",{staticClass:"far fa-envelope"}),s("span",{staticClass:"ml-1"},[t._v("Mail")]),s("br"),s("a",{staticClass:"mail-to",attrs:{href:"mailto:davydocsurg@gmail.com"}},[s("b",[t._v("davydocsurg@gmail.com")])])])])])}],b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"profile-pics "})},p=[],h=(s("3dbe"),{}),C=Object(m["a"])(h,b,p,!1,null,"61ab5dd2",null),g=C.exports,_={components:{Profile:g}},x=_,w=(s("8041"),Object(m["a"])(x,u,f,!1,null,"4fdb42f5",null)),A=w.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container jst-abt p-4 mt-4",attrs:{id:"about"}},[s("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},[s("h1",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"text-bold"},[t._v(" About "),s("span",{staticClass:"text-success"},[t._v("Me")])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card bg-card col-md-12 col-lg-4 shadow-sm"},[s("span",{staticClass:"p-1"},[t._v("A few things about me...")])]),s("br"),s("br"),s("div",{staticClass:"col-lg-8 col-md-12 col-sm-12 col-xs-12"},[s("p",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"lh-lg"},[t._v(" I'm a back/front-end web developer, database developer and an enthusiastic entrepreneur with years of experience in the tech industry. I'm based in Nigeria and self-tutored for most of my knowledge. Having a strong belief in being 100% efficient, I devote my best to every laid down goals. ")])])])])},y=[],S=(s("461a"),{}),N=Object(m["a"])(S,k,y,!1,null,"f1542b58",null),j=N.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container jst-prof p-4 mt-4",attrs:{id:"proficiency"}},[s("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},[s("h1",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"text-bold"},[t._v(" Profi"),s("br",{staticClass:"break"}),s("span",{staticClass:"text-success"},[t._v("ciency")])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card bg-card col-md-12 col-lg-4 shadow-sm"},[s("span",{staticClass:"p-1"},[t._v("My areas of proficiency")])]),s("div",{staticClass:"col-lg-8 col-md-12 col-sm-12 col-xs-12 mt-4"},[s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[s("h5",{staticClass:"text-success"},[t._v("Front-end Design")]),s("p",{staticClass:"lh-lg"},[t._v(" I design responsive and stunning webpages/SPAs using various UI frameworks and libraries such as Bootstrap, Tailwind CSS, and VueJS/VuetifyJS. ")])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[s("h5",{staticClass:"text-success"},[t._v("Back-end Development")]),s("p",{staticClass:"lh-lg"},[t._v(" I develop highly extensible web applications with fast, solid, and secure APIs. My stack includes PHP and Laravel. ")])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[s("h5",{staticClass:"text-success"},[t._v("Database Development")]),s("p",{staticClass:"lh-lg font-monospace"},[t._v(" I design uniformed relational data models aptly accomplished with MySQL/SQL. ")])])])])])},$=[],M=(s("f78c"),{}),L=Object(m["a"])(M,E,$,!1,null,"0fb8d76e",null),O=L.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container jst-skl b-4 mt-4",attrs:{id:"skills"}},[s("SkillText",{staticClass:"text-cente"}),s("div",{staticClass:"row "},[s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"col-lg-3 col-md-4 col-sm-6 text-cente mt-4"},[s("i",{staticClass:"fab fa-html5 text-danger skill-icons"}),s("br"),t._v(" HTML5 ")]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"col-lg-3 col-md-4 col-sm-6 text-cente mt-4"},[s("i",{staticClass:"fab fa-css3-alt text-primary skill-icons"}),s("br"),t._v(" CSS 3 ")]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"col-lg-3 col-md-4 col-sm-6 text-cente mt-4"},[s("i",{staticClass:"fab fa-js-square text-warning skill-icons"}),s("br"),t._v(" JavaScript ")]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"col-lg-3 col-md-4 col-sm-6 text-cente mt-4"},[s("i",{staticClass:"fab fa-php text-info skill-icons"}),s("br")]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"col-lg-3 col-md-4 col-sm-6 text-cente mt-4"},[s("i",{staticClass:"fab fa-bootstrap text-indigo skill-icons"}),s("br"),t._v(" BOOTSTRAP ")]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"col-lg-3 col-md-4 col-sm-6 text-cente mt-4"},[s("i",{staticClass:"fab fa-sass text-danger skill-icons"}),s("br"),t._v(" SCSS ")]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"col-lg-3 col-md-4 col-sm-6 text-cente mt-4"},[s("b",{staticClass:" text-info",staticStyle:{"font-size":"2rem !important"}},[t._v("TailwindCSS")]),s("br")]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"col-lg-3 col-md-4 col-sm-6 text-cente mt-4"},[s("i",{staticClass:"fab fa-vuejs text-success skill-icons"}),s("br"),t._v(" VUEJS ")]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"col-lg-3 col-md-4 col-sm-6 text-cente mt-4"},[s("i",{staticClass:"fab fa-laravel text-danger skill-icons"}),s("br"),t._v(" Laravel ")]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"col-lg-3 col-md-4 col-sm-6 text-cente mt-4"},[s("b",{staticClass:" text-warning ",staticStyle:{"font-size":"2rem !important"}},[t._v("SQL/MySQL")]),s("br")])])],1)},P=[],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"text-bold"},[t._v(" My "),s("span",{staticClass:"text-success"},[t._v("Skills")])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card bg-card col-md-12 col-lg-8 shadow-sm"},[s("span",{staticClass:"p-1"},[t._v(" Skills I've acquired so far. ")])])])},z=[],D=(s("bbd4"),{}),q=Object(m["a"])(D,I,z,!1,null,"6e8b9372",null),V=q.exports,R={components:{SkillText:V},data:function(){return{progress_data:[{id:1,name:"HTML 5",width:"97",val:"97",level:97},{id:2,name:"CSS 3",width:"90",val:"90",level:90},{id:3,name:"Bootstrap 5",width:"87",val:"87",level:87},{id:4,name:"Tailwind CSS",width:"75",val:"75",level:75},{id:5,name:"JavaScript",width:"91",val:"91",level:91},{id:6,name:"PHP",width:"82",val:"82",level:82},{id:7,name:"VueJS/VuetifyJS",width:"89",val:"89",level:89},{id:8,name:"Laravel 7",width:"77",val:"77",level:77},{id:9,name:"SQL/MYSQL",width:"70",val:"70",level:70}]}},methods:{}},H=R,Q=(s("d644"),Object(m["a"])(H,T,P,!1,null,"689a646b",null)),B=Q.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container jst-prof",attrs:{id:"experience"}},[s("div",{staticClass:"mb-5"},[s("h1",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"text-bold"},[t._v(" Exper"),s("span",{staticClass:"text-success"},[t._v("ience")])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card bg-card col-md-12 col-lg-4 shadow-sm jst-pro"},[s("span",{staticClass:"p-1 jst-prof"},[t._v("My experience so far.")])])]),s("ul",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"timeline"},[t._m(0),t._m(1)])])},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("div",{staticClass:"container row"},[s("div",{staticClass:"col-lg-4"},[s("small",{},[t._v("April 2020 - present")]),s("h5",{staticClass:"text-success",attrs:{href:""}},[t._v("Freelance Software Developer")]),s("small",{staticClass:"text-muted"},[t._v("Remote - Freelancer")]),s("br"),s("br")]),s("div",{staticClass:"col-lg-8"},[s("p",{staticClass:"lh-lg"},[t._v(" I currently work as a Freelance Software Developer. I work with teams of high skilled developers. I develop backend and database infrastructures and devise front-end components on both new and existing methods. ")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("div",{staticClass:"container row"},[s("div",{staticClass:"col-lg-4"},[s("small",{},[t._v("February, 2020 - April 2020")]),s("h5",{staticClass:"text-success",attrs:{href:""}},[t._v("Innovation Growth Hub")]),s("small",{staticClass:"text-success"},[t._v("Backend Developer - Intern")]),s("br"),s("small",{staticClass:"text-muted"},[t._v("Abia, Nigeria.")]),s("br"),s("br")]),s("div",{staticClass:"col-lg-8"},[s("p",{staticClass:"lh-lg"},[t._v(" I worked in a team of high skilled developers, developed efficient solutions, and built first class software. ")])])])])}],Y=(s("0696"),{}),K=Object(m["a"])(Y,F,J,!1,null,"5e5b9e57",null),U=K.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container jst-pro",attrs:{id:"projects"}},[s("ProText",{staticClass:"mb-5"}),s("div",{staticClass:"row"},[s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card col-lg-6 col-md-6 col-sm-12 mt-4 bg-dark-pro"},[t._m(0),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("ONEVENT")]),s("p",{staticClass:"card-text"},[t._v(" Onevent is a creative event agency that is passionate about creating beautiful, unique, and organized experiences for a variety of clients throughout the world. ")]),s("p",{staticClass:"card-text"},[s("small",{staticClass:"text-muted"},[s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-success text-decoration-none text-center",attrs:{href:"https://onevent.com.ng/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Visit Site "),s("i",{staticClass:"fas fa-external-link-alt"})])])])])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card col-lg-6 col-md-6 col-sm-12 mt-4 bg-dark-pro"},[t._m(1),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("TRIBROZ")]),s("p",{staticClass:"card-text"},[t._v(" TRIBROZ is a a team of highly qualified Engineers and Allied Professional from front desk to Field. ")]),t._m(2),s("div",{staticClass:"card-text"},[s("small",{staticClass:"text-muted "},[s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-success text-decoration-none text-center",attrs:{href:"https://tribrozglobal.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Visit Site "),s("i",{staticClass:"fas fa-external-link-alt"})])])])])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card col-lg-6 col-md-6 col-sm-12 mt-4 bg-dark-pro"},[t._m(3),s("div",{staticClass:"card-body"},[t._m(4),t._m(5),t._m(6),s("div",{staticClass:"card-text row"},[s("small",{staticClass:"text-muted float-left"},[s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-dark-pro text-decoration-none",attrs:{href:"https://github.com/davydocsurg/CMS",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-github"},[t._v(" Repository")])])]),s("small",{staticClass:"text-muted float-right"},[s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-success text-decoration-none",attrs:{href:"https://onevent.com.ng/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Visit Site "),s("i",{staticClass:"fas fa-external-link-alt"})])])])])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card col-lg-6 col-md-6 col-sm-12 mt-4 bg-dark-pro"},[t._m(7),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Portfolio Website of David Chibueze")]),s("p",{staticClass:"card-text"},[t._v(" This is the portfolio website of David Chibueze. ")]),t._m(8),s("div",{staticClass:"card-text row"},[s("small",{staticClass:"text-muted float-left"},[s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-dark-pro text-decoration-none",attrs:{href:"https://github.com/davydocsurg/chibueze",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-github"},[t._v(" Repository")])])]),s("small",{staticClass:"text-muted float-right"},[s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-success text-decoration-none",attrs:{href:"https://davydocsurg.github.io/chibueze/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Visit Site "),s("i",{staticClass:"fas fa-external-link-alt"})])])])])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card col-lg-6 col-md-6 col-sm-12 mt-4 bg-dark-pro"},[t._m(9),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Laravel-Vue-Starter")]),s("p",{staticClass:"card-text"},[t._v(" Laravel-Vue-Starter is a content management system with Laravel Rest APIs. ")]),t._m(10),s("div",{staticClass:"card-text row"},[s("small",{staticClass:"text-muted float-left"},[s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-dark-pro text-decoration-none",attrs:{href:"https://github.com/davydocsurg/laravel-multi-purpose",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-github"},[t._v(" Repository")])])]),s("small",{staticClass:"text-muted float-right"},[s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-success text-decoration-none",attrs:{href:"http://laravel-vue-starter.herokuapp.com/users",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Visit Site "),s("i",{staticClass:"fas fa-external-link-alt"})])])])])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card col-lg-6 col-md-6 col-sm-12 mt-4 bg-dark-pro"},[t._m(11),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Ticketlite")]),s("p",{staticClass:"card-text"},[t._v(" Ticketlite is a ticket management system where users can create and manage their tickets. ")]),t._m(12),s("div",{staticClass:"card-text row"},[s("small",{staticClass:"text-muted float-left"},[s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-dark-pro text-decoration-none",attrs:{href:"https://github.com/davydocsurg/Support-Ticket-System-with-Laravel-6-",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-github"},[t._v(" Repository")])])]),s("small",{staticClass:"text-muted float-right"},[s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-success text-decoration-none",attrs:{href:"http://ticketliteapp.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Visit Site "),s("i",{staticClass:"fas fa-external-link-alt"})])])])])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card col-lg-6 col-md-6 col-sm-12 mt-4 bg-dark-pro"},[t._m(13),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Kreeper")]),s("p",{staticClass:"card-text"},[t._v(" Kreeper is a realtime chat application ")]),t._m(14),s("div",{staticClass:"card-text row"},[s("small",{staticClass:"text-muted float-left"},[s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"btn-dark bg-dark-pro text-decoration-none",attrs:{href:"https://github.com/davydocsurg/kreeper",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-github"},[t._v(" Repository")])])])])])])])],1)},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-img-top"},[a("a",{attrs:{href:"https://onevent.com.ng/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("ccdd"),alt:"Onevent"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-img-top"},[a("a",{attrs:{href:"https://tribrozglobal.com/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("83b6"),alt:"CMS"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"card-text"},[t._v(" Technologies used: "),s("br"),t._v(" Front-End "),s("i",{staticClass:"fas fa-long-arrow-alt-right"}),s("i",{staticClass:"fab fa-vuejs text-success"}),t._v(", "),s("i",{staticClass:"fab fa-bootstrap text-indigo"}),s("br"),t._v(" Back-End "),s("i",{staticClass:"fas fa-long-arrow-alt-right"}),s("i",{staticClass:"fab fa-laravel text-danger"}),t._v(", "),s("b",{staticClass:"text-warning"},[t._v("MySQL")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-img-top"},[a("a",{attrs:{href:"http://frozen-temple-94354.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("9fce"),alt:"CMS"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",{staticClass:"card-title"},[t._v("CMS "),s("sup",[t._v("-")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"card-text"},[t._v(" CMS "),s("sup",[t._v("-")]),t._v(" is a blog site with a Content Management System ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"card-text"},[t._v(" Technologies used: "),s("i",{staticClass:"fab fa-bootstrap text-indigo"}),t._v(", "),s("i",{staticClass:"fab fa-js-square text-warning"}),t._v(", "),s("i",{staticClass:"fab fa-laravel text-danger"}),t._v(", "),s("b",{staticClass:"text-warning"},[t._v("MySQL")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-img-top"},[a("a",{attrs:{href:"https://davydocsurg.github.io/chibueze/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("bf5a"),alt:"David Chibueze | Software Developer"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"card-text"},[t._v(" Technologies used: "),s("i",{staticClass:"fab fa-bootstrap text-indigo"}),t._v(", "),s("i",{staticClass:"fab fa-vuejs text-success"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-img-top"},[a("a",{attrs:{href:"http://laravel-vue-starter.herokuapp.com/users",target:"_blank",rel:"noopener noreferrer"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("11db"),alt:"Laravel-Vue-Starter"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"card-text"},[t._v(" Technologies used: "),s("i",{staticClass:"fab fa-bootstrap text-indigo"}),t._v(", "),s("i",{staticClass:"fab fa-vuejs text-success"}),t._v(", "),s("i",{staticClass:"fab fa-laravel text-danger"}),t._v(", "),s("b",{staticClass:"text-warning"},[t._v("MySQL")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-img-top"},[a("a",{attrs:{href:"http://ticketliteapp.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("4225"),alt:"Ticketlite"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"card-text"},[t._v(" Technologies used: "),s("i",{staticClass:"fab fa-bootstrap text-indigo"}),t._v(", "),s("i",{staticClass:"fab fa-laravel text-danger"}),t._v(", "),s("b",{staticClass:"text-warning"},[t._v("MySQL")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-img-top"},[a("a",{attrs:{href:"https://github.com/davydocsurg/kreeper",target:"_blank",rel:"noopener noreferrer"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("897f"),alt:"Ticketlite"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"card-text"},[t._v(" Technologies used: "),s("i",{staticClass:"fab fa-bootstrap text-indigo"}),t._v(", "),s("i",{staticClass:"fab fa-vuejs text-success"}),t._v(", "),s("i",{staticClass:"fab fa-laravel text-danger"}),t._v(", "),s("b",{staticClass:"text-warning"},[t._v("MySQL")])])}],G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"text-bold"},[t._v(" Port"),s("span",{staticClass:"text-success"},[t._v("folio")])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"card bg-card col-md-12 col-lg-8 shadow-sm"},[s("span",{staticClass:"p-1"},[t._v("Some projects I've built/contributed to ")])])])},X=[],tt=(s("2b36"),{}),et=Object(m["a"])(tt,G,X,!1,null,"6e288ca2",null),st=et.exports,at={components:{ProText:st},data:function(){return{}}},rt=at,it=(s("6a5b"),Object(m["a"])(rt,W,Z,!1,null,"f8a47e4a",null)),lt=it.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container jst-soc",attrs:{id:"contacts"}},[s("SocText"),s("div",{staticClass:"boxes"},[s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[t._m(0),s("a",{attrs:{href:"https://github.com/davydocsurg",target:"_blank",rel:"noopener noreferrer"}},[t._v("@davydocsurg")])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[t._m(1),s("a",{attrs:{href:"https://twitter.com/davydocsurg",target:"_blank",rel:"noopener noreferrer"}},[t._v("@davydocsurg")])]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}]},[t._m(2),s("a",{attrs:{href:"https://www.linkedin.com/in/davidchibueze/",target:"_blank",rel:"noopener noreferrer"}},[t._v("David Chibueze")])])])],1)},nt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text"},[s("i",{staticClass:"fab fa-github"}),t._v(" : ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text"},[s("i",{staticClass:"fab fa-twitter"}),t._v(" : ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text"},[s("i",{staticClass:"fab fa-linkedin"}),t._v(" : ")])}],ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"text-bold"},[t._v(" Prof"),s("span",{staticClass:"text-success"},[t._v("iles")])])])},mt=[],dt=(s("5438"),{}),vt=Object(m["a"])(dt,ot,mt,!1,null,"1b40a97a",null),ut=vt.exports,ft={components:{SocText:ut}},bt=ft,pt=(s("6fbd"),Object(m["a"])(bt,ct,nt,!1,null,"0a9677e1",null)),ht=pt.exports,Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container footcont",attrs:{id:"footer"}},[s("footer",{staticClass:"row"},[s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},[t._v(" ©️ "),s("b",{attrs:{id:"currentYear"}}),t._v(" David Chibueze "),s("br"),s("br")]),s("div",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"jst"},[s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"mr-3",attrs:{href:"https://github.com/davydocsurg",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-github foot"})]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"mr-3",attrs:{href:"https://www.linkedin.com/in/davidchibueze/",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-linkedin foot"})]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"mr-3",attrs:{href:"https://twitter.com/davydocsurg",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-twitter foot"})]),s("a",{directives:[{name:"scrollAnime",rawName:"v-scrollAnime"}],staticClass:"mr-3",attrs:{href:"https://www.facebook.com/david.chibueze.1069",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fab fa-facebook foot"})])])])])},gt=[],_t=(s("1ad6"),{data:function(){return{date_:""}},mounted:function(){getCurrentYear()},methods:{}}),xt=_t,wt=(s("e1d5"),Object(m["a"])(xt,Ct,gt,!1,null,"85f14c4a",null)),At=wt.exports,kt={components:{Header:v,Home:A,About:j,Proficiency:O,Skills:B,Experience:U,Projects:lt,Socials:ht,Footer:At}},yt=kt,St=(s("034f"),Object(m["a"])(yt,r,i,!1,null,null,null)),Nt=St.exports,jt=s("2f62");a["a"].use(jt["a"]);var Et=new jt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),$t=(s("5aea"),s("491d"),new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("enter"),$t.unobserve(t.target))}))}))),Mt={bind:function(t){t.classList.add("before-enter"),$t.observe(t)}};s("ab8b");a["a"].config.productionTip=!1,a["a"].directive("scrollAnime",Mt),document.getElementById("app").onload(window.location.replace("https://davydocsurg.github.io")),new a["a"]({store:Et,render:function(t){return t(Nt)}}).$mount("#app")},"5aea":function(t,e,s){},"6a5b":function(t,e,s){"use strict";var a=s("3ed1"),r=s.n(a);r.a},"6fbd":function(t,e,s){"use strict";var a=s("1a3b"),r=s.n(a);r.a},"7eae":function(t,e,s){},8041:function(t,e,s){"use strict";var a=s("9d77"),r=s.n(a);r.a},"83b6":function(t,e,s){t.exports=s.p+"img/project7x.407355f9.png"},"85ec":function(t,e,s){},"897f":function(t,e,s){t.exports=s.p+"img/project6.006ca436.png"},"9d77":function(t,e,s){},"9fce":function(t,e,s){t.exports=s.p+"img/project2.cfc104b2.png"},a1d3:function(t,e,s){},aa63:function(t,e,s){},bbd4:function(t,e,s){"use strict";var a=s("d3a0"),r=s.n(a);r.a},bf5a:function(t,e,s){t.exports=s.p+"img/project3.8fb21162.png"},ccdd:function(t,e,s){t.exports=s.p+"img/project1.ebb584f3.png"},d220:function(t,e,s){},d3a0:function(t,e,s){},d644:function(t,e,s){"use strict";var a=s("51b3"),r=s.n(a);r.a},e1d5:function(t,e,s){"use strict";var a=s("7eae"),r=s.n(a);r.a},f78c:function(t,e,s){"use strict";var a=s("36e9"),r=s.n(a);r.a}});
//# sourceMappingURL=app.8dbda0a8.js.map