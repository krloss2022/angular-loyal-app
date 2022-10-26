import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopBarResolverService } from './services/top-bar-resolver.service';

const routes: Routes = [
  //localhost:4200/
  {
    path: '', pathMatch: 'full', redirectTo: '/dashboard'
  },
  {
    path: 'dashboard', component: DashboardComponent,
    resolve: {
      users: TopBarResolverService
    }
  },
  //http://localhost:4200/blablabla
  //404
  {
    path: '*', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
