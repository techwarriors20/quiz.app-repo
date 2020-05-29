import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';



const routes: Routes = [
 // { path: "" , redirectTo:'/home', pathMatch :"full"},
  { path: "dashboard", component: DashBoardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
