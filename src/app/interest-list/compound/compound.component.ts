import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css']
})
export class CompoundComponent implements OnInit {
  compoundForm: FormGroup;
  compoundInterest; 
  showResult = false;
  constructor() { }

  ngOnInit() {
     this.compoundForm = new FormGroup({
      'amount': new FormControl(null, Validators.required),
      'rate': new FormGroup({
        'percentage': new FormControl(null, Validators.required),
        'grow': new FormControl(null, Validators.required),
      }),
      'frequency': new FormGroup({
        'frequency': new FormControl(null, Validators.required)
      })      
    })
  }

  calculateInterest(){
    let principal, rate, frequency, grow;
    principal = this.compoundForm.get('amount').value;
    rate = this.compoundForm.get('rate').value.percentage/100;
    frequency = this.compoundForm.get('frequency').value.frequency;
    grow = this.compoundForm.get('rate').value.grow;
    
    return principal*Math.pow((1 + (rate/frequency)), frequency * grow);
   
  }
 
  onSubmit(){
    this.compoundInterest = this.calculateInterest().toFixed(2);
    this.showResult = true;
  }


}
