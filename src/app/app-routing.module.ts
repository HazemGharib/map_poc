import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsWidgetComponent } from './maps-widget/maps-widget.component';

const routes: Routes = [
  { path: '', component: MapsWidgetComponent },
  { path: 'maps', component: MapsWidgetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
