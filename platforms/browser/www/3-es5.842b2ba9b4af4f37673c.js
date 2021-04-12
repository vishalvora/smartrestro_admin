function _defineProperties(l,n){for(var u=0;u<n.length;u++){var t=n[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{cGy7:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=function l(){_classCallCheck(this,l)},o=u("pMnS"),r=u("MKJQ"),i=u("sZkV"),c=u("SVse"),a=u("ZJFI"),s=function(){function l(n,u,t){_classCallCheck(this,l),this.db=n,this.dbService=u,this.router=t,this.customerList=[]}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.dbService.getStore().subscribe((function(n){Object.keys(n).length>0&&l.db.firestore.collection("aggregate_data").where("store_id","==",n.store_id).orderBy("total_amount","desc").get().then((function(n){console.log(n),n.forEach((function(n){l.customerList.push(n.data())}))}))}))}},{key:"openCustomerDetails",value:function(l){console.log(l),this.router.navigate(["customerdetials",l])}}]),l}(),b=u("wD+u"),p=u("iInd"),f=t.pb({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,13,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openCustomerDetails(l.context.$implicit)&&t),t}),r.Z,r.o)),t.qb(1,49152,null,0,i.I,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,r.M,r.b)),t.qb(3,49152,null,0,i.g,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,0,"img",[["src","../../../assets/avatar.svg"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,0,8,"ion-label",[],null,null,null,r.ab,r.p)),t.qb(6,49152,null,0,i.O,[t.h,t.k,t.x],null,null),(l()(),t.rb(7,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t.Jb(8,null,["",""])),(l()(),t.rb(9,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.rb(10,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(11,null,[""," order(s), "])),(l()(),t.rb(12,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(13,null,[" total amount \u20b9",""]))],null,(function(l,n){l(n,8,0,n.context.$implicit.name),l(n,11,0,n.context.$implicit.total_order),l(n,13,0,n.context.$implicit.total_amount)}))}function m(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,6,"ion-header",[],null,null,null,r.U,r.j)),t.qb(1,49152,null,0,i.C,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.vb,r.K)),t.qb(3,49152,null,0,i.Ab,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,2,"ion-title",[],null,null,null,r.tb,r.I)),t.qb(5,49152,null,0,i.yb,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["customers"])),(l()(),t.rb(7,0,null,null,3,"ion-content",[],null,null,null,r.T,r.i)),t.qb(8,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,h)),t.qb(10,278528,null,0,c.h,[t.O,t.K,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,10,0,n.component.customerList)}),null)}var d=t.nb("app-customers",s,(function(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-customers",[],null,null,null,m,f)),t.qb(1,114688,null,0,s,[b.a,a.a,p.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),k=u("s7LF"),g=function l(){_classCallCheck(this,l)};u.d(n,"CustomersPageModuleNgFactory",(function(){return v}));var v=t.ob(e,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[o.a,d]],[3,t.j],t.v]),t.Bb(4608,c.k,c.j,[t.s,[2,c.q]]),t.Bb(4608,k.p,k.p,[]),t.Bb(4608,i.c,i.c,[t.x,t.g]),t.Bb(4608,i.Fb,i.Fb,[i.c,t.j,t.p]),t.Bb(4608,i.Kb,i.Kb,[i.c,t.j,t.p]),t.Bb(1073742336,c.b,c.b,[]),t.Bb(1073742336,k.o,k.o,[]),t.Bb(1073742336,k.c,k.c,[]),t.Bb(1073742336,i.Cb,i.Cb,[]),t.Bb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t.Bb(1073742336,g,g,[]),t.Bb(1073742336,e,e,[]),t.Bb(1024,p.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);