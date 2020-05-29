import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MainnavComponent } from './dash-board/mainnav/mainnav.component';
import { NavbarComponent } from './dash-board/navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './dash-board/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    MainnavComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
