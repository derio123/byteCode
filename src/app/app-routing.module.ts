import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';

const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'transferencia', component: TransferenciaComponent },
  { path: 'extrato', component: ExtratoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
