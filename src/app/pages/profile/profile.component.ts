import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  subscriptions = [
    { id: 1, title: "netflix", isSelected:false},
    { id: 2, title: "netflix", isSelected:false},
    { id: 3, title: "netflix", isSelected:false},
    { id: 4, title: "netflix", isSelected:false},
    { id: 5, title: "netflix", isSelected:false},
  ]
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout()
  }
}
