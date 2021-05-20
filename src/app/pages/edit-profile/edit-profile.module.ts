import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { SharedModule } from 'src/app/share/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [EditProfileComponent]
})

export class EditProfileComponentModule {}
