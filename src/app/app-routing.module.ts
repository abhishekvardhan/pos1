import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Binfo1Component } from './binfo1/binfo1.component';
import { Binfo2Component } from './binfo2/binfo2.component';
import { Binfo3Component } from './binfo3/binfo3.component';
import { Binfo4Component } from './binfo4/binfo4.component';
import { SuccessComponent } from './success/success.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"home",component: HomeComponent},
{path:"binfo1",component:Binfo1Component},
{path:"binfo2",component:Binfo2Component},
{path:"binfo3",component:Binfo3Component},
{path:"binfo4",component:Binfo4Component},
{path:"success",component:SuccessComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent=[HomeComponent,Binfo1Component,Binfo2Component,Binfo3Component]