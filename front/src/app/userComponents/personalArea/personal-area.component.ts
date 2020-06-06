import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../../model/user";
import {UserHttpService} from "../../services/user-http.service";


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
