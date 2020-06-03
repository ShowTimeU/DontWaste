import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductHTTPService} from '../../services/product-http.service';
import {HttpClient, HttpErrorResponse, HttpEventType, HttpRequest} from "@angular/common/http";
import {animate, state, style, transition, trigger} from "@angular/animations";

interface Area {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css'],
  animations: [trigger('fadeInOut', [
      state('in', style({ opacity: 100 })),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))])])]
})

export class ProductRegistrationComponent implements OnInit {
  formGroup: FormGroup;
  createdProduct: Product;
  id: number;
  selectedValue: string;
  areas: Area[] = [
    {value: 'Jerusalem', viewValue: 'Jerusalem District'},
    {value: 'North', viewValue: 'Northern District'},
    {value: 'Haifa', viewValue: 'Haifa District'},
    {value: 'Centre', viewValue: 'Central District'},
    {value: 'Tel Aviv', viewValue: 'Tel Aviv District'},
    {value: 'South', viewValue: 'Southern District'},
    {value: 'Judea and Samaria Area', viewValue: 'Judea and Samaria Area'}
  ];

  constructor(private fb: FormBuilder,
              private productHTTPService: ProductHTTPService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formGroup = this.fb.group( {
      productName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      startingPrice: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      institution: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const controls = this.formGroup.controls;

    if (this.formGroup.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    this.productHTTPService.createProduct(this.formGroup.value).subscribe(data => {
      this.createdProduct = data;
      window.location.reload();
    });

  }


  // ------------------------------------UPLOADING FILES------------------------------------

  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  public  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

    this.http.post('http://localhost:8080/check/upload', uploadData)
      .subscribe(
        res => {console.log(res);
          this.receivedImageData = res;
          this.base64Data = this.receivedImageData.pic;
          this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
        err => console.log('Error Occured duringng saving: ' + err)
      );

  }
}
