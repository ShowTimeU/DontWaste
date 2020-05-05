import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

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

  areas: Area[] = [
    {value: 'jerusalem-0', viewValue: 'Jerusalem District'},
    {value: 'north-1', viewValue: 'Northern District'},
    {value: 'haifa-2', viewValue: 'Haifa District'},
    {value: 'center-2', viewValue: 'Central District'},
    {value: 'tel aviv-2', viewValue: 'Tel Aviv District'},
    {value: 'south-2', viewValue: 'Southern District'},
    {value: 'judea-2', viewValue: 'Judea and Samaria Area'}
  ];


  formGroup = new FormGroup ({
    name: new FormControl('', Validators.pattern('[a-zA-Z ]{3}')),
    email: new FormControl('', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')),
    password: new FormControl('', Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')),
    phone: new FormControl('', Validators.pattern('[0-9 ]{9}')),
    area: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
