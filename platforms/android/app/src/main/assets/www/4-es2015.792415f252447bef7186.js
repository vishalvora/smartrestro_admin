(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ly7r:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),r=u("MKJQ"),b=u("sZkV"),i=u("mrSG"),s=u("trGy"),a=u("ZJFI"),c=u("8riC");class p{constructor(l,n,u,e,o){this.authService=l,this.dbService=n,this.ngZone=u,this.appVersion=e,this.alertController=o,this.userData={}}ngOnInit(){console.log("l: "+this.appVersion.getVersionNumber()),this.appVersion.getVersionNumber().then(l=>{console.log("a"),console.log(l)}).catch(l=>{console.log(l)}),this.dbService.getUserData().subscribe(l=>{console.log(l),Object.keys(l).length>0&&this.ngZone.run(()=>{this.userData=l})})}logOut(){this.authService.logout()}presentAlertConfirmLogout(){return i.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"Confirm!",message:"logout?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:l=>{console.log("Confirm Cancel: blah")}},{text:"Okay",handler:()=>{console.log("Confirm Okay"),this.logOut()}}]});yield l.present()}))}}var h=e.pb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#EFEFEF}"]],data:{}});function g(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,6,"ion-header",[],null,null,null,r.eb,r.n)),e.qb(1,49152,null,0,b.C,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.Hb,r.Q)),e.qb(3,49152,null,0,b.Ab,[e.h,e.k,e.x],null,null),(l()(),e.rb(4,0,null,0,2,"ion-title",[],null,null,null,r.Fb,r.O)),e.qb(5,49152,null,0,b.yb,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Profile"])),(l()(),e.rb(7,0,null,null,23,"ion-content",[],null,null,null,r.cb,r.l)),e.qb(8,49152,null,0,b.v,[e.h,e.k,e.x],null,null),(l()(),e.rb(9,0,null,0,9,"div",[["style","padding: 10px 10px 10px 10px; background: white"]],null,null,null,null,null)),(l()(),e.rb(10,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Jb(11,null,["",""])),(l()(),e.rb(12,0,null,null,6,"ion-label",[],null,null,null,r.lb,r.u)),e.qb(13,49152,null,0,b.O,[e.h,e.k,e.x],null,null),(l()(),e.rb(14,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),e.rb(15,0,null,null,1,"span",[["style","padding-right:10px"]],null,null,null,null,null)),(l()(),e.Jb(16,null,["",""])),(l()(),e.rb(17,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(18,null,["",""])),(l()(),e.rb(19,0,null,0,0,"div",[["style","height: 30px; width:100%; "]],null,null,null,null,null)),(l()(),e.rb(20,0,null,0,8,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.presentAlertConfirmLogout()&&e),e}),r.kb,r.t)),e.qb(21,49152,null,0,b.I,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.rb(22,0,null,0,3,"ion-label",[],null,null,null,r.lb,r.u)),e.qb(23,49152,null,0,b.O,[e.h,e.k,e.x],null,null),(l()(),e.rb(24,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" LOGOUT "])),(l()(),e.rb(26,0,null,0,2,"p",[["slot","end"]],null,null,null,null,null)),(l()(),e.rb(27,0,null,null,1,"ion-icon",[["name","power-sharp"]],null,null,null,r.fb,r.o)),e.qb(28,49152,null,0,b.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(29,0,null,0,1,"div",[["style","text-align:center; color : #bebfc5; font-size: 14px; margin-top:28px "]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["App version 1.0.6"]))],(function(l,n){l(n,21,0,"none"),l(n,28,0,"power-sharp")}),(function(l,n){var u=n.component;l(n,11,0,u.userData.name),l(n,16,0,u.userData.phone),l(n,18,0,u.userData.email)}))}function d(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-profile",[],null,null,null,g,h)),e.qb(1,114688,null,0,p,[s.a,a.a,e.x,c.a,b.b],null,null)],(function(l,n){l(n,1,0)}),null)}var f=e.nb("app-profile",p,d,{},{},[]),k=u("SVse"),x=u("s7LF"),m=u("iInd");class v{}u.d(n,"ProfilePageModuleNgFactory",(function(){return y}));var y=e.ob(o,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[t.a,f]],[3,e.j],e.v]),e.Bb(4608,k.k,k.j,[e.s,[2,k.q]]),e.Bb(4608,x.p,x.p,[]),e.Bb(4608,b.c,b.c,[e.x,e.g]),e.Bb(4608,b.Fb,b.Fb,[b.c,e.j,e.p]),e.Bb(4608,b.Kb,b.Kb,[b.c,e.j,e.p]),e.Bb(1073742336,k.b,k.b,[]),e.Bb(1073742336,x.o,x.o,[]),e.Bb(1073742336,x.c,x.c,[]),e.Bb(1073742336,b.Cb,b.Cb,[]),e.Bb(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),e.Bb(1073742336,v,v,[]),e.Bb(1073742336,o,o,[]),e.Bb(1024,m.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);