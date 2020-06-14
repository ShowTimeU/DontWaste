import {Component, OnInit} from '@angular/core';
import {User} from "../../../Models/user";
import {UserHttpService} from "../../../Services/user-http.service";


@Component({
  selector: 'personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css'],
})
export class PersonalAreaComponent implements OnInit {
  user: User;

  constructor(private http: UserHttpService) { }

  ngOnInit(): void {
    this.http.currentUser.subscribe( user => {
      this.user = user;
    })

  }

}
