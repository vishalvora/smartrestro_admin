import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate : [AuthGuard]
    
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule),
    
  }, 
  {
    path: 'signup',
    loadChildren: () => import('./user/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'resetpass',
    loadChildren: () => import('./user/resetpass/resetpass.module').then( m => m.ResetpassPageModule)
  },
  {
    path: 'import',
    loadChildren: () => import('./private/import/import.module').then( m => m.ImportPageModule)
    ,canActivate : [AuthGuard]
  },
  {
    path: 'slides',
    loadChildren: () => import('./private/slides/slides.module').then( m => m.SlidesPageModule)
    ,canActivate : [AuthGuard]
  },
  {
    path: 'location',
    loadChildren: () => import('./private/location/location.module').then( m => m.LocationPageModule)
    ,canActivate : [AuthGuard]
  },
  {
    path: 'addproduct',
    loadChildren: () => import('./private/addproduct/addproduct.module').then( m => m.AddproductPageModule)
    ,canActivate : [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./private/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'editproduct',
    loadChildren: () => import('./private/editproduct/editproduct.module').then( m => m.EditproductPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./private/invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./private/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'offer',
    loadChildren: () => import('./private/offer/offer.module').then( m => m.OfferPageModule)
  },
  {
    path: 'deliverylist',
    loadChildren: () => import('./private/deliverylist/deliverylist.module').then( m => m.DeliverylistPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./private/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'setradius',
    loadChildren: () => import('./private/setradius/setradius.module').then( m => m.SetradiusPageModule)
  },
  {
    path: 'createorder',
    loadChildren: () => import('./private/createorder/createorder.module').then( m => m.CreateorderPageModule)
  },
  {
    path: 'orderaddproduct',
    loadChildren: () => import('./private/orderaddproduct/orderaddproduct.module').then( m => m.OrderaddproductPageModule)
  },
  {
    path: 'storedisable',
    loadChildren: () => import('./private/storedisable/storedisable.module').then( m => m.StoredisablePageModule)
  },
  {
    path: 'announcement',
    loadChildren: () => import('./private/announcement/announcement.module').then( m => m.AnnouncementPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
