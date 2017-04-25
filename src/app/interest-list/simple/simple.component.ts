import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  simpleForm: FormGroup;
  simpleInterest; 
  showResult = false;
  constructor() { }

  ngOnInit() {
     this.simpleForm = new FormGroup({
      'amount': new FormControl(null, Validators.required),
      'rate': new FormGroup({
        'percentage': new FormControl(null, Validators.required)
      }),
      'time': new FormGroup({
        'time': new FormControl(null, Validators.required),
        'period': new FormControl("annually")
      })      
    })
  }

  calculateInterest(){
    let principal, rate, period;
    principal = this.simpleForm.get('amount').value;
    rate = this.simpleForm.get('rate').value.percentage/100;
    
    
    switch (this.simpleForm.get('time').value.period){
      case 'annually':
        period = this.simpleForm.get('time').value.time;
        break;
      case 'semiannually':
        period = this.simpleForm.get('time').value.time/2;
        break;
      case 'month':
        period = this.simpleForm.get('time').value.time/12;
        break;
    }


    return principal*rate*period;
   
  }
 
  onSubmit(){
    this.simpleInterest = this.calculateInterest().toFixed(2);
    this.showResult = true; 
  }

}
