import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './layouts/login/login.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { CollectionsDetailComponent } from './pages/collections-detail/collections-detail.component';

const routes: Routes = [
  {
    path: "", component:LayoutsComponent, children: [
      { path: "", component:HomeComponent},
      { path: "about", component:AboutComponent},
      { path: "collections", component:CollectionsComponent},
      { path: "collectionsDetail/:slug", component:CollectionsDetailComponent}
    ]
  },

  { path: "login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
