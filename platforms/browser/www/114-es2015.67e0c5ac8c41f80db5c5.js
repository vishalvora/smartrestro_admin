(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{"8CPX":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),i=u("MKJQ"),s=u("sZkV"),a=u("iInd"),r=u("SVse"),b=u("s7LF"),g=u("mrSG"),d=u("ZJFI");class c{constructor(l,n,u,e){this.afauth=l,this.db=n,this.router=u,this.toastController=e,this.user={}}ngOnInit(){}signup(l){this.msg="registering...",console.log(l),l.password==l.confirmPassword?this.afauth.createUserWithEmailAndPassword(l.email,l.password).then(n=>{this.msg="your account has been registered successfully..",this.presentToast(),console.log(n),this.db.updateUserData(l,n.user.uid),this.router.navigate(["tabs/tab2"])}).catch(l=>{console.log(l),this.msg=l.message}):this.msg="Password does not match"}presentToast(){return g.__awaiter(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"Your account has been registered successfully",duration:2e3})).present()}))}}var h=u("VRCc"),p=e.pb({encapsulation:0,styles:[[""]],data:{}});function C(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,80,"ion-content",[],null,null,null,i.R,i.h)),e.qb(1,49152,null,0,s.v,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,78,"div",[],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,10,"div",[["style","padding:10px"]],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,7,"div",[["style","display:flex"]],null,null,null,null,null)),(l()(),e.rb(5,0,null,null,1,"div",[["style","flex-grow:5"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Register"])),(l()(),e.rb(7,0,null,null,4,"div",[["style","color:orangered"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Db(l,8).onClick()&&t),"click"===n&&(t=!1!==e.Db(l,10).onClick(u)&&t),t}),null,null)),e.qb(8,16384,null,0,a.n,[a.m,a.a,[8,null],e.C,e.k],{routerLink:[0,"routerLink"]},null),e.Eb(9,1),e.qb(10,737280,null,0,s.Lb,[r.g,s.Gb,e.k,a.m,[2,a.n]],null,null),(l()(),e.Jb(-1,null,["cancel"])),(l()(),e.rb(12,0,null,null,1,"div",[["class","secondaryFont"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Enter your phone email & password to proceed"])),(l()(),e.rb(14,0,null,null,66,"ion-list",[],null,null,null,i.ab,i.p)),e.qb(15,49152,null,0,s.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(16,0,null,0,11,"ion-item",[],null,null,null,i.X,i.n)),e.qb(17,49152,null,0,s.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(18,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.Y,i.o)),e.qb(19,49152,null,0,s.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Name*"])),(l()(),e.rb(21,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,22)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,22)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.user.name=u)&&t),t}),i.W,i.m)),e.qb(22,16384,null,0,s.Nb,[e.k],null,null),e.Gb(1024,null,b.g,(function(l){return[l]}),[s.Nb]),e.qb(24,671744,null,0,b.l,[[8,null],[8,null],[8,null],[6,b.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,b.h,null,[b.l]),e.qb(26,16384,null,0,b.i,[[4,b.h]],null,null),e.qb(27,49152,null,0,s.H,[e.h,e.k,e.x],null,null),(l()(),e.rb(28,0,null,0,11,"ion-item",[],null,null,null,i.X,i.n)),e.qb(29,49152,null,0,s.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(30,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.Y,i.o)),e.qb(31,49152,null,0,s.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Phone No*"])),(l()(),e.rb(33,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,34)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,34)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.user.phone=u)&&t),t}),i.W,i.m)),e.qb(34,16384,null,0,s.Nb,[e.k],null,null),e.Gb(1024,null,b.g,(function(l){return[l]}),[s.Nb]),e.qb(36,671744,null,0,b.l,[[8,null],[8,null],[8,null],[6,b.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,b.h,null,[b.l]),e.qb(38,16384,null,0,b.i,[[4,b.h]],null,null),e.qb(39,49152,null,0,s.H,[e.h,e.k,e.x],null,null),(l()(),e.rb(40,0,null,0,11,"ion-item",[],null,null,null,i.X,i.n)),e.qb(41,49152,null,0,s.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(42,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.Y,i.o)),e.qb(43,49152,null,0,s.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Email*"])),(l()(),e.rb(45,0,null,0,6,"ion-input",[["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,46)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,46)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.user.email=u)&&t),t}),i.W,i.m)),e.qb(46,16384,null,0,s.Nb,[e.k],null,null),e.Gb(1024,null,b.g,(function(l){return[l]}),[s.Nb]),e.qb(48,671744,null,0,b.l,[[8,null],[8,null],[8,null],[6,b.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,b.h,null,[b.l]),e.qb(50,16384,null,0,b.i,[[4,b.h]],null,null),e.qb(51,49152,null,0,s.H,[e.h,e.k,e.x],{type:[0,"type"]},null),(l()(),e.rb(52,0,null,0,11,"ion-item",[],null,null,null,i.X,i.n)),e.qb(53,49152,null,0,s.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(54,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.Y,i.o)),e.qb(55,49152,null,0,s.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Password*"])),(l()(),e.rb(57,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,58)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,58)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.user.password=u)&&t),t}),i.W,i.m)),e.qb(58,16384,null,0,s.Nb,[e.k],null,null),e.Gb(1024,null,b.g,(function(l){return[l]}),[s.Nb]),e.qb(60,671744,null,0,b.l,[[8,null],[8,null],[8,null],[6,b.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,b.h,null,[b.l]),e.qb(62,16384,null,0,b.i,[[4,b.h]],null,null),e.qb(63,49152,null,0,s.H,[e.h,e.k,e.x],{type:[0,"type"]},null),(l()(),e.rb(64,0,null,0,11,"ion-item",[],null,null,null,i.X,i.n)),e.qb(65,49152,null,0,s.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(66,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.Y,i.o)),e.qb(67,49152,null,0,s.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Confirm Password*"])),(l()(),e.rb(69,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,70)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,70)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.user.confirmPassword=u)&&t),t}),i.W,i.m)),e.qb(70,16384,null,0,s.Nb,[e.k],null,null),e.Gb(1024,null,b.g,(function(l){return[l]}),[s.Nb]),e.qb(72,671744,null,0,b.l,[[8,null],[8,null],[8,null],[6,b.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,b.h,null,[b.l]),e.qb(74,16384,null,0,b.i,[[4,b.h]],null,null),e.qb(75,49152,null,0,s.H,[e.h,e.k,e.x],{type:[0,"type"]},null),(l()(),e.rb(76,0,null,0,1,"div",[["style","color:tomato; text-align:center"]],null,null,null,null,null)),(l()(),e.Jb(77,null,["",""])),(l()(),e.rb(78,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.signup(t.user)&&e),e}),i.N,i.d)),e.qb(79,49152,null,0,s.l,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(l()(),e.Jb(-1,0,["Register"]))],(function(l,n){var u=n.component,e=l(n,9,0,"/login");l(n,8,0,e),l(n,10,0),l(n,19,0,"stacked"),l(n,24,0,u.user.name),l(n,31,0,"stacked"),l(n,36,0,u.user.phone),l(n,43,0,"stacked"),l(n,48,0,u.user.email),l(n,51,0,"email"),l(n,55,0,"stacked"),l(n,60,0,u.user.password),l(n,63,0,"password"),l(n,67,0,"stacked"),l(n,72,0,u.user.confirmPassword),l(n,75,0,"password"),l(n,79,0,"block")}),(function(l,n){var u=n.component;l(n,21,0,e.Db(n,26).ngClassUntouched,e.Db(n,26).ngClassTouched,e.Db(n,26).ngClassPristine,e.Db(n,26).ngClassDirty,e.Db(n,26).ngClassValid,e.Db(n,26).ngClassInvalid,e.Db(n,26).ngClassPending),l(n,33,0,e.Db(n,38).ngClassUntouched,e.Db(n,38).ngClassTouched,e.Db(n,38).ngClassPristine,e.Db(n,38).ngClassDirty,e.Db(n,38).ngClassValid,e.Db(n,38).ngClassInvalid,e.Db(n,38).ngClassPending),l(n,45,0,e.Db(n,50).ngClassUntouched,e.Db(n,50).ngClassTouched,e.Db(n,50).ngClassPristine,e.Db(n,50).ngClassDirty,e.Db(n,50).ngClassValid,e.Db(n,50).ngClassInvalid,e.Db(n,50).ngClassPending),l(n,57,0,e.Db(n,62).ngClassUntouched,e.Db(n,62).ngClassTouched,e.Db(n,62).ngClassPristine,e.Db(n,62).ngClassDirty,e.Db(n,62).ngClassValid,e.Db(n,62).ngClassInvalid,e.Db(n,62).ngClassPending),l(n,69,0,e.Db(n,74).ngClassUntouched,e.Db(n,74).ngClassTouched,e.Db(n,74).ngClassPristine,e.Db(n,74).ngClassDirty,e.Db(n,74).ngClassValid,e.Db(n,74).ngClassInvalid,e.Db(n,74).ngClassPending),l(n,77,0,u.msg)}))}function m(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-signup",[],null,null,null,C,p)),e.qb(1,114688,null,0,c,[h.a,d.a,a.m,s.Ob],null,null)],(function(l,n){l(n,1,0)}),null)}var D=e.nb("app-signup",c,m,{},{},[]);class k{}u.d(n,"SignupPageModuleNgFactory",(function(){return v}));var v=e.ob(t,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[o.a,D]],[3,e.j],e.v]),e.Bb(4608,r.k,r.j,[e.s,[2,r.q]]),e.Bb(4608,b.p,b.p,[]),e.Bb(4608,s.c,s.c,[e.x,e.g]),e.Bb(4608,s.Fb,s.Fb,[s.c,e.j,e.p]),e.Bb(4608,s.Kb,s.Kb,[s.c,e.j,e.p]),e.Bb(1073742336,r.b,r.b,[]),e.Bb(1073742336,b.o,b.o,[]),e.Bb(1073742336,b.c,b.c,[]),e.Bb(1073742336,s.Cb,s.Cb,[]),e.Bb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),e.Bb(1073742336,k,k,[]),e.Bb(1073742336,t,t,[]),e.Bb(1024,a.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);