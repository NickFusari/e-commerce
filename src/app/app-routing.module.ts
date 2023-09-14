import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { ShowproductComponent } from './showproduct/showproduct.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo: "collection"},
  {path: "collection", component: CollectionsComponent},
  {path: "products", component: ProductsComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "cart", component: CartComponent},
  {path: "profile", component: ProfileComponent},
  {path: "product", component: ShowproductComponent},
  {path: "**", pathMatch:"full", redirectTo: "collection"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
