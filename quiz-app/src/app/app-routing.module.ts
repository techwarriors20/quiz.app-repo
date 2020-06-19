import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
 // { path: "" , redirectTo:'/home', pathMatch :"full"},
  { path: "", component: DashboardComponent},
  { path: "category/:id", component: CategoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
