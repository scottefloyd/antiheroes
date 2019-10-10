import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntiheroesComponent } from './anti-heroes/anti-heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AntiDetailComponent }  from './anti-detail/anti-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'antiheroes', component: AntiheroesComponent },
  { path: 'detail/:id', component: AntiDetailComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
