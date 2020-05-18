import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';
import {ProductHTTPService} from "../product-http.service";
import {User} from "../model/user";
import {error} from "@angular/compiler/src/util";
import {onErrorResumeNext} from "rxjs";

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

  formGroup: FormGroup;
  createdUser: User;
  id: number;
  private user: any;

  public alertMessage = 'This user already exists!';

  areas: Area[] = [
    {value: 'Jerusalem', viewValue: 'Jerusalem District'},
    {value: 'North', viewValue: 'Northern District'},
    {value: 'Haifa', viewValue: 'Haifa District'},
    {value: 'Centre', viewValue: 'Central District'},
    {value: 'Tel Aviv', viewValue: 'Tel Aviv District'},
    {value: 'South', viewValue: 'Southern District'},
    {value: 'Judea and Samaria Area', viewValue: 'Judea and Samaria Area'},
  ];

  constructor(private fb: FormBuilder,
              private productHTTPService: ProductHTTPService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formGroup = this.fb.group( {
      name: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
      email: new FormControl('', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')),
      password: new FormControl('', Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')),
      phone: new FormControl('', Validators.pattern('[0-9 ]{9}')),
      area: new FormControl('', Validators.required)
    });
  }

  onSubmit(valid) {
    const controls = this.formGroup.controls;
    this.user = this.formGroup.value;
    if (valid) {
      if (this.formGroup.invalid) {
        Object.keys(controls)
          .forEach(controlName => controls[controlName].markAsTouched());
        return;
      }
      const navigationExtras: NavigationExtras = {
        state: {
          user: this.user
        }
      };
      this.productHTTPService.createUser(this.formGroup.value).subscribe(data => {
        this.createdUser = data;
        this.router.navigate(['/foodlistPage'], navigationExtras);
      }, error => error == alert(this.alertMessage));
    }
  }
}
