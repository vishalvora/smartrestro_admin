(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{qU3R:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var t=u("pMnS"),o=u("MKJQ"),a=u("sZkV"),r=u("s7LF"),s=u("SVse"),b=u("mrSG"),d=u("ZJFI"),g=u("PiCc"),c=u("fCWQ"),h=u("trGy"),p=u("ONW5");class m{constructor(l,n,u,e){this.dbService=l,this.googleService=n,this.modalController=u,this.authService=e,this.storeDetail={},this.isLocation=!1}ngOnInit(){this.slides.lockSwipes(!0),this.googleService.getStoreAddress().subscribe(l=>{console.log(l),Object.keys(l).length>0&&(this.storeDetail.address=l,this.storeDetail.lat=l.geometry.location.lat(),this.storeDetail.lng=l.geometry.location.lng(),parseFloat(this.storeDetail.lat)<90&&parseFloat(this.storeDetail.lat)>-90&&parseFloat(this.storeDetail.lng)<180&&parseFloat(this.storeDetail.lng)>-180?this.isLocation=!0:(this.isLocation=!1,alert("incorrect location, try again!!")),console.log(this.storeDetail))})}swipeNext(){this.slides.lockSwipes(!1),this.slides.slideNext(),this.slides.lockSwipes(!0)}addStore(l){console.log(l),this.dbService.addStore(l)}presentModalLocation(){return b.__awaiter(this,void 0,void 0,(function*(){const l=yield this.modalController.create({component:c.a});return yield l.present()}))}catChange(l){}copyNo(){this.storeDetail.phone_whatsapp=this.storeDetail.phone}close(){console.log("close"),this.authService.logout()}setRadius(){return b.__awaiter(this,void 0,void 0,(function*(){const l=yield this.modalController.create({component:p.a,componentProps:{lat:this.storeDetail.lat,lng:this.storeDetail.lng,radius:1}});return l.onDidDismiss().then(l=>{console.log(l),l.data.radius>0&&(this.storeDetail.serving_radius=l.data.radius)}),yield l.present()}))}}var D=e.pb({encapsulation:0,styles:[["ion-slides[_ngcontent-%COMP%]{height:100%}.swiper-slide[_ngcontent-%COMP%]{display:block}.swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:1.8rem}.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50%;max-width:80%;margin:30px 0 40px;pointer-events:none}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600,#60646b)}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color,#000)}"]],data:{}});function v(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.swipeNext()&&e),e}),o.N,o.d)),e.qb(1,49152,null,0,a.l,[e.h,e.k,e.x],{disabled:[0,"disabled"],fill:[1,"fill"]},null),(l()(),e.Jb(-1,0,["Next"]))],(function(l,n){l(n,1,0,!(n.component.storeDetail.serving_radius>0),"clear")}),null)}function q(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.swipeNext()&&e),e}),o.N,o.d)),e.qb(1,49152,null,0,a.l,[e.h,e.k,e.x],{disabled:[0,"disabled"],fill:[1,"fill"]},null),(l()(),e.Jb(-1,0,["set your store location"]))],(function(l,n){l(n,1,0,!0,"clear")}),null)}function C(l){return e.Kb(0,[e.Hb(402653184,1,{slides:0}),(l()(),e.rb(1,0,null,null,8,"ion-header",[],null,null,null,o.S,o.i)),e.qb(2,49152,null,0,a.C,[e.h,e.k,e.x],null,null),(l()(),e.rb(3,0,null,0,6,"ion-toolbar",[],null,null,null,o.tb,o.J)),e.qb(4,49152,null,0,a.Ab,[e.h,e.k,e.x],null,null),(l()(),e.rb(5,0,null,0,2,"ion-title",[],null,null,null,o.rb,o.H)),e.qb(6,49152,null,0,a.yb,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Store configuration"])),(l()(),e.rb(8,0,null,0,1,"ion-icon",[["name","close-outline"],["size","large"],["slot","end"],["style","padding-right: 15px"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.close()&&e),e}),o.T,o.j)),e.qb(9,49152,null,0,a.D,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),e.rb(10,0,null,null,203,"ion-content",[["scroll-y","false"]],null,null,null,o.R,o.h)),e.qb(11,49152,null,0,a.v,[e.h,e.k,e.x],null,null),(l()(),e.rb(12,0,null,0,201,"ion-slides",[],null,null,null,o.kb,o.A)),e.qb(13,49152,[[1,4],["mySlider",4]],0,a.pb,[e.h,e.k,e.x],null,null),(l()(),e.rb(14,0,null,0,29,"ion-slide",[],null,null,null,o.jb,o.z)),e.qb(15,49152,null,0,a.ob,[e.h,e.k,e.x],null,null),(l()(),e.rb(16,0,null,0,24,"div",[["class","slide"]],null,null,null,null,null)),(l()(),e.rb(17,0,null,null,0,"img",[["src","../../../assets/agarey_grocerydribbble.png"]],null,null,null,null,null)),(l()(),e.rb(18,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Welcome to SNVMART"])),(l()(),e.rb(20,0,null,null,18,"form",[["action",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==e.Db(l,22).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Db(l,22).onReset()&&i),i}),null,null)),e.qb(21,16384,null,0,r.q,[],null,null),e.qb(22,4210688,[["nameForm",4]],0,r.k,[[8,null],[8,null]],null,null),e.Gb(2048,null,r.a,null,[r.k]),e.qb(24,16384,null,0,r.j,[[4,r.a]],null,null),(l()(),e.rb(25,0,null,null,13,"ion-item",[],null,null,null,o.X,o.n)),e.qb(26,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(27,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.Y,o.o)),e.qb(28,49152,null,0,a.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Enter Your business name"])),(l()(),e.rb(30,0,null,0,8,"ion-input",[["id","ngModel"],["name","name"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,33)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,33)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.storeDetail.name=u)&&i),i}),o.W,o.m)),e.qb(31,16384,null,0,r.n,[],{required:[0,"required"]},null),e.Gb(1024,null,r.f,(function(l){return[l]}),[r.n]),e.qb(33,16384,null,0,a.Nb,[e.k],null,null),e.Gb(1024,null,r.g,(function(l){return[l]}),[a.Nb]),e.qb(35,671744,null,0,r.l,[[2,r.a],[6,r.f],[8,null],[6,r.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,r.h,null,[r.l]),e.qb(37,16384,null,0,r.i,[[4,r.h]],null,null),e.qb(38,49152,null,0,a.H,[e.h,e.k,e.x],{name:[0,"name"],required:[1,"required"]},null),(l()(),e.rb(39,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Your business name will appear in store list of the customer app. A easy to remember and uniq business name will increase your brand value."])),(l()(),e.rb(41,0,null,0,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.swipeNext()&&e),e}),o.N,o.d)),e.qb(42,49152,null,0,a.l,[e.h,e.k,e.x],{disabled:[0,"disabled"],fill:[1,"fill"]},null),(l()(),e.Jb(-1,0,["Next"])),(l()(),e.rb(44,0,null,0,44,"ion-slide",[],null,null,null,o.jb,o.z)),e.qb(45,49152,null,0,a.ob,[e.h,e.k,e.x],null,null),(l()(),e.rb(46,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Select type of product you wanted to sell online"])),(l()(),e.rb(48,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["You can select one or more options"])),(l()(),e.rb(50,0,null,0,35,"ion-list",[],null,null,null,o.ab,o.p)),e.qb(51,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(52,0,null,0,33,"ion-item",[],null,null,null,o.X,o.n)),e.qb(53,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(54,0,null,0,2,"ion-label",[],null,null,null,o.Y,o.o)),e.qb(55,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Category"])),(l()(),e.rb(57,0,null,0,28,"ion-select",[["multiple","true"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,58)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,58)._handleChangeEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.storeDetail.store_category=u)&&i),"ionChange"===n&&(i=!1!==t.catChange(u)&&i),i}),o.ib,o.x)),e.qb(58,16384,null,0,a.Mb,[e.k],null,null),e.Gb(1024,null,r.g,(function(l){return[l]}),[a.Mb]),e.qb(60,671744,null,0,r.l,[[8,null],[8,null],[8,null],[6,r.g]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),e.Fb(61,{standalone:0}),e.Gb(2048,null,r.h,null,[r.l]),e.qb(63,16384,null,0,r.i,[[4,r.h]],null,null),e.qb(64,49152,null,0,a.lb,[e.h,e.k,e.x],{multiple:[0,"multiple"]},null),(l()(),e.rb(65,0,null,0,2,"ion-select-option",[["value","Grocery"]],null,null,null,o.hb,o.y)),e.qb(66,49152,null,0,a.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["Grocery"])),(l()(),e.rb(68,0,null,0,2,"ion-select-option",[["value","Vegetables & Fruits"]],null,null,null,o.hb,o.y)),e.qb(69,49152,null,0,a.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["Vegetables & Fruits"])),(l()(),e.rb(71,0,null,0,2,"ion-select-option",[["value","Stationery"]],null,null,null,o.hb,o.y)),e.qb(72,49152,null,0,a.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["Stationery"])),(l()(),e.rb(74,0,null,0,2,"ion-select-option",[["value","Home services"]],null,null,null,o.hb,o.y)),e.qb(75,49152,null,0,a.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["Home services"])),(l()(),e.rb(77,0,null,0,2,"ion-select-option",[["value","Food"]],null,null,null,o.hb,o.y)),e.qb(78,49152,null,0,a.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["Food"])),(l()(),e.rb(80,0,null,0,2,"ion-select-option",[["value","Home Essentials"]],null,null,null,o.hb,o.y)),e.qb(81,49152,null,0,a.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["Home Essentials"])),(l()(),e.rb(83,0,null,0,2,"ion-select-option",[["value","Other"]],null,null,null,o.hb,o.y)),e.qb(84,49152,null,0,a.mb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Jb(-1,0,["Other"])),(l()(),e.rb(86,0,null,0,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.swipeNext()&&e),e}),o.N,o.d)),e.qb(87,49152,null,0,a.l,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Jb(-1,0,["Next"])),(l()(),e.rb(89,0,null,0,41,"ion-slide",[],null,null,null,o.jb,o.z)),e.qb(90,49152,null,0,a.ob,[e.h,e.k,e.x],null,null),(l()(),e.rb(91,0,null,0,4,"div",[["style","padding:20px 50px"]],null,null,null,null,null)),(l()(),e.rb(92,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Store Location:"])),(l()(),e.rb(94,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(95,null,[" ",""])),(l()(),e.rb(96,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.presentModalLocation()&&e),e}),o.N,o.d)),e.qb(97,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["set store location using map"])),(l()(),e.rb(99,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(100,0,null,0,26,"div",[["style","padding:20px 50px"]],null,null,null,null,null)),(l()(),e.rb(101,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Serving Area"])),(l()(),e.rb(103,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Mention a radius around the central location of my Store"])),(l()(),e.rb(105,0,null,null,21,"form",[["action",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==e.Db(l,107).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Db(l,107).onReset()&&i),i}),null,null)),e.qb(106,16384,null,0,r.q,[],null,null),e.qb(107,4210688,[["locationForm",4]],0,r.k,[[8,null],[8,null]],null,null),e.Gb(2048,null,r.a,null,[r.k]),e.qb(109,16384,null,0,r.j,[[4,r.a]],null,null),(l()(),e.rb(110,0,null,null,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.setRadius()&&e),e}),o.N,o.d)),e.qb(111,49152,null,0,a.l,[e.h,e.k,e.x],{disabled:[0,"disabled"]},null),(l()(),e.Jb(-1,0,["set radius on map"])),(l()(),e.rb(113,0,null,null,13,"ion-item",[],null,null,null,o.X,o.n)),e.qb(114,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(115,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.Y,o.o)),e.qb(116,49152,null,0,a.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Serving Radius (KM) *"])),(l()(),e.rb(118,0,null,0,8,"ion-input",[["disabled","true"],["id","ngModel"],["name","servingarea"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,121)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,121)._handleIonChange(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.storeDetail.serving_radius=u)&&i),i}),o.W,o.m)),e.qb(119,16384,null,0,r.n,[],{required:[0,"required"]},null),e.Gb(1024,null,r.f,(function(l){return[l]}),[r.n]),e.qb(121,16384,null,0,a.Ib,[e.k],null,null),e.Gb(1024,null,r.g,(function(l){return[l]}),[a.Ib]),e.qb(123,671744,null,0,r.l,[[2,r.a],[6,r.f],[8,null],[6,r.g]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,r.h,null,[r.l]),e.qb(125,16384,null,0,r.i,[[4,r.h]],null,null),e.qb(126,49152,null,0,a.H,[e.h,e.k,e.x],{disabled:[0,"disabled"],name:[1,"name"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.gb(16777216,null,0,1,null,v)),e.qb(128,16384,null,0,s.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,q)),e.qb(130,16384,null,0,s.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(131,0,null,0,82,"ion-slide",[],null,null,null,o.jb,o.z)),e.qb(132,49152,null,0,a.ob,[e.h,e.k,e.x],null,null),(l()(),e.rb(133,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Additional information"])),(l()(),e.rb(135,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Provide these additional informations about minimu order amount and delivery time. These information will be displayed on main page of customere app"])),(l()(),e.rb(137,0,null,0,72,"div",[["style","padding-top: 50px"]],null,null,null,null,null)),(l()(),e.rb(138,0,null,null,71,"form",[["action",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==e.Db(l,140).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Db(l,140).onReset()&&i),i}),null,null)),e.qb(139,16384,null,0,r.q,[],null,null),e.qb(140,4210688,[["additionForm",4]],0,r.k,[[8,null],[8,null]],null,null),e.Gb(2048,null,r.a,null,[r.k]),e.qb(142,16384,null,0,r.j,[[4,r.a]],null,null),(l()(),e.rb(143,0,null,null,13,"ion-item",[],null,null,null,o.X,o.n)),e.qb(144,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(145,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.Y,o.o)),e.qb(146,49152,null,0,a.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Minimum Order Amount in Ruppe"])),(l()(),e.rb(148,0,null,0,8,"ion-input",[["id","ngModel"],["name","minorder"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,151)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,151)._handleIonChange(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.storeDetail.min_order=u)&&i),i}),o.W,o.m)),e.qb(149,16384,null,0,r.n,[],{required:[0,"required"]},null),e.Gb(1024,null,r.f,(function(l){return[l]}),[r.n]),e.qb(151,16384,null,0,a.Ib,[e.k],null,null),e.Gb(1024,null,r.g,(function(l){return[l]}),[a.Ib]),e.qb(153,671744,null,0,r.l,[[2,r.a],[6,r.f],[8,null],[6,r.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,r.h,null,[r.l]),e.qb(155,16384,null,0,r.i,[[4,r.h]],null,null),e.qb(156,49152,null,0,a.H,[e.h,e.k,e.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.rb(157,0,null,null,13,"ion-item",[],null,null,null,o.X,o.n)),e.qb(158,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(159,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.Y,o.o)),e.qb(160,49152,null,0,a.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Delivery time(in Hr)"])),(l()(),e.rb(162,0,null,0,8,"ion-input",[["id","ngModel"],["name","delivery"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,165)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,165)._handleIonChange(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.storeDetail.delivery_time=u)&&i),i}),o.W,o.m)),e.qb(163,16384,null,0,r.n,[],{required:[0,"required"]},null),e.Gb(1024,null,r.f,(function(l){return[l]}),[r.n]),e.qb(165,16384,null,0,a.Ib,[e.k],null,null),e.Gb(1024,null,r.g,(function(l){return[l]}),[a.Ib]),e.qb(167,671744,null,0,r.l,[[2,r.a],[6,r.f],[8,null],[6,r.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,r.h,null,[r.l]),e.qb(169,16384,null,0,r.i,[[4,r.h]],null,null),e.qb(170,49152,null,0,a.H,[e.h,e.k,e.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.rb(171,0,null,null,16,"ion-item",[],null,null,null,o.X,o.n)),e.qb(172,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(173,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.Y,o.o)),e.qb(174,49152,null,0,a.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Phone No:"])),(l()(),e.rb(176,0,null,0,11,"ion-input",[["id","ngModel"],["inputmode","tel"],["maxlength","10"],["minlength","10"],["name","phone"],["required",""],["type","tel"]],[[1,"required",0],[1,"minlength",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,181)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,181)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.storeDetail.phone=u)&&i),i}),o.W,o.m)),e.qb(177,16384,null,0,r.n,[],{required:[0,"required"]},null),e.qb(178,540672,null,0,r.e,[],{minlength:[0,"minlength"]},null),e.qb(179,540672,null,0,r.d,[],{maxlength:[0,"maxlength"]},null),e.Gb(1024,null,r.f,(function(l,n,u){return[l,n,u]}),[r.n,r.e,r.d]),e.qb(181,16384,null,0,a.Nb,[e.k],null,null),e.Gb(1024,null,r.g,(function(l){return[l]}),[a.Nb]),e.qb(183,671744,null,0,r.l,[[2,r.a],[6,r.f],[8,null],[6,r.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,r.h,null,[r.l]),e.qb(185,16384,null,0,r.i,[[4,r.h]],null,null),e.qb(186,49152,null,0,a.H,[e.h,e.k,e.x],{inputmode:[0,"inputmode"],maxlength:[1,"maxlength"],minlength:[2,"minlength"],name:[3,"name"],required:[4,"required"],type:[5,"type"]},null),(l()(),e.Jb(-1,0,["+91 "])),(l()(),e.rb(188,0,null,null,16,"ion-item",[],null,null,null,o.X,o.n)),e.qb(189,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(190,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.Y,o.o)),e.qb(191,49152,null,0,a.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["whatsapp No:"])),(l()(),e.rb(193,0,null,0,11,"ion-input",[["id","ngModel"],["inputmode","tel"],["maxlength","10"],["minlength","10"],["name","whatsapp"],["required",""],["type","tel"]],[[1,"required",0],[1,"minlength",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,198)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,198)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.storeDetail.phone_whatsapp=u)&&i),i}),o.W,o.m)),e.qb(194,16384,null,0,r.n,[],{required:[0,"required"]},null),e.qb(195,540672,null,0,r.e,[],{minlength:[0,"minlength"]},null),e.qb(196,540672,null,0,r.d,[],{maxlength:[0,"maxlength"]},null),e.Gb(1024,null,r.f,(function(l,n,u){return[l,n,u]}),[r.n,r.e,r.d]),e.qb(198,16384,null,0,a.Nb,[e.k],null,null),e.Gb(1024,null,r.g,(function(l){return[l]}),[a.Nb]),e.qb(200,671744,null,0,r.l,[[2,r.a],[6,r.f],[8,null],[6,r.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,r.h,null,[r.l]),e.qb(202,16384,null,0,r.i,[[4,r.h]],null,null),e.qb(203,49152,null,0,a.H,[e.h,e.k,e.x],{inputmode:[0,"inputmode"],maxlength:[1,"maxlength"],minlength:[2,"minlength"],name:[3,"name"],required:[4,"required"],type:[5,"type"]},null),(l()(),e.Jb(-1,0,["+91 "])),(l()(),e.rb(205,0,null,null,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.copyNo()&&e),e}),o.N,o.d)),e.qb(206,49152,null,0,a.l,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Jb(-1,0,["whats app no same as phone no"])),(l()(),e.rb(208,0,null,null,1,"div",[["style","font-size:13px; color:gray"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Phone number and whats app no will be shared with customers."])),(l()(),e.rb(210,0,null,0,3,"div",[["style","padding-top: 50px;"]],null,null,null,null,null)),(l()(),e.rb(211,0,null,null,2,"ion-button",[["expand","full"]],null,[[null,"click"]],(function(l,n,u){var e=!0,i=l.component;return"click"===n&&(e=!1!==i.addStore(i.storeDetail)&&e),e}),o.N,o.d)),e.qb(212,49152,null,0,a.l,[e.h,e.k,e.x],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),e.Jb(-1,0,["save and create store"]))],(function(l,n){var u=n.component;l(n,9,0,"close-outline","large"),l(n,28,0,"stacked"),l(n,31,0,""),l(n,35,0,"name",u.storeDetail.name),l(n,38,0,"name",""),l(n,42,0,!(e.Db(n,22).dirty&&e.Db(n,22).valid),"clear");var i=u.storeDetail.store_category,t=l(n,61,0,!0);l(n,60,0,i,t),l(n,64,0,"true"),l(n,66,0,"Grocery"),l(n,69,0,"Vegetables & Fruits"),l(n,72,0,"Stationery"),l(n,75,0,"Home services"),l(n,78,0,"Food"),l(n,81,0,"Home Essentials"),l(n,84,0,"Other"),l(n,87,0,"clear"),l(n,111,0,!u.isLocation),l(n,116,0,"stacked"),l(n,119,0,""),l(n,123,0,"servingarea","true",u.storeDetail.serving_radius),l(n,126,0,"true","servingarea","","number"),l(n,128,0,u.isLocation),l(n,130,0,!u.isLocation),l(n,146,0,"stacked"),l(n,149,0,""),l(n,153,0,"minorder",u.storeDetail.min_order),l(n,156,0,"minorder","","number"),l(n,160,0,"stacked"),l(n,163,0,""),l(n,167,0,"delivery",u.storeDetail.delivery_time),l(n,170,0,"delivery","","number"),l(n,174,0,"stacked"),l(n,177,0,""),l(n,178,0,"10"),l(n,179,0,"10"),l(n,183,0,"phone",u.storeDetail.phone),l(n,186,0,"tel","10","10","phone","","tel"),l(n,191,0,"stacked"),l(n,194,0,""),l(n,195,0,"10"),l(n,196,0,"10"),l(n,200,0,"whatsapp",u.storeDetail.phone_whatsapp),l(n,203,0,"tel","10","10","whatsapp","","tel"),l(n,206,0,"clear"),l(n,212,0,!(e.Db(n,140).dirty&&e.Db(n,140).valid),"full")}),(function(l,n){var u=n.component;l(n,20,0,e.Db(n,24).ngClassUntouched,e.Db(n,24).ngClassTouched,e.Db(n,24).ngClassPristine,e.Db(n,24).ngClassDirty,e.Db(n,24).ngClassValid,e.Db(n,24).ngClassInvalid,e.Db(n,24).ngClassPending),l(n,30,0,e.Db(n,31).required?"":null,e.Db(n,37).ngClassUntouched,e.Db(n,37).ngClassTouched,e.Db(n,37).ngClassPristine,e.Db(n,37).ngClassDirty,e.Db(n,37).ngClassValid,e.Db(n,37).ngClassInvalid,e.Db(n,37).ngClassPending),l(n,57,0,e.Db(n,63).ngClassUntouched,e.Db(n,63).ngClassTouched,e.Db(n,63).ngClassPristine,e.Db(n,63).ngClassDirty,e.Db(n,63).ngClassValid,e.Db(n,63).ngClassInvalid,e.Db(n,63).ngClassPending),l(n,95,0,null==u.storeDetail.address?null:u.storeDetail.address.formatted_address),l(n,105,0,e.Db(n,109).ngClassUntouched,e.Db(n,109).ngClassTouched,e.Db(n,109).ngClassPristine,e.Db(n,109).ngClassDirty,e.Db(n,109).ngClassValid,e.Db(n,109).ngClassInvalid,e.Db(n,109).ngClassPending),l(n,118,0,e.Db(n,119).required?"":null,e.Db(n,125).ngClassUntouched,e.Db(n,125).ngClassTouched,e.Db(n,125).ngClassPristine,e.Db(n,125).ngClassDirty,e.Db(n,125).ngClassValid,e.Db(n,125).ngClassInvalid,e.Db(n,125).ngClassPending),l(n,138,0,e.Db(n,142).ngClassUntouched,e.Db(n,142).ngClassTouched,e.Db(n,142).ngClassPristine,e.Db(n,142).ngClassDirty,e.Db(n,142).ngClassValid,e.Db(n,142).ngClassInvalid,e.Db(n,142).ngClassPending),l(n,148,0,e.Db(n,149).required?"":null,e.Db(n,155).ngClassUntouched,e.Db(n,155).ngClassTouched,e.Db(n,155).ngClassPristine,e.Db(n,155).ngClassDirty,e.Db(n,155).ngClassValid,e.Db(n,155).ngClassInvalid,e.Db(n,155).ngClassPending),l(n,162,0,e.Db(n,163).required?"":null,e.Db(n,169).ngClassUntouched,e.Db(n,169).ngClassTouched,e.Db(n,169).ngClassPristine,e.Db(n,169).ngClassDirty,e.Db(n,169).ngClassValid,e.Db(n,169).ngClassInvalid,e.Db(n,169).ngClassPending),l(n,176,0,e.Db(n,177).required?"":null,e.Db(n,178).minlength?e.Db(n,178).minlength:null,e.Db(n,179).maxlength?e.Db(n,179).maxlength:null,e.Db(n,185).ngClassUntouched,e.Db(n,185).ngClassTouched,e.Db(n,185).ngClassPristine,e.Db(n,185).ngClassDirty,e.Db(n,185).ngClassValid,e.Db(n,185).ngClassInvalid,e.Db(n,185).ngClassPending),l(n,193,0,e.Db(n,194).required?"":null,e.Db(n,195).minlength?e.Db(n,195).minlength:null,e.Db(n,196).maxlength?e.Db(n,196).maxlength:null,e.Db(n,202).ngClassUntouched,e.Db(n,202).ngClassTouched,e.Db(n,202).ngClassPristine,e.Db(n,202).ngClassDirty,e.Db(n,202).ngClassValid,e.Db(n,202).ngClassInvalid,e.Db(n,202).ngClassPending)}))}function k(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-slides",[],null,null,null,C,D)),e.qb(1,114688,null,0,m,[d.a,g.a,a.Fb,h.a],null,null)],(function(l,n){l(n,1,0)}),null)}var f=e.nb("app-slides",m,k,{},{},[]),y=u("iInd");class x{}u.d(n,"SlidesPageModuleNgFactory",(function(){return M}));var M=e.ob(i,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[t.a,f]],[3,e.j],e.v]),e.Bb(4608,s.k,s.j,[e.s,[2,s.q]]),e.Bb(4608,r.p,r.p,[]),e.Bb(4608,a.c,a.c,[e.x,e.g]),e.Bb(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.Bb(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.Bb(1073742336,s.b,s.b,[]),e.Bb(1073742336,r.o,r.o,[]),e.Bb(1073742336,r.c,r.c,[]),e.Bb(1073742336,a.Cb,a.Cb,[]),e.Bb(1073742336,y.o,y.o,[[2,y.t],[2,y.m]]),e.Bb(1073742336,x,x,[]),e.Bb(1073742336,i,i,[]),e.Bb(1024,y.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);