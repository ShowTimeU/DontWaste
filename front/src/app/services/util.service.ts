import {Injectable, Output, EventEmitter} from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {UserHttpService} from "./user-http.service";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private matSnackBar: MatSnackBar,
              private http: UserHttpService) { }

  getRequiredPatternError(fc: FormControl, requiredMsg: string, patternMsg: string): string {
    if (fc.hasError('required')) {return requiredMsg; }
    if (fc.hasError('pattern')) {return patternMsg; }
    return '';
  }

  snack(msg) {
    this.matSnackBar.open(msg, null, {duration: 3000, panelClass: 'snack'});
  }


  @Output() change: EventEmitter<boolean> = new EventEmitter();

}
