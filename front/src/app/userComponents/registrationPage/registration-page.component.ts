import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserHttpService} from "../../services/user-http.service";
import {first} from "rxjs/operators";
import {AlertService} from "../../services/alert.service";

interface Area {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  formGroup: FormGroup;
  id: number;

  areas: Area[] = [
    {value: 'Jerusalem', viewValue: 'Jerusalem District'},
    {value: 'North', viewValue: 'Northern District'},
    {value: 'Haifa', viewValue: 'Haifa District'},
    {value: 'Centre', viewValue: 'Central District'},
    {value: 'Tel Aviv', viewValue: 'Tel Aviv District'},
    {value: 'South', viewValue: 'Southern District'},
    {value: 'Judea and Samaria Area', viewValue: 'Judea and Samaria Area'},
  ];
   submitted = false;
   loading = false;


  constructor(private fb: FormBuilder,
              private userHTTPService: UserHttpService,
              private router: Router,
              private userService: UserHttpService,
              private alertService: AlertService
  ) { }
    ngOnInit(): void {
      this.formGroup = this.fb.group({
        name: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
        email: new FormControl('', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')),
        password: new FormControl('', Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{8,}')),
        phone: new FormControl('', Validators.pattern('[0-9 ]{9}')),
        area: new FormControl('', Validators.required)
      });
    }

    get f() { return this.formGroup.controls; }

    onSubmit()
    {
      this.submitted = true;
      if (this.formGroup.invalid) {
        return;
      }
      this.loading = true;
      this.userService.createUser(this.formGroup.value)
        .pipe(first())
        .subscribe(
          data => {
            this.alertService.success('Registration Successful', true);
            this.router.navigate(['/mainProductPage']);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
    }
}

