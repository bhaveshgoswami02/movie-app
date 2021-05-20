import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/share/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SigninRoutingModule,
        SharedModule,
        FormsModule
    ],
    declarations: [SigninComponent]
})
export class SigninComponentModule { }
