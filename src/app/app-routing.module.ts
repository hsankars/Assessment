import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFormComponent } from '../app/edit-form/edit-form.component';
import { MainPageComponent } from '../app/main-page/main-page.component'


const routes: Routes = [
  { path: 'Edit', component: EditFormComponent },
  { path: 'Add', component: EditFormComponent },
  { path: 'home', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
