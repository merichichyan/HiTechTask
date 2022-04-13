import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DonorRegisterComponent } from './donor-register/donor-register.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { InvalidDialogComponent } from './invalid-dialog/invalid-dialog.component';
import { HeaderComponent } from './header/header.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RecoverCodeConfirmationComponent } from './recover-code-confirmation/recover-code-confirmation.component';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';

@NgModule({
  declarations: [
    AppComponent,
    DonorRegisterComponent,
    TeacherRegisterComponent,
    InvalidDialogComponent,
    HeaderComponent,
    SignInComponent,
    RecoverPasswordComponent,
    RecoverCodeConfirmationComponent,
    WarningDialogComponent,
    VerifyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatStepperModule,
    HttpClientModule,
    MatAutocompleteModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}