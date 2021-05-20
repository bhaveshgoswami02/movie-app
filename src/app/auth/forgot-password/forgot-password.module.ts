import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    FormsModule
  ],
  declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordComponentModule {}
