(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{hqSE:function(n,l,u){"use strict";u.r(l);var e=u("8Y7J");class t{}var o=u("pMnS"),i=u("MKJQ"),a=u("sZkV"),r=u("SVse"),s=u("s7LF"),b=u("mrSG"),c=u("ZJFI");class d{constructor(n,l,u,e){this.dbService=n,this.ngZone=l,this.db=u,this.toastController=e,this.announcement={isAnnouncement:!1,announcement:""}}ngOnInit(){this.dbService.getStore().subscribe(n=>{console.log(n),this.storeId=n.store_id,this.store=n,this.ngZone.run(()=>{n.hasOwnProperty("isAnnouncement")&&(this.announcement.isAnnouncement=n.isAnnouncement)}),n.hasOwnProperty("announcement")&&(this.announcement.announcement=n.announcement)})}save(){console.log(this.announcement),""!=this.storeId&&this.db.collection("store_seller").doc(this.storeId).update({"d.announcement":this.announcement.announcement,"d.isAnnouncement":this.announcement.isAnnouncement}).then(n=>{console.log("document saved successfully!"),this.dataSaving=!1,this.presentToast("Announcement saved!!")}).catch(n=>{console.log("doucmnt not saved! err"),this.dataSaving=!1})}presentToast(n){return b.__awaiter(this,void 0,void 0,(function*(){(yield this.toastController.create({message:n,duration:2e3})).present()}))}}var g=u("wD+u"),h=e.pb({encapsulation:0,styles:[[""]],data:{}});function m(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"ion-progress-bar",[["type","indeterminate"]],null,null,null,i.bb,i.r)),e.qb(1,49152,null,0,a.X,[e.h,e.k,e.x],{type:[0,"type"]},null)],(function(n,l){n(l,1,0,"indeterminate")}),null)}function p(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,16,"ion-header",[],null,null,null,i.S,i.i)),e.qb(1,49152,null,0,a.C,[e.h,e.k,e.x],null,null),(n()(),e.rb(2,0,null,0,14,"ion-toolbar",[],null,null,null,i.tb,i.J)),e.qb(3,49152,null,0,a.Ab,[e.h,e.k,e.x],null,null),(n()(),e.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.O,i.e)),e.qb(5,49152,null,0,a.m,[e.h,e.k,e.x],null,null),(n()(),e.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==e.Db(n,8).onClick(u)&&t),t}),i.L,i.b)),e.qb(7,49152,null,0,a.h,[e.h,e.k,e.x],null,null),e.qb(8,16384,null,0,a.i,[[2,a.gb],a.Gb],null,null),(n()(),e.rb(9,0,null,0,2,"ion-title",[],null,null,null,i.rb,i.H)),e.qb(10,49152,null,0,a.yb,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["Announcement"])),(n()(),e.rb(12,0,null,0,2,"ion-button",[["fill","clear"],["slot","end"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.save()&&e),e}),i.N,i.d)),e.qb(13,49152,null,0,a.l,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(n()(),e.Jb(-1,0,["save"])),(n()(),e.gb(16777216,null,0,1,null,m)),e.qb(16,16384,null,0,r.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(17,0,null,null,22,"ion-content",[],null,null,null,i.R,i.h)),e.qb(18,49152,null,0,a.v,[e.h,e.k,e.x],null,null),(n()(),e.rb(19,0,null,0,11,"ion-item",[],null,null,null,i.X,i.n)),e.qb(20,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(n()(),e.rb(21,0,null,0,2,"ion-label",[],null,null,null,i.Y,i.o)),e.qb(22,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["Announcement"])),(n()(),e.rb(24,0,null,0,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.Db(n,25)._handleBlurEvent(u.target)&&t),"ionChange"===l&&(t=!1!==e.Db(n,25)._handleIonChange(u.target)&&t),"ngModelChange"===l&&(t=!1!==(o.announcement.isAnnouncement=u)&&t),t}),i.sb,i.I)),e.qb(25,16384,null,0,a.d,[e.k],null,null),e.Gb(1024,null,s.g,(function(n){return[n]}),[a.d]),e.qb(27,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,s.h,null,[s.l]),e.qb(29,16384,null,0,s.i,[[4,s.h]],null,null),e.qb(30,49152,null,0,a.zb,[e.h,e.k,e.x],null,null),(n()(),e.rb(31,0,null,0,8,"ion-item",[["lines","none"],["style","padding-top:25px"]],null,null,null,i.X,i.n)),e.qb(32,49152,null,0,a.I,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.rb(33,0,null,0,6,"ion-textarea",[["auto-grow","true"],["placeholder","Add text here..."],["style"," --background: white;\n        border: 1px solid lightgray;\n        border-radius: 5px;\n        padding: 10px;\n    "]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.Db(n,34)._handleBlurEvent(u.target)&&t),"ionChange"===l&&(t=!1!==e.Db(n,34)._handleInputEvent(u.target)&&t),"ngModelChange"===l&&(t=!1!==(o.announcement.announcement=u)&&t),t}),i.pb,i.F)),e.qb(34,16384,null,0,a.Nb,[e.k],null,null),e.Gb(1024,null,s.g,(function(n){return[n]}),[a.Nb]),e.qb(36,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,s.h,null,[s.l]),e.qb(38,16384,null,0,s.i,[[4,s.h]],null,null),e.qb(39,49152,null,0,a.wb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null)],(function(n,l){var u=l.component;n(l,13,0,"clear"),n(l,16,0,u.dataSaving),n(l,27,0,u.announcement.isAnnouncement),n(l,32,0,"none"),n(l,36,0,u.announcement.announcement),n(l,39,0,"Add text here...")}),(function(n,l){n(l,24,0,e.Db(l,29).ngClassUntouched,e.Db(l,29).ngClassTouched,e.Db(l,29).ngClassPristine,e.Db(l,29).ngClassDirty,e.Db(l,29).ngClassValid,e.Db(l,29).ngClassInvalid,e.Db(l,29).ngClassPending),n(l,33,0,e.Db(l,38).ngClassUntouched,e.Db(l,38).ngClassTouched,e.Db(l,38).ngClassPristine,e.Db(l,38).ngClassDirty,e.Db(l,38).ngClassValid,e.Db(l,38).ngClassInvalid,e.Db(l,38).ngClassPending)}))}function v(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"app-announcement",[],null,null,null,p,h)),e.qb(1,114688,null,0,d,[c.a,e.x,g.a,a.Ob],null,null)],(function(n,l){n(l,1,0)}),null)}var C=e.nb("app-announcement",d,v,{},{},[]),k=u("iInd");class f{}u.d(l,"AnnouncementPageModuleNgFactory",(function(){return q}));var q=e.ob(t,[],(function(n){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[o.a,C]],[3,e.j],e.v]),e.Bb(4608,r.k,r.j,[e.s,[2,r.q]]),e.Bb(4608,s.p,s.p,[]),e.Bb(4608,a.c,a.c,[e.x,e.g]),e.Bb(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.Bb(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.Bb(1073742336,r.b,r.b,[]),e.Bb(1073742336,s.o,s.o,[]),e.Bb(1073742336,s.c,s.c,[]),e.Bb(1073742336,a.Cb,a.Cb,[]),e.Bb(1073742336,k.o,k.o,[[2,k.t],[2,k.m]]),e.Bb(1073742336,f,f,[]),e.Bb(1073742336,t,t,[]),e.Bb(1024,k.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);