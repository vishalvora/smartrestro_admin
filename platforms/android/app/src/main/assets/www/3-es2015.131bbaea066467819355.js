(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{cGy7:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var r=u("pMnS"),b=u("MKJQ"),e=u("sZkV"),s=u("SVse"),i=u("ZJFI");class c{constructor(l,n,u){this.db=l,this.dbService=n,this.router=u,this.customerList=[]}ngOnInit(){this.dbService.getStore().subscribe(l=>{Object.keys(l).length>0&&this.db.firestore.collection("aggregate_data").where("store_id","==",l.store_id).orderBy("total_amount","desc").get().then(l=>{console.log(l),l.forEach(l=>{this.customerList.push(l.data())})})})}openCustomerDetails(l){console.log(l),this.router.navigate(["customerdetials",l])}}var a=u("wD+u"),p=u("iInd"),m=t.pb({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,13,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openCustomerDetails(l.context.$implicit)&&t),t}),b.kb,b.t)),t.qb(1,49152,null,0,e.I,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,b.S,b.b)),t.qb(3,49152,null,0,e.g,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,0,"img",[["src","../../../assets/avatar.svg"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,0,8,"ion-label",[],null,null,null,b.lb,b.u)),t.qb(6,49152,null,0,e.O,[t.h,t.k,t.x],null,null),(l()(),t.rb(7,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t.Jb(8,null,["",""])),(l()(),t.rb(9,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.rb(10,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(11,null,[""," order(s), "])),(l()(),t.rb(12,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(13,null,[" total amount \u20b9",""]))],null,(function(l,n){l(n,8,0,n.context.$implicit.name),l(n,11,0,n.context.$implicit.total_order),l(n,13,0,n.context.$implicit.total_amount)}))}function d(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,6,"ion-header",[],null,null,null,b.eb,b.n)),t.qb(1,49152,null,0,e.C,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,4,"ion-toolbar",[],null,null,null,b.Hb,b.Q)),t.qb(3,49152,null,0,e.Ab,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,2,"ion-title",[],null,null,null,b.Fb,b.O)),t.qb(5,49152,null,0,e.yb,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["customers"])),(l()(),t.rb(7,0,null,null,3,"ion-content",[],null,null,null,b.cb,b.l)),t.qb(8,49152,null,0,e.v,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,h)),t.qb(10,278528,null,0,s.h,[t.O,t.K,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,10,0,n.component.customerList)}),null)}function g(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-customers",[],null,null,null,d,m)),t.qb(1,114688,null,0,c,[a.a,i.a,p.m],null,null)],(function(l,n){l(n,1,0)}),null)}var k=t.nb("app-customers",c,g,{},{},[]),f=u("s7LF");class v{}u.d(n,"CustomersPageModuleNgFactory",(function(){return B}));var B=t.ob(o,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[r.a,k]],[3,t.j],t.v]),t.Bb(4608,s.k,s.j,[t.s,[2,s.q]]),t.Bb(4608,f.p,f.p,[]),t.Bb(4608,e.c,e.c,[t.x,t.g]),t.Bb(4608,e.Fb,e.Fb,[e.c,t.j,t.p]),t.Bb(4608,e.Kb,e.Kb,[e.c,t.j,t.p]),t.Bb(1073742336,s.b,s.b,[]),t.Bb(1073742336,f.o,f.o,[]),t.Bb(1073742336,f.c,f.c,[]),t.Bb(1073742336,e.Cb,e.Cb,[]),t.Bb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t.Bb(1073742336,v,v,[]),t.Bb(1073742336,o,o,[]),t.Bb(1024,p.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);