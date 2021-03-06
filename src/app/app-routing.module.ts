import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthRouterGuard, IsLoggedInGuard } from 'app/core/auth'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule',
    canActivate: [AuthRouterGuard],
    canLoad: [AuthRouterGuard]
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    canLoad: [IsLoggedInGuard],
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'organizer',
    loadChildren: 'app/organizer/organizer.module#OrganizerModule',
    canLoad: [IsLoggedInGuard],
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'errors',
    loadChildren: 'app/errors/errors.module#ErrorsModule'
  },
  {
    path: '**',
    redirectTo: 'errors/404',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
