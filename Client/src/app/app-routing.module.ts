import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RegistersComponent } from './pages/records/registers.component';
import { EditRegisterComponent } from './pages/edit-records/edit-register.component';

const routes: Routes = [
  { path: '', component:  MainComponent},
  { path: 'signIn', component:  SignInComponent},
  { path: 'signUp', component:  SignUpComponent},
  { path: 'records', component:  RegistersComponent},
  { path: 'edit-create/records/:id', component:  EditRegisterComponent},
  { path: '**', redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
