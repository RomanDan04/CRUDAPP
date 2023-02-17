import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from 'src/app/pages/group-list/group-list.component';
import { GroupFormComponent } from 'src/app/pages/group-form/group-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'group-list', pathMatch: 'full'},
  {path: 'group-list', component: GroupListComponent},
  {path: 'group-add', component: GroupFormComponent},
  {path: 'group-edit', component: GroupFormComponent},
  {path: '**', redirectTo: 'group-list', pathMatch: 'full'},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
