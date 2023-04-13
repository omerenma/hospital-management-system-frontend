import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
constructor(private spinnerService:SpinnerService, private cdRef:ChangeDetectorRef){
}
showSpinner = false
ngOnInit(): void {
  this.init()

}

init(){
this.spinnerService.getSpinnerOberserver().subscribe(status => {
  this.showSpinner = status === 'start'
  this.cdRef.detectChanges()
})
}
}
