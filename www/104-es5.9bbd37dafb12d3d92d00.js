function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{AH9s:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},r=u("pMnS"),o=u("SVse"),i=u("MKJQ"),a=u("sZkV"),c=u("s7LF"),s=u("mrSG"),d=u("wwmi"),b=u("ZJFI"),p=function(){function l(n,u,e,t,r,o){var i=this;_classCallCheck(this,l),this.route=n,this.db=u,this.dbService=e,this.ngZone=t,this.modalController=r,this.alertController=o,this.order={},this.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"],this.store={},this.route.params.subscribe((function(l){console.log(l),i.params=l,console.log(i.params),i.db.firestore.collection("orders").doc(i.params.orderDocId).onSnapshot((function(l){console.log(l.data()),i.order=l.data(),i.order.id=l.id,i.storeId=i.order.store.storeID;var n=new Date(i.order.time);i.day=n.getDate(),console.log(i.day),i.month=i.monthNames[n.getMonth()],i.min=n.getMinutes(),i.hour=n.getHours(),"ordered"===i.order.orderStatus&&i.order.cart.forEach((function(l){l.acceptedQty=l.qty}))}))}))}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.dbService.storeId.subscribe((function(n){l.storeId_=n,l.db.collection("store_seller").doc(l.storeId_).get().subscribe((function(n){l.store=n.data().d,console.log(l.store)}))}))}},{key:"acceptOrder",value:function(l){var n=this;console.log(l),l.cart.forEach((function(l){console.log(l),l.status||(l.status="accepted"),"accepted"===l.status&&(console.log(n.storeId),console.log(l.product_id),n.db.firestore.collection("product_seller").where("storeID","==",n.storeId).where("product_id","==",l.product_id).get().then((function(u){console.log(u),u.forEach((function(u){console.log(u.data());var e,t=u.data();(null==t.variants[parseInt(l.cartVariant)].inventory&&(t.variants[l.cartVariant].inventory=0),t.looseItem)?t.looseItem&&(console.log("loose item"),e=parseFloat(t.lInventory)-parseInt(l.acceptedQty)*parseFloat(t.variants[l.cartVariant].lifactor),console.log(e),n.db.collection("product_seller").doc(u.id).set({lInventory:e},{merge:!0}).then((function(l){console.log(l)}))):(console.log("normal item"),t.variants[l.cartVariant].inventory=parseInt(t.variants[l.cartVariant].inventory)-parseInt(l.acceptedQty),console.log(l),n.db.collection("product_seller").doc(u.id).set({variants:t.variants},{merge:!0}).then((function(l){console.log(l)})))}))})))})),this.db.collection("orders").doc(l.id).set({orderStatus:"Accepted",cart:l.cart},{merge:!0}).then((function(l){console.log(l)}))}},{key:"rejectOrder",value:function(l){console.log(l),this.db.collection("orders").doc(l.id).update({orderStatus:"Rejected",rejectReason:l.rejectReason}).then((function(l){console.log(l)}))}},{key:"ourForDeliveryOrder",value:function(l){this.db.collection("orders").doc(l.id).set({orderStatus:"Out For Delivery"},{merge:!0}).then((function(l){console.log(l)}))}},{key:"deliveredOrder",value:function(l){this.db.collection("orders").doc(l.id).set({orderStatus:"Delivered"},{merge:!0}).then((function(l){console.log(l)}))}},{key:"paid",value:function(l){console.log("paid"),this.db.collection("orders").doc(l.id).set({paymentStatus:"paid"},{merge:!0}).then((function(l){console.log(l)}))}},{key:"presentAlertConfirm",value:function(l){return s.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var u,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"Confirm!",message:"Did you receive payment for this order outside of snvmart? order will be mark as paid",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(l){console.log("Confirm Cancel: blah")}},{text:"mark as paid",handler:function(){console.log("Confirm Okay"),e.paid(l)}}]});case 2:return u=n.sent,n.next=5,u.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"acceptItem",value:function(l,n,u){var e=this;this.ngZone.run((function(){l[u].status="accepted",e.order.cart=l,console.log(l)}))}},{key:"rejectItem",value:function(l,n,u){var e=this;l[u].status="rejected",this.ngZone.run((function(){e.order.cart=l,console.log(e.order)})),console.log(l),console.log(n),console.log(u),console.log(this.order)}},{key:"createInvoice",value:function(l){console.log(l),this.presentModal(l)}},{key:"presentModal",value:function(l){return s.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:d.a,componentProps:{orderId:l.id}});case 2:return u=n.sent,n.next=5,u.present();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n,this)})))}},{key:"changeQty",value:function(l,n){this.order.cart[n].acceptedQty=parseInt(this.order.cart[n].acceptedQty)+parseInt(l),console.log(this.order)}},{key:"saveNote",value:function(l){console.log(this.order.note),this.db.collection("orders").doc(l.id).update({note:l.note}).then((function(l){console.log("order note saved")}))}},{key:"rejectOrderConfirm",value:function(l){return s.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var u,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({cssClass:"my-custom-class",header:"Add reason for order rejection",inputs:[{name:"reason",id:"paragraph",type:"textarea",placeholder:"add reason for rejection"}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:"Ok",handler:function(n){if(console.log("Confirm Ok"),console.log(n.reason),""===n.reason)return u.message="Add valid reason for rejection",!1;console.log("reason collected!!"),l.rejectReason=n.reason,e.rejectOrder(l)}}]});case 2:return u=n.sent,n.next=5,u.present();case 5:case"end":return n.stop()}}),n,this)})))}}]),l}(),f=u("iInd"),g=u("wD+u"),h=e.pb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#EFEFEF}"]],data:{}});function m(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"span",[["style","padding-right:10px;"]],null,null,null,null,null)),(l()(),e.Jb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.parent.parent.context.$implicit.qty)}))}function v(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"del",[["style","padding-right:5px"]],null,null,null,null,null)),(l()(),e.Jb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.parent.parent.parent.context.$implicit.qty)}))}function x(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,3,"span",[["style","padding-right:10px;"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,v)),e.qb(2,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.Jb(3,null,["",""]))],(function(l,n){l(n,2,0,n.parent.parent.context.$implicit.qty!=n.parent.parent.context.$implicit.acceptedQty)}),(function(l,n){l(n,3,0,n.parent.parent.context.$implicit.acceptedQty)}))}function y(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,m)),e.qb(2,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,x)),e.qb(4,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"ordered"==u.order.orderStatus&&n.parent.context.$implicit.acceptedQty),l(n,4,0,!("ordered"==u.order.orderStatus))}),null)}function k(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.qty)}))}function I(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,10,"div",[["style","height: 32px; width: 80px;border: 1px solid #d4d5d9;background-color: #fff;contain: content;overflow: hidden;position: relative;border-radius: 4px;display: flex;"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,3,"ion-button",[["fill","clear"],["style","margin: 0;height:30px"]],null,null,null,i.N,i.d)),e.qb(2,49152,null,0,a.l,[e.h,e.k,e.x],{disabled:[0,"disabled"],fill:[1,"fill"]},null),(l()(),e.rb(3,0,null,0,1,"span",[["style","font-weight:600; font-size:33px"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.changeQty(-1,l.parent.context.index)&&e),e}),null,null)),(l()(),e.Jb(-1,null,["-"])),(l()(),e.rb(5,0,null,null,1,"div",[["style","flex-grow: 1;text-align: center;line-height: 32px;color: #60b246;font-weight: 600;"]],null,null,null,null,null)),(l()(),e.Jb(6,null,["",""])),(l()(),e.rb(7,0,null,null,3,"ion-button",[["fill","clear"],["style","margin: 0;height:30px"]],null,null,null,i.N,i.d)),e.qb(8,49152,null,0,a.l,[e.h,e.k,e.x],{disabled:[0,"disabled"],fill:[1,"fill"]},null),(l()(),e.rb(9,0,null,0,1,"span",[["style","font-weight:600; font-size:20px"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.changeQty(1,l.parent.context.index)&&e),e}),null,null)),(l()(),e.Jb(-1,null,["+"]))],(function(l,n){l(n,2,0,n.parent.context.$implicit.acceptedQty<1,"clear"),l(n,8,0,n.parent.context.$implicit.acceptedQty>=n.parent.context.$implicit.qty,"clear")}),(function(l,n){l(n,6,0,n.parent.context.$implicit.acceptedQty)}))}function q(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,15,"ion-item",[],null,null,null,i.X,i.n)),e.qb(1,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,3,"ion-label",[["style","white-space: normal !important;"]],null,null,null,i.Y,i.o)),e.qb(3,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(l()(),e.rb(4,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(5,null,[""," - ",""])),(l()(),e.rb(6,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(7,null,["Rs. ",""])),(l()(),e.rb(8,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["\xd7"])),(l()(),e.gb(16777216,null,0,1,null,y)),e.qb(11,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,k)),e.qb(13,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,I)),e.qb(15,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component,e=n.context.$implicit.hasOwnProperty("acceptedQty");l(n,11,0,e);var t=!n.context.$implicit.hasOwnProperty("acceptedQty");l(n,13,0,t),l(n,15,0,"ordered"==u.order.orderStatus)}),(function(l,n){l(n,5,0,n.context.$implicit.name,n.context.$implicit.variants[n.context.$implicit.selectedVariant].title),l(n,7,0,n.context.$implicit.price)}))}function C(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,4,"div",[["style","padding: 10px 0; display: flex"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"div",[["style","flex: 5 1 0%"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Delivery Charges"])),(l()(),e.rb(3,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(4,null,["\u20b9 ",""]))],null,(function(l,n){l(n,4,0,n.component.order.cartData.deliveryCharge)}))}function J(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,4,"div",[["style","padding: 10px 0; display: flex; "]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"div",[["style","flex: 5 1 0%"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Total Discount"])),(l()(),e.rb(3,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(4,null,["\u20b9 - ",""]))],null,(function(l,n){l(n,4,0,n.component.order.cartData.discount)}))}function O(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,8,"ion-item",[["style","--background:lightgray"]],null,null,null,i.X,i.n)),e.qb(1,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,2,"ion-label",[],null,null,null,i.Y,i.o)),e.qb(3,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Adjust amount"])),(l()(),e.rb(5,0,null,0,3,"ion-input",[["slot","end"],["style","text-align: right"],["type","number"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Db(l,8)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,8)._handleIonChange(u.target)&&t),t}),i.W,i.m)),e.Gb(5120,null,c.g,(function(l){return[l]}),[a.Ib]),e.qb(7,49152,null,0,a.H,[e.h,e.k,e.x],{readonly:[0,"readonly"],type:[1,"type"]},null),e.qb(8,16384,null,0,a.Ib,[e.k],null,null)],(function(l,n){l(n,7,0,!("ordered"==n.component.order.orderStatus),"number")}),null)}function w(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,16,"div",[["style","background:white; padding:10px;"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,4,"div",[["style","padding: 10px 0; display: flex;"]],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,1,"div",[["style","flex: 5 1 0%"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Subtotal"])),(l()(),e.rb(4,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(5,null,["\u20b9 ",""])),(l()(),e.gb(16777216,null,null,1,null,C)),e.qb(7,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,J)),e.qb(9,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,O)),e.qb(11,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(12,0,null,null,4,"div",[["style","padding: 20px 0; display: flex"]],null,null,null,null,null)),(l()(),e.rb(13,0,null,null,1,"div",[["style","flex: 5 1 0%"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["To Pay"])),(l()(),e.rb(15,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(16,null,["\u20b9 ",""]))],(function(l,n){var u=n.component;l(n,7,0,(null==u.order.cartData?null:u.order.cartData.deliveryCharge)>0),l(n,9,0,u.order.cartData.discount>0),l(n,11,0,u.store.adjust_amount)}),(function(l,n){var u=n.component;l(n,5,0,u.order.cartData.subtotal),l(n,16,0,u.order.cartData.grandTotal)}))}function K(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,8,"div",[["style","display:flex;"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,3,"div",[["style","flex-grow: 1"]],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,2,"ion-button",[["color","medium"],["expand","full"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.rejectOrderConfirm(t.order)&&e),e}),i.N,i.d)),e.qb(3,49152,null,0,a.l,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),e.Jb(-1,0,["Mark as rejected"])),(l()(),e.rb(5,0,null,null,3,"div",[["style","flex-grow: 1"]],null,null,null,null,null)),(l()(),e.rb(6,0,null,null,2,"ion-button",[["expand","full"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.acceptOrder(t.order)&&e),e}),i.N,i.d)),e.qb(7,49152,null,0,a.l,[e.h,e.k,e.x],{expand:[0,"expand"],size:[1,"size"]},null),(l()(),e.Jb(-1,0,["Mark as accepted"]))],(function(l,n){l(n,3,0,"medium","full","small"),l(n,7,0,"full","small")}),null)}function D(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,2,"ion-button",[["color","medium"],["expand","full"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.ourForDeliveryOrder(t.order)&&e),e}),i.N,i.d)),e.qb(2,49152,null,0,a.l,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),e.Jb(-1,0,["Mark as Out For delivery"]))],(function(l,n){l(n,2,0,"medium","full","small")}),null)}function S(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,2,"ion-button",[["color","medium"],["expand","full"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.deliveredOrder(t.order)&&e),e}),i.N,i.d)),e.qb(2,49152,null,0,a.l,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),e.Jb(-1,0,["Mark as delivered"]))],(function(l,n){l(n,2,0,"medium","full","small")}),null)}function _(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["create"]))],null,null)}function j(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,4,"ion-button",[["expand","full"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.createInvoice(t.order)&&e),e}),i.N,i.d)),e.qb(1,49152,null,0,a.l,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(l()(),e.gb(16777216,null,0,1,null,_)),e.qb(3,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.Jb(-1,0,[" \xa0 invoice "]))],(function(l,n){var u=n.component;l(n,1,0,"full"),l(n,3,0,!u.order.invoiceApproved)}),null)}function F(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"ion-button",[["expand","full"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.presentAlertConfirm(t.order)&&e),e}),i.N,i.d)),e.qb(1,49152,null,0,a.l,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(l()(),e.Jb(-1,0,[" mark as paid "]))],(function(l,n){l(n,1,0,"full")}),null)}function B(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,11,"ion-header",[],null,null,null,i.S,i.i)),e.qb(1,49152,null,0,a.C,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.tb,i.J)),e.qb(3,49152,null,0,a.Ab,[e.h,e.k,e.x],null,null),(l()(),e.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.O,i.e)),e.qb(5,49152,null,0,a.m,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Db(l,8).onClick(u)&&t),t}),i.L,i.b)),e.qb(7,49152,null,0,a.h,[e.h,e.k,e.x],null,null),e.qb(8,16384,null,0,a.i,[[2,a.gb],a.Gb],null,null),(l()(),e.rb(9,0,null,0,2,"ion-title",[],null,null,null,i.rb,i.H)),e.qb(10,49152,null,0,a.yb,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["order"])),(l()(),e.rb(12,0,null,null,93,"ion-content",[],null,null,null,i.R,i.h)),e.qb(13,49152,null,0,a.v,[e.h,e.k,e.x],null,null),(l()(),e.rb(14,0,null,0,14,"ion-item",[["lines","none"]],null,null,null,i.X,i.n)),e.qb(15,49152,null,0,a.I,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.rb(16,0,null,0,12,"ion-label",[],null,null,null,i.Y,i.o)),e.qb(17,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(l()(),e.rb(18,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(19,null,["#",""])),(l()(),e.rb(20,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(21,null,[""," \xa0 "," \xa0 ",":",""])),(l()(),e.rb(22,0,null,0,3,"span",[["style","padding-right:10px"]],null,null,null,null,null)),(l()(),e.rb(23,0,null,null,2,"ion-badge",[["color","light"]],null,null,null,i.M,i.c)),e.qb(24,49152,null,0,a.k,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Jb(25,0,["",""])),(l()(),e.rb(26,0,null,0,2,"ion-badge",[["color","light"]],null,null,null,i.M,i.c)),e.qb(27,49152,null,0,a.k,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Jb(28,0,["",""])),(l()(),e.rb(29,0,null,0,0,"div",[["style","height: 10px"]],null,null,null,null,null)),(l()(),e.rb(30,0,null,0,28,"ion-list",[],null,null,null,i.ab,i.p)),e.qb(31,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(32,0,null,0,2,"div",[["style","padding-left: 10px"]],null,null,null,null,null)),(l()(),e.rb(33,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Jb(34,null,["",""])),(l()(),e.rb(35,0,null,0,7,"ion-item",[],null,null,null,i.X,i.n)),e.qb(36,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(37,0,null,0,5,"ion-label",[["style","font-size: 14px"]],null,null,null,i.Y,i.o)),e.qb(38,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(l()(),e.rb(39,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Phone no"])),(l()(),e.rb(41,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(42,null,["+91 ",""])),(l()(),e.rb(43,0,null,0,7,"ion-item",[],null,null,null,i.X,i.n)),e.qb(44,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(45,0,null,0,5,"ion-label",[["style","font-size: 14px"]],null,null,null,i.Y,i.o)),e.qb(46,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(l()(),e.rb(47,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Address:"])),(l()(),e.rb(49,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(50,null,[""," ",""])),(l()(),e.rb(51,0,null,0,7,"ion-item",[],null,null,null,i.X,i.n)),e.qb(52,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(53,0,null,0,5,"ion-label",[["class","ion-text-wrap"],["style","font-size: 14px"]],null,null,null,i.Y,i.o)),e.qb(54,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(l()(),e.rb(55,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["GPS Location:"])),(l()(),e.rb(57,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(58,null,["",""])),(l()(),e.rb(59,0,null,0,0,"div",[["style","height: 10px"]],null,null,null,null,null)),(l()(),e.rb(60,0,null,0,4,"div",[["class","items"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,q)),e.qb(62,278528,null,0,o.h,[e.O,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.gb(16777216,null,null,1,null,w)),e.qb(64,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(65,0,null,0,22,"div",[["style","padding:10px; background:white"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,K)),e.qb(67,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,D)),e.qb(69,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,S)),e.qb(71,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(72,0,null,null,0,"div",[["style","height: 10px"]],null,null,null,null,null)),(l()(),e.rb(73,0,null,null,11,"ion-item",[],null,null,null,i.X,i.n)),e.qb(74,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(75,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.Y,i.o)),e.qb(76,49152,null,0,a.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Add note for customers:"])),(l()(),e.rb(78,0,null,0,6,"ion-textarea",[["autoGrow","true"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,r=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,79)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,79)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(r.order.note=u)&&t),t}),i.pb,i.F)),e.qb(79,16384,null,0,a.Nb,[e.k],null,null),e.Gb(1024,null,c.g,(function(l){return[l]}),[a.Nb]),e.qb(81,671744,null,0,c.l,[[8,null],[8,null],[8,null],[6,c.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.h,null,[c.l]),e.qb(83,16384,null,0,c.i,[[4,c.h]],null,null),e.qb(84,49152,null,0,a.wb,[e.h,e.k,e.x],{autoGrow:[0,"autoGrow"]},null),(l()(),e.rb(85,0,null,null,2,"ion-button",[["fill","clear"],["slot","end"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.saveNote(t.order)&&e),e}),i.N,i.d)),e.qb(86,49152,null,0,a.l,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Jb(-1,0,["save note"])),(l()(),e.rb(88,0,null,0,0,"div",[["style","height:10px"]],null,null,null,null,null)),(l()(),e.rb(89,0,null,0,2,"div",[["style","padding:10px"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,j)),e.qb(91,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(92,0,null,0,13,"ion-list",[],null,null,null,i.ab,i.p)),e.qb(93,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(94,0,null,0,2,"div",[["style","padding-left: 10px"]],null,null,null,null,null)),(l()(),e.rb(95,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Jb(96,null,["Payment: ",""])),(l()(),e.rb(97,0,null,0,5,"ion-item",[],null,null,null,i.X,i.n)),e.qb(98,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(99,0,null,0,2,"ion-label",[],null,null,null,i.Y,i.o)),e.qb(100,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,[" Total: "])),(l()(),e.Jb(102,0,[" Rs ","\n"])),(l()(),e.rb(103,0,null,0,2,"div",[["style","padding:10px"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,F)),e.qb(105,16384,null,0,o.i,[e.O,e.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,15,0,"none"),l(n,24,0,"light"),l(n,27,0,"light"),l(n,62,0,u.order.cart),l(n,64,0,u.order.cartData),l(n,67,0,"ordered"==u.order.orderStatus),l(n,69,0,"Accepted"==u.order.orderStatus),l(n,71,0,"Out For Delivery"==u.order.orderStatus),l(n,76,0,"stacked"),l(n,81,0,u.order.note),l(n,84,0,"true"),l(n,86,0,"clear"),l(n,91,0,"Delivered"==u.order.orderStatus||"Accepted"==u.order.orderStatus||"Out For Delivery"==u.order.orderStatus),l(n,105,0,"pending"==u.order.paymentStatus||"processing"==u.order.paymentStatus)}),(function(l,n){var u=n.component;l(n,19,0,u.order.orderNo),l(n,21,0,u.day,u.month,u.hour,u.min),l(n,25,0,u.order.paymentStatus),l(n,28,0,u.order.orderStatus),l(n,34,0,u.order.customerName),l(n,42,0,u.order.customerPhone),l(n,50,0,null==u.order?null:null==u.order.address?null:u.order.address.houseNo,null==u.order?null:null==u.order.address?null:u.order.address.landmark),l(n,58,0,null==u.order?null:null==u.order.address?null:u.order.address.formatted_address),l(n,78,0,e.Db(n,83).ngClassUntouched,e.Db(n,83).ngClassTouched,e.Db(n,83).ngClassPristine,e.Db(n,83).ngClassDirty,e.Db(n,83).ngClassValid,e.Db(n,83).ngClassInvalid,e.Db(n,83).ngClassPending),l(n,96,0,u.order.paymentStatus),l(n,102,0,u.order.amount)}))}var N=e.nb("app-order",p,(function(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-order",[],null,null,null,B,h)),e.qb(1,114688,null,0,p,[f.a,g.a,b.a,e.x,a.Fb,a.b],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),M=function l(){_classCallCheck(this,l)};u.d(n,"OrderPageModuleNgFactory",(function(){return P}));var P=e.ob(t,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[r.a,N]],[3,e.j],e.v]),e.Bb(4608,o.k,o.j,[e.s,[2,o.q]]),e.Bb(4608,c.p,c.p,[]),e.Bb(4608,a.c,a.c,[e.x,e.g]),e.Bb(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.Bb(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.Bb(1073742336,o.b,o.b,[]),e.Bb(1073742336,c.o,c.o,[]),e.Bb(1073742336,c.c,c.c,[]),e.Bb(1073742336,a.Cb,a.Cb,[]),e.Bb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),e.Bb(1073742336,M,M,[]),e.Bb(1073742336,t,t,[]),e.Bb(1024,f.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);