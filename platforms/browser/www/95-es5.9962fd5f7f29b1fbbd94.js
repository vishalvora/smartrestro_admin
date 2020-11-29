function _defineProperties(n,l){for(var e=0;e<l.length;e++){var u=l[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{hqSE:function(n,l,e){"use strict";e.r(l);var u=e("8Y7J"),t=function n(){_classCallCheck(this,n)},o=e("pMnS"),a=e("MKJQ"),i=e("sZkV"),r=e("SVse"),s=e("s7LF"),c=e("mrSG"),b=e("ZJFI"),d=function(){function n(l,e,u,t){_classCallCheck(this,n),this.dbService=l,this.ngZone=e,this.db=u,this.toastController=t,this.announcement={isAnnouncement:!1,announcement:""}}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.dbService.getStore().subscribe((function(l){console.log(l),n.storeId=l.store_id,n.store=l,n.ngZone.run((function(){l.hasOwnProperty("isAnnouncement")&&(n.announcement.isAnnouncement=l.isAnnouncement)})),l.hasOwnProperty("announcement")&&(n.announcement.announcement=l.announcement)}))}},{key:"save",value:function(){var n=this;console.log(this.announcement),""!=this.storeId&&this.db.collection("store_seller").doc(this.storeId).update({"d.announcement":this.announcement.announcement,"d.isAnnouncement":this.announcement.isAnnouncement}).then((function(l){console.log("document saved successfully!"),n.dataSaving=!1,n.presentToast("Announcement saved!!")})).catch((function(l){console.log("doucmnt not saved! err"),n.dataSaving=!1}))}},{key:"presentToast",value:function(n){return c.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.toastController.create({message:n,duration:2e3});case 2:l.sent.present();case 3:case"end":return l.stop()}}),l,this)})))}}]),n}(),g=e("wD+u"),h=u.pb({encapsulation:0,styles:[[""]],data:{}});function p(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"ion-progress-bar",[["type","indeterminate"]],null,null,null,a.bb,a.r)),u.qb(1,49152,null,0,i.X,[u.h,u.k,u.x],{type:[0,"type"]},null)],(function(n,l){n(l,1,0,"indeterminate")}),null)}function m(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,16,"ion-header",[],null,null,null,a.S,a.i)),u.qb(1,49152,null,0,i.C,[u.h,u.k,u.x],null,null),(n()(),u.rb(2,0,null,0,14,"ion-toolbar",[],null,null,null,a.tb,a.J)),u.qb(3,49152,null,0,i.Ab,[u.h,u.k,u.x],null,null),(n()(),u.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.O,a.e)),u.qb(5,49152,null,0,i.m,[u.h,u.k,u.x],null,null),(n()(),u.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.Db(n,8).onClick(e)&&t),t}),a.L,a.b)),u.qb(7,49152,null,0,i.h,[u.h,u.k,u.x],null,null),u.qb(8,16384,null,0,i.i,[[2,i.gb],i.Gb],null,null),(n()(),u.rb(9,0,null,0,2,"ion-title",[],null,null,null,a.rb,a.H)),u.qb(10,49152,null,0,i.yb,[u.h,u.k,u.x],null,null),(n()(),u.Jb(-1,0,["Announcement"])),(n()(),u.rb(12,0,null,0,2,"ion-button",[["fill","clear"],["slot","end"]],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.save()&&u),u}),a.N,a.d)),u.qb(13,49152,null,0,i.l,[u.h,u.k,u.x],{fill:[0,"fill"]},null),(n()(),u.Jb(-1,0,["save"])),(n()(),u.gb(16777216,null,0,1,null,p)),u.qb(16,16384,null,0,r.i,[u.O,u.K],{ngIf:[0,"ngIf"]},null),(n()(),u.rb(17,0,null,null,22,"ion-content",[],null,null,null,a.R,a.h)),u.qb(18,49152,null,0,i.v,[u.h,u.k,u.x],null,null),(n()(),u.rb(19,0,null,0,11,"ion-item",[],null,null,null,a.X,a.n)),u.qb(20,49152,null,0,i.I,[u.h,u.k,u.x],null,null),(n()(),u.rb(21,0,null,0,2,"ion-label",[],null,null,null,a.Y,a.o)),u.qb(22,49152,null,0,i.O,[u.h,u.k,u.x],null,null),(n()(),u.Jb(-1,0,["Announcement"])),(n()(),u.rb(24,0,null,0,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u.Db(n,25)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Db(n,25)._handleIonChange(e.target)&&t),"ngModelChange"===l&&(t=!1!==(o.announcement.isAnnouncement=e)&&t),t}),a.sb,a.I)),u.qb(25,16384,null,0,i.d,[u.k],null,null),u.Gb(1024,null,s.g,(function(n){return[n]}),[i.d]),u.qb(27,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.h,null,[s.l]),u.qb(29,16384,null,0,s.i,[[4,s.h]],null,null),u.qb(30,49152,null,0,i.zb,[u.h,u.k,u.x],null,null),(n()(),u.rb(31,0,null,0,8,"ion-item",[["lines","none"],["style","padding-top:25px"]],null,null,null,a.X,a.n)),u.qb(32,49152,null,0,i.I,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(n()(),u.rb(33,0,null,0,6,"ion-textarea",[["auto-grow","true"],["placeholder","Add text here..."],["style"," --background: white;\n        border: 1px solid lightgray;\n        border-radius: 5px;\n        padding: 10px;\n    "]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u.Db(n,34)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Db(n,34)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(o.announcement.announcement=e)&&t),t}),a.pb,a.F)),u.qb(34,16384,null,0,i.Nb,[u.k],null,null),u.Gb(1024,null,s.g,(function(n){return[n]}),[i.Nb]),u.qb(36,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.h,null,[s.l]),u.qb(38,16384,null,0,s.i,[[4,s.h]],null,null),u.qb(39,49152,null,0,i.wb,[u.h,u.k,u.x],{placeholder:[0,"placeholder"]},null)],(function(n,l){var e=l.component;n(l,13,0,"clear"),n(l,16,0,e.dataSaving),n(l,27,0,e.announcement.isAnnouncement),n(l,32,0,"none"),n(l,36,0,e.announcement.announcement),n(l,39,0,"Add text here...")}),(function(n,l){n(l,24,0,u.Db(l,29).ngClassUntouched,u.Db(l,29).ngClassTouched,u.Db(l,29).ngClassPristine,u.Db(l,29).ngClassDirty,u.Db(l,29).ngClassValid,u.Db(l,29).ngClassInvalid,u.Db(l,29).ngClassPending),n(l,33,0,u.Db(l,38).ngClassUntouched,u.Db(l,38).ngClassTouched,u.Db(l,38).ngClassPristine,u.Db(l,38).ngClassDirty,u.Db(l,38).ngClassValid,u.Db(l,38).ngClassInvalid,u.Db(l,38).ngClassPending)}))}var f=u.nb("app-announcement",d,(function(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"app-announcement",[],null,null,null,m,h)),u.qb(1,114688,null,0,d,[b.a,u.x,g.a,i.Ob],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),C=e("iInd"),v=function n(){_classCallCheck(this,n)};e.d(l,"AnnouncementPageModuleNgFactory",(function(){return k}));var k=u.ob(t,[],(function(n){return u.Ab([u.Bb(512,u.j,u.Z,[[8,[o.a,f]],[3,u.j],u.v]),u.Bb(4608,r.k,r.j,[u.s,[2,r.q]]),u.Bb(4608,s.p,s.p,[]),u.Bb(4608,i.c,i.c,[u.x,u.g]),u.Bb(4608,i.Fb,i.Fb,[i.c,u.j,u.p]),u.Bb(4608,i.Kb,i.Kb,[i.c,u.j,u.p]),u.Bb(1073742336,r.b,r.b,[]),u.Bb(1073742336,s.o,s.o,[]),u.Bb(1073742336,s.c,s.c,[]),u.Bb(1073742336,i.Cb,i.Cb,[]),u.Bb(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),u.Bb(1073742336,v,v,[]),u.Bb(1073742336,t,t,[]),u.Bb(1024,C.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);