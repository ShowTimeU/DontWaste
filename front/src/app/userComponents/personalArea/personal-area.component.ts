import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css'],
})
export class PersonalAreaComponent implements OnInit {

  formGroup = new FormGroup ({
    name: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    email: new FormControl('', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')),
    phone: new FormControl('', Validators.pattern('[0-9 ]{9}')),
    area: new FormControl('')
  });

  data: any;
  public toggleButton = true;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.toggleButton = false;
  }

}
