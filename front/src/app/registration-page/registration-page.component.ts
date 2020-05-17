import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';
import {DataServiceService} from '../data-service.service';

interface Area {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private router: Router, private dataService: DataServiceService) { }


  formGroup = new FormGroup ({
    name: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    email: new FormControl('', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')),
    password: new FormControl('', Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')),
    phone: new FormControl('', Validators.pattern('[0-9 ]{9}'))
  });
  private user: any;

  ngOnInit() {
  }
  onSubmit() {
    this.user = this.formGroup.value;
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['/personalAreaPage'], navigationExtras);
  }
}
