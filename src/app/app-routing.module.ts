import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsWidgetComponent } from './maps-widget/maps-widget.component';
import { TestPageComponent } from './test-page/test-page.component';
const routes: Routes = [
  { path: '', component: MapsWidgetComponent },
  { path: 'maps', component: MapsWidgetComponent },
  { path: 'test', component: TestPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
