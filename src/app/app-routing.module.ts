import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorRegisterComponent } from './donor-register/donor-register.component';
import { RecoverCodeConfirmationComponent } from './recover-code-confirmation/recover-code-confirmation.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'teacher-register', component: TeacherRegisterComponent},
  { path: 'donor-register', component: DonorRegisterComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'forgot-pass', component: RecoverPasswordComponent },
  { path: 'forgot-pass-conf', component: RecoverCodeConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
