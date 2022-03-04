import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  {path:'', component:AppComponent,pathMatch:'full'},
  {path:'page1',component:Page1Component},
  {path:'page2',component:Page2Component},
  {path:'**',redirectTo:'page2'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
