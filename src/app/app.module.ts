import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OrderComponent} from './order/order.component';
import {ContactComponent} from './contact/contact.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [{
  component: HomeComponent,
  path: 'home'
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  component: MenuComponent,
  path: 'menu'
}, {
  component: OrderComponent,
  path: 'order'
}, {
  component: ContactComponent,
  path: 'contact'
}, {
  component: AboutUsComponent,
  path: 'about-us'
}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OrderComponent,
    ContactComponent,
    AboutUsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
