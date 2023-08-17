import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo: "movies"},
  {path: "collection", component: CollectionsComponent},
  {path: "products", component: ProductsComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "cart", component: CartComponent},
  {path: "profile", component: ProfileComponent},
  {path: "**", pathMatch:"full", redirectTo: "movies"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
