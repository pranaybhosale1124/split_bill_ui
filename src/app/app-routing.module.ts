import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'pay-bill', component: PayBillComponent },
  // { path: 'user-profile', component: UserProfileComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // Add other routes here

  { path: 'expense', loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
