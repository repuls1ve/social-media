import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthLoginPageComponent } from './auth-login.page'

const routes: Routes = [
  {
    path: '',
    component: AuthLoginPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLoginRoutingModule {}
